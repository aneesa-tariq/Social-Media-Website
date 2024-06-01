// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

//message
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
//fonts
let fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1=document.querySelector('.bg-1');
const bg2=document.querySelector('.bg-2');
const bg3=document.querySelector('.bg-3');

//remove  active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notfications-popup').style.display = 'none';
        } else {
            document.querySelector('.notfications-popup').style.display = 'block';
            document.querySelector('#notifications .notfication-count').style.display = 'none';

        }
    })
})

// Messages
//searches chat 
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}
//search chat
messageSearch.addEventListener('keyup', searchMessage);

//Highlight messages card when when messages menu item is clicked. 
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem blue';
    messageNotification.querySelector('.notfication-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


//theme customization
//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
//close modal
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

//remove active class from spans or font size selectors
const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}
 

// Fonts
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }
        //change font size of the html root element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

//change primary colors
colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }else if(color.classList.contains('color-4')){
            primaryHue=152;
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})


//thehem background values
let lightColorBrightness;
let darkColorBrightness;
let whiteColorBrightness;
const changeBG=()=>{
root.style.setProperty('--light-color-lightness',lightColorBrightness);
root.style.setProperty('--dark-color-lightness',darkColorBrightness);
root.style.setProperty('--white-color-lightness',whiteColorBrightness);
}
bg1.addEventListener('click',()=>{
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
   window.location.reload();
})
bg2.addEventListener('click',()=>{
    darkColorBrightness='95%';
    whiteColorBrightness='20%';
    lightColorBrightness='10%';
    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})
bg3.addEventListener('click',()=>{
    darkColorBrightness='95%';
    whiteColorBrightness='10%';
    lightColorBrightness='0%';
    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})
