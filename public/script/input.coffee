# input页面脚本

# ajax请求获取显示页面的数据
getkeyvalue = (url) ->
	$.ajax
		url: url,
		dataType: 'json',
		async: false
	.done (data) ->
		return data
	.fail () ->
		alert "获取失败！请刷新页面"
	.always () ->
		console.log("complete")

# 将获得的数据插入dom树中
putmodel = (string,array,inputs) ->
	html = ""
	for a in array
		title = a.classname
		id = a.class
		html = "<div id='#{id}' class='content'>
				<h1>#{title}</h1>"
		for b in a.childfield
			fieldname = b.fieldname
			fieldid = b.field
			dataType = b.datatype
			defaultvalue = b.default

			inputs = getinputname fieldid,inputs
			
			mend = ""

			if dataType is 'selecttext'
				str = ""
				itemlength = b.items.length
				for k, v of b.items
					if v == "其他______" || v == "有______"
						v = v.split('_')[0]
						str += "<input type='radio' class='#{fieldid} other' name='#{fieldid}' />#{v}<input type='text' class='otherdata' id='#{fieldid}_other'/>"
					else
						str += "<input type='radio' class='#{fieldid}' name='#{fieldid}' value='#{v}'/>#{v}"
					
					if v.length >= 10
						str += "<br / >"
						if itemlength >= 5 || fieldid == 'NenYuanLiYongKeZaiShengNenYuanZhiJieLiYong' || fieldid == 'NenYuanLiYongKeZaiShengNenYuanZhuanHuanLiYong'
							mend = "style='height:250px'"
						else
							mend = "style='height:180px'"
					
			else if dataType is 'mutiselecttext'
				str = ""
				for k, v of b.items
					if v == "其他______" || v == "有______"
						v = v.split('_')[0]
						str += "<input type='checkbox' class='#{fieldid} other' name='#{fieldid}' />#{v}<input type='text' class='otherdata' id='#{fieldid}_other'/>"
					else
						str += "<input type='checkbox' class='#{fieldid}' name='#{fieldid}' value='#{v}'/>#{v}"
			else
				str = "<input type='text' id='#{fieldid}' name='#{fieldid}' />"
				

			html += "<div class='list' #{mend}>
						<div class='note'>
							<h3>#{fieldname}</h3>
						</div>
						<div class='input'>
							#{str}
						</div>
					</div>"

		html += "</div><hr />"
		string += html
	$('#J_form').append string
	return inputs

# 判断checked使用与其他输入
judgeother = (point) ->
	target = $(point).attr('class').split(' ')
	flag = target[1]
	name = target[0]

	input = $("##{name}_other")

	if flag == 'other'
		input.css 'display','inline-block'
	else
		input.css 'display','none'

	that = point
	input.on 'blur',() ->
		$(that).val $(this).val()

# 遍历，获取所有表单的name，存入数组中
getinputname = (value,target) ->
	for a in target
		if a == value
			return target
	target.push value
	return target
		
# 获取表单中目前的所有值情况
getformvalue = (array) ->
	data = {"id": id}
	flag = 0
	for i in array	
		target = i
		targetvalue = $("input[name=#{target}]").val()
		if targetvalue = ''
			flag = 1
		data["#{target}"] = targetvalue
	return {
		data : data
		flag : flag
	}
	

# 实例化
value = JSON.parse getkeyvalue('/input/field').responseText
htmlstring = ""
inputs = []
inputs = putmodel htmlstring,value,inputs

# “其他____”点击输入数据，反选取消
$("input[type='radio']").on 'click',() ->
	judgeother this
$("input[type='checkbox']").on 'click',() ->
	judgeother this

# 保存功能
$('.save').on 'click',() ->
	target = getformvalue(inputs)
	value = target.data

	$.post '', value, (data) ->
		console.log data

# 提交功能
$('.submit').on 'click',() ->
	target = getformvalue(inputs)
	value = target.data

	if target.flag
		alert "没有填写完整，请检查"
	else
		$.post '', value, (data) ->
			console.log data

