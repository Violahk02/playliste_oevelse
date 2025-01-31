// TEST af Array:

const playlisteArray = ["Essence", "Smelter under månen", "Hjertet på gaden", "Snooze", "Blodigt", "555", "Giv mig love", "With you", "Escapism", "Oscar winning tears"];

const sangArray = playlisteArray.map((element) => `<li>${element}</li>`); // Bevarer array-form
const string = sangArray.join(""); // Nu kan vi bruge .join()

console.log(string);

document.querySelector("ul").innerHTML = string;
