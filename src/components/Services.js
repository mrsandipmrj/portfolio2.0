import './services.css'
import { FaBuffer } from 'react-icons/fa'
import { CiMobile3 } from 'react-icons/ci'


const Services = () => {
    return (
        <>
            <div className="services" id="services">
                <div className="heading"><h1>Our Services</h1></div>
                <div className="service">


                <div className="box" id="service1">
                    <div className="s1">
                        <span className="icon"><FaBuffer /></span>
                        <span>Web Development</span>
                        <div className="text">enim praesentium maxime perferendis aperiam ducimus harum?</div>
                    </div>
                    </div>


                    <div className="box" id="service2">
                    <div className="s1">
                        <span className="icon" id="icon2"><CiMobile3 /></span>
                        <span id="mbl">Mobile Apps</span>
                        <div className="text">enim praesentium maxime perferendis aperiam ducimus harum?</div>
                    </div>
                    </div>



                    <div className="box" id="service3">
                    <div className="s1">
                        <span className="icon"><FaBuffer /></span>
                        <span>Web Development</span>
                        <div className="text">enim praesentium maxime perferendis aperiam ducimus harum?</div>
                    </div>
                    </div>




                </div>
            </div>
        </>
    )
}


export default Services;