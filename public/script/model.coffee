# 将表格数据渲染模型

class Model
	constructor: (url,@target) ->
		@inputnames = [] 								#每一个输入框的键值
		@finalhtmlstring = ''							#最后注入的html文件字符串
		@submitdata 									#提交后台的数据
		@modeldata = getdatabyajax(url).responseJSON 	#获取的表单数据
		@dbdata 										#数据库中对应问卷的数据

	# model类中的常量
	CCS = {
			color: {
					'R':'rgb(255,0,0)',
					'OR': 'rgb(255,51,0)',
					'O': 'rgb(255,102,0)',
					'OY': 'rgb(255,153,0)',
					'Y': 'rgb(255,255,0)',
					'YG': 'rgb(153,255,0)',
					'G': 'rgb(0,255,0)',
					'BG': 'rgb(0,255,255)',
					'B': 'rgb(0,0,255)',
					'BV': 'rgb(102,0,255)',
					'V': 'rgb(255,0,255)',
					'VR': 'rgb(255,0,102)'
				},
			light: [0,1,2,3,4,5,6,7,8,9,10],
			pure: [0,1,2,3,4,5,6,7,8,9,10]
		} 
	
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
		if value == 'null'
			value = ""

		if type is 'input' 
			str = "<input type='text' id='#{id}' class='input' name='#{id}' value='#{value}'/>"

		else if type is 'select' 
			tmp = ""
			tmp += "<select name='#{id}' class='chosen-select select'>"
			selects = data.option
			for k, v of selects
				tmp += "<option value='#{v}' class='#{id}_#{k}'>#{v}</option>"
			str = tmp + "</select>"

		else if type is 'selectmult' 
			tmp = ""
			tmp += "<select name='#{id}' class='chosen-select selectmult' multiple>"
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
				str_color += "<option style='background:#{v}' value='#{k}'></option>"
				str_color += str_end
			for i in CCS.light
				str_light += "<option value='#{i}'>#{i}</option>"
				str_light += str_end

			for i in CCS.pure
				str_pure += "<option value='#{i}'>#{i}</option>"
				str_pure += str_end

			str = str_color + str_light + str_pure

		else if type is 'inputornull'
			tmp = ""
			selects = data.option
			for k, v of selects
				if v is "有" || v is '其他'
					tmp += "<input type='radio' class='inputornull other' name='#{id}' value='#{v}'/>#{v}"
				else
					tmp += "<input type='radio' class='inputornull' name='#{id}' value='#{v}'/>#{v}"
			str = tmp + "<input type='text' class='otherdata' id='#{id}_other'/>"

		else if type is 'selectmultornull' 
			tmp = ""
			tmp += "<select name='#{id}' class='chosen-select selectmultornull' multiple>"
			selects = data.option
			for k, v of selects
				if v is "有" || v is '其他'
					tmp += "<option value='#{v}' class='#{id}_#{k} other'>#{v}</option>"
				else
					tmp += "<option value='#{v}' class='#{id}_#{k}'>#{v}</option>"
				
			str = tmp + "</select>" + "<input type='text' class='otherdata' id='#{id}_other'/>"

		else
			str = ''

		return str

	# 遍历表单类型渲染数据
	# 遍历n叉树
	modelstack = new Array() # 状态栈
	flagstack = new Array() # 标记栈
	flag = 0 # 0号位
	ergodicdata = (modeldata,inputnames,htmlstring) ->
		len = modeldata.length
		i = 0
		for a in modeldata
			console.log a
			if a.forend is undefined && a.fields isnt undefined
				title = a.namezh
				htmlstring += "<div id='#{a.name}' class='J_content'>
							<h3>#{title}</h3></div>"

				# 压入栈
				modelstack.push modeldata
				flagstack.push flag
				flag += 1 
				modeldata = a.fields

				ergodicdata modeldata,inputnames,htmlstring
				

			else if a.forend isnt undefined && a.fields is undefined
				title = a.namezh
				str = gethtmlstring a.forend,a.name
				inputnames = buildkeys a.name,inputnames

				htmlstring += "<div class='list'>
								<div class='note'>
									<h4>#{title}</h4>
								</div>
								<div class='shuru'>
									#{str}
								</div>
							</div>"
				# 删叶子节点
				delete modeldata[i]
				i += 1
				if i == len
					modeldata = modelstack.pop()
					# 删根节点
					flag = flagstack.pop()
					delete modeldata[flag]

					ergodicdata modeldata,inputnames,htmlstring
				
			else
				htmlstring += ""
				i += 1
				if i == len
					modeldata = modelstack.pop()
				return {
					modeldata: modeldata,
					inputnames: inputnames,
					htmlstring: htmlstring
				}

	# 初始化
	init: () ->
		ergodicdata @modeldata,@inputnames,@finalhtmlstring
		console.log @modeldata,@inputnames
		@target.append @finalhtmlstring


