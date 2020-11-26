const objFromForm =() => {

    const elements = document.forms[0].elements;
    const obj = {}
  
    for (let i = 0; i < elements.length; i++) {
      obj[elements[i].name] = elements[i].value;
    }
  
  console.log(obj);
  }

const test = () => {
    alert("ehf");
}



 // let form = document.forms[0];
    // let name = form.elements.name;
    // for (let key in name) {
    //   console.log(key)
    // }