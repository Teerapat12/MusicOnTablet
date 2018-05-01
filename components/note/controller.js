

export function playNotes(notes){
  console.log(notes);
  const maxIndex = Math.max(...notes.map(note=>note.index));
  for(let i=0;i<=maxIndex;i++){
    // Get all notes with index == i
    console.log(i);
    const curNotes = notes.filter(note=>note.index==i)

    setTimeout(()=>playSoundFromNotes(curNotes,i),
      i*1000
    )
  }
}


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


const soundObjects = [];

async function playSoundFromNotes (curNotes,j) {


  for(let i=0;i<curNotes.length;i++){
    const soundObject = new Expo.Audio.Sound();
    console.log(noteToFFdapter(curNotes[i].key));
    switch(noteToFFdapter(curNotes[i].key)) {
      case 1: await soundObject.loadAsync(require('../../audio/piano_keys/ff-016.wav')); break;
      case 2: await soundObject.loadAsync(require('../../audio/piano_keys/ff-017.wav')); break;
      case 3: await soundObject.loadAsync(require('../../audio/piano_keys/ff-018.wav')); break;
      case 4: await soundObject.loadAsync(require('../../audio/piano_keys/ff-019.wav')); break;
      case 5: await soundObject.loadAsync(require('../../audio/piano_keys/ff-020.wav')); break;
      case 6: await soundObject.loadAsync(require('../../audio/piano_keys/ff-021.wav')); break;
      case 7: await soundObject.loadAsync(require('../../audio/piano_keys/ff-022.wav')); break;
      case 8: await soundObject.loadAsync(require('../../audio/piano_keys/ff-023.wav')); break;
      case 9: await soundObject.loadAsync(require('../../audio/piano_keys/ff-024.wav')); break;
      case 10: await soundObject.loadAsync(require('../../audio/piano_keys/ff-025.wav')); break;
      case 11: await soundObject.loadAsync(require('../../audio/piano_keys/ff-026.wav')); break;
      case 12: await soundObject.loadAsync(require('../../audio/piano_keys/ff-027.wav')); break;
      case 13: await soundObject.loadAsync(require('../../audio/piano_keys/ff-028.wav')); break;
      case 14: await soundObject.loadAsync(require('../../audio/piano_keys/ff-029.wav')); break;
      case 15: await soundObject.loadAsync(require('../../audio/piano_keys/ff-030.wav')); break;
      case 16: await soundObject.loadAsync(require('../../audio/piano_keys/ff-031.wav')); break;
      case 17: await soundObject.loadAsync(require('../../audio/piano_keys/ff-032.wav')); break;
      case 18: await soundObject.loadAsync(require('../../audio/piano_keys/ff-033.wav')); break;
      case 19: await soundObject.loadAsync(require('../../audio/piano_keys/ff-034.wav')); break;
      case 20: await soundObject.loadAsync(require('../../audio/piano_keys/ff-035.wav')); break;
      case 21: await soundObject.loadAsync(require('../../audio/piano_keys/ff-036.wav')); break;
      case 22: await soundObject.loadAsync(require('../../audio/piano_keys/ff-037.wav')); break;
      case 23: await soundObject.loadAsync(require('../../audio/piano_keys/ff-038.wav')); break;
      case 24: await soundObject.loadAsync(require('../../audio/piano_keys/ff-039.wav')); break;
      case 25: await soundObject.loadAsync(require('../../audio/piano_keys/ff-040.wav')); break;
      case 26: await soundObject.loadAsync(require('../../audio/piano_keys/ff-041.wav')); break;
      case 27: await soundObject.loadAsync(require('../../audio/piano_keys/ff-042.wav')); break;
      case 28: await soundObject.loadAsync(require('../../audio/piano_keys/ff-043.wav')); break;
      case 29: await soundObject.loadAsync(require('../../audio/piano_keys/ff-044.wav')); break;
      case 30: await soundObject.loadAsync(require('../../audio/piano_keys/ff-045.wav')); break;
      case 31: await soundObject.loadAsync(require('../../audio/piano_keys/ff-046.wav')); break;
      case 32: await soundObject.loadAsync(require('../../audio/piano_keys/ff-047.wav')); break;
      case 33: await soundObject.loadAsync(require('../../audio/piano_keys/ff-048.wav')); break;
      case 34: await soundObject.loadAsync(require('../../audio/piano_keys/ff-049.wav')); break;
      case 35: await soundObject.loadAsync(require('../../audio/piano_keys/ff-050.wav')); break;
      case 36: await soundObject.loadAsync(require('../../audio/piano_keys/ff-051.wav')); break;
      case 37: await soundObject.loadAsync(require('../../audio/piano_keys/ff-052.wav')); break;
      case 38: await soundObject.loadAsync(require('../../audio/piano_keys/ff-053.wav')); break;
      case 39: await soundObject.loadAsync(require('../../audio/piano_keys/ff-054.wav')); break;
      case 40: await soundObject.loadAsync(require('../../audio/piano_keys/ff-055.wav')); break;
      case 41: await soundObject.loadAsync(require('../../audio/piano_keys/ff-056.wav')); break;
      case 42: await soundObject.loadAsync(require('../../audio/piano_keys/ff-057.wav')); break;
      case 43: await soundObject.loadAsync(require('../../audio/piano_keys/ff-058.wav')); break;
      case 44: await soundObject.loadAsync(require('../../audio/piano_keys/ff-059.wav')); break;
      case 45: await soundObject.loadAsync(require('../../audio/piano_keys/ff-060.wav')); break;
      case 46: await soundObject.loadAsync(require('../../audio/piano_keys/ff-061.wav')); break;
      case 47: await soundObject.loadAsync(require('../../audio/piano_keys/ff-062.wav')); break;
      case 48: await soundObject.loadAsync(require('../../audio/piano_keys/ff-063.wav')); break;
    }
    console.log(curNotes[i].key);

    soundObject.playFromPositionAsync(0)
    soundObjects.push(soundObject)

    if(soundObjects.length>8){
      soundObjects[soundObjects.length-7].unloadAsync();
    }
  }

  // curNotes.forEach(note => soundObject.playFromPositionAsync(0));
}