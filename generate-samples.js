const durations = require('./src/durations.js');
const MelodyQueue = require('./src/MelodyQueue.js');
const waveGenerator = require('./src/WaveGenerator.js');
const note = require('./src/note.js');

let melody1 = new MelodyQueue();
melody1.enqueueTone(durations.Q, note('G4'));
melody1.enqueueTone(durations.Q, note('E4'));
melody1.enqueueTone(durations.Q, note('E4'));
melody1.enqueueTone(durations.Q, note('F4'));
melody1.enqueueTone(durations.Q, note('D4'));
melody1.enqueueTone(durations.Q, note('D4'));
melody1.enqueueTone(durations.E, note('C4'));
melody1.enqueueTone(durations.E, note('E4'));
melody1.enqueueTone(durations.E, note('G4'));
waveGenerator.save('./kotek.wav', melody1);

let melody2 = new MelodyQueue();
melody2.enqueueTone(durations.H, note('C4'));
melody2.enqueueTone(durations.H, note('G4'));
melody2.enqueueTone(durations.E, note('F4'));
melody2.enqueueTone(durations.E, note('E4'));
melody2.enqueueTone(durations.E, note('D4'));
melody2.enqueueTone(durations.H, note('C5'));
melody2.enqueueTone(durations.H, note('G4'));
melody2.enqueueTone(durations.E, note('F4'));
melody2.enqueueTone(durations.E, note('E4'));
melody2.enqueueTone(durations.E, note('D4'));
melody2.enqueueTone(durations.H, note('C5'));
melody2.enqueueTone(durations.H, note('G4'));
melody2.enqueueTone(durations.E, note('F4'));
melody2.enqueueTone(durations.E, note('E4'));
melody2.enqueueTone(durations.E, note('F4'));
melody2.enqueueTone(durations.H, note('D4'));
waveGenerator.save('./starwars.wav', melody2);

let melody3 = new MelodyQueue(durations.HT);
melody3.setAutoPause(durations.HT);
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'), note('G4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
melody3.enqueueTone(durations.E, note('C4'), note('E4'));
for (let i = 0; i < 14; ++i) {
	melody3.enqueueTone(i == 7 ? durations.H : durations.E, [note('B3'), note('D4'), note('E4')]);
}
melody3.setAutoPause(0);
melody3.enqueuePause(durations.T);
melody3.enqueueTone(durations.Q, note('E4'));
melody3.enqueueTone(durations.Q, note('G4'));
melody3.enqueueTone(durations.H, note('A4'));
melody3.enqueuePause(durations.HT);
melody3.enqueueTone(durations.Q, note('A4'));
melody3.enqueueTone(durations.Q, note('B4'));
melody3.enqueueTone(durations.H, note('E4'));
melody3.enqueuePause(durations.HT);
melody3.enqueueTone(durations.Q, note('E4'));
melody3.enqueueTone(durations.Q, note('G4'));
melody3.enqueueTone(durations.H, note('A4'));
melody3.enqueuePause(durations.HT);
melody3.enqueueTone(durations.Q, note('A4'));
melody3.enqueueTone(durations.Q, note('B4'));
melody3.enqueueTone(durations.H, note('E4'));
melody3.enqueuePause(durations.HT);
melody3.enqueueTone(durations.E, note('D4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('D4'));
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, note('D4'));
melody3.enqueueTone(durations.H, note('E4'));
melody3.setAutoPause(durations.HT);
melody3.enqueueTone(durations.E, note('C4'));
melody3.enqueueTone(durations.E, [note('B3'), note('C4')]);
melody3.enqueueTone(durations.E, [note('B3'), note('C4')]);
melody3.enqueueTone(durations.E, [note('A3'), note('C4')]);
melody3.enqueueTone(durations.E, [note('A3'), note('C4')]);
melody3.enqueueTone(durations.E, [note('G3'), note('C4')]);
melody3.enqueueTone(durations.E, [note('C4'), note('F4')]);
melody3.enqueueTone(durations.H, [note('B3'), note('E4')]);
waveGenerator.save('./rocky.wav', melody3);
