import React, { useCallback, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { ids, stepTime, users } from '../../../meta_data/metaData'
import css from './Timer.module.css'

const Timer = () => {
  const [currentUserIndex, startTime] = useOutletContext();
  const [queque, setQueque] = useState(() => Array(users.length).fill(0));
  const [time, setTime] = useState();

  const getTime = useCallback(() => {
    const time = (stepTime - (Date.now() - startTime)) / 1000;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    
    if (minutes < 0) {
      setQueque(p => p.map(() => 0));
      return;
    }

    const prefixSec = seconds < 10 ? '0' : '';
    const prefixMin = minutes < 10 ? '0' : '';
    return '00:' + prefixMin + minutes + ':' + prefixSec + seconds;
  }, [startTime]);

  useEffect(() => {
    setTime(getTime());
    setQueque(p => p.map((v, i) => i === currentUserIndex ? 1 : 0))
    const timerId = setInterval(() => {
      setTime(getTime());
    }, 1000)

    return () => {
      clearInterval(timerId);
    }
  }, [startTime])

  return (
    <div className={css.timerHolder}>
      <div>ХОД</div>
      {queque.map((v, i) => v 
        ? <div key={ids[i]} className={css.timer}>{time}</div>
        : <div key={ids[i]} />
      )}
    </div>
  )
}

export default Timer