import {db} from './index.js'

db.collection('Supervisora Vanessa').get()
        .then(snapshot =>{
            snapshot.forEach(doc =>{
                console.log(doc.data())
            })
        })