const forms = document.forms;

document.onload = (function () {
  for (let i=0; i < forms.length; i++) {
    forms[i].addEventListener("submit", (e) => {
      e.preventDefault();
      objFromForm(forms[i])
    })
  }
})()

function objFromForm(form) {
  const elements = new FormData(form);
      const obj = {}
      for (let pair of elements.entries()) {
        obj[pair[0]] = pair[1]
      }
    console.log(obj);
}