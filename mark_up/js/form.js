const menu = Array.from(document.querySelectorAll('#menu >li>h2')); 
const menuover = document.querySelector('header');
const menuSub = document.getElementsByClassName('menu_sub');
console.log(menuover);
const menuBg = document.getElementById('menuBg');

const menuSubli = Array.from(document.querySelectorAll('.menu_sub > li'));
const header = document.querySelector('header');

let BGheightValue = 0;
let LIheightValue = 0;

function fadeInBG (event){
  console.log('메뉴위에 마우스 올림');
  event.stopPropagation();
  event.stopImmediatePropagation();
  event.preventDefault();
    menuBg.style.display = "flex";
    for(let i = 0; i < menuSubli.length; i++){
      menuSubli[i].style.display = "block";
      let fadeInBG = setInterval(function(){
      menuBg.style.height = BGheightValue + "vh";
        if(BGheightValue < 30 ){
          BGheightValue = BGheightValue + 0.01;
        }
        else {
          BGheightValue = 30;
          clearInterval(fadeInBG);
        }
      },0.1);
    }
}
function fadeOutBG (event){
  event.stopPropagation();
  event.stopImmediatePropagation();
  event.preventDefault();

  console.log("밖으로");
  let fadeOutBG = setInterval(function(){
    menuBg.style.height = BGheightValue + "vh";
      if(BGheightValue > 1 ){
        BGheightValue = BGheightValue - 0.5;
      }
      else {
        BGheightValue = 0;
        clearInterval(fadeOutBG);
      }
    },0.1);
    // for(let i =0; i< menu.length; i++){
    //   // menu[i].removeaddEventListener('mouseover', fadeInBG);
    //   menu[i].removeEventListener('mouseover',fadeInBG);
    // }
}

// menuSubli[i].style.height = LIheightValue + "vh";
for(let i =0; i< menu.length; i++){
  menu[i].addEventListener('mouseover', fadeInBG);
  
}
  const main = document.querySelector('main');
  main.addEventListener('mouseover', fadeOutBG);