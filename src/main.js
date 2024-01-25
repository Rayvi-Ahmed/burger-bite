const hemBurger= document.getElementById('hemBurger')
const navMenu=document.getElementById('nav-menu')
const closeMenu =document.getElementById('close-menu')


hemBurger.addEventListener('click',()=>{
    navMenu.classList.remove('hidden')

})

closeMenu.addEventListener('click',()=>{
    navMenu.classList.add('hidden')
})