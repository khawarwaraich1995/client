import { useState } from "react"
import { LockClosedIcon } from '@heroicons/react/solid'
import { toast } from 'react-toastify';
import { auth } from './../../firebase'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result
      if (user) {
        const token = await user.getIdTokenResult()
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            name: user.displayName,
            email: user.email,
            token: token.token
          }
        })
        toast.success("Logged In successfully!")
        navigate('/');
      }

    } catch (error) {
        toast.error(error.message)
    }

  }
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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                 <Input
                  id={"email-address"}
                  name={"email"}
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Email address"}
                />
              </div>
              <div>
                 <Input
                  id={"password"}
                  name={"password"}
                  type={"password"}
                  value={password}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Password"}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-secondary-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-link hover:text-link-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <Button
              label={'Login'}
              bgColor={'primary'}
              textColor={'white'}
              size={'full'}
              type={'submit'}
              icon={<LockClosedIcon className="h-5 w-5 text-secondary-500 group-hover:text-secondary-400" aria-hidden="true" />}
            />
          </form>
        </div>
      </div>
    </>
  )
}