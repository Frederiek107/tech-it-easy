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

function toBeSold() {
  let tellerStock=0;
  let tellerSold=0
  for (i=0; i<inventory.length;i++) {
    tellerStock=tellerStock+inventory[i].originalStock;
    tellerSold=tellerSold+inventory[i].sold;
  }
  return tellerStock-tellerSold;
}

//Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina

const stockmessage=document.createElement("p");
stockmessage.textContent="Items to be sold: " +  + toBeSold() +".";
stockmessage.setAttribute("id", "stock");
const page=document.getElementById("page");
page.appendChild(stockmessage);

//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.

const tvtypen = inventory.map((tv)=> {
  return tv.type;
})

//Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
//Omgezet naar functie ivm bonusopdracht

function soldOut() {
  const result = inventory.filter((tv)=>{
    return tv.originalStock===tv.sold;
  })
  console.log (result);
}


//Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
//Omgezet naar functie ivm bonusopdracht

function hasAmbiLight() {
  console.log(inventory.filter((tv)=>{
    return tv.options.ambiLight;
  }));
}

//Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

function sortTV() {
  const result = inventory.sort((a,b) => {
    return a.price-b.price;
  })
  console.log(result);
  return result;
}

//Opdracht 3a: Wat is onze doelopbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.

function calculateSum() {
  let earningsTotal = 0;
  for (let i = 0; i < inventory.length; i++) {
    let tv = inventory[i];
    let earnings = tv.originalStock * tv.price;
    earningsTotal = earningsTotal + earnings;
  }
  return earningsTotal;
}

const earningsGoal=document.createElement("p");
earningsGoal.setAttribute("id", "earnings-goal");
earningsGoal.textContent="The targeted earnings are: " + calculateSum() + " euros.";
page.appendChild(earningsGoal);

//Opdracht 3b: Hoeveel hebben we tot nu toe verdiend? Bereken hoeveel we tot nu toe verdiend hebben met het aantal verkochte tv's. Geef dit in het groen weer op de pagina.

function earningsCurrent() {
  let earningsTotal=0;
  for (let i = 0; i < inventory.length; i++) {
    let tv=inventory[i];
    let earnings=tv.sold * tv.price;
    earningsTotal=earningsTotal+earnings;
  }
  return earningsTotal;
}

// [ ] Voeg een nieuw element toe met deze functie en pas de styling aan in css
const currentEarnings=document.createElement("p");
currentEarnings.textContent="The current earnings are: " + earningsCurrent() + " euros.";
currentEarnings.setAttribute("id", "earnings")
page.appendChild(currentEarnings);

//Opdracht 4: Geef de typenamen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit. Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

const tv1=inventory.find((tv)=>{
  return tv.type==='43PUS6504/12'
})

const tv2=inventory.find((tv)=> {
  return tv.type === 'NH3216SMART'
})

const tv1tv2=document.createElement("p")
tv1tv2.setAttribute("id", "assignment4")
tv1tv2.textContent="TV number 1 is: " + tv1.type + " and TV number  2 is: "+ tv2.type;
page.appendChild(tv1tv2);

//Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
function printTV (tvname) {
  for (let i = 0; i < inventory.length; i++) {
    let tv=inventory[i];
    if (tv.name===tvname) {
      return tv.brand + " " + tv.type + " - " + tv.name;
    }
  }
}

//Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
function formatPrice(price) {
  return "€" + price + ",-"
}

//Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Dus een input van [32] geeft 32 inch (81 cm) en een input van [43, 50, 55, 58] geeft 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken, zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.
function screenSize(sizesArray) {
  let separator = " | "
  let result = ""
  for (let i = 0; i < sizesArray.length; i++) {
    let element = sizesArray[i];
    result = result + element + " inch " + "(" + Math.round((element * 2.54)) + " cm)";
    if (sizesArray.length > 1 && i < sizesArray.length - 1) {
      result = result + separator;
    }
  }
  return result;
}

//Opdracht 5d: Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
const typeinfo = document.createElement("p");
typeinfo.setAttribute("id", "typeinfo");
const priceinfo = document.createElement("p");
priceinfo.setAttribute("id", "priceinfo");
const screeninfo = document.createElement("p");
screeninfo.setAttribute("id", "screeninfo");
typeinfo.textContent=printTV(inventory[0].name);
priceinfo.textContent=formatPrice(inventory[0].price);
screeninfo.textContent=screenSize(inventory[0].availableSizes);

const container=document.getElementById("container");
container.appendChild(typeinfo);
container.appendChild(priceinfo);
container.appendChild(screeninfo);

//Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

function tvgenerator(inventory) {
  for (let i = 0; i < inventory.length; i++) {
    let tv = inventory[i];
    const tvName=document.createElement("p");
    const overview=document.getElementById("overview");
    tvName.textContent=printTV(tv.name);
    overview.appendChild(tvName);
    const tvPrice=document.createElement("p");
    tvPrice.textContent=formatPrice(tv.price);
    overview.appendChild(tvPrice);
    const tvScreen=document.createElement("p");
    tvScreen.textContent=screenSize(tv.availableSizes);
    overview.appendChild(tvScreen);
  }
}

tvgenerator(inventory);
