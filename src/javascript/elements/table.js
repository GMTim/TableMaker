const domTable = $("#results")
const domTableBody = domTable.find("tbody")

export const Table = {
    get isShown() { return domTable.hasClass("hidden") == false },
    show: () => {
        domTable.removeClass("hidden")
    },
    hide: () => {
        domTable.addClass("hidden")
    },
    add: (item) => {
        domTableBody.append(item.element)
        if (Table.isShown == false) { Table.show() }
    },
    clear: () => {
        domTableBody.children().remove()
        Table.hide()
    }
}