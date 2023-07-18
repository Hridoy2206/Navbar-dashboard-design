import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    // let Links = [
    //     {name:"Home", link:"/"},
    //     {name:"About", link:"/about"},
    //     {name:"Services", link:"/services"},
    //     {name:"Contact", link:"/contact"},
    //     {name:"Login", link:"/"},
    // 
    // 
    // ]
    const [open, setOpen] = useState(false)
    return (
        <div className=" shadow-md w-full sticky top-0 " >
            <div className=" lg:flex bg-white py-4 px-7  md:px-10 lg:justify-between items-center">
                {/* Navbar Logo */}
                <div className=" text-3xl font-bold flex items-center cursor-pointer">
                    <span className=" pt-2 mr-2 text-3xl text-indigo-600"><ion-icon name="logo-ionic"></ion-icon></span>
                    Designer
                </div>
                {/* Menu Button */}
                <div onClick={() => setOpen(!open)} className=" absolute top-6 right-9 text-3xl md:hidden cursor-pointer">
                    <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
                </div>
                {/* Menu Items */}
                <div onBlur={() => setOpen((prev) => !prev)}>
                    <ul className={`text-xl md:flex items-center  bg-white w-full absolute  md:static left-0 pb-10 md:pb-0 md:pl-0 pl-8 transition-all duration-500 ease-in md:z-auto z-[-1] ${open ? "top-20" : "top-[-490px]"}`}>
                        <li className=" hover:text-gray-500 duration-150 md:ml-6 mt-6 md:mt-0 active:scale-110"><Link>Home</Link></li>
                        <li className=" hover:text-gray-500 duration-150 md:ml-6 mt-6 md:mt-0 active:scale-110"><Link>About</Link></li>
                        <li className=" hover:text-gray-500 duration-150 md:ml-6 mt-6 md:mt-0 active:scale-110"><Link>Services</Link></li>
                        <li className=" hover:text-gray-500 duration-150 md:ml-6 mt-6 md:mt-0 active:scale-110"><Link>Contact</Link></li>
                        <li className=" hover:text-gray-500 duration-150 md:ml-6 mt-6 md:mt-0 active:scale-110"><Link>Login</Link></li>
                        <li className=" hover:text-gray-500 duration-150 md:ml-6 mt-6 md:mt-0 active:scale-110"><Link to="/dashboard">Dashboard</Link></li>
                        <Button>
                            Get Started
                        </Button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;