import { main,menuColor } from "./form.js";

console.log(main);

main.addEventListener('mouseover',function(){
  menuColor.forEach(function(element){
    element.style.color = "#fff";
  });
  menuColor[0].style.color = "#FDE6B6";
  menuColor[0].style.borderBottom = "3px solid";
  menuColor[0].style.borderImageLice = "1";
});