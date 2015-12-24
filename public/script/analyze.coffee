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
        object = {}
        for d in data
            if object.hasOwnProperty(d.CZJBXXSuoShuZhenYu)
                object[d.CZJBXXSuoShuZhenYu].push({"name": "#{d.CZJBXXCunZhenMingChen}","id":"#{d.id}"})
            else
                object[d.CZJBXXSuoShuZhenYu] = []
                object[d.CZJBXXSuoShuZhenYu].push({"name": "#{d.CZJBXXCunZhenMingChen}","id":"#{d.id}"})

        for k,v of object
            html += "<li class='submenu'><a href='#'>#{k}</a><ul>"
            for d in v
                html += "<li class='submenu'><a href='/statistics/analyze/#{d.id}'>#{d.name}</a>"
            html += "</ul>"
            
        $('#sidebar ul').html html

    init: ()->
        data = getdatabyajax("/statistics/get/#{@tablename}").responseJSON
        addlist data,@tablename
