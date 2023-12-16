import Image from "next/image";
import science from "../../assets/images/made-with-science.svg";

const Footer = () => {
  return (
    <div className="container mx-auto md:hidden flex justify-center items-center my-10">
      <Image src={science} />
    </div>
  )
}

export default Footer