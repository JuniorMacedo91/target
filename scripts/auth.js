const auth = firebase.auth()

const loginBtn = document.querySelector('#login-btn')

loginBtn.addEventListener('click', signIn)

function createUser(){
    const newUserEmail = 'admintarget@target.com'
    const newPassword = 'target123'

    auth.createUserWithEmailAndPassword(newUserEmail, newPassword)
            .then(user =>{
                alert(`Usuário cadastrado com sucesso`)
            }).catch(error =>{
                alert(`${error.message}`)
            })
}

function signIn(){
    event.preventDefault();
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    auth.signInWithEmailAndPassword(email, password)
            .then(user =>{
                
                if(email === 'usertarget@target.com'){
                    window.open('./dashboard.html')
                }else{
                    alert('Usuário não autorizado')
                }
                
            }).catch( error =>{
                alert('Usuário ou senha inválida')
                throw error
            })
}


