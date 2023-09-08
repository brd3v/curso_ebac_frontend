$(document).ready(function(){
    console.log('hello jquery')

    $('.formulario button').click(function(e){
        e.preventDefault()
        const newTask = $('#task').val()
        const newTaskElement = $(`<li>${newTask}</li>`);
        $('#new').append(newTaskElement);
        console.log(newTask);
        newTaskElement.click(function() {
            $(this).css('text-decoration', 'line-through');
        });
    });
});