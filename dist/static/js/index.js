let form = document.forms[0];
    form.onsubmit = function(evt) {
   evt.preventDefault();
    objFromForm();
}

function objFromForm() {
    const elements = document.forms[0].elements;
    const obj = {}  
    for (let i = 0; i < elements.length; i++) {
      obj[elements[i].name] = elements[i].value;
    } 
    console.log(obj);
  }