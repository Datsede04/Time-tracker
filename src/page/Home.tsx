import ProfileInfo from "../components/profileinfo/ProfileInfo";
import TimeTab  from "../components/TimeTab/TimeTab";
import TabContent from "../components/TabContents/TabContents";

const Home = ()=>{
    
    return(
        <div className="timeTracker">
            <div className="timeList">
                <ProfileInfo/>
                <TimeTab />
            </div>

            <div className="tracker tabContainer">
                <TabContent tab="daily" className="tabContent active"/>
                <TabContent tab= "weekly" className="tabContent"/>
                <TabContent tab="monthly" className="tabContent"/>
            </div>
        </div>
    );
}

export default Home;