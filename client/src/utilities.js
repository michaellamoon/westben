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
// finger states
let pinkyDown = false;
let ringDown = false;
let midDown = false;
let indexDown = false;


      //pinky down
      if( landmarks[20][1] > landmarks[17][1]){
        document.getElementById("gesture").innerHTML = "pinky down!";
        pinkyDown = true;
      }
      //ring down
      if( landmarks[16][1] > landmarks[13][1]){
        document.getElementById("gesture").innerHTML = "ring down!";
        ringDown = true;
      }
      //mid down
      if( landmarks[12][1] > landmarks[9][1]){
        document.getElementById("gesture").innerHTML = "middle down!";
        midDown = true;
      }
      //index down
      if( landmarks[8][1] > landmarks[5][1]){
        document.getElementById("gesture").innerHTML = "index down!";
        indexDown = true;
      }
      /*L thumb down
      if( landmarks[4][0] > landmarks[1][0]){
        document.getElementById("gesture").innerHTML = "thumb down!";
      }
      */


if (pinkyDown && ringDown && midDown && indexDown){
  document.getElementById("gesture").innerHTML = "THUMBS UP!";
}
if (!pinkyDown && !ringDown && !midDown && !indexDown){
  document.getElementById("gesture").innerHTML = "HIGH FIVE!";
}
if (!pinkyDown && ringDown && midDown && !indexDown){
  document.getElementById("gesture").innerHTML = "ROCK ON!";
}
    });
  }
};
