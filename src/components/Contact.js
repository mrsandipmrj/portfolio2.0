import './Contact.css'
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
import {GoDiffRenamed} from 'react-icons/go'


const Contact = () => {
    return (
        <>
            <div className="contact" id="contact">
               <div className="heading"> <h1>Let's Talk?</h1></div>
               <div className="chat"><a href="https://wa.me/+918423211827"><button class="whatsapp"><FaWhatsapp/> Chat</button></a></div>

          <div className="form">
           <span className="icons1"><AiOutlineMail/></span><input type="text" placeholder='Email'/>
           <span className="icons2"><GoDiffRenamed/></span> <input type="text"  placeholder='Name'/>
           <span className="icons3"><AiOutlinePhone/></span> <input type="phone"  placeholder='Phone'/>
            <div className="send"><a href="mailto:mrsandipmrj@gmail.com">Send</a></div>
          </div>
            </div>


        </>
    )
}

export default Contact;