{

let a = String;
let a1 = String.constructor;


console.log("1typeof a", typeof a);
console.log("1 a",  a);
console.log("1 typeof a1", typeof a1);
console.log("1 a1", a1);

}
{

let a = Number;
console.log("2",    typeof a);
console.log("2", a);

}
{

let a = Boolean;
console.log("3", typeof a);
console.log("3", a);
}
{

let a = Symbol;
console.log("4", typeof a);
console.log("4", a);
}


{
let a = Object;
console.log("5", typeof a);
console.log("5", a);
}


{
    let a = Function;
    console.log("6", typeof a);
    console.log("6", a);
}

{
    let a = Math;
    console.log("7", typeof a);
    console.log("7", a);

}

{
    let a = Date;
    console.log("8", typeof a);
    console.log("8", a);
}

{
    let a = RegExp;
    console.log("9", typeof a);
    console.log("9", a);
}
{
    let a = Error;
    console.log("10", typeof a);
    console.log("10", a);
}

{
    let a = EvalError;
    console.log("11", typeof a);
    console.log("11", a);
}

{
    let a = RangeError;
    console.log("12", typeof a);
    console.log("12", a);
}
{
    let a = null;
    console.log("13", typeof a);
    console.log("13", a);
}
{
    let a = undefined;
    console.log("14", typeof a);
    console.log("14", a);
}
{
    let a = true;
    let a1 = false;
    console.log("15", typeof a);
    console.log("15", typeof a1);
    console.log("15", a);
}
{
    let a = Symbol;
    console.log("16", typeof a);
    console.log("16", a);
}
{
    let a = Function;
    let b = typeof a;
    console.log("17", typeof b);
    console.log("17", a);
}
{
    let a = constructor;
    let b = typeof a;
    console.log("18", typeof b);
    console.log("18", a);
}
{
    let a = Number.constructor;
    console.log("19", typeof a);
    console.log("19", a);
    

}
{
    let a = Number.prototype;
    console.log("20", typeof a);
    console.log("20", a);
    

}