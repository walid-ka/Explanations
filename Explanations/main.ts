//? Basic Types

//! 1) type inference is used to determine the type of the variable
const x: number = 12;
//or
const x = 12; // automatically inferred as number



//! 2) Array type
const arr: number[] = [1, 2, 3];
//or
const arr = [1, 2, 3]; // automatically inferred as number[]

arr.push(4); // allowed
arr.push('5'); // not allowed



//! 3) Don't use any type as it will disable type checking  (use only when you are not sure about the type) 
let y: any = 12; // allowed
y = '12'; // allowed



//! 4) Object type
// creating a type for the object is to make sure that the object has the same properties 
// as defined in the type and also to make the properties optional and its reusable 
// ? is used to make the property optional

type PersonType = { name: string, age: number, isProgrammer?: boolean, friends: string[], address: { city: string, country: string } };

const person: PersonType = {
    name: 'John',
    age: 25,
    isProgrammer: true,
    friends: ['Mike', 'Tom'],
    address: {
        city: 'New York',
        country: 'USA'
    }
}







//? function type

function add(x: number, y: number) {
    return x + y;
}
const result = add(2, 3); // allowed, result will be 5 and its type will be number


type Person = { name: string, age?: number };

function printName(person: Person) {
    console.log(person.name);
    return person.name;
}
printName({ name: 'John' }); // allowed even if age is not passed as its optional in the type


//! Destructuring 

type Option = { debugMode?: boolean, indentLevel?: number };

function printNameAndAge(name: string, { debugMode = false, indentLevel }: Option = {}) {
    console.log(name, debugMode, indentLevel);
}

//! Rest Operator
// always mention the type of the rest operator and it should be an array
function addNumbers(...arr: number[]) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

addNumbers(1, 2, 3, 4, 5); // allowed


//! typing Variables as functions
function sumWithCallback(x: number, y: number, callback: (result: number) => void) {
    callback(x + y);
}

sumWithCallback(2, 3, (result) => console.log(result)); // allowed

// explanation : callback is a function which takes a number as an argument 
// and returns void (nothing) so the callback function should be of type 
// (result : number) => void and the result is the sum of x and y which is a number so it is allowed


//? Type Modifiers

//! Union type
// used when the variable can be of multiple types with the help of | operator
let z: number | string = 12; // allowed
z = '12'; // allowed
z = true; // not allowed


type Todo = {
    name: string,
    status: 'completed' | 'in-progress' | 'not-started'
}

const todo: Todo = {
    name: 'Learn TypeScript',
    status: 'complete' // not allowed as the status should be one of the three values  
}

//! Intersection type
// used to combine multiple types into one type with the help of & operator
type Person = { name: string, age: number };
type PersonWithId = Person & { id: number }; // PersonWithId will have all the properties of Person and also id

const person: PersonWithId = {
    name: 'John',
    age: 25,
    id: 1
}



//! Readonly type
// used to make the properties of the object readonly

// object exp
type Person = {
    readonly id: number,
    name: string,
    age: number
}

const person: Person = {
    id: 1,
    name: 'John',
    age: 25
}

person.id = 2; // not allowed as id is readonly

// array exp 
type NumberArray = readonly number[];

const arr: NumberArray = [1, 2, 3];
arr.push(4); // not allowed as the array is readonly




//! Keyof type
// used to get the keys of an object
type Person = {
    name: string,
    age: number
}

type PersonKeys = keyof Person; // PersonKeys will be 'name' | 'age'




//! typeof type
// used to get the type of a variable

// object exp
const person = {
    name: 'John',
    age: 25
}

type Person = typeof person; // Person will be {name : string, age : number}

// function exp
function add(x: number, y: number) {
    return x + y;
}

type AddFunction = typeof add; // AddFunction will be (x : number, y : number) => number

// array exp
const arr = [1, 2, 3];

type NumberArray = typeof arr; // NumberArray will be number[]



//! Index type
// used to get the type of the value of a property in an object

type Person = {
    name: string,
    skillLevel: "beginner" | "intermediate" | "advanced"
}

const person: Person = { name: 'John', skillLevel: 'beginner' };
printSkillLevel(person.skillLevel)

