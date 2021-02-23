export function checkEmptyForm (inputs: any): void {
    for (let item of inputs) {
        if (item.type !== "submit" && !item.value) {
             
            item.classList.add("invalid");
        }

    }

}