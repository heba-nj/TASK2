import image1 from '../../assets/images/image1.jpg';
import '../../index.css';
function Hero() {
  return (
    <div className='hero text-center flex justify-center font-noor pt-[10px]'>
        <div className='overlay'></div>
        <div className='flex flex-col gap-3 p-4 w-[50%] max-md:w-[90%] z-10 mt-10'>
            <h1 className=' text-secondaryColor text-lg'> احصل على الاقامة التركية بكل سهولة مع Assetify</h1>
            <p className=' text-white text-3xl '>استثمر من اي مكان في العالم واحصل على الاقامة التركية</p>
            <p className=' text-secondaryColor text-sm'>استمتع بمجموعة من الفوائد عن طريق استثمار الحد الادنى </p>
            <p className='text-secondaryColor text-sm'>200,000 دولار امريكي من خلال منصتنا.</p>
        </div>
    </div>
  )
}

export default Hero
