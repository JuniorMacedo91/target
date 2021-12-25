const auth = firebase.auth()

const email = document.querySelector('#email').value
const password = document.querySelector('#password').value
const loginBtn = document.querySelector('#login-btn')

loginBtn.addEventListener('click', signIn)

const newUserEmail = 'admintarget@target.com'
const newPassword = 'target123'

function createUser(){
    auth.createUserWithEmailAndPassword(newUserEmail, newPassword)
            .then(user =>{
                alert(`Usuário cadastrado com sucesso`)
            }).catch(error =>{
                alert(`${error.message}`)
            })
}

function signIn(){
    preventDefault();
    auth.signInWithEmailAndPassword(newUserEmail, newPassword)
            .then(() =>{
                
                if(newUserEmail === email){
                    alert('Bem - vindo(a)')
                    window.open('./dashboard.html')
                }else{
                    alert('Usuário não autorizado')
                }
                
            }).catch( error =>{
                alert('Usuário ou senha inválida')
                throw error
            })
}
