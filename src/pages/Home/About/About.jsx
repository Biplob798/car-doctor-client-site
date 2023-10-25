import person from "../.../../../../assets/images/about_us/person.jpg";
import parts from "../.../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute border-8 border-white right-5 top-1/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-5 mt-12 space-y-2">
          <h1 className="text-sm text-[#FF3811] font-bold">About Us</h1>
          <p className="py-6 text-5xl font-bold ">
            We are qualified & of experience in this field
          </p>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.{" "}
          </p>

          <p className="py-6">
            {" "}
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-primary bg-[#FF3811] text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
