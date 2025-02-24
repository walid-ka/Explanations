// Install Extension called Quokka.js - the cmd + shift + p (search Quokka, and start)

// HTML : Inhalt der Seite (Text, Bilder, Schaltflächen (buttons)..), HTML sollte semantisch sein: Gut für Zugänglichkeit, SEO …
// CSS : für styling des HTML, wie soll aussehen. zum Festlegen des Layouts von Webseiten.
// JavaScript ist eine Programmiersprache, kann sowohl HTML als auch CSS aktualisieren und ändern. diese 3 Technologien arbeiten also alle zusammen,um dynamische Websites und Webanwendungen zu erstellen.  Sie kann Daten berechnen, bearbeiten und validieren.

"use strict"
//! Strict mode: “use strict”;
// Wir schreiben es am Anfang des Skripts. Um ein sicheres JavaScript zu schreiben. Um versehentliche Fehler zu vermeiden. Der strikte Modus verbietet uns, bestimmte Dinge zu tun, und erzeugt sichtbare Fehler in der Konsole.

//! Variables, Values
// in einer Variable speichern wir einen Wert.
// Die VariableName sollte eindeutig sein und nicht mit einem Großbuchstaben beginnen und kein reserviertes Schlüsselwort in JS sein

let variableName = "value"; // oder mit const (Unveränderlich - Immutable), Let (veränderbar), Var (alte Version)

if (variableName) {
    console.log(`the value name is ${variableName}`)
}

//! Data Type
// Number, String, Boolean (true, False), Undefined (empty value), Null (empty value)
console.log(typeof variableName) // um Datentyp zubestimmen

//! Type Conversion  
const convertString = "1998";
const calculated = 2 + 2 + "2" + 2 - 2

console.log(typeof calculated)
console.log(typeof String(calculated))

console.log(typeof convertString)
console.log(typeof Number(convertString))

//! Truthy and Falsy values : Falsy (0, "", null, undefined, NaN, false) | Truth : all the rest

//! Operators 
// Fragezeichen ? - Doppelpunkt :
// + (Addition), - (Subtraktion), * (Multiplikation), / (Division),  % (Modulo), ** (Exponentiation)
// ++ (Inkrement) → Erhöhung um Eins
// -- (Dekrement) → Verringerung um Ein

// Vergleichsoperatoren: == (Gleich), === (Strikte Gleichheit), != (Ungleich), !== (Strikte Ungleichheit), > (Größer als), < (Kleiner als), >= (Größer oder gleich), <= (Kleiner oder gleich) 

// Equality Operator (==) vs Strict Equality Operator (===), Better to use === and !=== ,  it turns true only if both value are exactly the same     18 === 18 true.   “18” === 18 false.   “18” == 18 true
// Strict it compare even the data type

// Logische Operatoren: and (&&) / or (||) / opposite (!) / Nullish Operator (??) -> we use them with if/else  
// (??) Works like || but only considers null and undefined as falsy, not other falsy values like 0 or "".

const userInput = null;
const defaultValue = userInput ?? "Default";
console.log(defaultValue);

const anotherInput = "";
console.log(anotherInput ?? "Default"); // Output: ""


// Optional Chaining (?.) allows safe access to nested object properties without causing errors if they don't exist. Useful when working with APIs where certain properties might not be available.

// console.log(user.profile?.name); // Output: Alice
// console.log(user.profile?.address?.city); // Output: Wonderland
// console.log(user.profile?.phone?.number);  Output: undefined (instead of error)


//! if / else Anweisung - statement ist wie man Bedingungen schreiben soll

const personName = "Walid";
const age = 26;
const hasDriverLicense = true;
const hasGoodVision = true;

if (hasDriverLicense && hasGoodVision && age >= 18) { console.log(`${personName} can drive`) }
else { console.log(`${personName} can not drive`) }

//! Ternary operator
// mit Ternärer Operator können wir if / else Anweisung in einer Linie schreiben
hasDriverLicense && hasGoodVision && age >= 18 ? console.log(`${personName} can drive`) : console.log(`${personName} can not drive`)

//! Switch Anweisung
// um einen Wert mit mehreren Optionen zu vergleichen
const day = "Work" // hier handelt es sich um einen fest codierten Wert, normalerweise stammen die Daten aus der Eingabe  // here its hard coded, usually dat comes from the input 

switch (day) {
    case "Work": // => day === "Work"
        console.log("Go to Work 💻");
        break;
    case "Sport":
        console.log("Go to GYM 🏋");
        break;
    case "Cooking":
        console.log("Go to Cook 🧑🏻‍🍳");
        break;
    default:
        console.log("its Weekend 🎉");
}

