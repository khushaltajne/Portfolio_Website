import { assets } from "@/assets/assets";
import Image from "next/image";
function Footer() {
  return (
    <div className="mt-20">
        <div className="text-center mb-3 mx-auto">
             <span className="text-3xl font-bold text-black cursor-pointer mr-14">
                Khushal<span className="text-pink-600">.</span>
                </span>
                <div className="w-max flex item-center gap-2 mx-auto text-xl">
                    <Image src={assets.mail_icon} alt="Logo" className="mx-auto w-7" />
                    mitsuhamizuyashi@gmail.com
                </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t
         border-gray-400 mx-[10%] mt-12 py-6">
            © 2025 Khushal Tajne. All rights reserved.
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                <li>
                    <a target="_blank" href="https://github.com/khushaltajne">GitHub</a>
                </li>
                 <li>
                    <a target="_blank" href="www.linkedin.com/in/khushal-tajne">LinkedIn</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer