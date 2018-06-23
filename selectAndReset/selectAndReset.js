let selectButtons= document.getElementsByClassName("pickButton");
let resetButton= document.getElementById("resetButton");
let selectAndBuild = []

function NumberLetterResetButtons() {

  selectAndBuild.push(this)

  // Number and letter buttons buttons change background colour and colour
  if (this.style.backgroundColor === "" && selectAndBuild.length !== 0
  ) {
    this.style.backgroundColor="green"
    this.style.color="white"

  } else {
    this.style.backgroundColor=""
    this.style.color=""
  }

  // Reset button changes from 'disabled' to 'enable' and 'vice-versa'
  if ((selectAndBuild.length > 1) && (this.style.backgroundColor !== '') ) {
    resetButton.disabled = false
    resetButton.style.backgroundColor="red"
    resetButton.style.color="white"
  } else {
    resetButton.disabled = true
    resetButton.style.backgroundColor=""
    resetButton.style.color=""
  }

  //On 'click', reset button turns disabled and resets the reseted colour and build buttons
  resetButton.addEventListener('click', function() {
    resetButton.disabled = true
    resetButton.style.backgroundColor=""
    resetButton.style.color=""
    selectAndBuild.map(button=> button.style.backgroundColor = '')
    selectAndBuild.map(button=> button.style.color = '')
    selectAndBuild=[]
  })
}

for (let i = 0; i < selectButtons.length; i++) {
  selectButtons[i].addEventListener("click", NumberLetterResetButtons)
}
