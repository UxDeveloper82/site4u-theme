// Table of contents
// 1. map() & filter()
// 2. slice() & splice()
// 3. concat()
// 4. find() & findingIndex()
// 5. destructuring()
// 6. rest & spread operator
// 7. promises


// Using Map Method
const Data = [
    {id: 1, title:'first'},
    {id: 2, title:'second'},
    {id: 3, title:'third'},
    {id: 4, title:'fourth'}
]

const upperData = Data.map(el =>el.title.toLocaleUpperCase());
console.table(upperData);

// Using Splice method
const charactersArr = [
    'Witcher',
    'Harry Potter',
    'Lucky Skywalker',
    'Tony Stark'
]

const copyArr = [...charactersArr]
//array.splice(index, howmany, item1, ....., itemX)
copyArr.splice(0,1);
console.log(copyArr);

//Using Slice method
const animals = ['ant','bison','camel','duck', 'elephant'];
console.log(animals.slice(2));

//Using Concat method
const arr1 =[1,2,3,4]
const arr2 = [10,20,30,40]
const arr3 = [100,200,300,400]

const mergeArr = arr1.concat(arr2,arr3);

console.log(mergeArr);

//Using find and FindIndex
const myData = [
    {id: 1, title:'first'},
    {id: 2, title:'second'},
    {id: 3, title:'third'},
    {id: 4, title:'fourth'}
]

const itemIdx = myData.findIndex(el =>el.id === 2);
console.log(itemIdx);

const newItem = myData.find(el =>el.id === 2);
console.log(newItem);

//Destructuring method
const name=['Luke','Skywalker']
const [firstName, lastName] = name
console.log(firstName, lastName);

const jedi = {
    id:1,
    name: 'Luke Skywalker',
    lightsaber: 'true',
    species: 'Human'
}

const {name: jediName, species, ...rest} = jedi
console.log(jediName);
console.group(species);

console.log(rest);

//Spread 
const introduction = ['my','name','is','Luke','skywalker']
const myCopyArr = [...introduction];

console.log(myCopyArr);
console.log(...myCopyArr);

//Rest
const getSize = (...args) => {
    return args.length
}

console.log(getSize(1,5,10));
console.log(getSize(10,20,40,50,60));

//Promises
const fetchData = async() => {
    try {
        const response = await fetch('https://swapi.dev/api/people');

        if(!response.ok) throw new Error(response.status);

        const result = await response.json();
        console.log(result.results);
        return result;
    } catch(e) {
        console.log(e);
    }
}

fetchData();

const restaurant = {
    name :"Classico Italiano",
    location: "Via Angelo",
    categories: ['Italian', 'Pizzeria','Vegetarian']

}

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x , y, z] = arr;
console.log(x,y,z);
console.log(arr);

const [first, second] = restaurant.categories;

console.log(first, second);


