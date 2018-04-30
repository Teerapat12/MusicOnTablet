import {UPDATE_NOTES} from '../constant'



const soundObjects = []
for(let i=1;i<=50;i++){
  soundObjects[i] = new Expo.Audio.Sound();
}

async function loadMusic() {
  try {
    console.log("Start loading music");
    // await soundObjects[1].loadAsync(require('../../audio/piano_keys/ff-018.wav'));
    // await soundObjects[2].loadAsync(require('../../audio/piano_keys/ff-019.wav'));
    // await soundObjects[3].loadAsync(require('../../audio/piano_keys/ff-020.wav'));
    // await soundObjects[4].loadAsync(require('../../audio/piano_keys/ff-021.wav'));
    // await soundObjects[5].loadAsync(require('../../audio/piano_keys/ff-022.wav'));
    // await soundObjects[6].loadAsync(require('../../audio/piano_keys/ff-023.wav'));
    // await soundObjects[7].loadAsync(require('../../audio/piano_keys/ff-024.wav'));
    // await soundObjects[8].loadAsync(require('../../audio/piano_keys/ff-025.wav'));
    // await soundObjects[9].loadAsync(require('../../audio/piano_keys/ff-026.wav'));
    // await soundObjects[10].loadAsync(require('../../audio/piano_keys/ff-027.wav'));
    // await soundObjects[11].loadAsync(require('../../audio/piano_keys/ff-028.wav'));
    // await soundObjects[12].loadAsync(require('../../audio/piano_keys/ff-029.wav'));
    // await soundObjects[13].loadAsync(require('../../audio/piano_keys/ff-030.wav'));
    // await soundObjects[14].loadAsync(require('../../audio/piano_keys/ff-031.wav'));
    // await soundObjects[15].loadAsync(require('../../audio/piano_keys/ff-032.wav'));
    // await soundObjects[16].loadAsync(require('../../audio/piano_keys/ff-033.wav'));
    // await soundObjects[17].loadAsync(require('../../audio/piano_keys/ff-034.wav'));
    // await soundObjects[18].loadAsync(require('../../audio/piano_keys/ff-035.wav'));
    // await soundObjects[19].loadAsync(require('../../audio/piano_keys/ff-036.wav'));
    // await soundObjects[20].loadAsync(require('../../audio/piano_keys/ff-037.wav'));
    // await soundObjects[21].loadAsync(require('../../audio/piano_keys/ff-038.wav'));
    // await soundObjects[22].loadAsync(require('../../audio/piano_keys/ff-039.wav'));
    // await soundObjects[23].loadAsync(require('../../audio/piano_keys/ff-040.wav'));
    // await soundObjects[24].loadAsync(require('../../audio/piano_keys/ff-041.wav'));
    // await soundObjects[25].loadAsync(require('../../audio/piano_keys/ff-042.wav'));
    // await soundObjects[26].loadAsync(require('../../audio/piano_keys/ff-043.wav'));
    // await soundObjects[27].loadAsync(require('../../audio/piano_keys/ff-044.wav'));
    // await soundObjects[28].loadAsync(require('../../audio/piano_keys/ff-045.wav'));
    console.log("Download FInished")
  }catch(error){
    console.log(error)
  }
}

loadMusic();


const mapNoteToNum = {
  'C':1,
  'C#':2,
  'D':3,
  'D#':4,
  'E':5,
  'F':6,
  'F#':7,
  'G':8,
  'G#':9,
  'A':10,
  'A#':11,
  'B':12,
}



function noteToFFdapter(newNote){

  // Exx: C0, C1, F4
  const sharp = newNote.length>2? "#" : ""
  const octave= newNote[newNote.length-1]  // Get the number
  const value = mapNoteToNum[newNote[0]+sharp] // Get the value

  const keyNum = octave* 12 + value

  return keyNum
}


