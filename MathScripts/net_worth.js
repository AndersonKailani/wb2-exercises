"use strict"
// asset and debt variables
var assets = Math.random() * 100000;
var debts = Math.random() * 100000;
// calculations
var netWorth = assets - debts;
// output
console.log("Your net worth is " + netWorth);