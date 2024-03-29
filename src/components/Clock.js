import React from 'react';

const Clock = ({ timezone, zone, secondRatio, minuteRatio, hourRatio }) => {
  return (
    <>
      <div className="clock">
        <div className="hand hour" style={{ transform: `translate(-50%) rotate(${((hourRatio - -(timezone / 60 / 12)) + (zone / 12)) * 360}deg)` }}></div>
        <div className="hand minute" style={{ transform: `translate(-50%) rotate(${minuteRatio * 360}deg)` }}  ></div>
        <div className="hand second" style={{ transform: `translate(-50%) rotate(${secondRatio * 360}deg)` }}  ></div>

        <div className="number number1"><div>1</div></div>
        <div className="number number2"><div>2</div></div>
        <div className="number number3"><div>3</div></div>
        <div className="number number4"><div>4</div></div>
        <div className="number number5"><div>5</div></div>
        <div className="number number6"><div>6</div></div>
        <div className="number number7"><div>7</div></div>
        <div className="number number8"><div>8</div></div>
        <div className="number number9"><div>9</div></div>
        <div className="number number10"><div>10</div></div>
        <div className="number number11"><div>11</div></div>
        <div className="number number12"><div>12</div></div>
      </div>
      <div className="num-wrapper">
        <div className="num-clock">{(((hourRatio * 12) + (timezone / 60)) + Number(zone) < (10)) ? <div>0{((hourRatio * 12) + (timezone / 60)) + Number(zone)}</div> : ((((hourRatio * 12) + (timezone / 60)) + Number(zone)) > (23) ) ? ((((hourRatio * 12) + (timezone / 60)) + Number(zone)) - (24)) : (((hourRatio * 12) + (timezone / 60)) + Number(zone))}:{((minuteRatio * 60) === 31.000000000000004) ? (31) : ((minuteRatio * 60) < (10)) ? <div>0{(minuteRatio * 60)}</div> : (minuteRatio * 60)}:{((secondRatio * 60) === 31.000000000000004) ? (31) : ((secondRatio * 60) < (10)) ? <div>0{(secondRatio * 60)}</div> : (secondRatio * 60)}</div>
      </div>
    </>
  );
};

export default Clock;