const hemBurger= document.getElementById('hemBurger')
const navMenu=document.getElementById('nav-menu')
const closeMenu =document.getElementById('close-menu')


hemBurger.addEventListener('click',()=>{
    navMenu.classList.remove('hidden')

})

closeMenu.addEventListener('click',()=>{
    navMenu.classList.add('hidden')
})


// Tab//
const tabs= document.querySelectorAll('.tebs_Item ul li')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{

    tabs.forEach(tab=>{
        tab.classList.remove('active')
    })

    tab.classList.add('active')
      
    })

})