// Implement your vending machine here!

import process from 'node:process'

let arg = null
let cost = null
let payment = null


// provides cost and payment
while((arg = process.argv.shift()) != null) {
  if(arg == '--item-cost') {
    const costInput = process.argv.shift()
    cost = Math.floor(Number(costInput || '0') * 100)
  } else if(arg == '--payment') {
    const paymentInput = process.argv.shift()
    payment = Math.floor(Number(paymentInput || '0') * 100)
  }
}

console.error('--item-cost', cost)
console.error('--payment', payment)

if (payment !== null && cost !== null) {
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
  let changeBack = Math.floor(Number(payment - cost));

  while (changeBack >= 25) {
    changeBack -= 25;
    quarter++;
  }
  while (changeBack >= 10) {
    changeBack -= 10;
    dime++;
  } 
  while (changeBack >= 5) {
    changeBack -= 5;
    nickel++;
  }
  while (changeBack >= 1) {
    changeBack -= 1;
    penny++;
  }
  console.log(`Quarters: ${quarter}`);
  console.log(`Dimes: ${dime}`);
  console.log(`Nickels: ${nickel}`);
  console.log(`Penny: ${penny}`)
}

// Narrow cost to a number.
if(cost == null) {
  console.error('--item-cost is required but not provided. Exiting.')
  process.exit(1)
}
if(payment == null) {
  console.error('--payment is required but not provided. Exiting.')
  process.exit(2)
}
