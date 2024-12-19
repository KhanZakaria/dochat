/* eslint-disable no-unused-vars */
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Triangle } from "react-loader-spinner";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [eyeIcon, seteyeIcon] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [loader, setLoader] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    // form validation
    if (!email || !password) {
      setError("Please fill up the information first");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please Enter a valid email");
    }

    // database auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setLoader(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center border md:max-w-[700px] m-auto py-[10px] h-[90vh] text-white gap-[10px]">
      {loader ? (
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="White"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <>
          <h1 className="text-[30px]">Log In</h1>
          <p className="text-[16px]">
            Nice to meet you! Login and enjoy your chat.
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="overflow-auto px-[10px] w-[70%] [&>div>input]:rounded-md [&>div>input]:py-[10px] [&>div>input]:px-[10px] [&>div>input]:text-black [&>div>input]:outline-none"
          >
            <div className="flex flex-col  my-[5px]">
              <label htmlFor="Email">Email</label>
              <input
                placeholder="Enter Your Name"
                type="Email"
                id="Email"
                name="Email"
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div className="flex flex-col relative my-[5px]">
              <label htmlFor="password">Password</label>
              <input
                type={eyeIcon ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handlePassword}
              />
              <span
                onClick={() => seteyeIcon(!eyeIcon)}
                className="absolute top-[55%] right-[10px] text-black text-[16px]"
              >
                {eyeIcon ? <GoEye /> : <GoEyeClosed />}
              </span>
            </div>
            {error && <p className="text-red-400">{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white py-[10px] px-[12px] mt-[10px] border-0 rounded-md capitalize"
            >
              sign In
            </button>
          </form>
          <p className="capitalize">
            Forget your password ?
            <span className="text-[#44e3ff] ml-[10px]">
              <Link to="">Reset Password</Link>
            </span>
          </p>
          <p className="capitalize">
            Do not have an account ?
            <span className="text-[#44e3ff] ml-[10px]">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default LogIn;
