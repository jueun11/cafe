import { main,menuColor } from "./form.js";

console.log(main);

main.addEventListener('mouseover',function(){
  menuColor.forEach(function(element){
    element.style.color = "#fff";
  });
  menuColor[4].style.color = "#FDE6B6";
  menuColor[4].style.borderBottom = "3px solid";
  menuColor[4].style.borderImageLice = "1";
});