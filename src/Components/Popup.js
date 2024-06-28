import { useEffect, useState } from "react"
import { usePost } from "../Api"

function Popup() {
    const { error } = usePost()
    const [isShown,setIsShown] = useState(false)
    const [errors,setErrors] = useState([])
    useEffect(() => {
        if (error) {
            setIsShown(true)
            setErrors(error)
        } else {
            setIsShown(false)
        }
    }, [error])
    console.log(errors)
    return (
        <>
            {isShown && (
                <div className="flex justify-center items-center">
                    <div className="h-full fixed w-full bg-black/60 z-10 top-0 left-0" />
                    <div className="bg-pink-900 p-10 flex flex-col gap-5 z-20 justify-center items-center">
                        <h2 className="text-xl font-bold text-white text-center">Error</h2>
                        <ul>
                            {errors?.map((e) => (
                                <li key={e} className="text-lg font-bold text-white text-center">{e}</li>
                            ))}
                        </ul>
                        <button onClick={() => setIsShown(false)} className="text-center w-full bg-emerald-600 p-3 font-semibold">حسنا</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup
