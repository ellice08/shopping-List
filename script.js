var input = document.getElementById("userinput");
var button = document.getElementById("yoo");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  console.log(input.value);
  ul.appendChild(li);
  input.value = "";
}
function addAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

input.addEventListener("keypress", addAfterKeypress);
button.addEventListener("click", addAfterClick);
