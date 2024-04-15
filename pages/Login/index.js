import React, { useState } from "react";
import { useRouter } from "next/router";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withAuth from '../../utils/withAuth';

 function Login() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('pf');
  const [pfNumber,setPfNumber] = useState('');
  const [ppoNumber,setPpoNumber] = useState('');

  const users = {
    pf: "12345",
    ppo: "67890"
  }

  const handleLogin = () =>{
    if (activeTab === 'pf'){
      if(pfNumber === users.pf){
        toast.success('Login successfully with PF Number!');
        localStorage.setItem("pf",pfNumber);
        router.push('/homepage');
      }else {
        toast.error('Incorrect PF number');
      }
    }else if(activeTab === 'ppo'){
      if(ppoNumber === users.ppo){
        toast.success("Login successfully with PPO number!");
        localStorage.setItem("ppo",ppoNumber);
        router.push('/homepage');
      }else{
        toast.error("Incorrect PPO number!");
      }
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-4 bg-white shadow-md rounded-lg">
        <div className="border-b border-gray-200 dark:border-gray-700">
        <img
              className="mx-auto h-10 w-auto"
              src="https://cdn-icons-png.freepik.com/256/5645/5645402.png?ga=GA1.1.1641609829.1711710599&"
              alt="CLA Global"
            />
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" role="tablist">
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'pf' ? 'text-purple-600 border-purple-600' : 'text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300'}`}
                onClick={() => setActiveTab('pf')}
                role="tab"
                aria-selected={activeTab === 'pf'}
              >
                LOGIN WITH PF NUMBER
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'ppo' ? 'text-purple-600 border-purple-600' : 'text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300'}`}
                onClick={() => setActiveTab('ppo')}
                role="tab"
                aria-selected={activeTab === 'ppo'}
              >
                LOGIN WITH PPO NUMBER
              </button>
            </li>
          </ul>
        </div>
        <div id="default-styled-tab-content" className="mt-4">
          {activeTab === 'pf' && (
            <div className="mt-2">
              <input
                id="pf"
                name="pf"
                value={pfNumber}
                onChange = {(e)=>setPfNumber(e.target.value)}
                type="text"
                placeholder="Enter PF Number"
                required
                className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          )}
          {activeTab === 'ppo' && (
            <div className="mt-2">
              <input
                id="ppo"
                name="ppo"
                type="text"
                placeholder="Enter PPO Number"
                value={ppoNumber}
                onChange={(e)=>setPpoNumber(e.target.value)}
                required
                className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          )}
          <button
            type="submit"
            onClick={handleLogin}
            className="mt-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

// export default  withAuth(Login);
export default Login;