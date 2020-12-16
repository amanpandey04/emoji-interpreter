import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "💌": "Love Letter",
  "💣": "Bomb",
  "🛌": "Person in Bed",
  "🗺️": "World Map",
  "🧭": "Compass",
  "🧱": "Brick",
  "💈": "Barber Pole",
  "🦽": "Wheelchair",
  "🛢️": "Oil Drum",
  "🛎️": "Bellhop Bell",
  "🧳": "Luggage",
  "⌛": "Hourglass",
  "⌚": "Watch",
  "⏱️": "Stopwatch"
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [input, setInput] = useState("");

  function inputHandler(e) {
    let userInput = e.target.value;
    if (emojiDictionary[userInput] === undefined) {
      emojiDictionary[userInput] =
        "We don't have this in our database. Please try something else.";
    }
    setInput(emojiDictionary[userInput]);
  }

  function clickHandler(emoji) {
    setInput(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Miscellaneous Object Emojis</h1>
      <input className="input" onChange={inputHandler} />
      <h3>{input}</h3>
      <h2>Emoji List</h2>
      <div>
        {emojiList.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => clickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.4rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
