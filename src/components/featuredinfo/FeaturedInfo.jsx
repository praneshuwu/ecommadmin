import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import './featuredinfo.css';

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setpercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/income');
        setIncome(res.data);
        setpercentage((res.data[0].total / res.data[1].total) * 100);
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);

  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>${income[1]?.total}</span>
          <span className='featuredMoneyRate'>
            {income[1]?.total > income[0]?.total ? '+' : '-'}
            {percentage.toFixed(2)}%

            {income[1]?.total > income[0]?.total ? (<ArrowUpwardRounded className='featuredIcon positive' />) : (<ArrowDownwardRounded className='featuredIcon negative' />) }
            
          </span>
        </div>
        <span className='featuredSub'>Compared to Last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            -$1.4 <ArrowDownwardRounded className='featuredIcon negative' />{' '}
          </span>
        </div>
        <span className='featuredSub'>Compared to Last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            +$2.4 <ArrowUpwardRounded className='featuredIcon' />{' '}
          </span>
        </div>
        <span className='featuredSub'>Compared to Last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
