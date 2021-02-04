// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.
//      [ ] Schrijf een functie met een loop
//      [ ] Doorloop alle waardes originalStock en alle waardes sold. Houd van beide apart een teller bij en bereken de uitkomst.

function toBeSold() {
  let tellerStock=0;
  let tellerSold=0
  for (i=0; i<inventory.length;i++) {
    tellerStock=tellerStock+inventory[i].originalStock;
    tellerSold=tellerSold+inventory[i].sold;
  }
  return (tellerStock-tellerSold);
}

//Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina
//      [ ] Maak een element aan die de functie print, geef een id mee aan de functie dmv setAttribute en pas de styles.css aan
const voorraadmelding=document.createElement("p");
voorraadmelding.textContent="Er moeten nog " + toBeSold() + " producten worden verkocht.";
voorraadmelding.setAttribute("id", "stock");
const pagina=document.getElementById("pagina");
pagina.appendChild(voorraadmelding);

//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
//      [ ] Gebruik de methode map() om een nieuwe array terug te geven met alle waardes "type"

const tvtypen = inventory.map((tv)=> {
  return tv.type;
})

//Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
//      [ ] Gebruik de methode filter() met de conditie dat sold en originalStock gelijk zijn

const soldOut=inventory.filter((tv)=>{
  return tv.originalStock===tv.sold;
})

//Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
//      [ ] Gebruik de methode filter() met conditie ambiLight===false

const hasAmbiLight = inventory.filter((tv)=>{
  return tv.options.ambiLight===true;
})

//Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
//      [ ] Gebruik de methode sort() en vergelijk de huidige price (a) met de vorige price (b). Bij een lagere prijs volgt een negatief getal moet a voor b komen te staan.

function sortTV() {
  const result = inventory.sort((a,b) => {
    return a.price-b.price;
  })
  return result;
}
console.log(sortTV())

//Opdracht 3a: Wat is onze doelopbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.
//  [ ] Bereken de opbrengst door per product de originalStock te vermenigvuldigen met de prijs
//  [ ] Tel deze getallen op

function berekenTotaalopbrengst() {
  let opbrengstTotaal = 0;
  for (let i = 0; i < inventory.length; i++) {
    let tv = inventory[i];
    let opbrengst = (tv.originalStock * tv.price);
    opbrengstTotaal = opbrengstTotaal + opbrengst;
  }
  return opbrengstTotaal;
}

//Opdracht 3b: Hoeveel hebben we tot nu toe verdiend? Bereken hoeveel we tot nu toe verdiend hebben met het aantal verkochte tv's. Geef dit in het groen weer op de pagina.
// [ ] Bereken hoeveel tot nu toe verdiend is door sold en price te vermenigvuldigen
// [ ] Voeg een nieuw element toe met deze functie en pas de styling aan in css

function opbrengstHuidig() {
  let opbrengstTotaal=0;
  for (let i = 0; i < inventory.length; i++) {
    let tv=inventory[i];
    let opbrengst=(tv.sold * tv.price);
    opbrengstTotaal=opbrengstTotaal+opbrengst;
  }
  return opbrengstTotaal;
}
console.log(opbrengstHuidig());

//Opdracht 4: Geef de typenamen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit. Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

