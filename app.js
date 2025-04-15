"use strict"

const color = document.getElementById("colorTypes");
const width = document.getElementById("width");
const height = document.getElementById("height");
const borderRadius = document.getElementById("borderRadius");
const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (e)=>{

    e.preventDefault()

    console.log(typeof color.value);
    console.log(typeof width.value)
    console.log(height.value)
    console.log(borderRadius.value)

    let div = document.createElement("div");

    div.style.width = width.value + "px";
    div.style.backgroundColor = color.value; // Not color, it's backgroundColor
    div.style.height = height.value + "px";
    div.style.borderRadius = borderRadius.value + "px";


    document.getElementById("div_parent").appendChild(div);
})

