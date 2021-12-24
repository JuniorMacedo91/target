const firebaseConfig = {
    apiKey: "AIzaSyAW7q5YRuHFBR3QhCwIh8ljZGpqnzJQ-Ro",
    authDomain: "target-nps.firebaseapp.com",
    projectId: "target-nps",
    storageBucket: "target-nps.appspot.com",
    messagingSenderId: "954987526576",
    appId: "1:954987526576:web:b8da8bfccfcec14cb63e75"
  };


const employeeName= document.querySelector('#employee__name')
const job = document.querySelector('#employee__job')
const rn = document.querySelector('#rn')
const detractors = document.querySelector('#detractors')
const passives = document.querySelector('#passives')
const totalNps = document.querySelector('#total-nps')

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

let employeeID = '1341115';

const employeeRef = db.collection('Supervisora Vanessa').doc(employeeID);

employeeRef.get().then(doc =>{

//   console.log(doc.data())
})


// Buscas

const rankingEmployees = document.querySelector('.ranking-employees')

db.collection('Supervisora Vanessa').where('nps', '>=', 75).get()
            .then(snapshot =>{
                snapshot.forEach(doc =>{
                    let employee = doc.data();
                    rankingEmployees.innerHTML += `<li>${employee.nome}</li>`
                })
            })