// example
const bill = 275;

const tip = 50 <= bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)











// ------------------------------------------------------------------------------------
//! ---------------------------------- Functions---------------------------------------
// ------------------------------------------------------------------------------------


// Functions : Eine Funktion ist ein Codeblock, der eine bestimmte Aufgabe ausführt (Expression, Declaration, Arrow, Anonymous)
// Anonyme Funktionen haben keine Namen. Sie müssen an etwas gebunden sein: eine Variable oder ein event Ereignis.
// Sie kann Props - Parameter erhalten, to recieve input values
// Sie kann eine andere Funktion  darin aufgerufen werden (call a Function inside a Function)
// die 'return', um einen Wert aus der Funktion auszugeben und die Ausführung zu beenden (the 'return" to output a value from the function and terminate the execution)

// Global Scope (a value/function in the global scope can be used anywhere in the entire program)
// Block Scope ((only visible within a { ... } codeblock). const and let are block scoped variables, meaning they are only accessible in their block or nested blocks)

// const functionName = (param1 = defaultValue1, param2 = defaultValue2, param3) => {
//     return `Result using ${param1}, ${param2}, and ${param3}`;
// };

// console.log(functionName("Value1", "Value2", "Value3")); // All arguments could be a "value" or a variable birthYear

const printName = () => {
    const nationality = "Algerian"
    console.log(personName)
    console.log(nationality)
}

printName(); // "Walid"
// console.log(nationality) // can't be used outside the scope 


const ageFunction = (year) => {
    const age = 2025 - year
    return age
}


const userFunction = (userName = "Unknown", city = "Unknown", birthYear) => {
    const myAge = ageFunction(birthYear)
    return `${userName} is ${myAge ? myAge : "(No age has been set)"} and lives in ${city}`
}

console.log(userFunction("Walid", "Bremen", 1998))
console.log(userFunction(undefined, "Bremen", 1998))
console.log(userFunction("Walid", "Bremen"))

// Function TYPES:

// 🔹 1. Function Declaration (Named Function)
function fn1(name) {
    return `Hello, ${name}!`;
}
console.log(fn1("Alice"));

// 🔹 2. Function Expression (Anonymous Function)
const fn2 = function (name) {
    return `Hello, ${name}!`;
};
console.log(fn2("Bob"));

// 🔹 3. Arrow Function 
const greetArrow = (name) => `Hello, ${name}!`;
console.log(greetArrow("Charlie"));

// 🔹 4. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This function runs immediately!");
})();

// 🔹 5. Callback Function (Function passed as an argument)
function executeCallback(callback) {
    callback();
}
executeCallback(() => console.log("Callback executed!"));

// 🔹 9. Constructor Function (Creates objects using 'new' keyword)
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("David", 30);
console.log(person1.name);


//! First-class vs Higher-order Functions in JavaScript

//! First-class Functions
// In JavaScript, functions are treated as values. This means we can assign them to variables, pass them as arguments, and return them from other functions.

// Assigning a function to a variable
const sayHi = function (name) {
    return `Hello, ${name}!`;
};
console.log(sayHi("Alice"));

// Passing a function as an argument
function executeFunction(fn, value) {
    return fn(value);
}
console.log(executeFunction(sayHi, "Bob"));

// Returning a function from another function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5));




//! Higher-order Functions 
// A higher-order function is a function that:
// 1. Takes another function as an argument
// 2. Returns a function as its result

// Example: Using a Higher-order Function map() or like addEventListner()
const myNums = [1, 2, 3, 4];
const squaredNumbers = myNums.map(num => num * num);
console.log(squaredNumbers);

// Example: Creating a Higher-order Function
function applyOperation(arr, operation) {
    return arr.map(operation);
}
const tripledNumbers = applyOperation(myNums, num => num * 3);
console.log(tripledNumbers);




//! Function that returns another function
const greet = (greeting) => {
    return (name) => {
        return `${greeting}, ${name}!`;
    };
};

const sayHello = greet("Hello");
console.log(sayHello("Alice"));




// 🔹 Call, Apply, and Bind Methods in JavaScript


