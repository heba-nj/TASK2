import { useState } from "react"
import logo from '../../assets/images/Group.svg';
import { Link } from "react-router-dom";

function Navbar({isLoggedIn}) {
    const [links,setLinks] = useState(["العقارات","حول","برامج الجنسية ","البيع","المزيد"])
  return (
        <nav className="flex items-center justify-between gap-[30px] font-noor p-2 max-sm:flex-col max-sm:items-center max-sm:justify-around max-sm:gap-0">
            <a href="/" className="">
                <img src={logo} alt="logo-img" className="w-full h-full max-md:w-[90px] max-md:h-[50px] max-sm:w-[120px] max-sm:h-[80px]"/>
            </a>
                <ul className="flex items-center gap-[20px] p-4 m-0 max-sm:p-0 max-sm:pb-4">
                    {links.map((link) => (
                        <li key={link} className="text-center">
                            <a href={`/${link}`}
                                className="text-mainColor font-normal max-md:text-base no-underline">
                                {link}</a></li>
                        ))}
                    </ul>
            <div className="flex items-center justify-center gap-2">
                {!isLoggedIn? (
                    <Link to="/login">
                        <button  className="max-md:text-sm px-3 py-1 bg-transparent border-solid border-1 border-mainColor text-mainColor rounded-md font-bold ">سجل الدخول</button>
                    </Link> 
                ) : (
                    <Link to="/logout">
                        <button  className="max-md:text-sm px-3 py-1 bg-transparent border-solid border-1 border-mainColor text-mainColor rounded-md font-bold ">سجل خروج</button>
                    </Link> 
                )
            }
                <Link to="/">
                    <button className="px-3 py-1 bg-thirdColor text-secondaryColor rounded-md  font-bold">ابدأ</button>
                </Link>
            </div>
        </nav>
  )
}

export default Navbar
