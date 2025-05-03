import React, { useState } from "react";
import { DiJava } from "react-icons/di";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";
const Otpverify = () => {
  const data = useSelector((state) => state.authSlice.value?.payload);
  const [otp, setOtp] = useState(null);
  const nevigate = useNavigate();
  const handleOtpSubmit = () => {
    axios
      .post("http://localhost:3000/auth/verify-otp", {
        email: data.email,
        otp: otp,
      })
      .then((res) => {
        nevigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p className="text-black">Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email: <b>{data?.email}</b> </p>
              </div>
            </div>
            <div>
              <div action="" method="post">
                <div className="flex flex-col space-y-16  ">
                  {/* ............ custom made input box.............. */}
                  <div className="flex justify-center items-center">
                    <div className="w-70 h-14 text-black  ">
                      <input
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400
                       text-2xl  bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  {/* .............shadcn otp............ */}
                  {/* <div className="flex justify-center items-center w-full">
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div> */}

                  {/* ...................... Tailwind otp component...................... */}
                  {/* <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs gap-2">
                    <div className="w-14 h-14 text-black  ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-14 h-14  ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-14 h-14  ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-14 h-14  ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="w-14 h-14  ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="w-14 h-14 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div> */}

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        onClick={handleOtpSubmit}
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl 
                      outline-none py-5 bg-blue-700 border-gray-500  500 text-white text-sm shadow-lg"
                      >
                        Verify Account
                      </button>
                    </div>
                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otpverify;
