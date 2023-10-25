import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
  const { title, img, description, price } = service;
  return (
    <div>
      <div className="card  bg-base-100 border">
        <figure className="px-10 pt-10">
          <img src={img} alt="{Shoes}" className="rounded-xl " />
        </figure>
        <div className="card-body space-y-4">
          <div className="space-y-4">
            <h2 className="card-title">{title}</h2>
            <p className="text-[#ff3811] text-xl font-bold">$ {price}</p>
          </div>
          <div className="text-[#ff3811] text-xl font-bold">
            <FaArrowRight></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
