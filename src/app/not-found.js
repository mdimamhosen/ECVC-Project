import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center flex-1 min-h-[calc(100vh-3.5rem)] text-white bg-gray-800">
      {/* Main Content Wrapper */}
      <div className="flex flex-col items-center gap-8 p-8 rounded-lg max-w-[500px] w-full mx-4 md:mx-0">
        {/* Error Message */}
        <h1 className="text-4xl font-bold text-center md:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="text-sm text-center text-gray-400 md:text-base">
          Oops! The page you&apos;re looking for doesn&apos;t exist. But
          don&apos;t worry, you can explore more about
          <span className="font-bold text-white"> ECVC</span>, your trusted
          education and visa consultancy partner!
        </p>

        {/* ECVC Info */}
        <div className="bg-[#333] p-4 rounded ">
          <h2 className="text-lg font-semibold">About ECVC</h2>
          <p className="text-sm text-gray-300 mt-2">
            ECVC has been providing top-notch consultancy services in education
            and immigration since 2023. We offer personalized guidance for
            studying abroad in countries like Australia, Canada, the UK, the
            USA, and more. Whether you need help with your study visa or
            university applications, we&apos;re here to assist!
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-[#333] p-4 rounded-md">
          <div>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="text-sm text-gray-300 mt-2">
              Call us at{" "}
              <span className="font-bold text-white">09647001004</span> or{" "}
              <span className="font-bold text-white">+880 1777 505558 </span>
              for free counseling and expert advice on your study abroad
              journey. We&apos;re always here to guide you!
            </p>
          </div>
        </div>

        {/* Button */}
        <Link href="/" passHref>
          <button className="text-center text-sm md:text-base md:px-4 px-2 py-2 md:py-2 sm:px-6 sm:py-3 rounded font-bold shadow-md hover:shadow-none hover:scale-95 transition-all duration-300 flex justify-center items-center gap-1 w-fit bg-yellow-300 text-black">
            <FaArrowLeft className="my-1" />
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
