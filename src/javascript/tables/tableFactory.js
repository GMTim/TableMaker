import { Table } from "./table.js"
import { TableItem } from "./tableItem.js"

export const Factory = {
    create: (options) => {
        return new Table(options.sides, PrivateFactory.ranges(options))
    }
}
const PrivateFactory = {
    weights: (options) => {
        let total = options.weights.reduce((a, b) => { return parseInt(a) + parseInt(b) }, 0)
        let value = Math.floor(options.sides / total)
        let leftover = options.sides - (value * total)
        return {value: value, leftover: leftover}
    },
    append: (leftover, weights) => {
        if (leftover == 0) { return weights }
        var appenedWeights = []
        let base = Math.floor(leftover / weights.length)
        var calculatedLeftover = leftover - (base * weights.length)
        for (var weight of weights) {
            weight += base
            if (calculatedLeftover <= weights.length && calculatedLeftover > 0) {
                weight += 1
                calculatedLeftover -= 1
            }
            appenedWeights.push(weight)
        }
        if (calculatedLeftover > weights.length) { appenedWeights = PrivateFactory.append(calculatedLeftover, appenedWeights) }
        return appenedWeights
    },
    totals: (options) => {
        let calculatedWeight = PrivateFactory.weights(options)
        var weights = []
        for (let weight of options.weights) {
            weights.push(weight * calculatedWeight.value)
        }
        weights = PrivateFactory.append(calculatedWeight.leftover, weights)
        return weights
    },
    ranges: (options) => {
        let totals = PrivateFactory.totals(options)
        var items = []
        var lower = 0
        for (let total of totals) {
            var upper = lower + total
            items.push(new TableItem(lower + 1, upper))
            lower = upper
        }
        return items
    }
}

export class FactoryOptions {
    constructor(sides, weights) {
        this.sides = sides
        this.weights = weights
    }
}