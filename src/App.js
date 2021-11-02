import React, { useState } from 'react';
import './App.css';
import Timezone from './components/Timezone';

function App(props) {
    const currentDate = new Date();
    let initialState = {
      secondRatio: currentDate.getSeconds() / 60,
      minuteRatio: currentDate.getMinutes() / 60,
      hourRatio: currentDate.getHours() / 12,
      timezone: currentDate.getTimezoneOffset()
    }
    const [time, setTime] = useState(initialState)

    setTimeout(() => {
      setTime({
          secondRatio: currentDate.getSeconds() / 60,
          minuteRatio: currentDate.getMinutes() / 60,
          hourRatio: (currentDate.getHours() / 12),
          timezone: currentDate.getTimezoneOffset()
        })
    }, 1000)

    return (
      <div className="wrapper">
        <div className='timezone-wrap'>
          <Timezone timezone={time.timezone} secondRatio={time.secondRatio} minuteRatio={time.minuteRatio} hourRatio={time.hourRatio} />
        </div>
        <div className='timezone-wrap'>
          <Timezone timezone={time.timezone} secondRatio={time.secondRatio} minuteRatio={time.minuteRatio} hourRatio={time.hourRatio} />
        </div>
      </div>
    );
  }



export default App;
