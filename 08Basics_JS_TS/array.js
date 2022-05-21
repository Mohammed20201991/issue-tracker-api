// console.log(45)
//  usually use const instead of let
const numbers =[22,45,-44,-6,0];
function filter (arr, fn){
    const result = [];
    for (const e of arr)
    {   if(fn(e)) {
        result.push(e);
                     }
    }
    return result;
}
// console.log(filter(numbers, function(e){
//     return e < 0;
// }) );
//  Transform from normal function to syntax .....
console.log(filter(numbers , e => e <0 ));

// we can use built in filter method (or mapping finding ,deciding )
console.log(numbers.filter(e => e <0 ).map(e => Math.abs(e)));


// consider fun as smart object   so we can return fun from fun
// check doc mdn for arrays
