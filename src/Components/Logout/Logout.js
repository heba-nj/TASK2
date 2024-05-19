import { Card, CardBody } from "react-bootstrap"
import image2 from '../../assets/images/image2.jpg'
import { Link } from "react-router-dom"

function Logout({setIsLoggedIn}) {
  return (
    <section className="log h-[50vh] pt-[70px] font-noor">
    <div className="logg"></div>
        <Card className="hscreen w-50 mx-auto flex-row shadow-2xl mt-[-650px] max-md:mt-[-565px] table-row max-md:relative max-md:top-[-145px] ">
            <CardBody className="max-w-[100%]">
                <h2 className="text-center text-thirdColor text-xl font-bold pt-5 max-md:pt-0"> هل انت متأكد من تسجيل الخروج؟ </h2>
                    <Link to='/'>
                        <button onClick={()=>setIsLoggedIn(true)} className="bg-secondaryColor border-solid border-[1px] border-secondaryColor text-thirdColor rounded-2xl font-bold w-full h-10 mb-4 mt-4">تأكيد </button>
                    </Link>
                    <Link to='/'>
                        <button className="bg-transparent border-solid border-[1px] text-thirdColor rounded-2xl font-bold w-full h-10 mb-4 mt-1">تراجع  </button>
                    </Link>
            </CardBody>
            <Card.Img variant="top-right" src={image2} className="rounded-md w-50 object-cover max-md:hidden"/>
        </Card>
    </section>
  )
}

export default Logout
