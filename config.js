const btn = document.getElementById('btn' )

btn.addEventListener('click', function(e ){
    e.preventDefault()
    console.log( 'hello world')
    var a = document.getElementById( 'a').value
    var b = document.getElementById('b' ).value
    var r = document.getElementById('return')
    if(a !== '' && b !== '' ){
        
        if (a >= b){
            r.innerHTML = 'o numero b deve ser maior'

        } else if (b >a){
            r.innerHTML = 'parabéns numero a menor que o b'
        }else{
            r.innerHTML = 'o seu numero b deve ser maior que o a'
        }
    }
    else{
        r.innerHTML = 'complete os campos'
    }
} )
