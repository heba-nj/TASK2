import { Card, CardBody, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import image4 from '../../assets/images/image4.jpg'
import facebook from '../../assets/images/Facebook Logo.png'
import apple from '../../assets/images/Apple Logo.png'
import google from '../../assets/images/logo googleg 48dp.png'
import { RiUninstallLine } from "react-icons/ri";

function Signup() {
    return (
        <section className="font-noor">
            <Card className=" w-70 flex-row max-md:max-w-[100%] max-md:relative pt-[35px]">
                <CardBody className="max-md:w-[50%]">
                    <h2 className="text-center text-thirdColor text-xl font-bold pt-5 max-md:pt-0">انشاء حساب</h2>
                    <div className="grid grid-cols-2 max-md:grid max-md:grid-cols-1 max-md:w-[100%]">
                        <div className="p-4 text-[12px] text-thirdColor">
                            <Form.Label>الايميل </Form.Label>
                            <Form.Control type="email"></Form.Control>
                            <Form.Label>اسم المستخدم </Form.Label>
                            <Form.Control type="text"></Form.Control>
                            <Form.Label>رقم الهاتف  </Form.Label>
                            <Form.Control type="text"></Form.Control>
                            <Form.Label className=" ">كلمة المرور</Form.Label>
                            <Form.Control type="password" className=""></Form.Control>
                            <Form.Label className=" ">كلمة المرور</Form.Label>
                            <Form.Control type="password" className="mb-4"></Form.Control>
                        </div>
                        <div className="">
                            <div className="flex flex-col text-[12px] p-4 pb-1 max-md:p-1">
                                <label for="file-upload">الصورة الشخصية</label>
                                <label for="file-upload" className="custom-file-upload max-md:w-[100%]">  اسحب و افلت الصورة هنا او قم برفعها من الملفات
                                <p className="text-[#5F5F5F] mt-3 mb-0">الحجم الاقصى:2MB </p>
                                <RiUninstallLine className="w-10 h-10 relative right-64 bottom-14 mr-2 max-lg:hidden max-xl:hidden max-2xl:block" />
                                </label>
                                <input id="file-upload" type="file" />
                            </div>
                            <div className="flex flex-col text-[12px] p-4 pt-0 max-md:p-1">
                                <label for="file-upload"> اثبات شخصية</label>
                                <label for="file-upload" className="custom-file-upload max-md:w-[100%]">  اسحب و افلت الصورة هنا او قم برفعها من الملفات
                                <p className="text-[#5F5F5F] mt-3 mb-0">الحجم الاقصى:1MB </p>
                                <RiUninstallLine className="w-10 h-10 relative right-64 bottom-14 mr-2 max-lg:hidden max-xl:hidden max-2xl:block" />
                                </label>
                                <input id="file-upload" type="file" />
                            </div>
                            <button className="bg-secondaryColor border-solid border-[1px] border-secondaryColor text-thirdColor rounded-xl font-bold w-[70%] mr-7  h-10 mb-4 max-md:w-[90%]"> انشاء حساب</button>
                            <div className="text-[10px] flex justify-between max-sm:flex max-sm:flex-col max-sm:text-center mr-7">
                                <p>لديك حساب؟ <Link to='/login'> تسجيل الدخول </Link></p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="flex justify-center gap-4 mt-10 max-sm:flex max-sm:flex-col max-sm:items-center max-md:mt-0 max-sm:h-[85px]">
                        <button className="bg-[#1877F2] border-solid border-[1px] border-[#1877F2] text-white rounded-lg text-sm flex flex-row-reverse justify-center w-[90px] px-[2px] py-[5px]"><img src={facebook} alt="facebook" className="w-5 mr-1 max-md:hidden"/> Facebook</button>
                        <button className="bg-[#000000] border-solid border-[1px] border-[#000000] text-white rounded-lg text-sm flex flex-row-reverse justify-center w-[90px] px-[2px] py-[5px]"><img src={apple} alt="apple" className="w-5 mr-1 max-md:hidden"/> Apple</button>
                        <button className="bg-[#FFFFFF] border-solid border-[1px] border-[#FFFFFF] text-black rounded-lg text-sm flex flex-row-reverse justify-center w-[90px] px-[2px] py-[5px]"><img src={google} alt="google" className="w-5 mr-1 max-md:hidden"/> Google</button>
                    </div>
                </CardBody>
                <Card.Img variant="top-right" src={image4} className="rounded-md w-[400px] object-cover max-md:hidden max-lg:hidden max-xl:block mt-[-40px]"/>
            </Card>
        </section>
      )
}

export default Signup
