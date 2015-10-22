# 将表格数据渲染模型

class Model
	constructor: (url,@target,@id) ->
		@inputnames = []								#每一个输入框的键值
		@modeldata = getdatabyajax(url).responseJSON 	#获取的表单数据

	# model类中的常量
	CCS = {
			color: {
					'R':'红',
					'OR': '橙红',
					'O': '橙',
					'OY': '橙黄',
					'Y': '黄',
					'YG': '黄绿',
					'G': '绿'
					'BG': '蓝绿',
					'B': '蓝'
					'BV': '青紫',
					'V': '紫罗兰',
					'VR': '紫红'
				},
			light: [0,1,2,3,4,5,6,7,8,9,10],
			pure: [0,1,2,3,4,5,6,7,8,9,10]
		}
	htmlstring = ''
	reqcontainer = {}
	
	# 静态方法
	# ajax请求获取数据
	getdatabyajax = (url) ->
		$.ajax
			url: @url,
			dataType: 'json',
			async: false
		.done (data) ->
			return data
		.fail () ->
			return 0
	# 构造键值表
	buildkeys = (value,target) ->
		for a in target
			if a == value
				return target
		target.push value
		return target
	# 按类别返回html字符串
	gethtmlstring = (data,id) ->
		type = data.type
		value = data.defaultValue
		if value is 'null' or value is undefined
			value = ""

		if type is 'input' 
			str = "<input type='text' id='#{id}' data-type='input' class='input' name='#{id}' value='#{value}'/>"

		else if type is 'select' 
			tmp = ""
			tmp += "<select name='#{id}' id='#{id}' data-type='select' class='chosen-select'>"
			selects = data.option
			for k, v of selects
				tmp += "<option value='#{v}' class='#{id}_#{k}'>#{v}</option>"
			str = tmp + "</select>"

		else if type is 'selectmult' 
			tmp = ""
			tmp += "<select name='#{id}' id='#{id}' data-type='selectmult' class='chosen-select' multiple>"
			selects = data.option
			for k, v of selects
				tmp += "<option value='#{v}' class='#{id}_#{k}'>#{v}</option>"
			str = tmp + "</select>"

		else if type is 'CCS' 
			str_color = "<div class='ccs_color s_show'>颜色<select name='#{id}_color' class='CCS ccscolor' id='#{id}_color'>"
			str_light = "<div class='ccs_light s_show'>亮度<select name='#{id}_light' class='CCS ccslight' id='#{id}_light'>"
			str_pure = "<div class='css_pure s_show'>纯度<select name='#{id}_pure' class='CCS ccspure' id='#{id}_pure'>"
			str_end = "</select></div>"
					
			for k,v of CCS.color
				str_color += "<option value='#{k}'>#{v}</option>"
			str_color += str_end
			for i in CCS.light
				str_light += "<option value='#{i}'>#{i}</option>"
			str_light += str_end

			for i in CCS.pure
				str_pure += "<option value='#{i}'>#{i}</option>"
			str_pure += str_end

			str = "<div id='#{id}' data-type='CCS'>" + str_color + str_light + str_pure + "</div>"

		else if type is 'inputornull'
			tmp = ""
			tmp += "<select name='#{id}' id='#{id}' data-type='inputornull' class='chosen-select inputornull'>"
			selects = data.option
			for k, v of selects
				if v is "有" || v is '其他'
					tmp += "<option value='#{v}' class='#{id}_#{k} other'>#{v}</option>"
				else
					tmp += "<option value='#{v}' class='#{id}_#{k}'>#{v}</option>"
			str = tmp + "<input type='text' class='otherdata' id='#{id}_other'/>"

		else if type is 'selectmultornull' 
			tmp = "<input id='#{id}' name='#{id}' data-type='selectmultornull' class='selectmultornull' type='checkbox'>有<select name='#{id}_other' class='chosen-select otherdata' multiple>"
			selects = data.option
			for k, v of selects
				tmp += "<option value='#{v}' class='#{id}_#{k}'>#{v}</option>"
			str = tmp + "</select>"

		else if type is 'boolean'
			str = "<div id='#{id}' data-type='boolean' ><input type='radio' name='#{id}' value='true'/>是
				<input type='radio' name='#{id}' value='false'/>否</div>"

		else
			str = ''

		return str

	# 遍历表单类型渲染数据
	# 遍历n叉树
	ergodicdata = (modeldata,position,inputnames,flag) ->
		target = modeldata[position]
		if target.forend isnt undefined && target.fields is undefined
			title = target.namezh
			str = gethtmlstring target.forend,target.name
			inputnames = buildkeys target.name,inputnames

			if target.require isnt undefined
				mend = "style='display:none'"
				storeobj = reqcontainer["#{target.require.name}"]
				if storeobj is undefined
					storeobj = {}

				storeobj["#{target.name}"] = "#{target.require.value}"
				reqcontainer["#{target.require.name}"] = storeobj

			else
				mend = ""
			htmlstring += "<div class='list' #{mend}>
							<div class='note'>
								<h5>#{title}</h5>
							</div>
							<div class='shuru'>
								#{str}
							</div>
						</div>"
			return
		else
			len = target.fields.length
			for i in [0...len] by 1
				if flag is 0
					title = target.namezh
					htmlstring += "<div id='#{target.name}' class='J_content'>
								<h3>#{title}</h3></div><div class='clear'></div><hr />"
					flag = 1

				ergodicdata target.fields,i,inputnames,flag
				
	# 判断选择框中需要手动输入类型的情况
	judgeother = (point) ->
		id = point.id
		type = point.name
		check = point.type
		input = $("##{type}_other")

		$(point).on "change",() ->
			flag = 0
			if check is 'checkbox'
				if $(point).prop('checked')
					flag = 1
				else
					flag = 0
			else
				value = $(point).val()
				if value != null
					if typeof value is 'string'
						if value == "其他" || value == "有"
							flag = 1
					else if typeof value is 'object'
						for t in $(point).val()
							if t == "其他" || t == "有"
								flag = 1
					else
						flag = 0

			if flag
				input.css 'display','inline-block'
			else
				input.css 'display','none'
				
	# 判断值类型与存储方式的工具
	# 检查传入值的正确性
	builddbvalue = (type,value='',idp='') ->
		if type is ('input' or 'boolean' or 'select')
			if value isnt ("" or undefined)
				dbvalue = "#{type}_#{value}"

		else if type is 'selectmult'
			if value instanceof 'Array'
				dbvalue = "#{type}_"
				for i in value
					dbvalue += "#{i}&"

		else if type is 'CCS'
			dbvalue = "CCS_"
			color = $("select[name=#{i}_color]").val() 
			light = $("select[name=#{i}_light]").val() 
			pure =  $("select[name=#{i}_pure]").val()
			dbvalue += color + "&" + light + "&" + pure

		else if type is 'selectmultornull'
			target = $("input##{idp}[type=checkbox]")
			dbvalue = "#{type}_"
			if target.prop('checked')
				value = $("select[name=##{idp}_other]").val()
				if value instanceof 'Array'
					for i in value
						dbvalue += "#{i}&"
				else
					dbvalue = "#{type}_null"
			else
				dbvalue = "#{type}_null"

		else if type is 'inputornull'
			dbvalue = "#{type}_"
			if value is ('其他' or '有')
				othervalue = $("##{idp}_other").val()
				if othervalue is ("" or null)
					dbvalue += "#{value}-"
				else
					dbvalue += "#{value}-othervalue"
			else if value isnt ("" or undefined)
				dbvalue += "#{value}"

		return dbvalue

	# 获取表单中目前的所有值情况
	getformvalue = (form,inputnames,editid) ->
		data = {"id": editid}
		flag = [] # 标注哪一位出现输入不完整
		for i in inputnames
			target = $("##{form} input##{i}[type=text]") #input
			if target.length < 1
				target = $("##{form} input[name=#{i}]:checked") #boolean
				if target.length < 1
					target = $("##{form} input##{i}[type=checkbox]") #selectmultornull
					if target.length < 1
						target = $("##{form} select[name=#{i}]") #select,selectmult,inputornull
						if target.length < 1 #CCS
							result = builddbvalue 'CCS',"",i
						else
							datatype = target.data("data")
							result = builddbvalue datatype,target.val(),i
					else
						result = builddbvalue 'selectmultornull',"",i
				else
					result = builddbvalue 'boolean',target.val()
			else
				result = builddbvalue 'input',target.val()

			
			data[i] = result
			
		return data

	# 验证数据的合法性
	checkdata = (datatype,value,key) ->
		domtype = $("##{key}").data 'type'
		if domtype != datatype
			return false
		else if type is 'input'
				$("##{key}").val(value)
				return true
			else if type is 'select'
				$("##{key}").val(value)
				return true
			else if type is 'selectmult'
				if value isnt ""
					values = value.split("&")
					$("##{key}").val(values)
				else
					$("##{key}").val("")
				return true
			else if type is 'CCS'
				values = value.split("&")
				$("##{key}_color").val values[0]
				$("##{key}_light").val values[1]
				$("##{key}_pure").val values[2]
				return true
			else if type is 'inputornull'
				if value isnt ""
					match = /\-/g
					if match.test value
						values = value.split "-"
						$("##{key}").val values[0]
						$("##{key}_other").val values[1]
						$("##{key}_other").css 'display','inline-block'
					else
						$("##{key}").val value
				else
					$("##{key}").val value
				return true
			else if type is 'selectmultornull'
				if value isnt "null"
					values = value.split "&"
					$("##{key}").prop 'checked',true
					$("##{key}_other").val values
					$("##{key}_other").css 'display','inline-block'
				else
					$("##{key}").prop 'checked',false
				return true
			else if type is 'boolean'
				$("##{key} input[value=#{value}]").prop 'checked','true'
				return true
			else
				return false
	# 初始化
	init: () ->
		len = @modeldata.length
		for i in [0...len] by 1
			ergodicdata @modeldata,i,@inputnames,0

		finalhtmlstring = htmlstring
		console.log reqcontainer
		$("##{@target}").append finalhtmlstring

	# 获取数据库数据
	getdbdata: (url) ->
		dbdata = getdatabyajax(url).responseJSON
		for k, v of dbdata
			if k == 'id'
				continue

			if v isnt null or v isnt ""
				result = v.split("_")
				datatype = result[0]
				value = result[1]

			result = checkdata datatype,value,k
			if !result
				console.log '不匹配'

		# 动态加载chosen.jquery.js
		jQuery.getScript("/script/chosen.jquery.js")
			.done () ->
				$('.chosen-select').chosen()
				# "ornull"点击输入数据，反选取消
				for dom in $(".inputornull")
					judgeother dom
				for dom in $(".selectmultornull")
					judgeother dom
				
			.fail () ->
				alert "动态脚本加载失败"

	savedata: (clickbtn) ->
		$("##{clickbtn}").on 'click', () ->
			result = getformvalue @target,@inputnames

			$.post '/input/update', result.data, (data) ->
				alert '保存成功'
			
			return result.jundge






