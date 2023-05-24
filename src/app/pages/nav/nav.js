import Image from "next/image"
import logo from "../../logonav2.svg"


export default function Nav() {
  return (
    <nav>
        <div>
            <Image
                src={logo}
                alt="bricalcu"
                className="my Logo"
            />
        </div>
    </nav>
  )
}
