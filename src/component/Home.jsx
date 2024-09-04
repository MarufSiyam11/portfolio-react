import img from "../../public/IMG_6006_3-removebg-preview.png";
import bgImg from "../../public/header_bg.png";
const Home = () => {
  return (
    <div className="pt-16 pb-10">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className="container mx-auto  bg-cover "
      >
        <div className=" flex items-center justify-center">
          <div className="pl-16">
            {" "}
            <div className="w-1/2">
              <h3 className="font-medium text-5xl text-gray-600">Hi,I am</h3>
              <h1 className="font-bold text-7xl mt-4 mb-4 ">
                Maruf Hasan Siyam
              </h1>
              <p className="">
                Shot what able cold new see hold.Friendly as an betrayed
                formerly he. Morning because as to society behaved moments.
              </p>
              <button className="bg-yellow-800 p-3 text-white text-xl hover:bg-amber-950 rounded-md  m-5">
                Download CV
              </button>
              <button className="bg-yellow-800  text-white rounded-md text-xl p-3 hover:bg-amber-950">
                Contact
              </button>
            </div>
          </div>
          <div className="w-1/2  flex justify-center">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
