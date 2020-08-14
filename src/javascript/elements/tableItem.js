var tableItem

export const load = () => {
    tableItem = $("#tableItem")
    $(tableItem).remove()
    $(tableItem).removeAttr("id")
}

export class TableItem {
    constructor(item) {
        this.element = item || $(tableItem).clone()
    }
    get cells() {
        return $(this.element).find("td")
    }
    setLower(value) {
        this.cells.first().text(value)
    }
    setUpper(value) {
        this.cells.last().text(value)
    }
}