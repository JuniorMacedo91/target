import {db} from './index.js'

const employeeId = document.querySelector('#employeeId')
const job = document.querySelector('#job')
const fullName = document.querySelector('#employeeName')
const email = document.querySelector('#email')
const supervisor = document.querySelector('#supervisor')
const place = document.querySelector('#place')
const addNewEmployeeBtn = document.querySelector('.add-btn')
const creatAccessBtn = document.querySelector('.creatAccess-btn')
const signOutBtn = document.querySelector('#sign-out-btn')


addNewEmployeeBtn.addEventListener('click', creatNewEmployee)
creatAccessBtn.addEventListener('click', createUserLogIn)
signOutBtn.addEventListener('click', logOut)


function creatNewEmployee(){
    db.collection('vanessa').doc(employeeId.value).set(
        {
            employeeId: employeeId.value,
            job: job.value,
            fullName: fullName.value,
            email: email.value,
            supervisor: supervisor.value,
            place: place.value
        }
    ).then(() =>{
        alert('Colaborador criado com sucesso')
    }).catch(error =>{
        console.log(error)
    })
}


function createUserLogIn(){
    event.preventDefault()
    const newUserEmail = document.querySelector('#newEmployeeEmail').value
    const newPassword =  document.querySelector('#newEmployeePassword').value

    if(newUserEmail === '' || newPassword === ' '){
        alert('Preencha todos os campos')
    } else{
        firebase.auth().createUserWithEmailAndPassword(newUserEmail, newPassword)
            .then(() =>{
                alert('Log in do Colaborador criado com sucesso')
            }).catch(error =>{
                console.log(`${error.message}`)
            })
    }
}


function logOut(){
    firebase.auth().signOut()
            .then(() =>{
                if(confirm('Deseja sair?')){
                    window.open('./index.html', '_self')
                }
                
            }).catch(error =>{
                console.log(error.message)
            })
}


const tab = document.querySelector('#admin-page')
const tabButton = document.querySelectorAll('.tab-button')
const tabContent = document.querySelectorAll('.tab-content')


// Change tab content
tab.onclick = event =>{
    const id = event.target.dataset.id

    if(id){
        tabButton.forEach(button =>{
            button.classList.remove('active')
        })
        event.target.classList.add('active')

        tabContent.forEach(content =>{
            content.classList.remove('active')
        })

        const element = document.getElementById(id)
        element.classList.add('active')
    }
}




