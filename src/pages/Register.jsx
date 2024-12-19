import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const Register = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [eyeIcon, seteyeIcon] = useState(false);
  let [eyeIcon2, seteyeIcon2] = useState(false);

  // form data state

  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [dateOfBirth, setDateOfBirth] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  // error state
  let [usernameError, setUsernameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [dateOfBirthError, setDateOfBirthError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [confirmPasswordError, setconfirmPasswordError] = useState("");

  //handle form data

  let handleUsername = (e) => {
    setUserName(e.target.value);
    setUsernameError("");
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  let handleDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
    setDateOfBirthError("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  let handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setconfirmPasswordError("");
  };

  // handle error

  // let handleError = () => {};

  // handle form submit

  let handleSubmit = (e) => {
    e.preventDefault();
    // handle username error
    if (!userName) {
      setUsernameError("Username is required");
    } else if (!/^[a-zA-Z-]+$/.test(userName)) {
      setUsernameError("Only Character a-z are allowed");
    } else if (userName.length < 6) {
      setUsernameError("Username Must Be Six Character Long");
    }

    // handle email error
    if (!email) {
      setEmailError("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("Invalid Email Address");
    }

    if (!password) {
      setPasswordError("Password is required");
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    ) {
      setPasswordError(
        "Create a stong password min-8 character long and should include one uppercase lowercase numbe and a special character"
      );
    }
    if (!confirmPassword) {
      setconfirmPasswordError("Confirm Password is required");
    } else if (password !== confirmPassword) {
      setconfirmPasswordError("Confirm password should match with password");
    }

    if (!dateOfBirth) {
      setDateOfBirthError("Date of Birth Required");
    } else if (dateOfBirth) {
      const birthdate = new Date(dateOfBirth);
      const today = new Date();

      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 18);

      if (birthdate > minDate) {
        setDateOfBirthError("You must be at least 18 years old");
      }
    }

    if (!usernameError && !emailError && !passwordError) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            // Signed up
            const user = userCredential.user;

            console.log(user);
            // ...
            setUserName("");
            setEmail("");
            setDateOfBirth("");
            setPassword("");
            setConfirmPassword("");

            navigate("/login");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);

          if (errorCode.includes("email")) {
            setEmailError(errorCode);
          }

          // ..
        });
    }
  };

  return (
    <div className="min-h-[90vh] border border-[#ffffff6e] rounded-md px-[10px] py-[10px] flex flex-col items-center w-[80%] m-auto ">
      <div className="flex-row md:flex justify-between items-center m-auto">
        <div>
          <h1 className="text-[30px] text-center md:text-left">Sign Up</h1>
          <p className="text-[16px] mb-[10px] md:mb-0">
            Nice to meet you! Enter your details to register.
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="overflow-auto [&>div>input]:rounded-md [&>div>input]:py-[10px] [&>div>input]:px-[10px] [&>div>input]:text-black [&>div>input]:outline-none"
          >
            <div className="flex flex-col  my-[5px]">
              <label
                htmlFor="name"
                className={usernameError && "text-red-500"}
              >
                {usernameError ? usernameError : "Your Name "}
              </label>
              <input
                placeholder="Enter Your Name"
                type="text"
                id="name"
                name="username"
                value={userName}
                className={
                  usernameError && "border border-red-500 placeholder-red-500"
                }
                onChange={handleUsername}
              />
            </div>

            <div className="flex flex-col  my-[5px]">
              <label
                htmlFor="email"
                className={emailError && "text-red-500"}
              >
                {emailError ? emailError : "Your Email"}
              </label>
              <input
                placeholder="Enter Your Email"
                type="email"
                id="email"
                name="email"
                value={email}
                className={
                  emailError && "border border-red-500 placeholder-red-500"
                }
                onChange={handleEmail}
              />
            </div>

            <div className="flex flex-col  my-[5px]">
              <label
                htmlFor="dob"
                className={dateOfBirthError && "text-red-500"}
              >
                {dateOfBirthError ? dateOfBirthError : "Date Of Birth"}
              </label>
              <input
                type="date"
                id="dob"
                name="dateOfBirth"
                value={dateOfBirth}
                className={
                  dateOfBirthError &&
                  "border border-red-500 placeholder-red-500"
                }
                onChange={handleDateOfBirth}
              />
            </div>

            <div className="flex flex-col relative my-[5px]">
              <label
                htmlFor="password"
                className={passwordError && "text-red-500"}
              >
                {passwordError ? passwordError : "Password"}
              </label>
              <input
                type={eyeIcon ? "text" : "password"}
                placeholder="Enter a strong Password"
                id="password"
                name="password"
                value={password}
                className={
                  passwordError && "border border-red-500 placeholder-red-500"
                }
                onChange={handlePassword}
              />
              <span
                onClick={() => seteyeIcon(!eyeIcon)}
                className="absolute top-[55%] right-[10px] text-black text-[16px]"
              >
                {eyeIcon ? <GoEye /> : <GoEyeClosed />}
              </span>
            </div>

            <div className="flex flex-col relative my-[5px]">
              <label
                htmlFor="cpassword"
                className={confirmPasswordError && "text-red-500"}
              >
                {confirmPasswordError
                  ? confirmPasswordError
                  : "Confirm Password"}
              </label>
              <input
                type={eyeIcon ? "text" : "password"}
                id="cpassword"
                name="confirmPassword"
                placeholder="Retype the password"
                value={confirmPassword}
                className={
                  confirmPasswordError &&
                  "border border-red-500 placeholder-red-500"
                }
                onChange={handleConfirmPassword}
              />
              <span
                onClick={() => seteyeIcon2(!eyeIcon2)}
                className="absolute top-[55%] right-[10px] text-black text-[16px]"
              >
                {eyeIcon2 ? <GoEye /> : <GoEyeClosed />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-[10px] px-[12px] mt-[10px] border-0 rounded-md capitalize"
            >
              sign up
            </button>
          </form>
        </div>
        <div className="hidden md:block">
          <img
            src="signup.png"
            alt="signup"
            className="h-[80%]"
          />
        </div>
      </div>

      <p className="capitalize text-center py-[10px]">
        already have an account ?
        <span className="text-[#44e3ff] ml-[10px]">
          <Link to="/login">Log In</Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
