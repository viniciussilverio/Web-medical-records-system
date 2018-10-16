$(document).ready(function(){
    $('.money').mask("#.##0,00", {reverse: true});
    $('.percent').mask('##0,00', {reverse: true});
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cep').mask('00000-000');
    $('.tel').mask('(00) 0000-0000');
    $('.cel').mask('(00) 00000-0000');
    $('.discount').mask('##0,00', {reverse: true});
    $('.total').mask("###0.00", {reverse: true});
    $('.time').mask('00:00');
});