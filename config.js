const btn = document.getElementById('btn' )

btn.addEventListener('click', function(e ){
    e.preventDefault()
    console.log( 'hello world')
    var a = document.getElementById( 'a').value
    var b = document.getElementById('b' ).value

    if(a !== '' && b !== '' ){
        
        if (a >= b){
            console.log('o numero b deve ser maior')

        } else if (b >a){
            console.log('parabéns numero a maior que o b')
        }else{
            console.log('o seu numero b deve ser maior que o a')
        }
    }
    else{
        console.log('complete os campos')
    }
} )