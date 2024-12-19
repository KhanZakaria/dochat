/* eslint-disable react/prop-types */
import { GrGroup } from "react-icons/gr";
import { IoPersonAddOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { RiUserForbidLine } from "react-icons/ri";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";

const LeftSidebar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="h-[95vh] border-r border-[#ffffff6e] p-[10px] flex flex-col gap-[20px]  items-center justify-end">
      <div>
        <GrGroup size={25} />
      </div>
      <div>
        <RiUserForbidLine size={25} />
      </div>
      <div>
        <IoPersonAddOutline size={25} />
      </div>
      <div>
        <IoSettingsOutline size={25} />
      </div>
      <div>
        <LiaSignOutAltSolid
          size={25}
          className="cursor-pointer"
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
};

export default LeftSidebar;