const me = {
    name: "John",
    age: 30,
    greet: function (city) {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I live in ${city}.`);
    }
};

const person2 = { name: "Alice", age: 25 };

// ✅ call() Method (Pass arguments one by one) : Calls a function with a given 'this' value and arguments passed individually.
me.greet.call(person2, "Chicago"); // Output: Hello, my name is Alice, I am 25 years old and I live in Chicago.

// ✅ apply() Method (Pass arguments as an array) : Calls a function with a given 'this' value and arguments in an array.
me.greet.apply(person2, ["New York"]); // Output: Hello, my name is Alice, I am 25 years old and I live in New York.

// ✅ bind() Method (Creates a new function with 'this' bound to a specific object) 
const boundGreet = me.greet.bind(person2, "Los Angeles");
boundGreet(); // Output: Hello, my name is Alice, I am 25 years old and I live in Los Angeles.




// ------------------------------------------------------------------------------------
//! --------------------------------- Strings -----------------------------------------
// ------------------------------------------------------------------------------------


// String properties & methods help manipulate and analyze text.

const str1 = "Hello, World!";
const str2 = 'JavaScript is awesome';
const str3 = `Template Literals allow embedding: ${str1}`;
const stringNum = "100"


console.log(str1.length); // Length of the string

// 🔹 String Methods

// .charAt(index) → Get character at a specific index
console.log(str1.charAt(0));

// .indexOf(substring) → Find first occurrence of substring
console.log(str1.indexOf("World"));

// .lastIndexOf(substring) → Find last occurrence
console.log(str1.lastIndexOf("o"));

// .includes(substring) → Check if string contains substring
console.log(str1.includes("Hello"));

// .startsWith(substring) → Check if string starts with substring
console.log(str1.startsWith("Hello"));

// .endsWith(substring) → Check if string ends with substring
console.log(str1.endsWith("!")); // Output: true

// .toUpperCase() → Convert to uppercase
console.log(str1.toUpperCase());

// .toLowerCase() → Convert to lowercase
console.log(str1.toLowerCase());

// .trim() → Remove whitespace from both ends
const str4 = "   Trimmed String   ";
console.log(str4.trim());

// .slice(start, end) → Extract part of a string
console.log(str1.slice(0, 5));

// .substring(start, end) → Similar to slice but doesn’t support negative indexes
console.log(str1.substring(0, 5));

// .substr(start, length) → Extracts a specific number of characters
console.log(str1.substr(7, 5));

// .replace(old, new) → Replace substring
console.log(str1.replace("World", "JS"));

// .replaceAll(old, new) → Replace all occurrences
const str5 = "apple apple orange";
console.log(str5.replaceAll("apple", "banana"));

// .split(separator) → Convert string to array
console.log(str1.split(", "));

// .concat(str2) → Concatenate strings
console.log(str1.concat(" ", str2));

// .repeat(n) → Repeat string n times
console.log("Hi! ".repeat(3));

// + to covert a string to a number
console.log(+stringNum);
// or console.log(Number(stringNum));








// ------------------------------------------------------------------------------------
//! ---------------------------------- Arrays -----------------------------------------
// ------------------------------------------------------------------------------------

// Ein Array ist einfach ein Objekt, das eine Sammlung von Elementen ähnlichen Typs darstellt.
// An array is simply an object that represents a collection of similar type of elements.
// Js hat Eingebaute Funktionen - Js has Built in functions

const firstName = "Walid"
const values = [firstName, "KA", 3, 4] // [] square brackets - eckige Klammern  , () Klammern

console.log(`the values are ${values}`)
console.log(`the first value is ${values[0]}`)
console.log(`the length is ${values.length}`)
console.log(`the index of the value 1 is ${values.indexOf(1)}`)
console.log(values.includes(1))
values.includes(10) ? console.log("that passed number exist in the array") : console.log("that passed number doesnt exist in the array")

// TODO: ADD 
// Hinzufügen (from original array)
values.push(5); values
values.unshift(1); values

// TODO: REMOVE 
// entfernen (löschen) (from original array)
values.pop(); values
values.shift(); values

// TODO: CONCAT 
// (new array) without modifying the original array or string
let myArr = [1, 2, 3]
const myNewArr = myArr.concat([4, 5], [6, 7, 8])
console.log(myNewArr)

// TODO: FILTER (new Array)
const userArr = [
    { name: "Walid", age: 27 },
    { name: "Ben", age: 18 },
]

const newUserArr = userArr.filter(name => name.name.includes("i")) // [ { name: 'Walid', age: 27 } ]
const olderThanTwenty = userArr.filter(person => person.age > 20)  // [ { name: 'Walid', age: 27 } ]


const numbers = [1, 100, 20, 34, 45, 6, 78]

const even = x => x % 2 === 0;
const num = i => i < 50 && i > 20;

const evenNum = numbers.filter(even)  // [ 100, 20, 34, 6, 78 ]
const compaNum = numbers.filter(num) // [ 34, 45 ]

// TODO: FIND 
// (original array) - um nach dem ersten Element zu suchen, das eine Bedingung erfüllt 
// to search for the first element that meet a condition
const findNum = numbers.find(num => num < 45) // 1

// TODO: MAP 
// (new array) : um für jedes Array-Element eine Funktion oder eine Bedingung anzuwenden. 
// to apply a function or a condition for each array element. use it instead of FOREACH 

const persons = [
    { firstName: "Lukas", lastName: "Müller", age: 25 },
    { firstName: "Anna", lastName: "Schmidt", age: 30 },
    { firstName: "Max", lastName: "Becker", age: 22 },
    { firstName: "Sophie", lastName: "Wagner", age: 28 },
    { firstName: "Felix", lastName: "Krause", age: 35 }
];


persons.map(person => person.age * 2) // [ 50, 60, 44, 56, 70 ]
persons.map(person => person.firstName.toUpperCase()) // [ 'LUKAS', 'ANNA', 'MAX', 'SOPHIE', 'FELIX' ]
persons.map(person => person.firstName === "Walid") // [true, false, false, false, false]

// TODO: FOREACH 
// Better than for loop : wird verwendet, um eine Funktion für jedes Element in einem Array auszuführen. Sie verändert das ursprüngliche Array nicht, sondern dient nur zur Iteration.
// is used to execute a function on each element in an array. It does not modify the original array, but is only used for iteration.
// Array.forEach((element, idex, array) => { console.log(element)})

const money = [454, -454, 345]

money.forEach((mov, i, arr) => {
    mov > 0 ? console.log(`Movement ${i + 1} : You deposited ${mov}`) : console.log(`Movement ${i + 1} : You withdrew ${Math.abs(mov)}`)
})

const fruits = ["Apfel", "Banane", "Mango"];

fruits.forEach(fruit => {
    console.log(`Ich möchte ${fruit} essen!`);
});


// TODO: JOIN 
// wird verwendet, um alle Elemente eines Arrays in eine Zeichenkette zu verwandeln, wobei ein bestimmtes Trennzeichen (separator) zwischen den Elementen eingefügt wird.
// is used to convert all elements of an array into a string, inserting a specific separator between the elements.

console.log(fruits.join());
console.log(fruits.join(", ")); // Trennzeichen: ", "
console.log(fruits.join(" - "));
console.log(fruits.join(""));

// TODO: SLICE
// (new array) : wird verwendet, um einen Teil eines Arrays oder einer Zeichenkette zu extrahieren, ohne das ursprüngliche Array oder die ursprüngliche Zeichenkette zu verändern.
// is used to extract part of an array or string without modifying the original array or string.
console.log(fruits.slice(1, 4));
console.log(fruits.slice(2));
console.log(fruits.slice(-3));
console.log(fruits.slice());

const text = "JavaScript";

console.log(text.slice(0, 4)); // "Java"
console.log(text.slice(4));    // "Script"
console.log(text.slice(-6));   // "Script"

// TODO: SPLICE
// wird verwendet, um Elemente hinzuzufügen, zu entfernen oder zu ersetzen. Im Gegensatz zu slice() verändert splice() das ursprüngliche Array.
// is used to add, remove or replace elements. Unlike slice(), splice() modifies the original array.
// array.splice(start, deleteCount, item1, item2, ...);

const vigtables = ["Apfel", "Banane", "Erdbeere", "Mango", "Traube"];

// Entfernt 2 Elemente ab Index 1
const removed = vigtables.splice(1, 2);

console.log(vigtables);
console.log(removed);

const animals = ["dog", "cat", 'elephant'];
console.log(animals.splice(1, 0, "lion", "tiger"))

// TODO: REDUCE
// es ist ein Akkumulator wie ein Schneeball, der alle Elemente zusammenzählt. Dasselbe wie eine „for loop“, aber besser.
// its an accumulator like a snowball. adding all elements together. same like "for loop" but better. 
// array.reduce(callback, initialValue)

const myNum = [1, 3, 4, 5, 8]

myNum.reduce((x, y) => x + y) // 21

const calcMax = myNum.reduce((x, y) => {
    if (x > y) return x;
    else return y
}, 0)

console.log(calcMax)


// TODO: SORT
// (original array). 
// If we want to make a copy and not effect on original we write const SortedElements = arr.slice().sort(..)
// um ein Array mit nur Zahlen oder nur Zeichenfolgen aufsteigend oder absteigend zu klassifizieren
// to classify ascending or descending an array with only numbers or only strings (default is  aschending)

const nums = [1, 5, 7, 8, 10]
console.log(nums.sort())

// descending order  
console.log(nums.sort((a, b) => b - a))

// sort strings alphbitacally 
const names = ["John", "Piter", "Ali", "Walid"]
console.log(names.sort((a, b) => a.localeCompare(b)))

const personss = [
    { name: "Anna", age: 25 },
    { name: "Lukas", age: 30 },
    { name: "Max", age: 22 }
];

persons.sort((a, b) => a.age - b.age); // Nach Alter aufsteigend sortieren

console.log(persons);

// TODO: REVERSE
// (original array)

const reversedArr = ["John", "Piter", "Ali", "Walid"]

console.log(reversedArr.reverse());

// TODO: SOME & EVERY (true, false)
// some() Gibt true zurück, wenn mindestens ein Element die Bedingung erfüllt
// every() – Gibt true zurück, wenn ALLE Elemente die Bedingung erfüllen

const someNums = [1, 2, 3, 4, 5];

const hasLargeNumber = someNums.some(num => num > 3);  // Prüft, ob es eine Zahl gibt, die größer als 3 ist

console.log(hasLargeNumber); // true (weil 4 und 5 > 3 sind)


const allPositive = numbers.every(num => num > 0);  // Prüft, ob ALLE Zahlen größer als 0 sind

console.log(allPositive); // true (weil alle Zahlen > 0 sind)

const users = [
    { name: "Anna", active: true },
    { name: "Lukas", active: false },
    { name: "Max", active: true }
];

// Prüft, ob mindestens ein Benutzer aktiv ist
console.log(users.some(user => user.active)); // true

// Prüft, ob ALLE Benutzer aktiv sind
console.log(users.every(user => user.active)); // false

// TODO: startWith (true, false)
// um zu überprüfen, ob ein String mit einer bestimmten Zeichenfolge beginnt.
// string.startsWith(searchString, position);

const word = "Hallo Welt";

console.log(word.startsWith("Hallo"));
console.log(word.startsWith("Welt"));
console.log(word.startsWith("Welt", 6));

const userss = [
    { name: "Anna", email: "anna@example.com" },
    { name: "Lukas", email: "lukas@example.com" },
    { name: "Max", email: "max@website.com" }
];

// Alle Benutzer filtern, deren E-Mail mit "anna" beginnt
const filteredUsers = userss.filter(user => user.email.startsWith("anna"));

console.log(filteredUsers);

// TODO:  AT()

console.log(fruits.at(1));   // "Banane" (zweites Element)
console.log(fruits.at(-1));  // "Mango" (letztes Element)
console.log(fruits.at(-2));  // "Kirsche" (vorletztes Element)

console.log(text.at(0));   // "J" (erstes Zeichen)
console.log(text.at(-1));  // "t" (letztes Zeichen)
console.log(text.at(-3));  // "i" (drittletztes Zeichen)

// Alternative Letztes Element mit slice()
console.log(numbers.slice(-1)[0]); // 30

// Alternative Letztes Element mit length
console.log(numbers[numbers.length - 1]); // 30

//! LOOPING 
// Es gibt verschiedene Möglichkeiten, ein Array in JavaScript zu durchlaufen. Hier sind die wichtigsten Methoden . Welche Methode soll ich verwenden?
// for	Wenn du volle Kontrolle über den Index brauchst
// forEach	Wenn du über ein Array iterieren willst, ohne es zu verändern
// for...of	Wenn du nur die Werte durchlaufen möchtest
// map	Wenn du ein neues, transformiertes Array erstellen willst
// while	Wenn die Anzahl der Iterationen nicht vorher bekannt ist

// TODO: FOR LOOP
// ✅ Vorteil: Volle Kontrolle über den Index.
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruits ${i + 1} : "${fruits[i]}"`);
}

