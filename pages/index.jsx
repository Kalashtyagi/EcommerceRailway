'use client'
import React,{useEffect,useState} from "react";
import { getAuth,RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { app } from "./config";
import { useRouter } from "next/router";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [phoneNumber,setPhoneNumber] = useState('');
    const [otp,setOtp] = useState('');
    const[confirmationResult,setConfirmationResult] = useState(null);
    const[otpSent,setOtpSent] = useState(false);

    const auth = getAuth(app);
    const router = useRouter();

    useEffect(()=>{
        window.recaptchaVerifier  = new RecaptchaVerifier(auth,"recaptcha-container",{
                 'size':'normal',
                 'callback':(response) =>{
                    console.log("res",response);
                 },
                 'expired-callback':() =>{

                 }

        });
    },[auth]);

    const handlePhoneNumberChange = (e) =>{
        setPhoneNumber(e.target.value);
    }
    const handleOTPChange = (e) =>{
        setOtp(e.target.value);
    }

    const handleSendOtp = async(e) =>{
      e.preventDefault();
        try{
            const formattedPhoneNumber =    `+${phoneNumber.replace(/\D/g,'')}`;
            const confirmation = await signInWithPhoneNumber(auth,formattedPhoneNumber,window.recaptchaVerifier);
            setConfirmationResult(confirmation);
            console.log(confirmation,"sendOtp")
            setOtpSent(true);
            setPhoneNumber('');
            toast.success("OTP has been sent");

        }catch(error){
            console.error(error);
          
        }
    };

    const handleOTPSubmit = async(e) =>{
      e.preventDefault();
        try{
            await confirmationResult.confirm(otp);
            console.log("confi",confirmationResult);
            const userCredential =  getAuth(app).currentUser;
        console.log("User Credential:", userCredential);
            setOtp('');
            toast.success("Otp verified successfully!")
            setTimeout(() => {
                router.push('/login');
            }, 2000);
            
        } catch(error){
            console.error(error);
            toast.error("invalid otp");
        }
    };
    return (
      <>
        <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Mobile Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter phone number with country code"
                    autoComplete="number"
                    required
                    className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {otpSent &&
              <div>
               
                <div className="flex items-center justify-between">
                  <label htmlFor="OTP" className="block text-sm font-medium leading-6 text-gray-900">
                    OTP
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                    
                     <input
                     id="otp"
                     name="otp"
                     type="text"
                     value={otp}
                     onChange={handleOTPChange}
                     placeholder="Enter OTP"
                     autoComplete="otp"
                     required
                     className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   />
                    
                 
                </div>
              </div>
  }
   {!otpSent && (
                <div id = "recaptcha-container">
                    </div>)}
              <div>
                <button
                  type="submit"
                  onClick={otpSent?handleOTPSubmit:handleSendOtp}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {otpSent ? "Submit OTP" : "Send Otp"}
                </button>
               
              </div>
            </form>
          </div>
          <ToastContainer position="top-center" />
        </div>
      </>
    )
  }