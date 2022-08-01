const Pak= document.querySelector('#Pak');
const Ind= document.querySelector('#Ind');
const Sri= document.querySelector('#Sri');

document.querySelector('#Pak').addEventListener('click',ShowPak);
document.querySelector('#Ind').addEventListener('click',ShowInd);
document.querySelector('#Sri').addEventListener('click',ShowSri);

function ShowPak(){
    if(Pak.classList.contains('winner')){
        document.querySelector('#Image').classList.toggle('hidden');
    }
    else{
        alert("Wrong Answer!");
    }
}
function ShowInd(){
    if(Ind.classList.contains('winner')){
        document.querySelector('#Image').classList.toggle('hidden');
    }
    else{
        alert("Wrong Answer!");
    }
}
function ShowSri(){
    if(Sri.classList.contains('winner')){
        document.querySelector('#Image').classList.toggle('hidden');
    }
    else{
        alert("Wrong Answer!");
    }
}
