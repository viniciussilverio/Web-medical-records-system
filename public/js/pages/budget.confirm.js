$(document).ready(function(){
    $('#desconto').keyup(function () {
        if($.isNumeric($(this).val()))
        {
            var desconto = parseFloat($(this).val());
            var subtotal = parseFloat($('#subtotal').data('value'));
            var total_desconto = subtotal - (subtotal * desconto / 100);

            total_desconto = total_desconto.toFixed(2);

            $('#total span').html(total_desconto);

            $('#total span').unmask();
            $('#total span').mask("#.##0,00", {reverse: true});
        }
    });
});