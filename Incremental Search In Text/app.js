const textElement = document.querySelector("p");
const mainText = textElement.innerText;

function Search() {
  const searchValue = document.querySelector("input").value;
  textElement.innerHTML = mainText.replace(
    new RegExp(searchValue, "g"),
    `<span style='background-color: yellow;'>${searchValue}</span>`
  );
}
