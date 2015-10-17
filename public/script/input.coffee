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
		console.log "complete"

getDBvalue = (url,array) ->
	$.ajax
		url: url,
		dataType: 'json',
		async: true
	.done (data) ->
		for k, v of data
			if k == 'id'
				continue

			a = $("##{k}")
			b = $(".#{k}")
			if a.length > 0
				a.val v
			else if b.length > 0
				$("input.#{k}[value=#{v}]").prop 'checked',true
			else
				match = /^\&+/g
				result = match.test(v)

				ccsmatch = /\-+/g
				ccsresult = ccsmatch.test v
				if ccsresult
					value = v.split("-")
					# console.log value
					$("##{k}_color").val value[0]
					$("##{k}_light").val value[1]
					$("##{k}_pure").val value[2]

				if result
					v1 = v.split('&')
				else
					v1 = [v]

				ivalue = []
				for i in v1
					checkother = /\_+/g
					result = checkother.test(i)
					if result
						ov = i.split('_')
						inputvalue = ov[1]
						ivalue.push ov[0]
						$("##{k}_other").css 'display','inline-block'
						$("##{k}_other").val inputvalue
					else
						ivalue.push i

				$("select[name=#{k}]").val(ivalue);

		# 动态加载chosen.jquery.js
		jQuery.getScript("/script/chosen.jquery.js")
			.done () ->
				$('.chosen-select').chosen()
				# “其他____”点击输入数据，反选取消
				for dom in $("select")
					judgeother dom
			.fail () ->
				alert "动态脚本加载失败"

	.fail () ->
		alert "数据库获取数据失败"
	.always () ->
		console.log 'DB_connect'

# 将获得的数据插入dom树中
putmodel = (string,array,inputs) ->
	html = ""
	for a in array
		title = a.classname
		id = a.class
		html = "<div id='#{id}' class='J_content'>
				<h1>#{title}</h1>"
		for b in a.childfield
			fieldname = b.fieldname
			fieldid = b.field
			dataType = b.datatype
			defaultvalue = b.default

			inputs = getinputname fieldid,inputs
			
			
			str = ""
			if dataType is 'selecttext'
				itemlength = b.items.length
				str += "<select name='#{fieldid}' class='chosen-select'>"
				mend = 0
				for k, v of b.items
					if v == "其他______" || v == "有______"
						mend = 1
						v = v.split('_')[0]
					str += "<option value='#{v}' class='#{fieldid}_#{v}'>#{v}</option>"
				str += "</select>"
				if mend
					str += "<input type='text' class='otherdata' id='#{fieldid}_other'/>"
					mend = 0
					
			else if dataType is 'mutiselecttext'
				str += "<select name='#{fieldid}' class='chosen-select' multiple>"
				mend = 0
				for k, v of b.items
					if v == "其他______"
						mend = 1
						v = v.split('_')[0]
					else
						mend = 0
					str += "<option value='#{v}' class='#{fieldid}_#{v}'>#{v}</option>"
				str += "</select>"
				if mend
					str += "<input type='text' class='otherdata' id='#{fieldid}_other'/>"

			else if dataType is 'bool'
				for k, v of b.items
					str += "<input type='radio' class='#{fieldid} selecttext' name='#{fieldid}' value='#{k}'/>#{v}"
			
			else if dataType is 'CCS'
				str_color = "<div class='ccs_color s_show'>颜色<select name='#{fieldid}_color' id='#{fieldid}_color'>"
				str_light = "<div class='ccs_light s_show'>亮度<select name='#{fieldid}_light' id='#{fieldid}_light'>"
				str_pure = "<div class='css_pure s_show'>纯度<select name='#{fieldid}_pure' id='#{fieldid}_pure'>"
				str_end = "</select></div>"
						
				for k,v of b.items.color
					str_color += "<option value='#{v}'>#{k}</option>"
				str_color += str_end

				for i in b.items.light
					str_light += "<option value='#{i}'>#{i}</option>"
				str_light += str_end

				for i in b.items.pure
					str_pure += "<option value='#{i}'>#{i}</option>"
				str_pure += str_end

				str = str_color + str_light + str_pure

			else
				str = "<input type='text' id='#{fieldid}' name='#{fieldid}' />"
				
			html += "<div class='list'>
						<div class='note'>
							<h3>#{fieldname}</h3>
						</div>
						<div class='input'>
							#{str}
						</div>
					</div>"

		html += "</div><div class='clear'></div><hr />"
		string += html
	$('#J_form').append string
	return inputs
	

# 判断checked使用与其他输入
judgeother = (point) ->
	id = point.id
	type = point.name
	input = $("##{type}_other")

	$(point).on "change",() ->
		flag = 0
		value = $(point).val()
		if value != null
			if typeof value is 'string'
				if value == "其他" || value == "有"
					flag = 1
			else if typeof value is 'object'
				for t in $(point).val()
					if t == "其他" || t == "有"
						flag = 1

			if flag
				input.css 'display','inline-block'
			else
				input.css 'display','none'
		else
			input.css 'display','none'
		

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
		target = $("input[name=#{i}]:checked")
		if target.length < 1
			target = $("select[name=#{i}]")
			if target.length < 1
				console.log target
				value = $("select[name=#{i}_color]").val() + "-" + $("select[name=#{i}_light]").val() + "-" + $("select[name=#{i}_pure]").val()
			else
				value = target.val()

		targetclass = target.attr('class')
		if targetclass == 'chosen-select chzn-done'
			if typeof(value) is 'object'
				str = ''
				if value != null
					for a in value
						if a == "其他" or a == "有"
							a += "_#{$("##{i}_other").val()}"
						str += "&" + a
					value = str
			else if typeof(value) is 'string'
				if value != null
					if value == "其他" or value == "有"
						value += "_#{$("##{i}_other").val()}"

		if value == '' || value == null
			flag = 1
		data[i] = value
	return {
		data : data
		flag : flag
	}
	

# 实例化
value = JSON.parse getkeyvalue('/input/field').responseText
htmlstring = ""
inputs = []
inputs = putmodel htmlstring,value,inputs

# 获取数据库的存入的值	
getDBvalue "/input/get/#{id}", inputs

# 保存功能
$('.save').on 'click',() ->
	target = getformvalue(inputs)
	value = target.data
	# console.log value
	$.post '/input/update', value, (data) ->
		alert '保存成功'
		getDBvalue "/input/get/#{id}", inputs


# 提交功能
$('.submit').on 'click',() ->
	target = getformvalue(inputs)
	value = target.data

	if target.flag
		alert "没有填写完整，请检查"
	else
		$.post '/input/update', value, (data) ->
			alert '提交成功'
			location.href  = "/"

