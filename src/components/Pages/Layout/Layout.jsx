import React, { useEffect, useState } from 'react';
import css from './Layout.module.css'
import { Outlet } from 'react-router-dom';
import { users, stepTime } from '../../../meta_data/metaData';

const Layout = () => {
  const [startTime, setStartTime] = useState(() => Date.now());
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStartTime(Date.now());
    
    // 1000 ms - time to change of users
    const timerId = setInterval(() => {
      setStartTime(Date.now());
      setStep(p => p + 1);
    }, stepTime + 1000)

    return () => {
      clearInterval(timerId);
    }
  }, [step])


  return (
    <div className={css.container}>
      <Outlet context={[step % users.length, startTime]} />
    </div>
  );
}

export default Layout;
