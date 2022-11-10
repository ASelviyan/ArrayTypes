var person = {
    name: "Angelika",
    age: 22,
    // typeofData[]: this is how typescript describe an array of data
    // EX: string[], number[]
    hobbies: ['Video games', 'Reading']
};
//this is an empty array with an assigned array type
var favoriteActivities;
//this is how you store a string in the above array
favoriteActivities = ["Reading"];
//this will not work because its an array of strings not an array of strings and numbers
//favoriteActivities = ["Reading", 1]
//if you do want to have an array that can store both strings and number you'll have to use the any type
var favoriteNumber = [1, 'Five'];
//USING FOR LOOPS WITH TYPESCRIPT 
//in vanilla javascript you cannot use string methods like toUppercase() on the list of items in the array -->
//but with typescript you are able to use any string method on the list because typescript knows that the hobbies list consists of strings
//so any string method can be used on any variable in the array
//EX: with typescript knowing its a string array
var personOne = {
    name: "Taylor",
    age: 21,
    hobbies: ['Video games', 'Sleeping'] //=== string[]
};
//As you can see there is no error with this code however in example two there is one
for (var _i = 0, _a = personOne.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
//EX2: With the array type being any[] instead of string[]
var personTwo = {
    name: "Angelika",
    age: 22,
    hobbies: ['Video games', 'Reading', 1] // === any[]
};
for (var _b = 0, _c = personTwo.hobbies; _b < _c.length; _b++) {
    var hobby = _c[_b];
    //its having an error with this code because typescript knows that this array has more then just strings in it
    //and because if that it knows it cannot perform the string methods on some of the values in this array
    //console.log(hobby.toUpperCase) 
}