// TODO: FOREACH LOOP
// ✅ Vorteil: Einfach zu lesen, keine manuelle Indexverwaltung.
// ❌ Nachteil: Kann nicht mit break oder continue unterbrochen werden.
fruits.forEach((fruit, i) => {
    console.log(`${i}: ${fruit}`);
});


// TODO: FOR...OF Loop
// ✅ Vorteil: Leicht lesbar, keine manuelle Indexverwaltung.
// ❌ Nachteil: Kein Zugriff auf den Index.
for (const fruit of fruits.entries()) {
    console.log(`${fruit[0] + 1} : ${fruit[1]}`)
}

// TODO: MAP
// ✅ Vorteil: Gibt ein neues Array zurück.
// ❌ Nachteil: Nicht geeignet, wenn du nur durch das Array iterieren möchtest.
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);


// TODO: While LOOP
// ✅ Vorteil: Gut für dynamische Bedingungen.
// ❌ Nachteil: Kann zu Endlosschleifen führen, wenn i nicht erhöht wird.
let i = 0;
while (i < fruits.length) {
    console.log(`Fruits ${i + 1} : "${fruits[i]}"`);
    i++;
}

// TODO: DO...WHILE Loop
// Wird mindestens einmal ausgeführt
// ✅ Vorteil: Führt den Code mindestens einmal aus.
// ❌ Nachteil: Selten benötigt, außer für spezielle Fälle.

