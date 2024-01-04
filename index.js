let Target = document.getElementById("one");
let Target2 = document.getElementById("two");
let Target3 = document.getElementById("three");


let TotalWords = document.createElement("span");
TotalWords.setAttribute("id","TotalWords");
Target.appendChild(TotalWords);


let TotalCharacters = document.createElement("span");
TotalCharacters.setAttribute("id","TotalCharacters");
Target2.appendChild(TotalCharacters);



let CharactersLeft = document.createElement("span");
CharactersLeft.setAttribute("id","CharactersLeft");
Target3.appendChild(CharactersLeft);


let Textarea = document.getElementById("data");

Textarea.addEventListener("input",updateCounts);

document.getElementById("btn").addEventListener("click",function(){
    Textarea.value = "";
    updateCounts();
});

function updateCounts(){
let maxCharacter = 200;
    let text = Textarea.value;
    text = text.slice(0, maxCharacter);
    let words = text.match(/\b\w+\b/g) || [];
    TotalWords.textContent = words.length;
    TotalCharacters.textContent = text.length;
    CharactersLeft.textContent = `${maxCharacter - text.length}`;
    Textarea.value = text;
}