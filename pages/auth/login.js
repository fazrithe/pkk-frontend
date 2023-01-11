import "bulma/css/bulma.css";
import axios from "axios";
import { useState } from 'react';
import { errorAlert,successAlert } from "../componens/alert/alertService";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Auth = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/login', {
                email: email,
                password: password
            }).then((response) => {
                successAlert('success', response.data.msg ,'/dashboard')
            })
        }catch(error){
            if (error.response) {
                errorAlert('Error',error.response.data.msg);
            }
        }
    }
    return (
        <section className="hero has-background-grey-light is fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="*****" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                                <div className="field mt-5">
                                    <a href="/auth/register">Register</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}