let j = 0;
do {
    console.log(fruits[j]);
    j++;
} while (j < fruits.length);

//! EXERCISE 

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]
// Temperture amplitude? what is it? its the diffrence between highest temp and lowest
// sometimes there is an error 

const calcTempAmplitude = (temps) => {

    const filteredTemps = temps.filter(temp => typeof temp === "number")

    const calcMaxTemp = filteredTemps.reduce((acc, curr) => {
        return curr > acc ? curr : acc;
    }, filteredTemps[0]);

    const calcMinTemp = filteredTemps.reduce((acc, curr) => {
        return curr < acc ? curr : acc;
    }, filteredTemps[0]);

    console.log(calcMaxTemp);
    console.log(calcMinTemp);

    const tempAmplitude = calcMaxTemp - calcMinTemp

    return (tempAmplitude)

}

console.log("Temperature Amplitude:", calcTempAmplitude(temps));










// ------------------------------------------------------------------------------------
//! ---------------------------------- Objects ----------------------------------------
// ------------------------------------------------------------------------------------

// Ein Objekt in JavaScript ist eine Sammlung von Schlüssel-Wert-Paaren, die verschiedene Eigenschaften und Methoden enthalten können. Es ist eines der wichtigsten Konzepte in JS, da fast alles ein Objekt ist!

