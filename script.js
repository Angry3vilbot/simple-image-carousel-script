// Container with navigation items (not related to the carousel)
const navdiv = document.getElementById('navdiv')
// Navigation items (not related to the carousel)
const pees = navdiv.querySelectorAll('p')
// All "next" buttons on the carousel
const nextBtns = document.querySelectorAll('.right')
// All "previous" buttons on the carousel
const prevBtns = document.querySelectorAll('.left')
// The "next" button on the first image carousel
const nextBtnSingle = document.querySelector('.right-single')
// The "previous" button on the last image carousel
const prevBtnSingle = document.querySelector('.left-single')
// Container with the navigation "dots"
const navdotContainer = document.querySelector('#nav-dots')

// auto-scroll timer
let autoScrollTimer = setInterval(autoScroll, 5000)

//function for the header navigation buttons (not related to the carousel)
function select(){
    let prevsel = navdiv.querySelector('.active')
    prevsel.classList.remove('active')
    this.classList.add('active')
}
//function for the "next" buttons
function nextImage(){
    let id = null
    let parent = this.parentNode
    let image = parent.querySelector('img')
    clearInterval(id)
    id = setInterval(opacity, 10)
    function opacity(){
        if (image.style.opacity == 0){
            clearInterval(id)
            parent.classList.remove('visible')
            image.style.opacity = 1
            let nextImg = parent.nextElementSibling
            nextImg.classList.add('visible')
            dotCheckForward(image)
        }
        else{
            image.style.opacity -= 0.1
        }
    }
}
//function for the "back" buttons
function previousImage(){
    let id = null
    let parent = this.parentNode
    let image = parent.querySelector('img')
    clearInterval(id)
    id = setInterval(opacity, 10)
    function opacity(){
        if (image.style.opacity == 0){
            clearInterval(id)
            parent.classList.remove('visible')
            image.style.opacity = 1
            let prevImg = parent.previousElementSibling
            prevImg.classList.add('visible')
            dotCheckBackward(image)
        }
        else{
            image.style.opacity -= 0.1
        }
    }
}
//function for changing style of the dot navigation buttons when moving forward
function dotCheckForward(img){
    switch(img.src){
        case 'file:///C:/Users/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/image1.jpg':{
            let currentActiveDot = document.querySelector('.active-dot')
            currentActiveDot.classList.remove('active-dot')
            document.getElementById('dot2').classList.add('active-dot')
            break
        }
        case 'file:///C:/Users/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/image2.jpg':{
            let currentActiveDot = document.querySelector('.active-dot')
            currentActiveDot.classList.remove('active-dot')
            document.getElementById('dot3').classList.add('active-dot')
            break
        }
        case 'file:///C:/Users/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/image3.jpg':{
            let currentActiveDot = document.querySelector('.active-dot')
            currentActiveDot.classList.remove('active-dot')
            document.getElementById('dot4').classList.add('active-dot')
            break
        }
        default:{
            console.log('err')
        }
    }
}
//function for changing style of the dot navigation buttons when moving backwards
function dotCheckBackward(img){
    switch(img.src){
        case 'file:///C:/Users/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/image2.jpg':{
            let currentActiveDot = document.querySelector('.active-dot')
            currentActiveDot.classList.remove('active-dot')
            document.getElementById('dot1').classList.add('active-dot')
            break
        }
        case 'file:///C:/Users/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/image3.jpg':{
            let currentActiveDot = document.querySelector('.active-dot')
            currentActiveDot.classList.remove('active-dot')
            document.getElementById('dot2').classList.add('active-dot')
            break
        }
        case 'file:///C:/Users/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/image4.jpg':{
            let currentActiveDot = document.querySelector('.active-dot')
            currentActiveDot.classList.remove('active-dot')
            document.getElementById('dot3').classList.add('active-dot')
            break
        }
        default:{
            console.log('err')
        }
    }
}
//function for switching images using the dot navigation
function dotSwitch(){
    let currentImageContainer = document.querySelector('.visible')
    let currentImage = currentImageContainer.querySelector('img')
    let currentDot = document.querySelector('.active-dot')
    if(this.classList.contains('active') != true){
        switch(this.id){
            case 'dot1':{
                currentImageContainer.classList.remove('visible')
                let slide = document.getElementById('slide1')
                slide.classList.add('visible')
                currentDot.classList.remove('active-dot')
                this.classList.add('active-dot')
                break}
            case 'dot2':{
                currentImageContainer.classList.remove('visible')
                let slide = document.getElementById('slide2')
                slide.classList.add('visible')
                currentDot.classList.remove('active-dot')
                this.classList.add('active-dot')
                break}
            case 'dot3':{
                currentImageContainer.classList.remove('visible')
                let slide = document.getElementById('slide3')
                slide.classList.add('visible')
                currentDot.classList.remove('active-dot')
                this.classList.add('active-dot')
                break}
            case 'dot4':{
                currentImageContainer.classList.remove('visible')
                let slide = document.getElementById('slide4')
                slide.classList.add('visible')
                currentDot.classList.remove('active-dot')
                this.classList.add('active-dot')
                break}
        }   
    }
}
//function for the auto-scrolling
function autoScroll(){
    let currentActiveSlide = document.querySelector('.visible')
    let currentActiveDot = document.querySelector('.active-dot')
    switch(currentActiveSlide.id){
        case 'slide1':
            currentActiveSlide.classList.remove('visible')
            currentActiveDot.classList.remove('active-dot')
            document.querySelector('#slide2').classList.add('visible')
            document.querySelector('#dot2').classList.add('active-dot')
            break
        case 'slide2':
            currentActiveSlide.classList.remove('visible')
            currentActiveDot.classList.remove('active-dot')
            document.querySelector('#slide3').classList.add('visible')
            document.querySelector('#dot3').classList.add('active-dot')
            break
        case 'slide3':
            currentActiveSlide.classList.remove('visible')
            currentActiveDot.classList.remove('active-dot')
            document.querySelector('#slide4').classList.add('visible')
            document.querySelector('#dot4').classList.add('active-dot')
            break
        case 'slide4':
            currentActiveSlide.classList.remove('visible')
            currentActiveDot.classList.remove('active-dot')
            document.querySelector('#slide1').classList.add('visible')
            document.querySelector('#dot1').classList.add('active-dot')
            break
    }
}
//event listeners for the navigation (not related to the carousel)
pees.forEach(element => {
    element.addEventListener('click', select)
})
//"next" button event listener for the first image
nextBtnSingle.addEventListener('click', nextImage)
//"next" button event listener for the rest of the images
nextBtns.forEach(element => {
    element.addEventListener('click', nextImage)
})
//"previous" button event listener for the last image
prevBtnSingle.addEventListener('click', previousImage)
//"previous" button event listener for the rest of the images
prevBtns.forEach(element => {
    element.addEventListener('click', previousImage)
})
//event listener for the dot navigation
navdotContainer.querySelectorAll('button').forEach(element => {
    element.addEventListener('click', dotSwitch)
})