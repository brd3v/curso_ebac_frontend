const name = document.getElementById('name')
const email = document.getElementById('email')
const tel = document.getElementById('tel')

const action = document.getElementById('action')

action.addEventListener('click', (e) => {e.preventDefault() 
if(name.value == '' & email.value =='' & tel.value == ''){
    alert('Preencha todos os campos')
}    
else{
    console.log('sucess')
}

})