function printSkillLevel(skillLevel: Person['skillLevel']) {
    console.log(skillLevel);
}

// its a bit long watch the lesson 21 of the course for better understanding


//? Advanced Types

//! As Const And Enums
// used to make the variable immutable and also to create a group of related constants 
// which can be used as a type 

// as const
const person = {
    name: 'John',
    age: 25
} as const; // here the properties of the object are made readonly 
person.name = 'Mike'; // not allowed as the properties are readonly now 

const nums = [1, 2, 3] as const; // here the array is made readonly
nums.push(4); // not allowed as the array is readonly now

// enums
const SKILL_LEVEL = ['beginner', 'intermediate', 'advanced'] as const; // here the array is made readonly

type SkillLevel = typeof SKILL_LEVEL[number]; // SkillLevel will be 'beginner' | 'intermediate' | 'advanced'

SKILL_LEVEL.map(level => console.log(level)); // allowed level will be 'beginner', 'intermediate', 'advanced'

//! Tuples
// used to define an array with a fixed number of elements and also with specific types for each element

type Person = [string, number, boolean];

const person: Person = ['John', 25, true]; // allowed
const person: Person = ['John', '25', true];
// not allowed as the second element should be a number 
// because the type of the second element is number in the Person type 

//! Generics
// used to create reusable components and also to make the code more flexible and reusable 

// exp 1 
function identity<T>(value: T): T[] {
    return [value];
}

const result1 = identity(12); // result will be 12 and its type will be number
const result2 = identity('12'); // result will be '12' and its type will be string

// exp 2
type Pair<T> = [T, T];

const pair: Pair<number> = [1, 2]; // allowed
const pair: Pair<number> = [1, '2'];
// not allowed as the second element should be a number 
// because the type of the second element is number in the Pair type

// exp 3
type Person<T> = { name: string, age: T };

const person: Person<number> = { name: 'John', age: 25 }; // allowed
const person: Person<number> = { name: 'John', age: '25' };
// not allowed as the age should be a number because the type of the age is number in the Person type

// exp 4
type Pair<T, U> = [T, U];

const pair: Pair<number, string> = [1, '2']; // allowed
const pair: Pair<number, string> = [1, 2];
// not allowed as the second element should be a string 
// because the type of the second element is string in the Pair type

// exp 5
type Person<T, U> = { name: T, age: U };

const person: Person<string, number> = { name: 'John', age: 25 }; // allowed
const person: Person<string, number> = { name: 25, age: 25 };
// not allowed as the name should be a string 
// because the type of the name is string in the Person type

// exp 6
const a = new Set<number>(); // allowed
const b = new Set<string>(); // allowed
const c = new Set<number | string>(); // allowed
const d = new Set(['hihi']); // allowed

a.add(1); // allowed
a.add('2'); // not allowed as the set is of type number
b.add('2'); // allowed
b.add(1); // not allowed as the set is of type string
c.add(1); // allowed
c.add('2'); // allowed
d.add('2'); // allowed
d.add(1); // not allowed as the set is of type string

// exp 7
const j = new Map<number, string>(); // allowed
const l = new Map<number, string | number>(); // allowed
const m = new Map<string, string | number>(); // allowed
const n = new Map([['1', 1]]); // allowed

j.set(1, 'hi'); // allowed
j.set('1', 'hi'); // not allowed as the map is of type number
l.set(1, 'hi'); // allowed
l.set(1, 1); // allowed
l.set('1', 'hi'); // not allowed as the map is of type number
m.set('1', 'hi'); // allowed
m.set('1', 1); // allowed
n.set('1', 1); // allowed
n.set(1, 1); // not allowed as the map is of type string

// exp 8
type APIResponse<TData> = {
    data: TData,
    isError: boolean
}

type User = APIResponse<{ name: string, age: number }>

const p: User = {
    data: {
        name: 'John',
        age: 25
    },
    isError: false
}

// exp 9
type APIResponse<TData extends object> = {
    data: TData,
    isError: boolean
}
// the "extends object" is used to make sure that the type of the data is an object and not a primitive type

const g: APIResponse<{ name: string }> = {
    data: {
        name: 'John'
    },
    isError: false
}

// exp 10 (IMPORTANT WATCH THE LESSON 24 OF THE COURSE FOR BETTER UNDERSTANDING 15:07)

