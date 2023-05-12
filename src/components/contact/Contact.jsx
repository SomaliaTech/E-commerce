import "./Contact.scss"
import {BsFacebook,BsYoutube,BsInstagram,BsTwitter} from 'react-icons/bs'
const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
          <h1>Nala soo xariri</h1>
          <div className="inputs">
            <input type="text"  placeholder="Eneter your Email..."/>
            <button>Join Us</button>
          </div>
          <div className="icons">
<BsFacebook/>
<BsYoutube/>
<BsInstagram/>
<BsTwitter/>
          </div>
        </div>
    </div>
  )
}

export default Contact