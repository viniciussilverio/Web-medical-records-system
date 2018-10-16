$(function(){
    $('.bt-toggle').change(function () {
        var el = $(this);

        $.ajax({
            type: 'GET',
            data: ({status : el.prop('checked')}),
            url: el.attr('data-active-url'),
            dataType: 'json',
            success: function(data){
            },
            beforeSend: function(){
                el.bootstrapToggle('disable');
            },
            complete: function(){
                el.bootstrapToggle('enable');
            }
        });
    });
})