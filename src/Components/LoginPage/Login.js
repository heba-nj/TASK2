import {Card, CardBody, Form } from "react-bootstrap"
import image2 from "../../assets/images/image2.jpg"
import facebook from '../../assets/images/Facebook Logo.png'
import apple from '../../assets/images/Apple Logo.png'
import google from '../../assets/images/logo googleg 48dp.png'
import '../../index.css'
import { Link } from "react-router-dom"


function Login({setIsLoggedIn}) {
  return (
    <section className="log h-[50vh] pt-[70px] font-noor">
    <div className="logg"></div>
        <Card className="w-50 mx-auto flex-row shadow-2xl max-md:max-w-[100%] mt-[-650px] max-md:mt[-606px] max-md:relative max-md:top-[-50px]">
            <CardBody className="max-md:w-[50%]">
                <h2 className="text-center text-thirdColor text-xl font-bold pt-5 max-md:pt-0">تسجيل الدخول</h2>
                <div className="p-4 text-[12px] text-thirdColor">
                    <Form.Label>الايميل او رقم الهاتف</Form.Label>
                    <Form.Control type="email"></Form.Control>
                    <Form.Label className="pt-4 ">كلمة المرور</Form.Label>
                    <Form.Control type="password" className="mb-4"></Form.Control>
                    <Link to='/' onClick={()=>setIsLoggedIn(true)}>
                        <button className="bg-secondaryColor border-solid border-[1px] border-secondaryColor text-thirdColor rounded-xl font-bold w-full h-10 mb-4">تسجيل الدخول</button>
                    </Link>
                    <div className="text-[10px] flex justify-between max-sm:flex max-sm:flex-col max-sm:text-center">
                        <p>ليس لديك حساب؟ <Link to='/signup'>انشاء حساب</Link></p>
                        <Link to='/verify'>نسيت كلمة المرور</Link>
                    </div>
                    <hr></hr>
                    <div className="flex gap-2 mt-10 max-sm:flex max-sm:flex-col max-sm:items-center max-md:mt-0 max-sm:h-[85px]">
                        <button className="bg-[#1877F2] border-solid border-[1px] border-[#1877F2] text-white rounded-lg text-sm flex flex-row-reverse justify-center w-[90px] px-[2px] py-[5px]"><img src={facebook} alt="facebook" className="w-5 mr-1 max-md:hidden"/> Facebook</button>
                        <button className="bg-[#000000] border-solid border-[1px] border-[#000000] text-white rounded-lg text-sm flex flex-row-reverse justify-center w-[90px] px-[2px] py-[5px]"><img src={apple} alt="apple" className="w-5 mr-1 max-md:hidden"/> Apple</button>
                        <button className="bg-[#FFFFFF] border-solid border-[1px] border-[#FFFFFF] text-black rounded-lg text-sm flex flex-row-reverse justify-center w-[90px] px-[2px] py-[5px]"><img src={google} alt="google" className="w-5 mr-1 max-md:hidden"/> Google</button>
                    </div>
                </div>
            </CardBody>
            <Card.Img variant="top-right" src={image2} className="rounded-md w-50 object-cover max-md:hidden"/>
        </Card>
    </section>
  )
}

export default Login
