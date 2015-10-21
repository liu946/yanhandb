# 将表格数据渲染模型

class Model
	constructor: (@url,@target) ->
		@inputnames = [] #每一个输入框的键值
		@finalhtmlstring #最后注入的html文件字符串
		@submitdata #提交后台的数据
		@modeldata #获取的表单数据
		@dbdata #数据库中对应问卷的数据
		@CCS = {
				color: {
						'R':'rgb(255,0,0)',
						'OR': 'rgb(255,51,0)',
						'O': 'rgb(255,102,0)',
						''
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
		value = data.defaultValue is null ? "":data.defaultValue

		switch type
			when 'input'
				str = "<input type='text' id='#{id}' name='#{id}' value='#{value}'/>"
			when 'select'
				tmp = ""
				tmp += "<select name='#{id}' class='chosen-select'>"
				selects = data.option
				for k, v of selects
					tmp += "<option value='#{v}' class='#{id}_#{k}'>#{v}</option>"
				str = tmp + "</select>"
			when 'selectmult'
				tmp = ""
				tmp += "<select name='#{id}' class='chosen-select' multiple>"
				selects = data.option
				for k, v of selects
					tmp += "<option value='#{v}' class='#{id}_#{k}'>#{v}</option>"
				str = tmp + "</select>"
			when 'CCS'
				str_color = "<div class='ccs_color s_show'>颜色<select name='#{id}_color' id='#{id}_color'>"
				str_light = "<div class='ccs_light s_show'>亮度<select name='#{id}_light' id='#{id}_light'>"
				str_pure = "<div class='css_pure s_show'>纯度<select name='#{id}_pure' id='#{id}_pure'>"
				str_end = "</select></div>"
						
				for k,v of @CCS.color
					str_color += "<option style='background:#{v}' value='#{k}'></option>"
				str_color += str_end

				for i in @CCS.light
					str_light += "<option value='#{i}'>#{i}</option>"
				str_light += str_end

				for i in @CCS.pure
					str_pure += "<option value='#{i}'>#{i}</option>"
				str_pure += str_end

				str = str_color + str_light + str_pure
			when 'inputornull'
			when 'selectmultornull'



	# 原型链扩展
	# 遍历表单类型渲染数据
	ergodicdata: () ->
		if type is 'process'
			title = data.namezh
			str = "<div id='#{data.name}' class='J_content'>
					<h3>#{title}</h3>"
		else if type is 'forend'
			title = data.namezh
			str = "<div class='list'>
						<div class='note'>
							<p>#{title}</p>
						</div>
						<div class='input'>
							#{str}
						</div>
					</div>"

	# 初始化
	init: () ->


