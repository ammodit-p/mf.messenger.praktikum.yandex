const forms = document.forms;

document.onload = (function () {
  for (let i=0; i < forms.length; i++) {
    forms[i].addEventListener("submit", (e) => {
      e.preventDefault();
      const elements = forms[i].elements;
      const obj = {}
      for (let j=0; j < elements.length; j++) {
      obj[elements[j].name]=elements[j].value;
    } 
    console.log(obj);
    })
  }
})()