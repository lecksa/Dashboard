let dialog = document.querySelector('dialog')
let open = document.querySelector('.text button')
let close = document.querySelector('.close')

open.onclick = () => {
    dialog.showModal()
}

close.onclick = () => {
    dialog.close()
}

let form = document.forms
let new_add = document.querySelector('#first')
let tbody = document.querySelector('tbody')
let lists = []

let title_inp = document.querySelector('.title')
let description_inp = document.querySelector('.description')
let date_inp = document.querySelector('.date')
let time_inp = document.querySelector('.time')
let type_inp = document.querySelector('.type')

new_add.onclick = () => {

    if (title_inp.value.trim() !== '' && description_inp.value.trim() !== '' && time_inp.value.trim() !== '' && date_inp.value.trim() !== '' && type_inp.value.trim() === "выполнено" || type_inp.value.trim() === "не выполнено" || type_inp.value.trim() === "в прогрессе") {
        let inputs = {
            title: title_inp.value.trim(),
            description: description_inp.value.trim(),
            date: date_inp.value.trim(),
            time: time_inp.value.trim(),
            type: type_inp.value.trim()
        }

        lists.push(inputs)
        console.log(lists);
        reload(lists, tbody)
        
        title_inp.value = ""
        description_inp.value = ""
        date_inp.value = ""
        time_inp.value = ""
        type_inp.value = ""
    } else {
        alert('Заполни всё')
    }

}


function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let tr = document.createElement('tr')
        let title = document.createElement('td')
        let description = document.createElement('td')
        let date = document.createElement('td')
        let time = document.createElement('td')
        let type = document.createElement('td')

        title.innerHTML = item.title
        description.innerHTML = item.description
        date.innerHTML = item.date
        time.innerHTML = item.time
        type.innerHTML = item.type

        place.append(tr)
        tr.append(title, description, date, time, type)
    }
}