//hello world


$(document).ready(function(){
    $("#cpf").mask("000.000.000-00",{
        placeholder: '123-456-789-00'}
    )
    $("#cep").mask("00000-000", {
        placeholder : '12345-000'
    })
    $('#tel').mask("(00) 00000 0000")
        
    $('#val').validate({
        rules: {
             cpfs: {
                required:true,
                 maxlength:11,
                 minlength:11,
             },
             ceps: {
                required: true,
                maxlength: 8,
                minlength: 8
             }
        }
    })

})