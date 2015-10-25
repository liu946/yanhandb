# 将表格数据渲染模型

class Model
	constructor: (@tablename,@target,@editid) ->
		@inputnames = []								#每一个输入框的键值

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
	jundgerequire = (target) ->
		if target.require isnt undefined
			mend = "style='display:none'"
			storeobj = reqcontainer["#{target.require.name}"]
			if storeobj is undefined
				storeobj = {}

			storeobj["#{target.name}"] = "#{target.require.value}"
			reqcontainer["#{target.require.name}"] = storeobj

		else
			mend = ""
		return mend
	
	# 静态方法
	# ajax请求获取数据
	getdatabyajax = (url) ->
		$.ajax
			url: url,
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
			str = tmp + "<input type='text' class='otherdata #{id}_other' />"

		else if type is 'selectmultornull' 
			tmp = "<input id='#{id}' name='#{id}' data-type='selectmultornull' class='selectmultornull' type='checkbox'>有<br/><select name='#{id}_other' class='chosen-select otherdata #{id}_other' multiple>"
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
	ergodicdata = (modeldata,position,inputnames) ->
		target = modeldata[position]
		if target.forend isnt undefined && target.fields is undefined
			title = target.namezh
			str = gethtmlstring target.forend,target.name
			inputnames = buildkeys target.name,inputnames

			mend = jundgerequire target
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
				if i == 0
					title = target.namezh
					mend = jundgerequire target

					htmlstring += "<div id='#{target.name}' #{mend}>
								<h3>#{title}</h3>"

				ergodicdata target.fields,i,inputnames
				if i == len-1
					htmlstring += "</div><div class='clear'></div><hr />"
				
				
	# 判断选择框中需要手动输入类型的情况
	judgeother = (point) ->
		id = point.id
		type = point.name
		check = point.type
		# 初始化一遍
		flag = 0
		if check is 'checkbox'
			id = $(".#{type}_other").attr('id')
			input = $("##{id}_chzn")
			if $(point).prop('checked')
				flag = 1
			else
				flag = 0
		else
			input = $(".#{type}_other")
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

		$(point).on "change",() ->
			flag = 0
			if check is 'checkbox'
				id = $(".#{type}_other").attr('id')
				input = $("##{id}_chzn")
				if $(point).prop('checked')
					flag = 1
				else
					flag = 0
			else
				input = $(".#{type}_other")
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
	builddbvalue = (type,idp) ->
		dbvalue = ""

		if type is ('input' or 'boolean' or 'select')
			value = $("##{idp}").val()
			if value isnt ("" or undefined)
				dbvalue = "#{value}"

		else if type is 'selectmult'
			value = $("##{idp}").val()
			if value instanceof Array
				dbvalue = ""
				for i in value
					dbvalue += "#{i}&"

		else if type is 'CCS'
			color = $("select[name=#{i}_color]").val() 
			light = $("select[name=#{i}_light]").val() 
			pure =  $("select[name=#{i}_pure]").val()
			dbvalue += color + "&" + light + "&" + pure

		else if type is 'selectmultornull'
			target = $("input##{idp}[type=checkbox]")
			dbvalue = ""
			if target.prop('checked')
				value = $("select[name=#{idp}_other]").val()
				if value instanceof Array
					for i in value
						dbvalue += "#{i}&"
				else
					dbvalue = "null"
			else
				dbvalue = "null"

		else if type is 'inputornull'
			dbvalue = ""
			value = $("##{idp}").val();
			if value is ('其他' or '有')
				othervalue = $("##{idp}_other").val()
				if othervalue is ("" or null)
					dbvalue += "#{value}-"
				else
					dbvalue += "#{value}-#{othervalue}"
			else if value isnt ("" or undefined)
				dbvalue += "#{value}"

		return dbvalue

	# 获取表单中目前的所有值情况
	getformvalue = (form,inputnames,editid) ->
		data = {"id": editid}
		for i in inputnames
			type = $("##{i}").data('type')
			result = builddbvalue type,i
			
			data[i] = result
			
		return data

	# 验证数据的合法性
	checkdata = (value,key) ->
		type = $("##{key}").data 'type'
		if type is 'input'
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

	# 获取数据库数据
	getdbdata = (tablename,id) ->
		url = "/input/get/#{tablename}/#{id}"
		dbdata = getdatabyajax(url).responseJSON
		console.log dbdata
		for k, v of dbdata
			if k == 'id'
				continue

			if v isnt null
				value = v
			else 
				value = ""

			result = checkdata value,k

			if !result
				console.log '不匹配'

		# 动态加载chosen.jquery.js
		jQuery.getScript("/script/chosen.jquery.js")
			.done () ->
				$('.chosen-select').chosen()
				herd = $(".selectmultornull")
				for i in herd
					id = $(i).attr('id')
					_id = $(".#{id}_other").attr('id')
					$("##{_id}_chzn").css "display","none"

				# "ornull"点击输入数据，反选取消
				for dom in $(".inputornull")
					judgeother dom
				for dom in $(".selectmultornull")
					judgeother dom
				
			.fail () ->
				alert "动态脚本加载失败"

	# require的自定义事件
	reqevent = (index,condition,target) ->
		datatype = $("##{index}").data 'type'
		if datatype is 'boolean'
			obj = $("##{index} input[value=#{condition}]")

			if obj.prop 'checked'
				$("##{target}").css 'display','inline-block'
			else
				$("##{target}").css 'display','none'

			obj.on 'click',() ->
				if $(this).prop 'checked'
					$("##{target}").css 'display','inline-block'
				else
					$("##{target}").css 'display','none'

		else if datatype is 'select'
			obj = $("##{index}")

			if obj.val() is condition
				$("##{target}").css 'display','inline-block'
			else
				$("##{target}").css 'display','none'

			obj.on "change",() ->
				if $(this).val() is condition
					$("##{target}").css 'display','inline-block'
				else
					$("##{target}").css 'display','none'

		else if datatype is 'selectmult'
			obj = $("##{index}")
			value = obj.val()
			flag = 0
			for i in obj.val()
				if i = condition
					flag = 1
					break
			if flag
				$("##{target}").css 'display','inline-block'
			else
				$("##{target}").css 'display','none'

			obj.on "change",() ->
				flag = 0
				for i in obj.val()
					if i = condition
						flag = 1
						break
				if flag
					$("##{target}").css 'display','inline-block'
				else
					$("##{target}").css 'display','none'

	# 初始化
	init: () ->
		modeldata = getdatabyajax("/input/field/#{@tablename}").responseJSON
		len = modeldata.length
		for i in [0...len] by 1
			ergodicdata modeldata,i,@inputnames
		finalhtmlstring = htmlstring
		$("##{@target}").append finalhtmlstring

		getdbdata @tablename,@editid

		# 遍历reqcontainer,对每一对进行事件的绑定
		for k, v of reqcontainer
			index = k
			for a, b of v
				condition = b
				target = a
				reqevent index,condition,target

	savedata: () ->
		result = getformvalue @target,@inputnames,@editid
		that = this
		$.post "/input/update/#{@tablename}", result, (data) ->
			alert '保存成功'
			getdbdata that.tablename,that.editid
				
			
			






