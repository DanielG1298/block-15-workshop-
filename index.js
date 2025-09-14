// prompt user to eneter froyo flavors upon loading the page
    let input = prompt("enter flavor");
    let array = input.split(',');
    let flavorTotal ={}
;
// count froyo flavors 
for (let i = 0; i < array.length; i++) {
    let flavor = array[i];
    if (flavorTotal.hasOwnProperty(flavor)){
        flavorTotal[flavor] += 1;}
    else{
            flavorTotal[flavor] = 1;
        }

        
    }
   
console.log(flavorTotal);

 function printFlavorReport(flavorTotal){
    for (let flavor in flavorTotal){
        console.log(`${flavor}: ${flavorTotal[flavor]}`);
    }
 }
printFlavorReport(flavorTotal);