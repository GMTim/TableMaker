var element
export const load = () => {
    element = $("#rowItem")
    element.remove()
    element.removeAttr("id")
}

export class WeightItem {
    constructor(item) {
        this.element = item || element.clone()
    }
    get option() {
        return $(this.element).find("select").first()
    }
    get value() {
        return this.option.val()
    }
}