import Banner from "../Banner/Banner";
import Categorylist from "../CategoryList/Categorylist";
import Featurejobs from "../FeatureJobs/Featurejobs";


const Home = () => {
    return (
        <>
        <div>
            <Banner></Banner>
            <Categorylist></Categorylist>
            <Featurejobs></Featurejobs>
        </div>
        </>
    );
};

export default Home;