import { Outlet } from "react-router";

const Fullwidthlayout = () => {
  return (
    <section className="bg-[#110D59] bg-chat-bg text-white font-poppins h-[100vh] scroll-auto bg-cover bg-no-repeat bg-center bg-opacity-70 flex flex-col justify-center ">
      <div className="container h-[95vh] border border-[#ffffff6e] backdrop-saturate-150 backdrop-blur-[50px] drop-shadow-lg shadow-[#71d6da]  ">
        <Outlet />
      </div>
    </section>
  );
};

export default Fullwidthlayout;
