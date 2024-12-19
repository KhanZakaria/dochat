import { Outlet } from "react-router";

const Authlayout = () => {
  return (
    <section className="bg-[#110D59] text-white font-poppins bg-cover bg-no-repeat bg-center bg-opacity-70 flex flex-col justify-center items-center min-h-[100vh]">
      <div className="container">
        <Outlet />
      </div>
    </section>
  );
};

export default Authlayout;
