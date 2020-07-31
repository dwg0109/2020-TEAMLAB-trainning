"use strict";

class Item{
  constructor(type, gender, size, color, img){
    this.type = type;
    this.gender = gender;
    this.size = size;
    this.color = color;
    this.img = img;
  }
}

const items = [
  new Item("tshirt", "Male", "Large", "blue", "img/blue_t.png"),
  new Item("tshirt", "Male", "Large", "yellow", "img/yellow_t.png"),
  new Item("tshirt", "Male", "Large", "pink", "img/pink_t.png"),
  new Item("pants", "Male", "Large", "blue", "img/blue_p.png"),
  new Item("pants", "Male", "Large", "yellow", "img/yellow_p.png"),
  new Item("pants", "Male", "Large", "pink", "img/pink_p.png"),
  new Item("skirt", "Female", "Large", "blue", "img/blue_s.png"),
  new Item("skirt", "Female", "Large", "yellow", "img/yellow_s.png"),
  new Item("skirt", "Female", "Large", "pink", "img/pink_s.png"),
];

function display(items){
  const container = document.querySelector('.items');
  let result = "";
  for (let i=0; i<items.length; i++){
    result += `<li class="item"><img src="${items[i].img}" alt="${items[i].type}" class="main-img">${items[i].gender}, ${items[i].size} </li>`;
  container.innerHTML = result;
  }
}

display(items);

document.getElementById("logo").addEventListener("click", function(){
  display(items);
});

document.getElementById("tbutton").addEventListener("click", function(){
  const tshirt = items.filter((item) => item.type === "tshirt");
  display(tshirt);
});

document.getElementById("pbutton").addEventListener("click", function(){
  const pants = items.filter((item) => item.type === "pants");
  display(pants);
});

document.getElementById("sbutton").addEventListener("click", function(){
  const skirt = items.filter((item) => item.type === "skirt");
  display(skirt);
});

document.getElementById("blue-btn").addEventListener("click", function(){
  const blue = items.filter((item) => item.color === "blue");
  display(blue);
});

document.getElementById("yellow-btn").addEventListener("click", function(){
  const yellow = items.filter((item) => item.color === "yellow");
  display(yellow);
});

document.getElementById("pink-btn").addEventListener("click", function(){
  const pink = items.filter((item) => item.color === "pink");
  display(pink);
});
