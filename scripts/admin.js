const tab = document.querySelector('#admin-page')
const tabButton = document.querySelectorAll('.tab-button')
const tabContent = document.querySelectorAll('.tab-content')

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
