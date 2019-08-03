var openCards = 0;
var points = 0;
document.getElementById("points").innerHTML = points;





function startTimer() {
    var date = new Date();
    var future = new Date();
    future.setMinutes(date.getMinutes() + 3);

    var x = setInterval(function() {
        var date = new Date();
        var distance = future - date;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = +minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "GAME OVER";
        }

    }, 1000);
}

document.getElementById("play").onclick = startTimer;


$(".card").click(function() {


    if (openCards >= 2) {

        $(".card").removeClass('cardOpen');

        $(this).addClass('cardOpen');
        openCards = 1;

    } else {
        $(this).addClass('cardOpen');
        openCards++;


    }
    if (openCards == 2) {
        if ($($(".cardOpen")[0]).find("img")[0].src == $($(".cardOpen")[1]).find("img")[0].src) {

            points++;

            // const openCards = document.querySelectorAll(".cardOpen");
            // openCards.classList.add('correct');
            $('.cardOpen').addClass('correct');



            document.getElementById("points").innerHTML = points;
            if (points == 6) {
                alert("YOU WON");
            }

        }
    }


});


//const array = document.querySelectorAll(".card");


//? AddCloseOnClick

var imgArray = [];
var max = 12;

for (i = 0; i < (max / 2); i++) {
    imgArray[i] = new Image();
    if (i == 5)
        imgArray[i].src = 'images/frontCard' + (i + 1) + '.png';
    else
        imgArray[i].src = 'images/frontCard' + (i + 1) + '.jpg';
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var randomArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
randomArray = shuffle(randomArray);

for (i = 0; i < max; i++) {
    document.getElementById("image" + i).src = imgArray[randomArray[i]].src;
}


// $('#fullWindow').click(function() {
//     window.open("https://www.w3schools.com");
// });