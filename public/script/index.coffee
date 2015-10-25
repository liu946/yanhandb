class List
	constructor: (@tablename) ->
		
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

	addlist = (data,tablename) ->
		html = ''
		for d in data
			html += "<div class='container'>
						<div class='id'><p>#{d.id}</p></div>
						<div class='title'><p>#{d.CZJBXXCunZhenMingChen}</p></div>
						<div class='exchange'><a href='/input/view/#{tablename}/#{d.id}'>修改</a></div>
					</div>"

		$('#formlist .contentlist').html html

	init: ()->
		data = getdatabyajax("/input/get/#{@tablename}").responseJSON
		addlist data,@tablename

	add: ()->
		location.href = "/input/new/#{@tablename}"

	


