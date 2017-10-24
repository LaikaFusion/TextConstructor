//the currently selected letter for editing
let editLetter="";
let editLetterID;

function editLetterSwap(idofletter){
    editLetter = document.getElementById(idofletter).innerHTML;
    editLetterID = idofletter;
    document.getElementById('currentEditLetter').innerHTML = editLetter ;
    
 }

// for redisplaying what's typed in the text box
let inputBox = document.getElementById("textInput");

inputBox.onkeyup  = function(){ 
    let inputSplit = inputBox.value.split("");      
    let outputString = "";
    for(i=0; i <inputSplit.length; i++){
        outputString += "<span id="+i+" onclick='editLetterSwap("+i+")'>"+inputSplit[i]+"</span>";
    }
    if (inputSplit.length === 0){ 
        editLetter="";
        document.getElementById('currentEditLetter').innerHTML = editLetter ;        
        outputString = "&nbsp;" 
    }
    document.getElementById('textOutput').innerHTML = outputString ;
}



//sets up an array of arrays filled with the unicode combining characters
const combineArray = function(){
    let holdingArray = [];
    for (i=0; i < 7; i++){
        innerArray = [];
        for (r=0; r < 16; r++){
            hexNum = r.toString(16);
            innerArray.push ("&#x3"+i+ hexNum + ";");
        }
        holdingArray.push(innerArray);
    }
    return holdingArray;
}

//constructs an html table based on the combineArray arrays. Realized after I wrote it that I couldn't reference combineArray

let tableConstructed = function(combineArray){
    let table = "<table ><thead><tr><td colspan =" + combineArray[0].length + "> Standard set (Will work in most places) </td></tr></thead><tbody>";
    for(i=0; i < combineArray.length; i++){
        table += "<tr>";
        for (x=0; x < combineArray[i].length; x++){
            table += "<td id= "+ i + x +" onclick=zalgolator("+i+ ","+ x +")>";
            table += combineArray[i][x];
            table += "</td>";
        }
        table += "</tr>";
    }
    table += "</tbody></table";
    return table;

}

document.getElementById('combinedCharArray').innerHTML = tableConstructed(combineArray());

//this is where the where shit is added to the editable letter

function zalgolator(charToAddRow, charToAddColumn){
    if (editLetter===""){return null;};
    editLetter += combineArray()[charToAddRow][charToAddColumn];
    document.getElementById('currentEditLetter').innerHTML = editLetter ;
    document.getElementById(editLetterID).innerHTML = editLetter;
    let newOutput = "";
    for (i = 0; i < document.getElementById('textOutput').getElementsByTagName('span').length; i++){
        console.log (  document.getElementById('textOutput').getElementsByTagName('span')[i].innerHTML);
        newOutput += document.getElementById('textOutput').getElementsByTagName('span')[i].innerHTML;
    }
    console.log (newOutput);
    document.getElementById("textInput").value = newOutput;
}