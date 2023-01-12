import "bulma/css/bulma.css";
import axios from "axios";
import { successAlert } from "../../componens/alert/alertService";
import Cookies from "js-cookie";

export default function Navbar() {

    const Logout = async () => {
        try{
            await axios.delete('http://localhost:5000/api/logout');
            Cookies.remove('token');
            successAlert('success','Logout Success','/')
        }catch(error){
            console.log(error);
        }
    }
  return (
    <nav className='navbar is-light' role="navigation" arial-aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
            <a className='navbar-item' href='/'>
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
            </a>
            <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
 
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item">
                            Home
                        </a>
                    </div>
 
                    <div className="navbar-end">
                        <div className="navbar-item">
                        <div className="buttons">
                                <button onClick={Logout} className="button is-light">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  )
}
