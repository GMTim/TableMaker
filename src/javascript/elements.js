import { Weight } from "./elements/weight.js"
import { WeightItem, load as weightItemLoad } from "./elements/weightItem.js"
import { load as addButtonsLoad } from "./elements/addButtons.js"
import { load as itemButtonsLoad } from "./elements/itemButtons.js"
import { TableItem, load as tableLoad } from "./elements/tableItem.js"
import { Table } from "./elements/table.js"
import { Factory, FactoryOptions } from "./tables/tableFactory.js"

const sidesSelector = $("#numberOfSides")

export const load = () => {
    weightItemLoad()
    tableLoad()
    addButtonsLoad((amount) => {
        for (var i = 0; i < amount; i++) {
            let item = new WeightItem()
            Weight.add(item)
        }
    })
    itemButtonsLoad(() => {
        Table.clear()
        let options = new FactoryOptions(sidesSelector.val(), Weight.allWeights)
        let table = Factory.create(options)
        for (let item of table.items) {
            let row = new TableItem()
            row.setLower(item.lower)
            row.setUpper(item.upper)
            Table.add(row)
        }
    }, () => {
        Weight.clear()
        Table.clear()
    })
}

export { Weight, WeightItem }