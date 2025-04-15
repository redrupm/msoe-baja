import Slideshow from './Slideshow.jsx';
import slide1 from '../../Pictures/Slideshow1.jpeg';
import slide2 from '../../Pictures/Slideshow2.jpeg';
import slide3 from '../../Pictures/Slideshow3.jpeg';
import '../../Home.css';
import MeetTheTeam from "./MeetTheTeam";
const Home = () => {
    return (
        <>
            <Slideshow arr={[slide1, slide2, slide3]}/>
            <hr/>
            <MeetTheTeam/>
        </>
    );
}
export default Home;