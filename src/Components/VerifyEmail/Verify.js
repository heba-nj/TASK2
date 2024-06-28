import { Card, CardBody, Form } from "react-bootstrap"
import image2 from '../../assets/images/image2.jpg';
import { useEffect, useState } from "react";
import { usePost } from "../../Api";
function Verify() {
    const {logout,resendCode,successfulPost} = usePost()
    const [code,setCode] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: ""
    })
    console.log(code)
    const handleSendCode = () => {
        let finalCode = ""
        for (const [key,value] of Object.entries(code)) {
            finalCode = finalCode + value
        }
        logout(`https://task5-lina-sulaiman.trainees-mad-s.com/api/auth/confirm-code?verify_code=${finalCode}`)
    }
    const [timeLeft, setTimeLeft] = useState(60);
    useEffect(() => {
        const interval = setInterval(() => {
          if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
          } 
        }, 1000); 
      return () => clearInterval(interval);
    }, [timeLeft]);
  return (
    <section className="log h-[50vh] pt-[70px] font-noor">
    <div className="logg"></div>
        <Card className="hscreen w-50 mx-auto flex-row shadow-2xl mt-[-650px] max-md:mt-[-565px] table-row max-md:relative max-md:top-[-145px] ">
            <CardBody className="max-w-[100%]">
                <h2 className="text-center text-thirdColor text-xl font-bold pt-5 max-md:pt-0">مرحبا بك <span className="text-[#6b48ff] font-bold">HEBA</span> </h2>
                <div className="p-4 text-[11px] text-thirdColor">
                    <p>لقد تم ارسال رمز التاكيد الى:<span className="text-[#acacac]">red1234@gmail.com</span></p>
                    <div className="flex flex-row-reverse gap-4">
                    {[1,2,3,4,5,6].map((e,i)=>(
                        <Form.Control maxLength={1} onChange={(h)=>{
                            setCode({...code,[`${i}`]: h.target.value})
                        }} key={e} type="text" className="hover:bg-[#acacac]" style={{width: "40px",textAlign: "center"}}/>
                    ))}
                    </div>
                    <button onClick={handleSendCode} className="bg-secondaryColor border-solid border-[1px] border-secondaryColor text-thirdColor rounded-2xl font-bold w-full h-10 mb-4 mt-4">تأكيد </button>
                    <p>اذا لم يصلك الرمز يمكنك اعادة المحاولة بعد <span className="text-blue-400">4:20د</span></p>
                    <p className="text-center bg-secondaryColor text-thirdColor font-bold rounded-2xl"> {timeLeft}s</p>
                    <button disabled={timeLeft} onClick={()=> resendCode("https://task5-lina-sulaiman.trainees-mad-s.com/api/auth/resend-code")} className="bg-transparent border-solid border-[1px] text-thirdColor rounded-2xl font-bold w-full h-10 mb-4 mt-4">اعادة الارسال </button>
                </div>
            </CardBody>
            <Card.Img variant="top-right" src={image2} className="rounded-md w-50 object-cover max-md:hidden"/>
        </Card>
    </section>
  )
}

export default Verify
