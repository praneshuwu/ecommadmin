import React from 'react'
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo';
import './home.css';
import WidgetsLg from '../../components/widgetsLg/WidgetsLg';
import WidgetsSm from '../../components/widgetsSm/WidgetsSm';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../requestMethods';

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/user/stats');
        const list =res.data.sort((a,b)=> a._id - b._id)
        list.map((item) =>
           setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id-1], 'Active Users': item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title='User Analytics'
        grid
        dataKey='Active Users'
      />
      <div className='homeWidgets'>
        <WidgetsSm />
        <WidgetsLg />
      </div>
    </div>
  );
};

export default Home;
