export function checkEmptyForm (inputs: HTMLInputElement[]): void {
    for (let item of inputs) {
        if (item.type !== 'submit' && !item.value) {

            item.classList.add('invalid');
        }
    }
}
