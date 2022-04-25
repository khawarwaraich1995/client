import { useState } from 'react';
import { UserIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from './../../firebase'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Register() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true
    };
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete registeration`
    );
    localStorage.setItem('emailForRegistration', email);
    setEmail("");

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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your new account</h2>
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
            </div>

            <Button
              label={'Register'}
              type={'submit'}
              bgColor={'primary'}
              textColor={'white'}
              size={'full'}
              icon={<UserIcon className="h-5 w-5 text-secondary-500 group-hover:text-gray-400" aria-hidden="true" />}
            />

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/login" className="font-medium text-link hover:text-link-500">
                  Already have an account?
                </Link>
              </div>
            </div>


          </form>
        </div>
      </div>
    </>
  )
}