const forms:HTMLCollectionOf<HTMLFormElement> = document.forms;

document.onload = (function(): void {
  for (let i: number=0; i < forms.length; i++) {
    forms[i].addEventListener("submit", (e) => {
      e.preventDefault();
      objFromForm(forms[i])
    })
  }
})()

function objFromForm(form:HTMLFormElement): void {
  const elements: FormData = new FormData(form);
      const obj: {} = {}
      for (let pair of elements.entries()) {
        obj[pair[0]] = pair[1]
      }
    console.log(obj);
}