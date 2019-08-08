//Start game button
document.getElementById("begin").addEventListener("click", function(){
    document.getElementById("Q1").style.display="inline";
    document.getElementById("A1").style.display="inline";
    document.getElementById("Q2").style.display="inline";
    document.getElementById("A2").style.display="inline";
    document.getElementById("Q3").style.display="inline";
    document.getElementById("A3").style.display="inline";
    document.getElementById("Q4").style.display="inline";
    document.getElementById("A4").style.display="inline";
    document.getElementById("Q5").style.display="inline";
    document.getElementById("A5").style.display="inline";
    document.getElementById("Q6").style.display="inline";
    document.getElementById("A6").style.display="inline";
    document.getElementById("Q7").style.display="inline";
    document.getElementById("A7").style.display="inline";
    document.getElementById("Q8").style.display="inline";
    document.getElementById("A8").style.display="inline";
    document.getElementById("begin").style.display="none";
    document.getElementById("end").style.display="inline";
    document.getElementById("timer_div").style.display="block";

    //Timer Display
    var seconds_left = 30;
    var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML ="Time Left: " + --seconds_left;

    if (seconds_left <= 0)
    {
        clearInterval(interval);
    }
}, 1000);

        //TImed version of submit answers button
        setTimeout(myFunction, 1000 * 30)
        function myFunction() {
            document.getElementById("Q1").style.display="none";
            document.getElementById("A1").style.display="none";
            document.getElementById("Q2").style.display="none";
            document.getElementById("A2").style.display="none";
            document.getElementById("Q3").style.display="none";
            document.getElementById("A3").style.display="none";
            document.getElementById("Q4").style.display="none";
            document.getElementById("A4").style.display="none";
            document.getElementById("Q5").style.display="none";
            document.getElementById("A5").style.display="none";
            document.getElementById("Q6").style.display="none";
            document.getElementById("A6").style.display="none";
            document.getElementById("Q7").style.display="none";
            document.getElementById("A7").style.display="none";
            document.getElementById("Q8").style.display="none";
            document.getElementById("A8").style.display="none";
            document.getElementById("end").style.display="none";
            document.getElementById("timer_div").style.display="none";
    
            //Gets values from all radio buttons
            var Q1 = document.querySelector('input[name="byear"]:checked').value;
            console.log(Q1);
    
            var Q2 = document.querySelector('input[name="flavor"]:checked').value;
            console.log(Q2);
    
            var Q3 = document.querySelector('input[name="nv"]:checked').value;
            console.log(Q3);
    
            var Q4 = document.querySelector('input[name="byear"]:checked').value;
            console.log(Q4);
    
            var Q5 = document.querySelector('input[name="byear"]:checked').value;
            console.log(Q5);
    
            var Q6 = document.querySelector('input[name="byear"]:checked').value;
            console.log(Q6);
    
            var Q7= document.querySelector('input[name="byear"]:checked').value;
            console.log(Q7);
    
            var Q8 = document.querySelector('input[name="byear"]:checked').value;
            console.log(Q8);
    
    
            //Turns values from radio buttons into numeric values
            var N1 = parseInt(Q1);
            console.log(N1);
    
            var N2 = parseInt(Q2);
            console.log(N2);
    
            var N3 = parseInt(Q3);
            console.log(N3);
    
            var N4 = parseInt(Q4);
            console.log(N4);
    
            var N5 = parseInt(Q5);
            console.log(N5);
    
            var N6 = parseInt(Q6);
            console.log(N6);
    
            var N7 = parseInt(Q7);
            console.log(N7);
    
            var N8 = parseInt(Q8);
            console.log(N8);
        
            //Adds radio numeric values together for total correct answer count
            var win = (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8);
            console.log(win);
    
            //Conditions for displaying number of correct answers
            if (win >= 2) {
                document.getElementById("winbox").innerHTML = "You got " + win + " answers correct!";
            } 
    
            else if (win >= 1) {
                document.getElementById("winbox").innerHTML = "You got " + win + " correct answer!";
            } 
    
            else {
                document.getElementById("winbox").innerHTML = "You didn't get any correct answers.";
            };

        }
});

//Submit answers button
document.getElementById("end").addEventListener("click", function end(){
    document.getElementById("Q1").style.display="none";
    document.getElementById("A1").style.display="none";
    document.getElementById("Q2").style.display="none";
    document.getElementById("A2").style.display="none";
    document.getElementById("Q3").style.display="none";
    document.getElementById("A3").style.display="none";
    document.getElementById("Q4").style.display="none";
    document.getElementById("A4").style.display="none";
    document.getElementById("Q5").style.display="none";
    document.getElementById("A5").style.display="none";
    document.getElementById("Q6").style.display="none";
    document.getElementById("A6").style.display="none";
    document.getElementById("Q7").style.display="none";
    document.getElementById("A7").style.display="none";
    document.getElementById("Q8").style.display="none";
    document.getElementById("A8").style.display="none";
    document.getElementById("end").style.display="none";
    document.getElementById("timer_div").style.display="none";

    //Gets values from all radio buttons
    var Q1 = document.querySelector('input[name="byear"]:checked').value;
    console.log(Q1);

    var Q2 = document.querySelector('input[name="flavor"]:checked').value;
    console.log(Q2);

    var Q3 = document.querySelector('input[name="nv"]:checked').value;
    console.log(Q3);

    var Q4 = document.querySelector('input[name="byear"]:checked').value;
    console.log(Q4);

    var Q5 = document.querySelector('input[name="byear"]:checked').value;
    console.log(Q5);

    var Q6 = document.querySelector('input[name="byear"]:checked').value;
    console.log(Q6);

    var Q7= document.querySelector('input[name="byear"]:checked').value;
    console.log(Q7);

    var Q8 = document.querySelector('input[name="byear"]:checked').value;
    console.log(Q8);


    //Turns values from radio buttons into numeric values
    var N1 = parseInt(Q1);
    console.log(N1);

    var N2 = parseInt(Q2);
    console.log(N2);

    var N3 = parseInt(Q3);
    console.log(N3);

    var N4 = parseInt(Q4);
    console.log(N4);

    var N5 = parseInt(Q5);
    console.log(N5);

    var N6 = parseInt(Q6);
    console.log(N6);

    var N7 = parseInt(Q7);
    console.log(N7);

    var N8 = parseInt(Q8);
    console.log(N8);
    
    //Adds radio numeric values together for total correct answer count
    var win = (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8);
    console.log(win);

    //Conditions for displaying number of correct answers
    if (win >= 2) {
        document.getElementById("winbox").innerHTML = "You got " + win + " answers correct!";
    } 

    else if (win >= 1) {
        document.getElementById("winbox").innerHTML = "You got " + win + " correct answer!";
    } 

    else {
        document.getElementById("winbox").innerHTML = "You didn't get any correct answers.";
    };

});
