import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from "../componens/header/headerUser";
import { successAlert,errorAlert } from "../componens/alert/alertService";
import Cookies from 'js-cookie';
import Router from 'next/router';

export default function dashboard(){
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const tokenLog = Cookies.get('token');

    const refreshToken = async () => {
        try{
            console.log(tokenLog);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            const response = await axios.get('http://localhost:5000/api/token')
            .then((response) => {

                //set response user to state
                setUser(response.data);
            })    
            Cookies.set('token', response.data.token);
            config.headers.Authorization = `Bearer ${tokenLog}`;
            setToken(response.data.token);
            const decode = jwt_decode(response.data.token);
            setName(decode.name);
            setExpire(decode.expire);
        }catch(error){
            if(error.response){
                // errorAlert('Error','Anda tidak dapat izin masuk ke halaman ini','/auth/login')
            }
        }
    }

    
    useEffect(() => {
        if(!tokenLog) {

            //redirect login page
            Router.push('/auth/login');
        }
        refreshToken();
    }, []);


    return(
        <div className="container">
            <Navbar/>
            <h1>Welcome</h1>
        </div>
    );
}