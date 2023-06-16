let shapes = document.getElementsByClassName("shape");

console.log(shapes);
console.log(shapes.length);
for (let element of shapes) {
  console.log("bucle for");
  element.addEventListener("click", (ev) => {
    console.log(ev.target);
  });
}
