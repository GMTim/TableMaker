const domElement = $("#weights")
const domList = domElement.find("#itemList")
const domSelects = () => { return $(".row-weight") }

export const Weight = {
    element: domElement,
    list: domList,
    get isShowing() {
        return domElement.hasClass("hidden") == false
    },
    show: () => {
        domElement.removeClass("hidden")
    },
    hide: () => {
        domElement.addClass("hidden")
    },
    add: (item) => {
        domList.append(item.element)
        if (Weight.isShowing == false) { Weight.show() }
    },
    clear: () => {
        domList.children().remove()
        Weight.hide()
    },
    get allWeights() {
        var weights = []
        for (let item of domSelects()) {
            weights.push($(item).val())
        }
        return weights
    }
}