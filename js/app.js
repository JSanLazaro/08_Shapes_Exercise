let shapes = document.getElementsByClassName("shape");

for (let element of shapes) {
  console.log("bucle for");
  element.addEventListener("click", (ev) => {
    ev.target.style['visibility'] = 'hidden';
  });
}

document.getElementById('btn_reset').addEventListener("click",(ev)=>{
  let shapes = document.querySelectorAll('.shape');
  shapes.forEach((element,index, array) => {
    element.style['visibility'] = 'visible'    
  });
})