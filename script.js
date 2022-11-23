const mobile_menu_open = document.querySelector('#mobile_nav_button_open')
const mobile_menu_close = document.querySelector('#mobile_nav_button_close')
const nav_menu = document.querySelector('.mobile_nav_menu')
const nav_menu_overlay = document.querySelector('.mobile_nav_screen_overlay')

mobile_menu_open.addEventListener('click', () =>{
    nav_menu.classList.remove('mobile_nav_hide')
    nav_menu_overlay.classList.remove('mobile_nav_hide')
})


mobile_menu_close.addEventListener('click', () =>{
    nav_menu.classList.add('mobile_nav_hide')
    nav_menu_overlay.classList.add('mobile_nav_hide')
})
