import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="text-white flex items-center  justify-center text-[30px] ">
      <div className="text-center ">
        <h2>Something Went Wrong</h2>
        <button className="border py-[12px] px-[14px] rounded-md mt-[20px] text-[18px]">
          <Link to={"/"}>Back Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
