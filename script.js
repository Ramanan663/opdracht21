const array = [{
        name: "Batman",
        publisher: "DC Comics",
        alter_ego: "Bruce Wayne",
        first_appearance: "Detective Comics #27",
        weight: "210",
    },
    {
        name: "Superman",
        publisher: "DC Comics",
        alter_ego: "Kal-El",
        first_appearance: "Action Comics #1",
        weight: "220",
    },
    {
        name: "Flash",
        publisher: "DC Comics",
        alter_ego: "Jay Garrick",
        first_appearance: "Flash Comics #1",
        weight: "195",
    },
    {
        name: "Green Lantern",
        publisher: "DC Comics",
        alter_ego: "Alan Scott",
        first_appearance: "All-American Comics #16",
        weight: "186",
    },
    {
        name: "Green Arrow",
        publisher: "DC Comics",
        alter_ego: "Oliver Queen",
        first_appearance: "All-American Comics #16",
        weight: "195",
    },
    {
        name: "Wonder Woman",
        publisher: "DC Comics",
        alter_ego: "Princess Diana",
        first_appearance: "The Incredible Hulk #180",
        weight: "165",
    },
    {
        name: "Blue Beetle",
        publisher: "DC Comics",
        alter_ego: "Dan Garret",
        first_appearance: "Mystery Men Comics #1",
        weight: "145",
    },
    {
        name: "Spider Man",
        publisher: "Marvel Comics",
        alter_ego: "Peter Parker",
        first_appearance: "Amazing Fantasy #15",
        weight: "167",
    },
    {
        name: "Captain America",
        publisher: "Marvel Comics",
        alter_ego: "Steve Rogers",
        first_appearance: "Captain America Comics #1",
        weight: "220",
    },
    {
        name: "Iron Man",
        publisher: "Marvel Comics",
        alter_ego: "Tony Stark",
        first_appearance: "Tales of Suspense #39",
        weight: "250",
    },
    {
        name: "Thor",
        publisher: "Marvel Comics",
        alter_ego: "Thor Odinson",
        first_appearance: "Journey into Myster #83",
        weight: "200",
    },
    {
        name: "Hulk",
        publisher: "Marvel Comics",
        alter_ego: "Bruce Banner",
        first_appearance: "The Incredible Hulk #1",
        weight: "1400",
    },
    {
        name: "Wolverine",
        publisher: "Marvel Comics",
        alter_ego: "James Howlett",
        first_appearance: "The Incredible Hulk #180",
        weight: "200",
    },
    {
        name: "Daredevil",
        publisher: "Marvel Comics",
        alter_ego: "Matthew Michael Murdock",
        first_appearance: "Daredevil #1",
        weight: "200",
    },
    {
        name: "Silver Surfer",
        publisher: "Marvel Comics",
        alter_ego: "Norrin Radd",
        first_appearance: "The Fantastic Four #48",
        weight: "unknown",
    },
];
//1
/*
const superHelden = array.map((item) => {
    return item.name;
});
console.log(superHelden);

//2
const lightHelden = array.filter((item1) => {
    return item1.weight < "190";
});
console.log(lightHelden);

//3
const twee100Helden = array.filter((item1) => {
    return item1.weight === "200";
});
const twee100HeldenName = twee100Helden.map((helden) => {
    return helden.name;
});
//console.log( twee100Helden );
console.log(twee100HeldenName);
const combinHero = array
    .filter((item1) => item1.weight === "200")
    .map((item1) => item1.name);
console.log(combinHero);

//4
const comicsHero = array.map((item2) => item2.first_appearance);
console.log(comicsHero);

//5
const ComicsDc = array.filter((item3) => item3.publisher === "Marvel Comics");
console.log(ComicsDc);

//6
const comWeight = array.map((item4) => item4.weight);
console.log(comWeight);*/
/*

const totalComis = array.map((item5) => {
    if (item5.weight !== "unknown") {
        return parseInt(item5.weight, 10);
    } else {
        return 0;
    }
});

console.log(totalComis);
const totatalEweight = totalComis.reduce((w1, w2) => {
    return w1 + w2;
});
console.log(totatalEweight);
//kort
const totalComis = array
    .map((item5) => {
        return item5.weight !== "unknown" ? parseInt(item5.weight, 10) : 0;
    })

.reduce((w1, w2) => {
    return w1 + w2;
});
console.log( totalComis );

//7
const totalMcomis = array
    .map((item5) => {
        return item5.weight !== "unknown" ? parseInt(item5.weight, 10) : 0;
    })

.reduce((w1, w2) => {
    return w1 + w2;
});
console.log(totalMcomis);
*/
//8
const totalComis = array.map((item5) => {
    return item5.weight !== "unknown" ? parseInt(item5.weight, 10) : 0;
});

const max = totalComis.reduce(function(a, b) {
    return Math.max(a, b);
});

console.log("max weight =", max);