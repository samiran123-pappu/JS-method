console.log("\n\n\n\n1------------------------------\n");
{
    const a = [0, 1, 2, 3, 4, 5, 1];
    console.log(a.indexOf(1) );
    console.log(a.lastIndexOf(1) );
}
console.log("\n\n\n\n2------------------------------\n");
{
    const a = [0,1, 2, 3, 4, 5];
    console.log(a.indexOf(5, 2) );
    console.log(a.indexOf(6, 2) );
}
console.log("\n\n\n\n3------------------------------\n");
{
    const a = [0,1, 2, 3, 4, 5, 1];
    console.log(a.lastIndexOf(1, 5) ); // last occurance
    console.log(a.indexOf(1, 5) ); // first occurance
    console.log("\n");
    console.log(a.lastIndexOf(1, -1) ); // last occurance
    console.log(a.indexOf(1, -1) ); // first occurance
}
console.log("\n\n\n\n4------------------------------\n");
{
    const a = [-4,-5, -4, -3, -2, -1];
    // const a = [0,1, 2, 3, 4, 5];

    console.log(a.lastIndexOf(-4, -1) ); // last occurance[walk from end to start if negative index]
    console.log(a.indexOf(-4, -1) ); // first occurance[alwats walk to right]
}

console.log("\n\n\n\n5------------------------------\n");

{
    const a = [0,1, 2, 3, 4, 5];
    console.log(a.includes(3) );
    console.log(a.includes(6) );
}
console.log("\n\n\n\n6------------------------------\n");

{
    const a2 = [0, 2,6, 3, 4, 5, 1];
    let b = a2.find(a)
    console.log(b)
    function a (a1){
        return a1 > 5
    }
}

console.log("\n\n\n\n7-------------------------------------\n");
{
    const a2 = [0,1, 2, 3, 4, 5, 6];
    let b = a2.findIndex(a)
    console.log(b)

    function a(value, index, array){
        if(index > 3){
            let previousValue = array[index - 1];
            console.log(`Checking index ${index}: Is ${value} > ${previousValue}?`);
            return value > previousValue;

        }
    

}


// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
}

console.log("\n\n\n\n8-------------------------------------\n");
{
    const arr = [0,1, 2, 3,4,5];
    let high = arr.findLast(x => x >= 5)
    console.log(high);
}

console.log("\n\n\n\n9-------------------------------------\n");
{
    const arr = [1, 2, 3,4,5];
    let high = arr.findLastIndex(x => x >= 5)
    let high1 = arr.findLast(x => x >= 5)
    console.log(high);
    console.log(high1);
}


console.log("\n\n\n\n10------------------------------\n");

{
    const a2 = [0,1,4, 2, 3, 5, 6];
    let b = a2.findIndex(a)
    console.log(b)
    function a (a1){
        return a1 > 3
    }
}
console.log("\n\n\n\n11------------------------------\n");

{
    let a = [-6,-5,-4,-3,-2,-1,0, 1, 2, 3,  4,  5,  6];
    // let a =         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let b = a.findIndex(a1 => a1 > 3)
    let b1 = a.findLastIndex(a1 => a1 > 3)
    console.log(b)
    console.log(b1)
    let b2 = a.findLast(a1 => a1 > 3)
    console.log(b2)
    let b3 = a.find(a1 => a1 > 3)
    console.log(b3)
    let b4 = a.includes(4)
    console.log(b4)
    let b5 = a.indexOf(0)
    console.log(b5);
    let b6 = a.lastIndexOf(0)
    console.log(b6);
    
}