const auth = firebase.auth()

const loginBtn = document.querySelector('#login-btn')

loginBtn.addEventListener('click', createUser)

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

