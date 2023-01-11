import axios from "axios";
import "bulma/css/bulma.css";
import { useState } from 'react';
import Swal from "sweetalert2";
import { errorAlert,successAlert } from "../componens/alert/alertService";

export default function Register(){
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');
    
    const Register = async (e) => {
        e.preventDefault();
        try{
            console.log(password);
            await axios.post('http://localhost:5000/api/register',{
                name:name,
                username:username,
                email:email,
                password:password,
                confPassword:confirmPassword
            }).then((response) => {
                successAlert('success', response.data.msg ,'/auth/login')
            })
        }catch (error){
            if(error){
                errorAlert('Error',error.response.data.msg);
            }
        }   
    }
    return(
        <>
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            {msg}
                            <form onSubmit={Register} className="box">
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Username</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input type="password" className="input" placeholder="*****" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="control">
                                        <input type="password" className="input" placeholder="*****" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}