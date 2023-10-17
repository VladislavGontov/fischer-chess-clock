    let firstPlayer = parseInt(document.querySelector("#initial-time").value)*60;
    let secondPlayer = parseInt(document.querySelector("#initial-time").value)*60;

    let addTime = parseInt(document.querySelector("#add-time").value);

    let firstPlayerTimer = false;
    let secondPlayerTimer = false;

    let startedFirst = false;
    let startedSecond = false;

    document.querySelector(".first-player").innerHTML = timeFormat(firstPlayer);
    document.querySelector(".second-player").innerHTML = timeFormat(secondPlayer);

    let over = false;

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent)) {
        document.querySelector(".nomobile").classList.remove("hide");
    }

    function startFirstPlayer(){
        started = true;
        if(firstPlayerTimer==false&&over==false){
        document.querySelector(".pause").classList.remove("pause-activated");
        document.querySelector(".time").classList.add("hide");
        playSound();
            if(startedSecond===true){
                secondPlayer += addTime;
                document.querySelector(".second-player").innerHTML = timeFormat(secondPlayer);
            }
            startedSecond = true;
            document.querySelector(".first-player").classList.remove("noactive");
            document.querySelector(".second-player").classList.add("noactive");
            firstPlayerTimer = setInterval(()=>{
                if(firstPlayer <= 0) {
                    document.querySelector(".first-player").innerHTML = "Time is Over!";
                    over = true;
                    playSoundOver();
                }else{
                    firstPlayer = firstPlayer - 1;
                    document.querySelector(".first-player").innerHTML = timeFormat(firstPlayer);
                }
            }, 1000);
        }
    }

    function stopFirstPlayer(){
        clearInterval(firstPlayerTimer);
        firstPlayerTimer = false;
    }

    function startSecondPlayer(){
        if(secondPlayerTimer==false&&over==false){
        document.querySelector(".time").classList.add("hide");
        playSound();
            if(startedFirst===true){
                firstPlayer += addTime;
                document.querySelector(".first-player").innerHTML = timeFormat(firstPlayer);
            }
            startedFirst = true;
            document.querySelector(".second-player").classList.remove("noactive");
            document.querySelector(".first-player").classList.add("noactive");
            secondPlayerTimer = setInterval(()=>{
                if(secondPlayer <= 0) {
                    document.querySelector(".second-player").innerHTML = "Time is Over!";
                    over = true;
                    playSoundOver();
                }else{
                    secondPlayer = secondPlayer - 1;
                    document.querySelector(".second-player").innerHTML = timeFormat(secondPlayer);                
                }
            }, 1000);
        }
    }

    function stopSecondPlayer(){
        clearInterval(secondPlayerTimer);
        secondPlayerTimer = false;
    }

    function timeFormat(number){
    return `${Math.floor(number/60)}:${(number%60) < 10 ? "0"+number%60 : number%60}`
    }

    function startPause(){
        if(over == false){
            document.querySelector(".time").classList.remove("hide");
            stopSecondPlayer();
            stopFirstPlayer();
            firstPlayerTimer = false;
            secondPlayerTimer = false;
            
            startedFirst = false;
            startedSecond = false;
            document.querySelector(".second-player").classList.add("noactive");
            document.querySelector(".first-player").classList.add("noactive");
        }
    }

    function reload(){
            document.querySelector(".time").classList.remove("hide");
            stopSecondPlayer();
            stopFirstPlayer();
            firstPlayer = parseInt(document.querySelector("#initial-time").value)*60;
            secondPlayer = parseInt(document.querySelector("#initial-time").value)*60;

            addTime = parseInt(document.querySelector("#add-time").value);

            firstPlayerTimer = false;
            secondPlayerTimer = false;

            startedFirst = false;
            startedSecond = false;

            document.querySelector(".first-player").innerHTML = timeFormat(firstPlayer);
            document.querySelector(".second-player").innerHTML = timeFormat(secondPlayer);

            document.querySelector(".second-player").classList.add("noactive");
            document.querySelector(".first-player").classList.add("noactive");
            over = false;
            document.querySelector('.window-reload').classList.add('hide')
    }

    function change(){
        firstPlayer = parseInt(document.querySelector("#initial-time").value)*60;
        secondPlayer = parseInt(document.querySelector("#initial-time").value)*60;
        if(Number.isInteger(firstPlayer)&&Number.isInteger(secondPlayer)){
            document.querySelector(".first-player").innerHTML = timeFormat(firstPlayer);
            document.querySelector(".second-player").innerHTML = timeFormat(secondPlayer);
        }else{
            firstPlayer = 0;
            secondPlayer = 0;
            document.querySelector(".first-player").innerHTML = "0:00";
            document.querySelector(".second-player").innerHTML = "0:00";
        }
        addTime = parseInt(document.querySelector("#add-time").value);
    }

    function playSound(){
        new Audio('src\\click.wav').play();
    }

    function playSoundOver(){
        new Audio('src\\over.wav').play();
    }