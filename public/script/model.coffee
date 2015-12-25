# 将表格数据渲染模型

class Model
	constructor: (@tablename,@target,@editid) ->
		@inputnames = []								#每一个输入框的键值

	# model类中的常量
	CCS = {
			color: {
					'R':'红_rgb(255,0,0)',
					'OR': '橙红_rgb(255,51,0)',
					'O': '橙_rgb(255,102,0)',
					'OY': '橙黄_rgb(255,153,0)',
					'Y': '黄_rgb(255,255,0)',
					'YG': '黄绿_rgb(153,255,0)',
					'G': '绿_rgb(0,255,0)'
					'BG': '蓝绿_rgb(0,255,255)',
					'B': '蓝_rgb(0,0,255)'
					'BV': '青紫_rgb(102,0,255)',
					'V': '紫罗兰_rgb(255,0,255)',
					'VR': '紫红_rgb(255,0,102)'
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
	gethtmlstring = (data,id,domtarget) ->
		type = data.type
		value = data.defaultValue
		mend = jundgerequire domtarget
		flag = 0
		if value is 'null' or value is undefined
			value = ""

		if type is 'input' 
			str = "<input type='text' #{mend} id='#{id}' data-type='input' class='input' name='#{id}' value='#{value}'/>"

		else if type is 'select' 
			tmp = ""
			if mend isnt ""
				tmp += "<select name='#{id}' #{mend} id='#{id}' data-type='select'>"
			else
				tmp += "<select name='#{id}' id='#{id}' data-type='select' class='chosen-select'>"
			selects = data.option
			for k, v of selects
				tmp += "<option value='#{v}' data-key='#{k}' class='#{id}_select'>#{v}</option>"
				if v is '有' || v is '其他'
					flag = 1
			tmp += "</select>"
			if flag
				str = tmp + "<input name='#{id}_otherinput' type='text' class='otherinput'>"
			else
				str = tmp

		else if type is 'selectmult' 
			tmp = ""
			tmp += "<select name='#{id}' id='#{id}' data-type='selectmult' class='chosen-select' multiple>"
			selects = data.option
			for k, v of selects
				tmp += "<option value='#{v}' data-key='#{k}' class='#{id}_select'>#{v}</option>"
				if v is '有' || v is '其他'
					flag = 1
			tmp += "</select>"
			if flag
				str = tmp + "<input name='#{id}_otherinput' type='text' class='otherinput'>"
			else
				str = tmp

		else if type is 'CCS'
			str_color = "<div class='ccs_color s_show'>颜色<select name='#{id}_color' class='CCS ccscolor' id='#{id}_color'>"
			str_light = "<div class='ccs_light s_show'>亮度<select name='#{id}_light' class='CCS ccslight' id='#{id}_light'>"
			str_pure = "<div class='css_pure s_show'>纯度<select name='#{id}_pure' class='CCS ccspure' id='#{id}_pure'>"
			str_end = "</select></div>"
					
			for k,v of CCS.color
				vv = v.split("_")
				str_color += "<option value='#{k}'><p style='color:background:#{vv[1]}'>#{vv[0]}</p></option>"
			str_color += str_end
			for i in CCS.light
				str_light += "<option value='#{i}'>#{i}</option>"
			str_light += str_end

			for i in CCS.pure
				str_pure += "<option value='#{i}'>#{i}</option>"
			str_pure += str_end

			str = "<div id='#{id}' data-type='CCS'>" + str_color + str_light + str_pure + "</div>"

		else if type is 'inputornull'
			str = "<input id='#{id}' name='#{id}' data-type='inputornull' class='inputornull' type='checkbox'>有<br/>
				<input name='#{id}_other' type='text' class='otherinput'>"

		else if type is 'selectmultornull' 
			tmp = "<input id='#{id}' name='#{id}' data-type='selectmultornull' class='selectmultornull' type='checkbox'>有<br/><select name='#{id}_other' id='#{id}_other' class='chosen-select otherdata' multiple>"
			selects = data.option
			for k, v of selects
				tmp += "<option value='#{v}' class='#{id}_#{k}'>#{v}</option>"
				if v is '有' || v is '其他'
					flag = 1
			tmp += "</select>"
			if flag
				str = tmp + "<input name='#{id}_other_otherinput' type='text' class='otherinput'>"
			else
				str = tmp

		else if type is 'boolean'
			str = "<div id='#{id}' data-type='boolean' >
				<input type='radio' name='#{id}' value='1'/>是
				<input type='radio' name='#{id}' value='0'/>否</div>"

		else
			str = ''

		return str

	# 遍历表单类型渲染数据
	# 遍历n叉树
	ergodicdata = (modeldata,position,inputnames) ->
		target = modeldata[position]
		if target.forend isnt undefined && target.fields is undefined
			title = target.namezh
			str = gethtmlstring target.forend,target.name,target
			inputnames = buildkeys target.name,inputnames

			if target.forend.comment isnt undefined
				if target.forend.comment is ""
					comment = ""
				else
					comment = "(#{target.forend.comment})"
			else 
				comment = ""

			htmlstring += "<div class='list'>
							<div class='note'>
								<h5>#{title}#{comment}</h5>
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

					htmlstring += "<div id='#{target.name}' #{mend} class='board'>
								<h3>#{title}</h3>"

				ergodicdata target.fields,i,inputnames
				if i == len-1
					htmlstring += "<div class='clear'></div></div><hr />"
				
				
	clickappear = (id,check,datatype,point) ->
		flag = 0
		if check is 'checkbox' and datatype is 'selectmultornull'
			idp = "#{id}_other"
			input = $("##{idp}_chzn")
			input2 = $("input[name=#{idp}_otherinput]")
			if $(point).prop('checked')
				flag = 1
			else
				if input2.length > 0
					input2.css 'display','none'
			

		else if check is 'checkbox' and datatype is 'inputornull'
			input = $("input[name=#{id}_other]")
			if $(point).prop('checked')
				flag = 1
			
		else
			input = $("input[name=#{id}_otherinput]")
			value = $(point).val()
			if value isnt null or value isnt undefined
				if typeof value is 'string'
					if value == "其他" || value == "有"
						flag = 1
				else if typeof value is 'object'
					if value isnt null
						for t in value
							if t == "其他" || t == "有"
								flag = 1

		if flag
			input.css 'display','block'
		else
			input.css 'display','none'

	# 判断选择框中需要手动输入类型的情况
	judgeother = (point) ->
		id = point.id
		check = point.type
		datatype = $(point).data 'type'

		# 初始化一遍
		clickappear(id,check,datatype,point)

		$(point).on "change",() ->
			clickappear(id,check,datatype,point)
				
	# 判断值类型与存储方式的工具
	# 有，其他的值得输入
	getotherinput = (idp,type,value) ->
		va = ""
		if type is 'selectmultornull'
			idp += '_other'
		
		if value is '有' || value is '其他'
			va = value + "~" + $("input[name=#{idp}_otherinput]").val()

		return va
				
	# 检查输入值的正确性
	builddbvalue = (type,idp) ->
		dbvalue = ""

		if type is 'input' or type is 'select'
			value = $("##{idp}").val()
			if value isnt "" or value isnt undefined or value isnt null
				result = getotherinput idp,type,value
				if result isnt ""
					dbvalue = "#{result}"
				else
					dbvalue = "#{value}"
			else
				dbvalue = ""

		else if type is 'boolean'
			value = $("input[name=#{idp}]:checked").val()
			if value is "1"
				dbvalue = "1"
			else if value is "0"
				dbvalue = ""

		else if type is 'selectmult'
			value = $("##{idp}").val()
			if value instanceof Array
				for i in value
					result = getotherinput idp,type,i
					if result isnt ""
						dbvalue += "#{result}&"
					else
						dbvalue += "#{i}&"
			else
				dbvalue = ""

		else if type is 'CCS'
			color = $("##{idp}_color").val() 
			light = $("##{idp}_light").val() 
			pure =  $("##{idp}_pure").val()
			dbvalue += color + "&" + light + "&" + pure

		else if type is 'selectmultornull'
			target = $("input##{idp}[type=checkbox]")
			if target.prop('checked')
				value = $("select[name=#{idp}_other]").val()
				if value instanceof Array
					for i in value
						result = getotherinput idp,type,i
						if result isnt ""
							dbvalue += "#{result}&"
						else
							dbvalue += "#{i}&"
				else
					dbvalue = ""
			else
				dbvalue = ""

		else if type is 'inputornull'
			target = $("input##{idp}[type=checkbox]")
			if target.prop('checked')
				dbvalue = $("input.otherinput[name=#{idp}_other]").val();
			else
				dbvalue = ""
			
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
		if value is null or value is undefined or value is 'unll' or value is 'undefined'
			value = ""

		match = /\~/

		if type is 'input'
			$("##{key}").val(value)
			return true

		else if type is 'select'
			if match.test value
				values = value.split('~')
				value = values[0]
				other = values[1]
				$("input[name=#{key}_otherinput]").val other
			$("##{key}").val(value)
			return true

		else if type is 'selectmult'
			if value isnt ""
				values = value.split("&")
				data = []
				for i in values
					if match.test i
						s = i.split('~')
						i = s[0]
						other = s[1]
						$("input[name=#{key}_otherinput]").val other
					data.push i
				
				$("##{key}").val(data)
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
				$("##{key}").prop 'checked',true
				$("input.otherinput[name=#{key}_other]").css 'display','block'
				$("input.otherinput[name=#{key}_other]").val(value);
			else
				$("##{key}").prop 'checked',false
			return true
		else if type is 'selectmultornull'
			if value isnt ""
				values = value.split "&"
				data = []
				for i in values
					if match.test i
						s = i.split('~')
						i = s[0]
						other = s[1]
						$("input[name=#{key}_other_otherinput]").val other
					data.push i

				$("##{key}").prop 'checked',true
				$("##{key}_other").val data
				$("##{key}_other").css 'display','block'
			else
				$("##{key}").prop 'checked',false
			return true
		else if type is 'boolean'
			if value is true
				mark = 1
			else
				mark = 0
			$("##{key} input[value=#{mark}]").prop 'checked','true'
			return true
		else
			return false

	# 获取数据库数据
	getdbdata = (tablename,id) ->
		url = "/input/get/#{tablename}/#{id}"
		dbdata = getdatabyajax(url).responseJSON
		for k, v of dbdata
			if k == 'id'
				continue

			if v isnt null
				value = v
			else 
				value = ""

			result = checkdata value,k


		# 动态加载chosen.jquery.js
		jQuery.getScript("/script/chosen.jquery.js")
			.done () ->
				$('.chosen-select').chosen()
				herd = $(".selectmultornull")
				for i in herd
					id = $(i).attr('id')
					_id = $(".#{id}_other").attr('id')
					$("##{_id}_chzn").css "display","none"

				# 修改chosen框架的bug
				for dom in $(".chzn-container")
					$(dom).css 'width','250px'
				

				# "ornull"点击输入数据，反选取消
				for dom in $(".inputornull")
					judgeother dom
				for dom in $(".selectmultornull")
					judgeother dom
				for dom in $("select")
					judgeother dom
				
				
			.fail () ->
				alert "动态脚本加载失败"

	# require的自定义事件
	reqevent = (index,condition,target) ->
		datatype = $("##{index}").data 'type'
		if datatype is 'boolean'
			obj = $("##{index} input[value=1]")
			objf = $("##{index} input[value=0]")

			if obj.prop 'checked'
				$("##{target}").css 'display','block'
			else
				$("##{target}").css 'display','none'

			obj.on 'click',() ->
				$("##{target}").css 'display','block'
			objf.on 'click',() ->
				$("##{target}").css 'display','none'

		else if datatype is 'select'
			for i in $("option.#{index}_select")
				if "#{$(i).data('key')}" == condition	
					condition = $(i).val()
					break

			obj = $("##{index}")

			if obj.val() is condition
				$("##{target}").css 'display','block'
			else
				$("##{target}").css 'display','none'

			obj.on "change",() ->
				if $(this).val() is condition
					$("##{target}").css 'display','block'
				else
					$("##{target}").css 'display','none'

		else if datatype is 'selectmult'
			for i in $("option.#{index}_select")
				if "#{$(i).data('key')}" == condition	
					condition = $(i).val()
					break

			obj = $("##{index}")
			value = obj.val()
			flag = 0
			if value isnt null
				for i in obj.val()
					if i == condition
						flag = 1
						break
			if flag
				$("##{target}").css 'display','block'
			else
				$("##{target}").css 'display','none'

			obj.on "change",() ->
				obj = $("##{index}")
				value = obj.val()
				flag = 0
				if value isnt null
					for i in obj.val()
						if i == condition
							flag = 1
							break
				if flag
					$("##{target}").css 'display','block'
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
		console.log result
		$.post "/input/update/#{@tablename}", result, (data) ->
			alert '保存成功'
			getdbdata that.tablename,that.editid

	createnewform: () ->
		window.location = "/input/creat/#{@tablename}/#{@editid}"
			
			






