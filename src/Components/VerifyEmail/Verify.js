import { Card, CardBody, Form } from "react-bootstrap"
import image2 from '../../assets/images/image2.jpg';
function Verify() {
  return (
    <section className="log h-[50vh] pt-[70px] font-noor">
    <div className="logg"></div>
        <Card className="hscreen w-50 mx-auto flex-row shadow-2xl mt-[-650px] max-md:mt-[-565px] table-row max-md:relative max-md:top-[-145px] ">
            <CardBody className="max-w-[100%]">
                <h2 className="text-center text-thirdColor text-xl font-bold pt-5 max-md:pt-0">مرحبا بك <span className="text-[#6b48ff] font-bold">RED</span> </h2>
                <div className="p-4 text-[11px] text-thirdColor">
                    <p>لقد تم ارسال رمز التاكيد الى:<span className="text-[#acacac]">red1234@gmail.com</span></p>
                    <div className="media flex gap-4">
                        <Form.Control type="text" className="hover:bg-[#acacac] max-w-[50%] m-auto"></Form.Control>
                        <Form.Control type="text" className="hover:bg-[#acacac] max-w-[50%] m-auto"></Form.Control>
                        <Form.Control type="text" className="hover:bg-[#acacac] max-w-[50%] m-auto"></Form.Control>
                        <Form.Control type="text" className="hover:bg-[#acacac] max-w-[50%] m-auto"></Form.Control>
                        <Form.Control type="text" className="hover:bg-[#acacac] max-w-[50%] m-auto"></Form.Control>
                    </div>
                    <button className="bg-secondaryColor border-solid border-[1px] border-secondaryColor text-thirdColor rounded-2xl font-bold w-full h-10 mb-4 mt-4">تأكيد </button>
                    <p>اذا لم يصلك الرمز يمكنك اعادة المحاولة بعد <span className="text-blue-400">4:20د</span></p>
                    <button className="bg-transparent border-solid border-[1px] text-thirdColor rounded-2xl font-bold w-full h-10 mb-4 mt-4">اعادة الارسال </button>
                </div>
            </CardBody>
            <Card.Img variant="top-right" src={image2} className="rounded-md w-50 object-cover max-md:hidden"/>
        </Card>
    </section>
  )
}

export default Verify