//! Async Functions
// used to make the function asynchronous and also to make the function return a promise

// exp 1
async function fetchData(url: string): Promise<string> {
    let response = await fetch(url); // Await pauses the function execution until the Promise is resolved
    let data = await response.json(); // Wait for JSON parsing
    return data;
}

// Usage
fetchData('https://api.exp.com/data')
    .then((data) => {
        console.log(data); // Process fetched data
    })
    .catch((error) => {
        console.error('Error fetching data:', error); // Handle errors
    });





//? Built In Types

//! Pick And Omit
// used to create a new type by picking or omitting (removing) properties from an existing type
// for not duplicating code and also for making the code more reusable

// exp 1
type Person = {
    name: string,
    age: number,
    address: string
}

// Pick<Type, Keys> : allows you to create a new type by selecting only certain properties from an existing type.
type PersonNameAndAge = Pick<Person, 'name' | 'age'>; // PersonNameAndAge will be {name : string, age : number}

// Omit<Type, Keys> : allows you to create a new type by removing certain properties from an existing type.
type PersonWithoutAddress = Omit<Person, 'address'>; // PersonWithoutAddress will be {name : string, age : number}

//! Partial And Required
// used to create a new type by making all the properties of an existing type optional or required

// exp 1
type Person = {
    name: string,
    age: number,
    address: string
}

// Partial<Type> : allows you to create a new type by making all the properties of an existing type optional.
type PartialPerson = Partial<Person>; // PartialPerson will be {name ?: string, age ?: number, address ?: string}

// Required<Type> : allows you to create a new type by making all the properties of an existing type required.
type RequiredPerson = Required<Person>; // RequiredPerson will be {name : string, age : number, address : string}

// exp 2
type Person = {
    name: string,
    age: number,
    address?: string
}

type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T;
// RequiredPick will make the properties of the type required and also pick the properties from the type

type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>;
// PartialPick will make the properties of the type optional and also pick the properties from the type

type FromTodo = PartialPick<Person, 'name' | 'age'>; // fromTodo will be {name ?: string, age ?: number, address ?: string}

const todo: FromTodo = {
    name: 'John'
}

//! ReturnType And Parameters
// used to get the return type and the parameters type of a function
// Parameter are less used but ReturnType is used a lot

function add(x: number, y: number) {
    return x + y;
}

type AddReturnType = ReturnType<typeof add>; // AddReturnType will be number
type AddParametersType = Parameters<typeof add>; // AddParametersType will be [number, number]
type AddParametersType = Parameters<typeof add>[0] // AddParametersType will be number

//! Record
// used to create a new type by mapping the properties of an existing type to another type

// exp 1
type Person = {
    name: string,
    age: number
}

type PersonRecord = Record<'person1' | 'person2', Person>; // PersonRecord will be {person1 : Person, person2 : Person}
type PeopleGroupedByName = Record<string, Person[]>; // PeopleGroupedByName will be { [key : string] : Person }

//! Readonly
// Not so used 
// used to create a new type by making all the properties of an existing type readonly
// same this as the Readonly type modifier but this is used to create a new type 
// and the Readonly type modifier is used to make the properties of the object readonly
// and also the same as const but this is used to create a new type and const is used to make the variable immutable

// exp 1
type Person = {
    name: string,
    age: number
}

type ReadonlyPerson = Readonly<Person>; // ReadonlyPerson will be {readonly name : string, readonly age : number}

const person: ReadonlyPerson = {
    name: 'John',
    age: 25
}

//! Awaited
// used to get the type of the value of a promise

// exp 1
type PromiseType = Promise<string>;
type AwaitedPromiseType = Awaited<PromiseType>; // AwaitedPromiseType will be string

//! exp 2
async function fetchData() {
    return 'data';
}

type FetchDataReturnType = Awaited<ReturnType<typeof fetchData>>; // FetchDataReturnType will be string



//? Type Narrowing

//! Basic Type Guards
// used to narrow down the type of a variable based on a condition 

// exp 1
type Tdo = {
    title: string,
    priority: "High" | "Medium" | "Low",
    isCompleted: boolean,
    description?: string,
    dueDate: Date | string | number
};

