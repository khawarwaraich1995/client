import { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import {auth} from './../../firebase'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterComplete = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    setEmail(localStorage.getItem('emailForRegistration'))
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validations
    if(!email || !password) {
      toast.error('Email and password are required!');
      return false;
    }
    if(password.length < 6) {
      toast.error('Password must be at least 6 characters!');
      return false;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if(result.user.emailVerified){
        //Removing email from local storage
        localStorage.removeItem('emailForRegistration');
        //Get authenticated user from firebase authenticated
        let user = auth.currentUser;
        await user.updatePassword(password)
        const userToken = await user.getIdTokenResult;
        console.log(user)
        //Redirect user to desired route by push
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Complete your registration
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Create a new Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterComplete
