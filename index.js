/* console.log( "Hello World" )

console.log("Helllo Woreqweld")

var car ={
    color: "red",
    speed: 200,
    engine: {
        color: ByteLengthQueuingStrategy,
        make: "toyota",
        fuel: "Petrol",
        pistons: [
            {maker: "bmw"}, 
            {maker: "bmw2"}]
    },
    drive: function() {return "drive"; }
    
};

let array = [
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function() { return "drive"; }
];

console.log(car.make); */
/*
function name(){
    var fullName ="Mark";
    function concat(namne){
        return "MR." + namne;
    }
    return concat(fullName);
} */
/*
function more( fullname )
{
    return fullname.firstName + fullname.lastName;
}

console.log(
    more( { firstname:"Mark", lastname:"Saspa" } )
);
*/
/*
function hays(fullname){
    return fullname();
}

console.log(
    hays( function(){
        return "embed";
    })
) */

/*scope and closure
function runExpression(){
    var a = 10;
    function add(){
        return a + 90;
    }
    return add();
} */

function runExpression(){
    var a = 10;
    function add(b){
        return a + b;
    }
    console.log(
        add(90), add(20)
    );
}
