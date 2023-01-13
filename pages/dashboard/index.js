import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from "../componens/header/headerUser";
import { successAlert,errorAlert } from "../componens/alert/alertService";
import Cookies from 'js-cookie';
import Router from 'next/router';
import { absoluteUrl } from '../../middleware/utils';

export default function dashboard(props){
    const { user, origin } = props;
    const token = Cookies.get('token');
    useEffect(() => {
      if(!token){
        Router.push('/auth/login');
      }
    },[]);
    return(
        <>
        <Navbar/>
        <div className="container">
           <div className="bg-white py-24 sm:py-32 lg:py40">
              <div className="mx-auto max-w-7x1 px-6 lg:px-8">
                <div className="sm:text-center">
                  <h2 className="text-lg font-semibold loading-8 text-indigo-600">Welcome</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4x1">Aplikasi Penilaian Kinerja Kepegawaian</p>
                </div>
              </div>
           </div>
        </div>
      </>
    );
}

/* getServerSideProps */
export async function getServerSideProps(context) {
    const { req } = context;
    const { origin } = absoluteUrl(req);
  
    return {
      props: {
        origin,
      },
    };
  }
  