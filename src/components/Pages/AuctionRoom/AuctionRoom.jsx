import React from 'react';
import css from './AuctionRoom.module.css';
import { useLocation } from 'react-router-dom';
import AuctionTable from '../../features/AuctionTable/AuctionTable';
import Timer from '../../features/Timer/Timer';

const AuctionRoom = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userIndex = searchParams.get('userIndex');

  return (
    <div className={css.container}>
      <header className={css.header}>
        Ход торгов
        <strong> Тестовые торги на аппарат Лотос №2033564 (09.11.2020 07:00)</strong>
      </header>
      <div className={css.info}>
        Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:
      </div>
      <Timer />
      <AuctionTable index={userIndex}/>
    </div>
  )
}

export default AuctionRoom