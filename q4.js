/**You are given two nested objects: profile and updates. Your task is to merge the two objects using the spread operator, ensuring that specific nested properties in updates overwrite those in profile. */
 
const profile ={
    name: "Ritu",
    age:20,
    address:{
        city:"Prayagraj"
    }
};
const updates = {
    age:21,
    address:{
        country:"UP"
}
};
const mergeProfile = { ...profile,...updates};
console.log(mergeProfile);