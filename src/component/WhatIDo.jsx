import jsImg from "../../public/js.png";
import reactImg from "../../public/react.png";
import nodeImg from "../../public/nodejs.png";
import mongodbImg from "../../public/mongo.png";
const WhatIDo = () => {
  return (
    <div className="w-[1280px] justify-center mx-auto  bg-red-50 pt-10">
      <h3 className="text-center text-4xl font-bold pb-4">What I Do</h3>
      <p className="text-center text-slate-600">
        I have more than 10 years experience building software for clients all
        over the world. Below is a quick overview of my main technical skill
        sets and technologies i use. Want to find out more about my experience?
        Check out my online resume and project portfolio.
      </p>
      <div className="flex gap-5 mt-7">
        <div className="bg-white p-5 rounded-xl">
          <img src={jsImg} alt="" />
          <h4 className="font-medium text-xl p-3">Javascript</h4>
          <p>
            List skill/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img src={nodeImg} alt="" />
          <h4 className="font-medium text-xl p-3">Node js</h4>
          <p>
            List skill/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img src={reactImg} alt="" />
          <h4 className="font-medium text-xl p-3">React</h4>
          <p>
            List skill/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img src={mongodbImg} alt="" />
          <h4 className="font-medium text-xl p-3">MangoDB</h4>
          <p>
            List skill/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
