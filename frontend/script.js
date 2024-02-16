let dialog = document.querySelector('dialog')
let open = document.querySelector('.text button')
let close = document.querySelector('.close')

open.onclick = () => {
    dialog.showModal()
}

close.onclick = () => {
    dialog.close()
}