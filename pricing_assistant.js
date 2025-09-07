const productName = "Hawaiian Pizza"
let costPerUnit = 9.99
let basePrice = 14.99
let discountRate = 0.05
let salesTaxRate = 0.03
let fixedMonthlyCost = 500

let discountPrice = basePrice * (1 - discountRate).toFixed(2)
let dP = discountPrice.toFixed(2)
let finalPriceWithTax = discountPrice * (1 + salesTaxRate)
let fPWT = finalPriceWithTax.toFixed(2)
let profitPerUnit = finalPriceWithTax - costPerUnit
let pPU = profitPerUnit.toFixed(2)
let breakEvenUnits = Math.ceil(fixedMonthlyCost / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0

console.log(productName)
console.log(dP)
console.log(fPWT)
console.log(pPU)
console.log(breakEvenUnits)
console.log(isProfitablePerUnit)