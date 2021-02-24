function objFromForm(elements: FormData): {} {
        const obj: {[index: string]:any} = {}
        for (let pair of elements.entries()) {
            obj[pair[0]] = pair[1]
        }
        return obj;
    }

    export default objFromForm;