const person = {
    firstName: "Max",
    lastName: "Müller",
    age: 30,
    isStudent: false
};

console.log(person);
console.log(person.firstName);
console.log(person.age);
console.log(person["lastName"]);

person.age = 31; // Ändert das Alter
person.city = "Berlin"; // Fügt eine neue Eigenschaft hinzu

console.log(person);


//TODO: Objekte in Objekten
const student = {
    name: "Lisa",
    address: {
        street: "Hauptstraße 12",
        city: "Hamburg"
    }
};

console.log(student.address.city);

//TODO:  Funktionen im Objekt
const user = {
    name: "Sarah",
    greet: function () {
        return `Hallo, ich bin ${this.name}!`;  // this verweist auf das aktuelle Objekt (user).
    }
};

console.log(user.greet());

//TODO: Objekte durchlaufen (for...in)

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

//TODO: Objekte in Arrays (Sehr häufig!)
// Perfekt für Datenbanken, APIs oder Benutzerlisten!

const students = [
    { name: "Tom", age: 25 },
    { name: "Anna", age: 28 }
];

console.log(students[0].name);
console.log(students[1].age);

//! Wichtige Methoden für Objekte

// Object.keys() – Alle Schlüssel (Property Names)
console.log(Object.keys(person));

// Object.values() – Alle Werte
console.log(Object.values(person));

// Object.entries() – Schlüssel-Wert-Paare als Array
console.log(Object.entries(person));

// Object.assign() – Objekte kombinieren
const extraInfo = { job: "Entwickler" };
const newPerson = Object.assign({}, person, extraInfo);

console.log(newPerson);

// Object.freeze() – Objekt nicht mehr änderbar machen
Object.freeze(person);
//person.age = 40; // ❌ Änderung wird ignoriert!

console.log(person.age); // 31 (unverändert)










// ------------------------------------------------------------------------------------
//! ------------------- Destructuring Array, Objects, Spread --------------------------
// ------------------------------------------------------------------------------------

// Auspacken von Werten aus einem Array oder Objektparametern in separate Variablen
// unpacking values from an array or objects parameters into separate variables


const plan = {
    title: "My Plan",
    weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: function (day, month) {
        return [this.weekDays[day], this - months[month]];
    },
    tasks: ["Study", "GYM"],
    vacations: {
        firstVacation:
            { from: 12, to: 20 },
        secondVacation:
            { from: 15, to: 30 },
        firstVacation:
            { from: 3, to: 16 },
    }
}

// to show all what is inside the weekDays
let [a, b, c] = plan.weekDays

console.log(a, b, c);  // It looks like an array but not if it on the right side before =
// PS: the original arr is not effected
console.log(plan.weekDays);

//  TO SWITCH VARIABLES
[a, b, c] = [c, b, a]
console.log(a, b, c);

// Destructuring NESTED ARRAY.
// we have to make destructuring inside destructuring
const nestedArr = [1, 2, 3, [4, 51]]
const [one, two, three, [four, five]] = nestedArr
console.log(one, two, three, four, five);

// DEFAULT VALUES (in case we don't know the array, if it doesn't exist it returns the default value)
const [k = 0, r = 0, d = 0] = [1, 2]
console.log(k, r, d);

