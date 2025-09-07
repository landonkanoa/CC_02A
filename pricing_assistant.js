const productName = "Hawaiian Pizza"
let costPerUnit = 9.99
let basePrice = 14.99
let discountRate = 0.05
let salesTaxRate = 0.03
let fixedMonthlyCost = 500

let discountPrice = basePrice * (1 - discountRate).toFixed(2)
let finalPriceWithTax = discountPrice * (1 + salesTaxRate)
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil(fixedMonthlyCost / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0

console.log("Product Name is " + productName)
console.log("Discount Price = " + discountPrice.toFixed(2))
console.log("Final Price With Tax = " + finalPriceWithTax.toFixed(2))
console.log("Profit Per Unit = " + profitPerUnit.toFixed(2))
console.log("Break Even Units is " + breakEvenUnits)
console.log("Profit Per Unit = " + isProfitablePerUnit)