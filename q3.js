/**You are working with an array of objects where each object represents a person with their name and address details. Use multi-level destructuring to extract the person's name, city, and street information. */

const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
const personalInfo = people.map(({name, address:{city,street: {name: streetName}}}) => {
    return `${name} lives in ${city} on ${streetName}`;
});
console.log(personalInfo);