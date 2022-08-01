const contestants=document.querySelectorAll('.contestant'); //select all with contestant class
Array.from(contestants).forEach(element=>element.addEventListener('click',checkForWinner)); //applies addEventListener to all elements possible in contestant Thus uses "ARRAY.FROM"
function checkForWinner(click){
    if(click.target.classList.contains('winner')){
        document.querySelector('#Image').classList.toggle('hidden');
    }
    else{
        alert("Wrong");
    }
}