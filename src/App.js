import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activeKey, setActiveKey] = useState('');
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      console.log(event.key);
      playSound(event.key.toUpperCase())
    })
  }, {})

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      id: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      id: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      id: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      id: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      id: "Heater-6",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      id: "Dsc_Oh",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      id: "Kick_n_Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      id: "RP4_KICK_1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      id: "Cev_H2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector)
  }
   

  return (
    <div className="App">
      <div id='drum-machine'>
        <h1>Simple Drum Machine</h1>
        <div id='display'>
          <h3>You pressed {activeKey}</h3>
        </div>
        <div className='drum-pads'>
          {drumPads.map((drumPad) => (
          <div 
            key={drumPad.src}
            onClick={() => {
              playSound(drumPad.text)
              }} className="drum-pad" 
              id={drumPad.src}
              >
              {drumPad.text}
              <audio 
              className='clip' 
              id={drumPad.text} 
              src={drumPad.src}
              ></audio>
            </div>))}
          </div>
      </div> 
    </div>
  );
}

export default App;
