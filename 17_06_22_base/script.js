// Esercizio 1
// Completare l'esercitazione numero 2 di ieri. Quindi cominciare a predere dimestichezza con gli oggetti in Javascript.
// Cominciare a giocare con gli oggetti, testandone metodi e proprietà trovati sulla rete (MDN per es.)
// Consegnare l'essercizio mostrando una manciata di modifiche agli oggetti (siate creativi su questo, ma con tranquillità!).

const videogame = {
  name: "Crash Bandicoot",
  type: "platform",
  relase: "1996",
  pegi: "7+",
  character: {
    hero: "Crash",
    coHero: "Coco",
    villain: "Neo Cortex",
  },
  mainInformations: function () {
    return this.name + " " + this.relase + " " + this.pegi;
  },
};

console.log(videogame.mainInformations());

console.log(videogame.name);
// in questo modo accedo alla proprietà name dell'oggetto videogame
//  e ne stampo il valore

console.log(videogame.character.hero);

// accedo alla proprietà di un oggetto innestato dentro un altro oggetto e ne stampo il valore

// posso anche scriverli così:
console.log(videogame["type"]);
console.log(videogame["character"]["villain"]);

// come aggiornare una proprietà di un oggetto?
videogame.name = "Tomb Raider";
console.log(videogame.name);

// come aggiungere una proprietà in un oggetto?
videogame.character.pet = "Pura";

console.log(videogame);

// i metodi sono funzioni all'interno di un oggetto. this. sostituisce il nome dell'oggetto,
// perché this specifica "prendi la proprietà dell'oggetto in cui this si trova, quindi prendi la proprietà di questo oggetto in cui sono scritto"
// (non so se l'ho scritto comprensibile)