function extendTodo(todo: Tdo) {
    if (todo.dueDate instanceof Date) { // instanceof is used to check if the variable is an instance of a class
        console.log(todo.dueDate)
    } else if (typeof todo.dueDate === 'string') { // typeof is used to check the type of the variable
        console.log(todo.dueDate)
    } else {
        console.log(todo.dueDate)
    }
}

// this function is used to narrow down the type of the variable based on the value of the property 
// it used when the type of the variable is a union type 
// Never Type used to narrow down the type of a variable to never 

function switchFunction(todo: Tdo) {
    switch (todo.priority) {
        case "High":
            console.log('High Priority');
            break;
        case "Medium":
            console.log('Medium Priority');
            break;
        case "Low":
            console.log('Low Priority');
            break;
        default:
            const x: never = todo.priority; // x will be of type never
            console.log(x);
    }
}

//! Unknown Type + Zod
// used to narrow down the type of a variable to a specific type
// watch the lesson 34 of the course for better understanding

//! as Const to handle Unknown
// used to narrow down the type of a variable to a specific type
// watch the lesson 35 if its needed because its not that much used

//! Satisfies
// used to narrow down the type of a variable to a specific type

//! Discriminated union
// Important 
// used 

type SuccessResponse = {
    status: 'success',
    data: {
        id: string,
        name: string
    }
}

type ErrorResponse = {
    status: 'error',
    message: string
}

type userApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: userApiResponse) {
    if (response.status === 'success') {
        console.log(response.data);
    } else {
        console.log(response.message);
    }
}

//? React + TS 

//! Event handlers 
function Button() {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('clicked');
    }

    return <button onClick={ handleClick }> Click me </button>
}

//! UseState hook
function App() {
    const [value, setValue] = useState('sdfds') or useState(true) or useState(0)
    // value will be of type automatically (string or number, or boolean) and setValue will be of type (value : string) => void
    // or const [value, setValue] = useState<string>() or useState<boolean>() or useState<number>() 

    const [value, setValue] = useState<number[]>([]) or useState({}) or useState(null);
    // value will be of type number[] and setValue will be of type (value : number[]) => void 

    // in Case of object it should be like this
    type User = { name: string, age: number };
    const [user, setUser] = useState<User | null>(null);

    const name = user?.name; // allowed

    return {
        < div >
        <input type="text" value = { value } onChange = { e => setValue(e.target.value) } />

            <input className='outline' type = "text" onChange = { e => setValue([1, 2, 3]) } />
                </div>
}
}

//! UseEffect hook
// you can use the useEffect hook with the typescript without any changes

//! UseRef hook
// useRef state is a React Hook used for accessing and managing references to DOM elements or any mutable value that persists across renders without causing a re-render. It's particularly useful when you need to interact with DOM elements imperatively or store mutable values that won't trigger a re-render when they change.

// Accessing DOM Elements: If you need to interact with a DOM element directly, such as focusing an input field, measuring its dimensions, or triggering animations, you can use useRef to create a reference to that DOM element.

// Holding Mutable Values: You can also use useRef to hold mutable values that won't trigger a re-render when they change. This can be useful for storing previous values, caching values, or any data that doesn't need to be part of the component's state.


import { useRef, useEffect } from 'react';

export function Test() {

    //! case 1
    const inputRef = useRef<HTMLInputElement>(null); // to indicate that it's a reference to an input element and important to note that the initial value of the ref is null

    //! case 2
    const value = useRef<number[]>([]); // if u use it without HTMLInputElement never use null because it's not a reference to a DOM element
    value.current = [1, 2, 3];

    useEffect(() => {
        // Focus the input element when the component mounts
        // We use if (inputRef.current) to guard against the case where inputRef.current might be null, ensuring safe access to inputRef.current.focus().
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); // empty [] => effect runs only once after initial render

    return (
        <div>
        <input ref= { inputRef } type = "text" />
            <button onClick={ () => { if (inputRef.current) inputRef.current.focus() } }>
                Focus Input
                    </button>
                    </div>
  );
}

//! useContext hook

//! import type 
// used to import the types of the variables from another file, create a new file and name it types.ts 
// export type User = {name : string, age : number}
// then in your file use  import type {User} from './types'








