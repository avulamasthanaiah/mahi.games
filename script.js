const images = [

"🦁",
"🐶",
"🐱",
"🐼",
"🐸",
"🐰",
"🦜",
"🐧",
"🦄",
"🦋",
"🐢",
"🚗",
"🚕",
"🚓",
"🚒",
"🚀",
"✈️",
"🚜",
"🍎",
"🍌",
"🍉",
"🍕",
"🍔",
"🍩",
"🎈",
"🎉",
"⚽",
"🏀",
"🚲",
"🌈"

];

document.addEventListener("keydown",function(e){

    let emoji = document.createElement("div");

    emoji.className="image";

    emoji.innerHTML = images[Math.floor(Math.random()*images.length)];

    emoji.style.left=Math.random()*(window.innerWidth-100)+"px";

    emoji.style.top="-50px";

    document.body.appendChild(emoji);

    setTimeout(function(){

        emoji.remove();

    },3000);

});
