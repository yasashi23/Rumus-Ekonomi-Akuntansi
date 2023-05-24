import Image from "next/image"
import logo from "../../logonav2.svg"


export default function Nav() {
  return (
    <div className="nav">
        <nav>
                <Image
                    src={logo}
                    alt="bricalcu"
                    className="my Logo"
                />
        </nav>
    </div>
  )
}
