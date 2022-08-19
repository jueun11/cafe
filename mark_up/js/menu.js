import { main,menuColor } from "./form-basic.js";

console.log(main);

main.addEventListener('mouseover',function(){
  menuColor.forEach(function(element){
    element.style.color = "#fff";
  });
  menuColor[1].style.color = "#FDE6B6";
  menuColor[1].style.borderBottom = "3px solid";
  menuColor[1].style.borderImageLice = "1";
});

console.log(menu);

const menuimg = Array.from(document.getElementsByClassName('menu'));
const menulink = 'menu-coffee.html';
for(let i = 0; i< menuimg.length; i++){
  menuimg[i].addEventListener('click',function(){
    console.log('클릭');
    location.href = menulink;
  });
}