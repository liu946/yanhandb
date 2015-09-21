# input页面脚本

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

putmodel = (string,array) ->
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
			mend = ""

			if dataType is 'selecttext'
				str = ""
				itemlength = b.items.length
				for k, v of b.items
					if v == "其他______"
						v = v.split('_')[0]
					
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
	string += "<div id='submit' class='submit'><p>提交</p></div>" 

	$('#J_form').html string


value = JSON.parse getkeyvalue('/input/field').responseText
htmlstring = ""
putmodel htmlstring,value
