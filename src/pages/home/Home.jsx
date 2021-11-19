import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetsLg from '../../components/widgetsLg/WidgetsLg';
import WidgetsSm from '../../components/widgetsSm/WidgetsSm';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
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
