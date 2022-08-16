import { main,menuColor } from "./form.js";

console.log(main);

main.addEventListener('mouseover',function(){
  menuColor.forEach(function(element){
    element.style.color = "#fff";
  });
  menuColor[2].style.color = "#FDE6B6";
});

const link = 'exhibition-sub.html';
const posterlink = Array.from(document.getElementsByClassName('posterlink'));

for(let i = 0; i < posterlink.length; i++){
posterlink[i].addEventListener('click',function(){
  location.href = link;
});
}