// Distructure an Object +  we can also change their name + Default Values
const { weekDays: workDays, vacations, tasks = [] } = plan
console.log(workDays, vacations, tasks);

// Spread Operartor (…str) : to expend an Arr or Obj into all its elements “individual elements” 
const arr = [4, 5, 6]
const newArr = [1, 2, 3, ...arr]
console.log(newArr);
console.log(...newArr); // Distructuring

// COPY Array
const weekTasks = [...plan.tasks]
console.log(weekTasks);

// Edit an array
const newTask = [...weekTasks, "Code"]
console.log(newTask);

// Join two Arrays
const daysMonths = [...plan.weekDays, ...plan.months]
console.log(daysMonths);

//! Rest pattern and parameters :
// Used to merge all list of function arguments into an array. Rest pattern is the same context like spread operator but just the opposite (str…)
// we can use it to collect multiple elements and condense them into an array.

// Example 1: Rest Parameters in Functions
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Example 2: Rest Pattern in Arrays
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first, second);
console.log(rest);

// Example 3: Rest Pattern in Objects
const man = { name: "John", age: 25, city: "New York", country: "USA" };
const { name, ...details } = man;
console.log(name);
console.log(details);









// ------------------------------------------------------------------------------------
//! ----------------------------------- Sets & Maps -----------------------------------
// ------------------------------------------------------------------------------------



// TODO: 🔹 Sets 
// (Unique values only) : to make array without duplicates value
const numbersSet = new Set([1, 2, 3, 3, 4, 5]);
console.log(numbersSet);
console.log(numbersSet.size); // size is not length
// to convert from a set to an Array => const arr = [...new Set([1, 2, 3, 3, 4, 5])];

numbersSet.add(6);
numbersSet.delete(3);
console.log(numbersSet.has(3));
console.log(new Set("walidkouiderayad").size);


numbersSet.clear(); // Remove all elements from Set
console.log(numbersSet); // Output: Set {}



const italianFoods = new Set(['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'rice'])
const mexicanFoods = new Set(['tortillas', 'beans', 'rice', 'tomatoes', 'avocado', 'garlic'])

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods)
console.log([...commonFoods])

const allFood = italianFoods.union(mexicanFoods) // combining two Arrays without Duplicate
console.log([...allFood]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods)
console.log([...uniqueItalianFoods]);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods)
console.log([...uniqueMexicanFoods]);

const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods)
console.log([...uniqueItalianAndMexicanFoods]);


// TODO: 🔹 Maps (Key-Value Pairs)

// Keys can be of any data type – Objects only allow strings or symbols as keys.
// Maintains key order – Maps preserve the insertion order of keys.
// Easier size retrieval – .size property directly gives the number of entries.
// More efficient for frequent additions/removals – Maps perform better in scenarios where keys are frequently added or deleted.

const myMap = new Map();
const collegues = new Map([
    ["id1", "Alice"],
    ["id2", "Bob"],
    ["id3", "Charlie"]
]);

// 🔹 Map Methods

// .set(key, value) → Add or Update Entries
myMap.set("name", "John");
myMap.set("age", 30);

// .get(key) → Retrieve a Value
console.log(myMap.get("name"));

// .has(key) → Check If a Key Exists
console.log(myMap.has("age"));

// .delete(key) → Remove an Entry
myMap.delete("age");

// .size → Get the Number of Entries
console.log(myMap.size);

// .clear() → Remove All Entries
myMap.clear();

// 🔹 Looping Through a Map

// Using .forEach()
collegues.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Using for...of Loop
for (let [key, value] of collegues.entries()) {
    console.log(`${key}: ${value}`);
}

// 🔹 Using Objects as Keys
const objKey = { id: 1 };
const objMap = new Map();
objMap.set(objKey, "Object Key Example");
console.log(objMap.get(objKey));

// 🔹 Converting Between Objects and Maps

// Convert Object to Map
const obj = { name: "Alice", age: 25 };
const objToMap = new Map(Object.entries(obj));
console.log(objToMap);

// Convert Map to Object
const mapToObj = Object.fromEntries(objToMap);
console.log(mapToObj);

// 🔹 Use Cases
// - Storing Key-Value Data
// - Tracking State in Applications
// - Efficient Data Lookup
// - Storing Unique Data Types as Keys



//! Exersice 

const matchEvents = new Map([
    [17, '⚽ Goal'],
    [36, '🔄 Substitution'],
    [47, '⚽ Goal'],
    [61, '🔄 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🟥 Red card'],
    [70, '🔄 Substitution'],
    [72, '🔄 Substitution'],
    [76, '⚽ Goal'],
    [80, '⚽ Goal'],
    [92, '🟨 Yellow card'],
]); // [key, value]

