let hidden = true
let text = document.getElementById('button')
console.log("hi Joe");
const toggle = () => hidden = !hidden
text.preventDefault()

text.addEventListener("click", () => {
  text.style.display = `#{hidden ? 'none' : 'block'}`
})