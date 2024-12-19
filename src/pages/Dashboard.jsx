import ChatlistItem from "../components/ChatlistItem";
import LeftSidebar from "../components/LeftSidebar";
import { IoReturnUpBack } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
const Dashboard = () => {
  return (
    <div className="flex gap-[5px]">
      {/* sidebar  */}
      <div className="w-[5%]">
        <LeftSidebar />
      </div>

      {/* end of sidebar */}
      <div className="w-[25%]">
        <ChatlistItem />
      </div>

      <div className="p-[10px] w-[68%] overflow-hidden">
        <div className="flex justify-between p-[10px] items-center shadow-md ">
          <div>
            <IoReturnUpBack size={30} />
          </div>
          <div className="flex gap-3 items-center">
            <div className="border rounded-full h-[55px] w-[55px]"></div>
            <BsThreeDotsVertical size={30} />
          </div>
        </div>
        {/* end top bar  */}
        <div className="overflow-auto">
          <div className="shadow-md border rounded-lg border-[#43fff6ad] m-[10px]">
            <div className="flex gap-[30px] items-center p-[10px]">
              <div>
                <div className="border rounded-full h-[75px] w-[75px]"></div>
              </div>
              <div>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Porro,
                provident. Possimus, ipsum? Quod perspiciatis cupiditate debitis
                eius labore, illum eos incidunt repellendus sed. Quae inventore
                esse voluptates at maxime reprehenderit nesciunt voluptate,
                necessitatibus commodi doloribus culpa. Explicabo temporibus
                odit fuga placeat provident debitis aperiam, magnam magni
                excepturi voluptatibus harum dolorem error tempore amet iusto
                facilis quaerat aut beatae. Labore fuga qui, saepe at ab aut
                provident enim soluta aspernatur voluptate, eveniet laborum
                earum facilis voluptas. Blanditiis obcaecati autem, perspiciatis
                molestias odit corporis itaque debitis quos expedita dolore sed
                cumque voluptates doloribus aspernatur maxime. Eveniet ab
                architecto repudiandae natus ea distinctio?
              </div>
            </div>
            <div className="flex justify-end items-center px-[20px] gap-4 rounded-lg py-[5px] shadow-sm bg-black">
              <div>date</div>
              <div>time</div>
              <HiDotsHorizontal size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