// 1. Convert to an Array + no duplicates
const events = [...new Set(matchEvents.values())];
console.log(events);

// 2. Delete an Unfair Yellow Card
matchEvents.delete(64);

console.log(`An Event happened, on Average, every ${90 / matchEvents.size} minutes`);

// 3. Looping
for (const [key, value] of matchEvents) {
    const half = key <= 45 ? " First Half" : "Second Half";
    console.log(`${half} : ${value}`);
}




// ------------------------------------------------------------------------------------
//! ----------------- Challenge (lecture 59 - section 5) ------------------------------
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
//! ----------------- Challenge (lecture 62 - section 5) ------------------------------
// ------------------------------------------------------------------------------------








// ------------------------------------------------------------------------------------
//! ----------------------------- DOM + Events ----------------------------------------
// ------------------------------------------------------------------------------------

/// DOM (Document Object Model): 
// A structured representation of HTML documents that allows JavaScript to access and manipulate elements, attributes, and styles. 
// It transforms the HTML structure into an object-oriented model, where each element becomes a node that JS can modify.
// 
// The DOM is not part of JavaScript itself but belongs to the Web APIs, which are browser-implemented libraries accessible via JS code.
// 
// Key Features of the DOM:
// - Enables JavaScript to interact with the browser dynamically.
// - Allows us to create, modify, and delete HTML elements, set styles and attributes, and handle events.
// - The DOM tree is generated from the HTML document and represents the document’s structure in a hierarchical way.
// - It is a powerful API with various methods and properties such as .querySelector(), .addEventListener(), .createElement(), .innerHTML, .textContent, .children, etc.
// - In the DOM tree, the root node represents the entire HTML document, with <html> as the first descendant, followed by <head>, <body>, and their child elements.


// Document
//  ├── <html>
//  │    ├── <head>
//  │    │    ├── <title>DOM Example</title>
//  │    ├── <body>
//  │         ├── <h1 id="title">Hello, DOM!</h1>
//  │         ├── <p class="text">This is a paragraph.</p>
//  │         ├── <button>Click Me</button>

/*
====================================
🔹 1. Selecting Elements
====================================
*/

// Select by ID
const title = document.getElementById("title");

// Select by class name (returns a collection)
const paragraphs = document.getElementsByClassName("text");

// Select by tag name (returns a collection)
const allParagraphs = document.getElementsByTagName("p");

// Select using querySelector (first match)
const firstParagraph = document.querySelector(".text");

// Select using querySelectorAll (all matches)
const allTexts = document.querySelectorAll("p");

/*
====================================
🔹 2. Modifying Elements
====================================
*/

// Change text content
title.innerText = "New Title!";

// Change HTML inside an element
firstParagraph.innerHTML = "<b>Bold Text</b>";

// Change style
title.style.color = "blue";

// Add and remove CSS classes
title.classList.add("highlight");
title.classList.remove("highlight");

/*
====================================
🔹 3. Creating & Removing Elements
====================================
*/

// Create a new div element
const newDiv = document.createElement("div");
newDiv.innerText = "I am a new div!";
document.body.appendChild(newDiv); // Add to the page

// Remove an element
// document.body.removeChild(newDiv); // Uncomment to remove

// createElement(), appendChild(), removeChild()

/*
====================================
🔹 4. Handling Events
====================================
*/

// Add click event listener to title

title.addEventListener("click", () => {
    alert("Title clicked!");
});

// Add click event to button
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    alert("Button clicked!");
});

/*
====================================
🔹 5. Handling Form Inputs
====================================
*/

// Get input value on button click
button.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    alert("Hello, " + name);
});
// input.value or checkbox.checked

/*
====================================
🔹 6. Traversing the DOM
====================================
*/

// Get parent element
console.log(firstParagraph.parentNode);

// Get children of an element
console.log(document.body.children);

// Get next sibling element
console.log(firstParagraph.nextElementSibling);




// ------------------------------------------------------------------------------------
//! ----------------------------- JS Behinde the Scene --------------------------------
// ------------------------------------------------------------------------------------

// Section 8









//! LATER for groomgrid - lesson 64 section 5 
// in the SaaS i'm builduin (booking + Task management) for freelancers
// new feature: time traking . a function recieves daily work hours for a certain week, and returns:
// 1. Total hours worked
// 2. Average daily hours
// 3. the day with the most hours worked
// 4. weather the week was full time (worked 35 hours or more)

// Test data : [7.5, 8, 6.5, 0, 5.5, 4, 0]