import { useEffect } from "react"
import { useRouter } from "next/router";//untuk meredirect 

// penamaan komponen bebas, 404.tsx  secara default  dari next js sudah ada, tinggal di custom sesuai kebutuhan
export default function Custom404() {
    //membuat auto redirection 
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000);
    }, [])

    return (
        <div>
            <h1 className="title-not-found">Oooops ......</h1>
            <h1 className="title-not-found">Halaman yang and cari tidak ditemukan</h1>
        </div>
    )
}
