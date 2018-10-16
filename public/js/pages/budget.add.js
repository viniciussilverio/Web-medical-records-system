$(document).ready(function(){
    $('#btn-add-exam').click(function () {
        var btn = $(this);
        var idExam = $('select#exam').val();
        $.ajax({
            type: 'GET',
            url: '/budget-exam/select/' + idExam,
            dataType: 'html',
            success: function(data){
                $('#exam-select-list table tbody').append(data);
            },
            beforeSend: function(){
                btn.prop('disabled', true);
            },
            complete: function(){
                calcTotalExam();
                btn.prop('disabled', false);
            }
        });
    });
});

function removeExam(id_exam)
{
    var line = $('#exam-select-list-line-' + id_exam);
    line.remove();
    calcTotalExam();
}

function calcTotalExam()
{
    var total = 0;
    $('#exam-select-list table tbody tr').each(function () {
        total += parseFloat($(this).find('.exam_value').data('value'));
    });

    total = total.toFixed(2);

    $('form #subTotal').val(total);

    $('form #subTotal').unmask();
    $('form #subTotal').mask("#.##0,00", {reverse: true});
}