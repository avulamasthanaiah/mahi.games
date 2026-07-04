const map = {
    "A": "🍎",   // Apple
    "B": "🏐",   // Ball
    "C": "🐱",   // Cat
    "D": "🐶",   // Dog
    "E": "🐘",   // Elephant
    "F": "🐟",   // Fish
    "G": "🍇",   // Grapes
    "H": "🐔",   // Hen
    "I": "🍦",   // Ice Cream
    "J": "🫗",   // Jug
    "K": "🪁",   // Kite
    "L": "🦁",   // Lion
    "M": "🐒",   // Monkey
    "N": "🪺",   // Nest
    "O": "🍊",   // Orange
    "P": "🦚",   // Peacock
    "Q": "👑",   // Queen
    "R": "🌹",   // Rose
    "S": "🦢",   // Swan
    "T": "☎️",   // Telephone
    "U": "☂️",   // Umbrella
    "V": "🚐",   // Van
    "W": "⌚",   // Watch
    "X": "🎼",   // Xylophone
    "Y": "⛵",   // Yacht
    "Z": "🦓"    // Zebra
};

document.addEventListener("keydown",function(e){

    const key=e.key.toUpperCase();

    document.getElementById("letter").innerHTML="You Pressed : "+key;

    const emoji=map[key] || "❤️";

    const div=document.createElement("div");

    div.className="item";

    div.innerHTML=emoji;

    div.style.left=Math.random()*(window.innerWidth-150)+"px";

    div.style.top=Math.random()*(window.innerHeight-250)+120+"px";

    document.body.appendChild(div);

    createParticles(div.offsetLeft+60,div.offsetTop+60);

    setTimeout(()=>{

        div.remove();

    },2500);

});

function createParticles(x,y){

    for(let i=0;i<20;i++){

        let p=document.createElement("div");

        p.className="particle";

        p.style.left=x+"px";

        p.style.top=y+"px";

        p.style.background=randomColor();

        p.style.setProperty("--x",(Math.random()*300-150)+"px");

        p.style.setProperty("--y",(Math.random()*300-150)+"px");

        document.body.appendChild(p);

        setTimeout(()=>p.remove(),1000);

    }

}

function randomColor(){

    const colors=[

    "#ff595e",

    "#ffca3a",

    "#8ac926",

    "#1982c4",

    "#6a4c93",

    "#ffffff"

    ];

    return colors[Math.floor(Math.random()*colors.length)];

}
