'use strict';

/* const bookings = []

const createBooking = function(flightNum, numPassengers=1, price=199 * numPassengers){

    //ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LM123', 2)
createBooking('LH123', 5) */

/* const flight = 'LH234'
const ira = {
    name: 'Ira Shrivastava',
    passport: 1234578954
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Ms. '+passenger.name;

    if(passenger.passport === 1234578954){
        alert('Check in')
    } else { 
        alert('wrong passport!')
    }
}

//checkIn(flight, ira)
//console.log(flight)
//console.log(ira)

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 10000000000)
}

newPassport(ira)
checkIn(flight, ira) */

/* const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

//higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)

    console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best', upperFirstWord)
transformer('JavaScript is the best', oneWord)

const high5 = function() {
    console.log('🙌')
}

document.body.addEventListener('click', high5);

['Ira', 'Bidisha', 'Bobby'].forEach(high5); */

/* const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey')
greeterHey('Ira')
greeterHey('Bidisha')

greet('Hello')('Ira')

const greetAgain = greeting => {
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHello = greetAgain('Hello')
greeterHello('Ira')
greeterHello('Bidisha')

greetAgain('Hola')('Ira') */

/* const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
    
}

lufthansa.book(239, 'Ira Shrivastava')
lufthansa.book(535, 'Bidisha Chakraborty')
console.log(lufthansa)

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

//book(23, 'Bobby Bist')
book.call(eurowings, 23, 'Bobby Bist')
console.log(eurowings)

book.call(lufthansa, 239, 'Meghana Challuru')
console.log(lufthansa)

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Meghana Challuru')
console.log(swiss)

//apply
const flightData = [583, 'Ira Shrivastava']
book.apply(swiss, flightData)
console.log(swiss)

//bind
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(23, 'Shah Rukh Khan')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Sunita Shrivastava')
bookEW23('Ajeet Shrivastava')

// with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
//lufthansa.buyPlane()
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

//partial application
const addTax = (rate, value) => {
    return value+ value*rate
}

console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100))

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100))
console.log(addVAT2(23)) */

/* const runOnce = function() {
    console.log('This will never run again')
}
runOnce();

(function() {
    console.log('This will never run again')
})();

(() => console.log('this will ALSO never run again'))(); */

/* const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        console.log(passengerCount)
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking()
booker()
booker()
booker()

console.dir(booker) */

//Example 1
/* let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log( a * 2)
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log( b * 2)
    }
}

g()
f()
h()
f() */

//Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    },1000)

    console.log(`Will start boarding in ${wait} seconds`)
}
const perGroup = 1000;
boardPassengers(180,3)