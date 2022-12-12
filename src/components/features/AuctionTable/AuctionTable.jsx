import React from 'react'
import { ids, users } from '../../../meta_data/metaData'
import css from './AuctionTable.module.css'

const AuctionTable = ({ index }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <td>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</td>
          {users.map((user, i) => <td key={user.name} className={i === +index ? css.activeUser : ''}>{user.name}</td>)}
        </tr>
      </thead>
      <tbody className={css.body}>
        <tr>
          <td>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</td>
          {users.map(user => <td key={user.name}>{user.proposal.events}</td>)}
        </tr>
        <tr>
          <td>Срок изготовления лота, дней</td>
          {users.map(user => <td key={user.name}>{user.proposal.productionTime}</td>)}
        </tr>
        <tr>
          <td>Гарантийные обязательства, мес</td>
          {users.map(user => <td key={user.name}>{user.proposal.warranty}</td>)}
        </tr>
        <tr>
          <td>Условия оплаты</td>
          {users.map(user => <td key={user.name}>{user.proposal.paymentTerms * 100 + '%'}</td>)}
        </tr>
        <tr>
          <td>Стоимость изготовления лота, руб. (без НДС)</td>
          {users.map(({name, proposal}) => 
            <td key={name} className={css.priceHolder}>{
              proposal.price.map((price, i) =>
                <div key={ids[i]} className={css[`price-${i + 1}`]}>{price.toLocaleString('en-US') + ' руб.'}</div>
              )}
            </td>
          )}
        </tr>
      </tbody>
    </table>
  )
}

export default AuctionTable