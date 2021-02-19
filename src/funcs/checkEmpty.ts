export function checkEmptyForm (inputs: any): boolean {
    for (let item of inputs) {
        if (item.type !== "submit" && !item.value) {
             
            item.classList.add("blue-input-invalid");
            return true
        }

    }

    return false
}