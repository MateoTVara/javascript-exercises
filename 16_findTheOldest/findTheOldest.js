const findTheOldest = function(arr) {
  const currentDate = new Date().getFullYear();
//   let oldestAge = 0;
//   let oldestPerson;

//   for (let obj of arr){
//     let age;
//     if (!("yearOfDeath" in obj)) {
//       age = currentDate - obj.yearOfBirth;
//       if (age > oldestAge){
//         oldestAge = age;
//         oldestPerson = obj;
//       };
//     } else {
//       age = obj.yearOfDeath - obj.yearOfBirth;
//       if (age > oldestAge){
//         oldestAge = age;
//         oldestPerson = obj;
//       };
//     };
//   };
//   return oldestPerson;

  return arr.reduce((oldestPerson, person) => {
    let personAge = (person.yearOfDeath || currentDate) - person.yearOfBirth;
    let oldestAge = (oldestPerson.yearOfDeath || currentDate) - oldestPerson.yearOfBirth;

    return oldestAge < personAge ? person : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
