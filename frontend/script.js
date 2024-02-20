let dialog = document.querySelector('dialog')
let open = document.querySelector('.text button')
let close = document.querySelector('.close')

let wrap = document.querySelector('.wrap .wrap')

let ps = document.querySelectorAll('.text_2 p')
let tablisa = document.querySelector('.tablisa')

let new_add = document.querySelector('#first')
let lists = []

let title_inp = document.querySelector('.title')
let description_inp = document.querySelector('.description')
let date_inp = document.querySelector('.date')
let time_inp = document.querySelector('.time')
let type_inp = document.querySelector('.type')

let selected_text = ''

type_inp.onclick = () => {
    select()
}

function select() {
    let selected = type_inp.options[type_inp.selectedIndex]
    selected_text = selected.innerHTML
}


open.onclick = () => {
    dialog.showModal()
}

close.onclick = () => {
    dialog.close()
}

new_add.onclick = () => {

    if (title_inp.value.trim() !== '' && description_inp.value.trim() !== '' && time_inp.value.trim() !== '' && date_inp.value.trim() !== '') {

        let inputs = {
            title: title_inp.value.trim(),
            description: description_inp.value.trim(),
            date: date_inp.value.trim(),
            time: time_inp.value.trim(),
            type: selected_text,
            status: false
        }
        console.log(inputs.type);

        lists.push(inputs)

        if (tablisa.classList.contains('active_p')) {
            reload(lists, wrap)
        } else {
            reload_plitka(lists, wrap)
        }


    } else {
        alert('Заполни всё')
    }
    
    title_inp.value = ""
    description_inp.value = ""
    date_inp.value = ""
    time_inp.value = ""

}

ps.forEach(p => {
    p.onclick = () => {
        ps.forEach(p => {
            p.classList.remove('active_p')
            p.classList.add('not_act_p')
        })
        p.classList.remove('not_act_p')
        p.classList.add('active_p')
    }
})

function reload(arr, body) {
    body.innerHTML = ""

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tr_th = document.createElement('tr')
    let title_th = document.createElement('th')
    let description_th = document.createElement('th')
    let date_th = document.createElement('th')
    let time_th = document.createElement('th')
    let type_th = document.createElement('th')
    let tbody = document.createElement('tbody')

    title_th.innerHTML = "Заголовок задачи"
    description_th.innerHTML = "Описание задачи"
    date_th.innerHTML = "Дата"
    time_th.innerHTML = "Время"
    type_th.innerHTML = "Выполнено"
    table.classList.add('table')

    body.append(table)
    table.append(thead, tbody)
    thead.append(tr_th)
    tr_th.append(title_th, description_th, date_th, time_th, type_th)

    for (let item of arr) {
        let tr_td = document.createElement('tr')
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

        item.status = false

        table.append(tr_td)
        tr_td.append(title, description, date, time, type)

        if (type.innerHTML === "в прогрессе") {
            type.classList.add('blue_td')
        } else if (type.innerHTML === "не выполнено") {
            type.classList.add('red_td')
        }



        console.log(arr);
    }
}

function reload_plitka(arr, body) {
    body.innerHTML = ""

    let plit = document.createElement('div')

    plit.classList.add('plit')

    body.append(plit)

    for (let item of arr) {
        let box = document.createElement('div')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let time_date = document.createElement('div')
        let date = document.createElement('span')
        let time = document.createElement('span')
        let h3 = document.createElement('h3')

        box.classList.add('box')
        time_date.classList.add('time_date')

        h1.innerHTML = item.title
        p.innerHTML = item.description
        date.innerHTML = item.date
        time.innerHTML = item.time
        h3.innerHTML = item.type

        item.status = true

        plit.append(box)
        box.append(h1, p, time_date, h3)
        time_date.append(date, time)

        if (h3.innerHTML === "в прогрессе") {
            h3.classList.add('blue_td')
        } else if (h3.innerHTML === "не выполнено") {
            h3.classList.add('red_td')
        }

        if (tablisa.classList.contains('active_p')) {
            plit.remove()
            reload(lists, wrap)
        }
        console.log(arr);

    }
}