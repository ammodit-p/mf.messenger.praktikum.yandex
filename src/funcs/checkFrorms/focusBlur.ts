export function focusBlur (inputs: any): void {
    console.log(inputs)
    for (let item of inputs) {
        item.addEventListener('blur', ()=> {
            if(!item.value) {
                item.classList.add("blue-input-invalid")
            }
        })
        item.addEventListener('focus', ()=> {
            item.classList.remove("blue-input-invalid")
        } )
    }
};