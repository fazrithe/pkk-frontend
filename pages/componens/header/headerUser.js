import { useState } from 'react'
import axios from "axios";
import { successAlert } from "../../componens/alert/alertService";
import Cookies from "js-cookie";

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
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
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4 bg-white">
                <a className="text-xl font-medium my-4" href="/dashboard" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Dashboard
                </a>
                <a className="text-xl font-medium my-4" href="/users" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Users
                </a>
                <a className="text-xl font-normal my-4" href="#" onClick={() => setTimeout(() => {setOpen(Logout)}, 100)}>
                    Logout
                </a>
            </div>  
        </div>
    )
}

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
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/dashboard">
                        Dashboard
                    </NavLink>
                    <NavLink to="/users">
                        Users
                    </NavLink>
                    <a href='#' onClick={Logout}>
                        Logout
                    </a>
                </div>
            </div>
        </nav>
    )
}