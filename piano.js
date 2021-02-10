
 document.addEventListener('keydown', event => {
    if (event.code === "KeyA" ) {
     var myAudioA = new Audio("A.mp3");
     myAudioA.play();
    } else if (event.code === "KeyS") {
     var myAudioS = new Audio("S.mp3");
     myAudioS.play();
   } else if (event.code === "KeyD") {
     var myAudioD = new Audio("D.mp3");
     myAudioD.play();
   } else if (event.code === "KeyF") {
     var myAudioF = new Audio("F.mp3");
     myAudioF.play();
   } else if (event.code === "KeyG") {
     var myAudioG = new Audio("G.mp3");
     myAudioG.play();
   } else if (event.code ===  "KeyH") {
     var myAudioH = new Audio("H.mp3");
     myAudioH.play();
   } else if (event.code === "KeyJ") {
     var myAudioJ = new Audio("J.mp3");
     myAudioJ.play();
   } else {
    console.log("Warning")
   }})
   