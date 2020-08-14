const generateButton = $("#generateBtn")
const clearButton = $("#clearButton")

export const load = (generatePressed, clearPressed) => {
    generateButton.click((event) => {
        event.preventDefault()
        generatePressed()
    })
    clearButton.click((event) => {
        event.preventDefault()
        clearPressed()
    })
} 