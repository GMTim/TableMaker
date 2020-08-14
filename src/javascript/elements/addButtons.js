const domAddButtons = $(".row-add-btn")

export const load = (callback) => {
    domAddButtons.click((event) => {
        event.preventDefault()
        let value = event.target.getAttribute("value")
        callback(value)
    })
}