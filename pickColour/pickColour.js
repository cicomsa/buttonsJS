let colourButtons= document.getElementsByClassName("pickButton");
let pickCl = document.getElementById('pickCl')

// Get Colour
function pickColour() {
  if (this.style.border === "") {
    this.style.border="1px solid #0000FF"
    pickCl.innerHTML = 'PICKED COLOUR: ' + this.value
  } else {
    this.style.border=""
    pickCl.innerHTML = 'REMOVED COLOUR: ' + this.value
  }
}

for (let i = 0; i < colourButtons.length; i++) {
  colourButtons[i].addEventListener("click", pickColour)
}