async function playSound (newNote) {

  const keyNum = noteToFFdapter(newNote); // Plus starting note here

  //Play sound here
  console.log(newNote);
  console.log(keyNum);



  try {
    console.log("Play sound "+keyNum);

    switch(keyNum) {
      case 1: await soundObjects[1].loadAsync({ uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }); break;
      case 2: await soundObjects[2].loadAsync(require('../../audio/piano_keys/ff-017.wav')); break;
      case 3: await soundObjects[3].loadAsync(require('../../audio/piano_keys/ff-018.wav')); break;
      case 4: await soundObjects[4].loadAsync(require('../../audio/piano_keys/ff-019.wav')); break;
      case 5: await soundObjects[5].loadAsync(require('../../audio/piano_keys/ff-020.wav')); break;
      case 6: await soundObjects[6].loadAsync(require('../../audio/piano_keys/ff-021.wav')); break;
      case 7: await soundObjects[7].loadAsync(require('../../audio/piano_keys/ff-022.wav')); break;
      case 8: await soundObjects[8].loadAsync(require('../../audio/piano_keys/ff-023.wav')); break;
      case 9: await soundObjects[9].loadAsync(require('../../audio/piano_keys/ff-024.wav')); break;
      case 10: await soundObjects[10].loadAsync(require('../../audio/piano_keys/ff-025.wav')); break;
      case 11: await soundObjects[11].loadAsync(require('../../audio/piano_keys/ff-026.wav')); break;
      case 12: await soundObjects[12].loadAsync(require('../../audio/piano_keys/ff-027.wav')); break;
      case 13: await soundObjects[13].loadAsync(require('../../audio/piano_keys/ff-028.wav')); break;
      case 14: await soundObjects[14].loadAsync(require('../../audio/piano_keys/ff-029.wav')); break;
      case 15: await soundObjects[15].loadAsync(require('../../audio/piano_keys/ff-030.wav')); break;
      case 16: await soundObjects[16].loadAsync(require('../../audio/piano_keys/ff-031.wav')); break;
      case 17: await soundObjects[17].loadAsync(require('../../audio/piano_keys/ff-032.wav')); break;
      case 18: await soundObjects[18].loadAsync(require('../../audio/piano_keys/ff-033.wav')); break;
      case 19: await soundObjects[19].loadAsync(require('../../audio/piano_keys/ff-034.wav')); break;
      case 20: await soundObjects[20].loadAsync(require('../../audio/piano_keys/ff-035.wav')); break;
      case 21: await soundObjects[21].loadAsync(require('../../audio/piano_keys/ff-036.wav')); break;
      case 22: await soundObjects[22].loadAsync(require('../../audio/piano_keys/ff-037.wav')); break;
      case 23: await soundObjects[23].loadAsync(require('../../audio/piano_keys/ff-038.wav')); break;
      case 24: await soundObjects[24].loadAsync(require('../../audio/piano_keys/ff-039.wav')); break;
      case 25: await soundObjects[25].loadAsync(require('../../audio/piano_keys/ff-040.wav')); break;
      case 26: await soundObjects[26].loadAsync(require('../../audio/piano_keys/ff-041.wav')); break;
      case 27: await soundObjects[27].loadAsync(require('../../audio/piano_keys/ff-042.wav')); break;
      case 28: await soundObjects[28].loadAsync(require('../../audio/piano_keys/ff-043.wav')); break;
      case 29: await soundObjects[29].loadAsync(require('../../audio/piano_keys/ff-044.wav')); break;
      case 30: await soundObjects[30].loadAsync(require('../../audio/piano_keys/ff-045.wav')); break;
      case 31: await soundObjects[31].loadAsync(require('../../audio/piano_keys/ff-046.wav')); break;
      case 32: await soundObjects[32].loadAsync(require('../../audio/piano_keys/ff-047.wav')); break;
      case 33: await soundObjects[33].loadAsync(require('../../audio/piano_keys/ff-048.wav')); break;
      case 34: await soundObjects[34].loadAsync(require('../../audio/piano_keys/ff-049.wav')); break;
      case 35: await soundObjects[35].loadAsync(require('../../audio/piano_keys/ff-050.wav')); break;
      case 36: await soundObjects[36].loadAsync(require('../../audio/piano_keys/ff-051.wav')); break;
      case 37: await soundObjects[37].loadAsync(require('../../audio/piano_keys/ff-052.wav')); break;
      case 38: await soundObjects[38].loadAsync(require('../../audio/piano_keys/ff-053.wav')); break;
      case 39: await soundObjects[39].loadAsync(require('../../audio/piano_keys/ff-054.wav')); break;
      case 40: await soundObjects[40].loadAsync(require('../../audio/piano_keys/ff-055.wav')); break;
      case 41: await soundObjects[41].loadAsync(require('../../audio/piano_keys/ff-056.wav')); break;
      case 42: await soundObjects[42].loadAsync(require('../../audio/piano_keys/ff-057.wav')); break;
      case 43: await soundObjects[43].loadAsync(require('../../audio/piano_keys/ff-058.wav')); break;
      case 44: await soundObjects[44].loadAsync(require('../../audio/piano_keys/ff-059.wav')); break;
    }

    soundObjects[keyNum].playFromPositionAsync(0);
    // Your sound is playing!
  } catch (error) {
    // An error occurred!
    // console.log(error);
    soundObjects[keyNum].playFromPositionAsync(0);
  }
}

export function updateNotes(newNote){
  return function (dispatch) {

    playSound(newNote);

    dispatch({
      type: UPDATE_NOTES,
      payload: newNote
    });
  }

}
