// const form = document[0].forms;
//     form.onsubmit=function(evt) {
//    evt.preventDefault();
//     objFromForm();
// }

// function objFromForm() {
//     const elements=document.forms[0].elements;
//     const obj={}  
//     for (let i=0; i < elements.length; i++) {
//       obj[elements[i].name]=elements[i].value;
//     } 
//     console.log(obj);
//   }

const form = document.forms;
function objFromForm(e) {
  e.preventDefault();

  form.forEach(element => {
    const obj={}  
    for (let i=0; i < elements.length; i++) {
      obj[elements[i].name]=elements[i].value;
    } 
    console.log(obj);
  });
}

form.addEventListener('onsubmit', objFromForm)