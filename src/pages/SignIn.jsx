// src/pages/SignIn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate
      // Handle form submission logic here
      console.log({
        username,
        password,
      });
      navigate("/");
    };

  const navigate = useNavigate();


  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-56 xs:w-32" src={logo} alt="logo" />
        </a>
        <div className="w-full bg-white border-4 border-t-gray-800 border-white dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              SIMABA - Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan username anda"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 p-3.5 rounded-e-md"
                    onClick={togglePasswordVisibility}
                  >
                    <svg
                      className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        className={!showPassword ? 'block' : 'hidden'}
                        d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                      />
                      <path
                        className={!showPassword ? 'block' : 'hidden'}
                        d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                      />
                      <path
                        className={!showPassword ? 'block' : 'hidden'}
                        d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                      />
                      <line
                        className={!showPassword ? 'block' : 'hidden'}
                        x1="2"
                        x2="22"
                        y1="2"
                        y2="22"
                      />
                      <path
                        className={showPassword ? 'block' : 'hidden'}
                        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                      />
                      <circle
                        className={showPassword ? 'block' : 'hidden'}
                        cx="12"
                        cy="12"
                        r="3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                Belum memiliki akun? <a href="signup" className="font-medium text-gray-600 hover:underline dark:text-gray-500">Daftar Sekarang</a>
              </p>
              <button type="submit" className="w-full text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
