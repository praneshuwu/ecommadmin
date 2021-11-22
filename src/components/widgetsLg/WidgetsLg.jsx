import './widgetslg.css';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import React from 'react'
import {format} from 'timeago.js'


const WidgetsLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders');

        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={'widgetLargeButton ' + type}>{type}</button>;
  };

  return (
    <div className='widgetLarge'>
      <h3 className='widgetLargeTitle'>Latest Transactions</h3>
      <table className='widgetLargeTable'>
        <tbody>
          <tr className='widgetLargeTr'>
            <th className='widgetLargeTh'>Customer</th>
            <th className='widgetLargeTh'>Date</th>
            <th className='widgetLargeTh'>Amount</th>
            <th className='widgetLargeTh'>Status</th>
          </tr>

          {orders.map((order) => {
            return (
              <tr className='widgetLargeTr' key={order._id}>
                <td className='widgetLargeUser'>
                  
                  <span className='widgetLargeName'>{order.userId}</span>
                </td>
                <td className='widgetLargeDate'>{format(order.createdAt)}</td>
                <td className='widgetLargeAmount'>$ {order.amount}</td>
                <td className='widgetLargeStatus'>
                  <Button type={order.status} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetsLg;
