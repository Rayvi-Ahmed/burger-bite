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
const all = document.querySelectorAll('all')
const food = document.querySelectorAll('food')
const snack = document.querySelectorAll('snack')
const bevarage = document.querySelectorAll('bevarage')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{

    tabs.forEach(tab=>{
        tab.classList.remove('active')
    })

    tab.classList.add('active')

    all.forEach(item=>{
        item.style.display='none'
    })

    const tabval =tab.getAttribute('data-tabs')
    

    if(tabval=== "food"){
        food.forEach(item=>{
            item.style.display="block"
        })
        
    }else if(tabval==='snack'){
        snack.forEach(item=>{
            item.style.display="block"
        })

        }
        else if(tabval=== 'bevarage'){
            bevarage.forEach(item=>{
                item.style.display='block'
            })

    }else{
        all.forEach(item=>{
            item.style.display='block'
        })
    }
    
    })

})