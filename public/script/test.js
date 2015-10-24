/**
 * Created by liu on 15/10/24.
 */
$(function(){
    $('p').each(function() {
        $.ajax({
            url: "/test/" + $('this').html()
        }).done(function (data) {
            $("#testbox").html( $("#testbox").html() + data)
        })
    });
})