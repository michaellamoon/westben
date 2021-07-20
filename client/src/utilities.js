// Points for fingers
const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};


const style = {
  0: { color: "yellow", size: 6 },
  1: { color: "yellow", size: 2 },
  2: { color: "yellow", size: 4 },
  3: { color: "yellow", size: 2 },
  4: { color: "yellow", size: 2 },
  5: { color: "yellow", size: 4 },
  6: { color: "yellow", size: 2 },
  7: { color: "yellow", size: 2 },
  8: { color: "yellow", size: 2 },
  9: { color: "yellow", size: 4 },
  10: { color: "yellow", size: 2 },
  11: { color: "yellow", size: 2 },
  12: { color: "yellow", size: 2 },
  13: { color: "yellow", size: 4 },
  14: { color: "yellow", size: 2 },
  15: { color: "yellow", size: 2 },
  16: { color: "yellow", size: 2 },
  17: { color: "yellow", size: 4 },
  18: { color: "yellow", size: 2 },
  19: { color: "yellow", size: 2 },
  20: { color: "yellow", size: 2 },
};

// Drawing function
export const drawHand = (predictions, ctx) => {
  // Check if we have predictions
  if (predictions.length > 0) {
    // Loop through each prediction
    predictions.forEach((prediction) => {
      // Grab landmarks
      const landmarks = prediction.landmarks;

      // Loop through fingers
      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
        let finger = Object.keys(fingerJoints)[j];
        //  Loop through pairs of joints
        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
          // Get pairs of joints
          const firstJointIndex = fingerJoints[finger][k];
          const secondJointIndex = fingerJoints[finger][k + 1];

          // Draw path
          ctx.beginPath();
          ctx.moveTo(
            landmarks[firstJointIndex][0],
            landmarks[firstJointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondJointIndex][0],
            landmarks[secondJointIndex][1]
          );
          ctx.strokeStyle = "black";
          ctx.lineWidth = 4;
          ctx.stroke();
        }

      // Loop through landmarks and draw em
      for (let i = 0; i < landmarks.length; i++) {
        // Get x point
        const x = landmarks[i][0];
        // Get y point
        const y = landmarks[i][1];
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);

        // Set line color
        ctx.fillStyle = style[i]["color"];
        ctx.fill();
        }
      }

//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// finger states
let pinkyDown = false;
let ringDown = false;
let midDown = false;
let indexDown = false;
let thumbup = false;

      //pinky down
      if( landmarks[20][1] > landmarks[17][1]){
        //document.getElementById("gesture").innerHTML = "pinky down!";
        pinkyDown = true;
      }
      //ring down
      if( landmarks[16][1] > landmarks[13][1]){
        //document.getElementById("gesture").innerHTML = "ring down!";
        ringDown = true;
      }
      //mid down
      if( landmarks[12][1] > landmarks[9][1]){
        //document.getElementById("gesture").innerHTML = "middle down!";
        midDown = true;
      }
      //index down
      if( landmarks[8][1] > landmarks[5][1]){
        //document.getElementById("gesture").innerHTML = "index down!";
        indexDown = true;
      }


if (!pinkyDown && !ringDown && !midDown && !indexDown){
  document.getElementById("gesture").innerHTML = "A-1";
    //PLAY PAIR
    document.getElementById("playA").click();
    document.getElementById("playB").click();
    //PAUSE OTHERS
    document.getElementById("pauseC").click();   document.getElementById("player3").style.opacity = "0";
    document.getElementById("pauseD").click();   document.getElementById("player4").style.opacity = "0";
    document.getElementById("pauseE").click();   document.getElementById("player5").style.opacity = "0";
    document.getElementById("pauseF").click();   document.getElementById("player6").style.opacity = "0";
//VOL + OPACITY---------
  document.getElementById("volupA").click();
  document.getElementById("player1").style.opacity = "0.9";
  document.getElementById("voldownB").click();
  document.getElementById("player2").style.opacity = "0.3";
}
if (pinkyDown && ringDown && midDown && indexDown){
  if( landmarks[5][1] > landmarks[0][1]){
    document.getElementById("gesture").innerHTML = "A-2";
      //PLAY PAIR
      document.getElementById("playA").click();
      document.getElementById("playB").click();
      //PAUSE OTHERS
      document.getElementById("pauseC").click();   document.getElementById("player3").style.opacity = "0";
      document.getElementById("pauseD").click();   document.getElementById("player4").style.opacity = "0";
      document.getElementById("pauseE").click();   document.getElementById("player5").style.opacity = "0";
      document.getElementById("pauseF").click();   document.getElementById("player6").style.opacity = "0";
//VOL + OPACITY---------
    document.getElementById("volupB").click();
    document.getElementById("player2").style.opacity = "0.7";
    document.getElementById("voldownA").click();
    document.getElementById("player1").style.opacity = "0.4";
  }




  if( landmarks[0][1] > landmarks[5][1]){
    document.getElementById("gesture").innerHTML = "B-3";
      //PLAY PAIR
      document.getElementById("playC").click();
      document.getElementById("playD").click();
      //PAUSE OTHERS
      document.getElementById("pauseA").click();   document.getElementById("player1").style.opacity = "0";
      document.getElementById("pauseB").click();   document.getElementById("player2").style.opacity = "0";
      document.getElementById("pauseE").click();   document.getElementById("player5").style.opacity = "0";
      document.getElementById("pauseF").click();   document.getElementById("player6").style.opacity = "0";
//VOL + OPACITY---------
    document.getElementById("volupC").click();
    document.getElementById("player3").style.opacity = "0.9";
    document.getElementById("voldownD").click();
    document.getElementById("player4").style.opacity = "0.3";
  }
}
if (!pinkyDown && ringDown && midDown && indexDown){
  document.getElementById("gesture").innerHTML = "B-4";
    //PLAY PAIR
    document.getElementById("playC").click();
    document.getElementById("playD").click();
    //PAUSE OTHERS
    document.getElementById("pauseA").click();   document.getElementById("player1").style.opacity = "0";
    document.getElementById("pauseB").click();   document.getElementById("player2").style.opacity = "0";
    document.getElementById("pauseE").click();   document.getElementById("player5").style.opacity = "0";
    document.getElementById("pauseF").click();   document.getElementById("player6").style.opacity = "0";
//VOL + OPACITY---------
  document.getElementById("volupD").click();
  document.getElementById("player4").style.opacity = "0.6";
  document.getElementById("voldownC").click();
  document.getElementById("player3").style.opacity = "0.5";
}





if (!pinkyDown && !ringDown && midDown && !indexDown){
  document.getElementById("gesture").innerHTML = "C-5";

    //PLAY PAIR
    document.getElementById("playE").click();
    document.getElementById("playF").click();
    //PAUSE OTHERS
    document.getElementById("pauseA").click();   document.getElementById("player1").style.opacity = "0";
    document.getElementById("pauseB").click();   document.getElementById("player2").style.opacity = "0";
    document.getElementById("pauseC").click();   document.getElementById("player3").style.opacity = "0";
    document.getElementById("pauseD").click();   document.getElementById("player4").style.opacity = "0";
//VOL + OPACITY---------
  document.getElementById("volupE").click();
  document.getElementById("player5").style.opacity = "0.6";
  document.getElementById("voldownF").click();
  document.getElementById("player6").style.opacity = "0.5";

}
if (pinkyDown && ringDown && midDown && !indexDown){
  document.getElementById("gesture").innerHTML = "C-6";
    //PLAY PAIR
    document.getElementById("playE").click();
    document.getElementById("playF").click();
    //PAUSE OTHERS
    document.getElementById("pauseA").click();   document.getElementById("player1").style.opacity = "0";
    document.getElementById("pauseB").click();   document.getElementById("player2").style.opacity = "0";
    document.getElementById("pauseC").click();   document.getElementById("player3").style.opacity = "0";
    document.getElementById("pauseD").click();   document.getElementById("player4").style.opacity = "0";
//VOL + OPACITY---------
  document.getElementById("volupF").click();
  document.getElementById("player6").style.opacity = "0.6";
  document.getElementById("voldownE").click();
  document.getElementById("player5").style.opacity = "0.5";
}



    });
  }
};
