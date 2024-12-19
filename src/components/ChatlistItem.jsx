import ProfileSlider from "./ProfileSlider";
import MessageLeftbarBox from "./MessageLeftbarBox";
import { CiEdit } from "react-icons/ci";

const ChatlistItem = () => {
  return (
    <div className="h-[95vh] border-r border-[#ffffff6e] p-[10px] flex flex-col gap-[10px]">
      <div className="flex justify-between items-center">
        <div className="flex items-end">
          <div className="border rounded-full h-[75px] w-[75px]"></div>
          <div className=" rounded-full h-[10px] w-[10px] bg-[#66ff66]"></div>
        </div>
        <div className="flex flex-col text-right">
          <h2 className="text-[24px]">Username</h2>
          <h3>Professional full stack dev</h3>
        </div>
      </div>
      {/* user slider  */}
      <div className="overflow-hidden min-h-[70px]">
        <ProfileSlider />
      </div>
      {/* user message  */}
      <div className="flex flex-col gap-2 overflow-auto no-scrollbar mb-2 ">
        <MessageLeftbarBox />
        <MessageLeftbarBox />
        <MessageLeftbarBox />
        <MessageLeftbarBox />
        <MessageLeftbarBox />
        <MessageLeftbarBox />
        <MessageLeftbarBox />
        <MessageLeftbarBox />
        <MessageLeftbarBox />
      </div>
    </div>
  );
};

export default ChatlistItem;
