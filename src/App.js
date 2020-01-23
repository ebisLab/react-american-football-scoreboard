//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [score, setScore] = useState(0);
const [count, setCount] = useState(0);
const [timer, setTimer] = useState(0);
const [homeScore, setHomeScore] = useState(0);
const [homeTouchDown, setHomeTouchDown] = useState(0);
const [awayScore, setAwayScore] = useState(0);
const [awayTouchDown, setAwayTouchDown] = useState(0);

const getScore = e => {
  setScore(score + 1);
}

const getHomeScore = e =>{
  setHomeScore(homeScore + 3)
}

const getAwayScore = e => {
  setAwayScore(awayScore + 3)
}

const getHomeTouchDown = e =>{
  setHomeTouchDown(homeTouchDown + 7)
}

const getAwayTouchDown = e => {
  setAwayTouchDown(awayTouchDown + 7)
}

// setTimeout(() => {
  
//   setTimer(!timer);
// }, 1000);

useEffect (() =>{
  let id= setInterval(()=>{
    setCount(count + 1);
  }, 1000);
  return () => {clearInterval(id)}
})


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore + homeTouchDown}</div>
          </div>
  <div className="timer"> {count} </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore + awayTouchDown}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={getHomeTouchDown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={getHomeScore}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={getAwayTouchDown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={getAwayScore}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
