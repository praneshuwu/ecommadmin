import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons'
import'./featuredinfo.css'

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-$11.4 <ArrowDownwardRounded className='featuredIcon negative'/> </span>
                </div>
                <span className="featuredSub">Compared to Last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-$1.4 <ArrowDownwardRounded className='featuredIcon negative'/> </span>
                </div>
                <span className="featuredSub">Compared to Last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">+$2.4 <ArrowUpwardRounded className='featuredIcon'/> </span>
                </div>
                <span className="featuredSub">Compared to Last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
