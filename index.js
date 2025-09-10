// prompt user to eneter froyo flavors upon loading the page
window.onload = function() {
    let input = prompt("enter flavor");
    let array = input.split(',');
    let flavorTotal = {
    "coffee": 0,
    "vanilla": 0,
    "strawberry": 0,
};
// count froyo flavors 
for (let i = 0; i < array.length; i++) {
    let flavor = array[i];
    if (flavorTotal.hasOwnProperty(flavor)){
        flavorTotal[flavor] += 1;
        console.log(flavorTotal);
    }
}   
console.log(flavorTotal);
}
 function printFlavorReport(flavorTotal){
    for (let flavor in flavorTotal){
        console.log(`$flavor: ${flavorTotal[flavor]}`);
    }
 }
