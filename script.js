var win = 0;
var count = 0;


document.getElementById('rock').addEventListener('click', function() {
    picked('kő');
});
document.getElementById('paper').addEventListener('click', function() {
    picked('papír');
});
document.getElementById('scissor').addEventListener('click', function() {
    picked('olló');
});

function picked(OneOfThree)
{
    var lehet = ["kő","papír", "olló"];
    var random = Math.floor(Math.random() * 3);
    var ellenfel = lehet[random];
    

    if(OneOfThree === "kő" && ellenfel === "olló" || OneOfThree === "papír" && ellenfel === "kő" || OneOfThree === "olló" && ellenfel === "papír")
    {
        win++;
        count++;
        document.getElementById('res').textContent = "Eredmény: Nyertél";
    }
    else if(OneOfThree === "kő" && ellenfel === "papír" || OneOfThree === "papír" && ellenfel === "olló" || OneOfThree === "olló" && ellenfel === "kő")
    {
        count++;
        document.getElementById('res').textContent = "Eredmény: Vesztettél";
    }
    else{
        count++;
        document.getElementById('res').textContent = "Eredmény: Döntetlen";

    }

    var result =  (win/count)*100;
    document.getElementById('percent').textContent = `${result.toPrecision(3)}%`;
    document.getElementById('ellen').textContent = "Ellenfél: " + ellenfel;

}
