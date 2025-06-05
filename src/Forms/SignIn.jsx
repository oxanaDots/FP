import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputField from '../Components/InputField';
import { UserAuthContext } from './UserAuthContext';
function SignIn() {
    const {user, setUser} = UserAuthContext()
    const {handleSubmit, register, formState: {errors}} = useForm({shouldUseNativeValidation: false})
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            const res = await fetch('http://localhost:5001/api/signin', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify(data),
            });
      
            const result = await res.json();
      
            if (res.ok) {
              setUser(result.user); // set user context with name/email/id
      
              // Navigate to the correct dashboard based on role
              if (result.role === 'artist') {
                navigate('/artist_dashboard');
              } else if (result.role === 'business') {
                navigate('/business_dashboard');
              }
            } else {
              alert(result.error);
            }
          } catch (err) {
            alert(`Network error: ${err}`);
          }
          console.log(data)
      };
    
console.log(user)
  return (
    <div className=" flex flex-col p-4 justify-center text-center items-center">


<div className=' flex  w-[30rem] justify-center items-center'>
    <form className=' flex flex-col w-[90vw] flex items-left p-4 justify-center text-center '  onSubmit={handleSubmit(onSubmit)}>
          <legend className="text-xl text-center font-semibold mb-4">Sign In</legend>

         
   
<InputField
            name="email"
            placeholder="email address"
            type="email"
            register={register}
            validationRules={{
              required: "Enter your email address",
              validate: (value) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Please enter a valid email address",
            }}
            error={errors.email}
          />

      <InputField
  name="password"
  placeholder="password"
  type="password"
  register={register}
  validationRules={{
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters long',
    },
  }}
  error={errors.password}
/>


    <button className='submit-btn'>Submit</button>
  </form>
</div>
</div>
  );

}

export default SignIn;