const loginBtn = document.querySelector('.login-btn')

loginBtn.addEventListener('click', signIn)

function signIn(){
    event.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if(email === ' ' || password === ''){
        alert('Preencha todos os campos')
    }  else{
        firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() =>{
                    if(email === 'admintarget@target.com'){
                        window.open('./admin.html', '_self')
                    }else{
                        window.open('./dashboard.html','_self')
                    }
                    
                }).catch(error =>{
                    alert('Usuário ou senha inválida')
                })
        }   
}



