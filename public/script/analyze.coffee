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
            html += "<div class='container'>"
            if tablename is 'cunzhen'
                html += "<div class='title'><p>#{d.CZJBXXCunZhenMingChen}</p></div>
                    <div class='title'><p>#{d.CZJBXXSuoShuZhenYu}</p></div>"
            else if tablename is 'biaozhixinggouzhuwu'
                html += "<div class='title'><p>#{d.BianHao}</p></div>
                    <div class='title'><p>#{d.LeiXing}</p></div>
                    <div class='title'><p>#{d.SuoShuCunZhen}</p></div>"
            else if tablename is 'jiedaokongjian'
                html += "<div class='title'><p>#{d.BianHao}</p></div>
                    <div class='title'><p>#{d.SuoShuCunZhen}</p></div>"
            else if tablename is 'kaichangkongjian'
                html += "<div class='title'><p>#{d.BianHao}</p></div>
                    <div class='title'><p>#{d.SuoShuCunZhen}</p></div>"
            else if tablename is 'tingyuanyujianzhu'
                html += "<div class='title'><p>#{d.JZJBXXBianHao}</p></div>
                        <div class='title'><p>#{d.JZJBXXMingChen}</p></div>
                        <div class='title'><p>#{d.SuoShuCunZhen}</p></div>"
            else
            
            html += "<div class='exchange'><a href='/statistics/analyze/#{d.id}'>分析</a></div></div>"
        $('#formlist .contentlist').append html

    init: ()->
        data = getdatabyajax("/statistics/get/#{@tablename}").responseJSON
        addlist data,@tablename
