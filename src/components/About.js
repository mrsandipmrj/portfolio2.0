import './About.css'
import myimg from './img/myimage.png'


const About = () => {
    return (
        <>
            <div className="intro">
                <div className="name">
                    <h1><span> Hello Guys!</span> <span>I'm Sandip</span></h1>


                    <div className="hrbtn"><a href="mailto:mrsandipmrj@gmail.com">Hire Me</a></div>
                </div>

                <div className="myimg"><img src={myimg} alt="me" /></div>

            </div>
        </>
    )
};

export default About