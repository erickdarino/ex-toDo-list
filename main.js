$(document).ready(function(){
    $('form').on('submit',(e)=>{
        e.preventDefault();

        const inputTarefa = $('#adicionar-tarefa').val();
        const novaTarefa = $(`<li>${inputTarefa}</li>`);

        $(novaTarefa).appendTo('ol');
        $(novaTarefa).fadeIn(200);

        $("#cancelar").slideDown(300)
        $("#adicionar-tarefa").val('');
    });
    
    $('ol').on('click', 'li', function(){
        $(this).toggleClass('lista-completa');
    });
    
    $("#cancelar").on('click', function(){
        $("li").slideUp(300, function(){
            $(this).remove(400);
            $("#cancelar").fadeOut(300)
        })

    })
})

