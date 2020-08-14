import * as Table from "./tables/tableFactory.js"

$(function() {
    let options = new Table.FactoryOptions(100, [1, 1, 1, 1, 1, 1])
    let value = Table.Factory.create(options)
    console.log(JSON.stringify(value))
})