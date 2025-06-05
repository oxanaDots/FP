import React from 'react';
import InputField from '../Components/InputField';
import { useForm } from 'react-hook-form';
import {  useBusinessForm } from './BusinessFormContext';
import { useNavigate } from 'react-router-dom';
import services from '../services.json'

function BusinessSignup() {
      const {handleSubmit, register, watch, formState: {errors}} = useForm({shouldUseNativeValidation: false})
    const {businessFormData, setbusinessFormData} = useBusinessForm()
    const navigate = useNavigate()
      const onSubmit =(data)=>{
           const newData = {
            ...data,
            role: 'business'
           }
           setbusinessFormData(newData)
           fetch('http://localhost:5001/api/business_signup', {
            method: 'POST',
             headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
            credentials: 'include', 
         })
           .then(async (res) => {
             const response = await res.json();
             if (res.ok) {
               console.log('✅ Bsuiness registered:', response);
               navigate('/home');
             } else {
               console.error(' Signup error:', response.error || response);
             }
           })
           .catch((err) => {
             console.error('Network error:', err);
           });
      }
      console.log(businessFormData)
  return (
    <div className=" flex flex-col p-4 justify-center text-center items-center">


    <div className=' flex  w-[40rem] justify-center items-center'>
        <form className=' flex flex-col w-[90vw] flex items-left p-4 justify-center text-center '  onSubmit={handleSubmit(onSubmit)}>
              <legend className="text-xl text-center font-semibold mb-4">Create an Account</legend>
    
              <InputField
                name="businessName"
                placeholder="business name"
                register={register}
                validationRules={{
                  required: "Enter your the name of your business",
                  validate: (value) =>
                    /^[a-zA-Z]+$/.test(value) || "Your input can only contain alpahbetic letters",
                }}
                error={errors.businessName}
              />
              <div className=' w-100 flex justify-between w-full gap-4 '>
            
              <InputField
                name="firstName"
                placeholder="first name"
                register={register}
                validationRules={{
                  required: "Enter your first name",
                  validate: (value) =>
                    /^[a-zA-Z]+$/.test(value) || "Your input can only contain alpahbetic letters",
                }}
                error={errors.firstName}
              />
               <InputField
                name="lastName"
                placeholder="last name"
                register={register}
                validationRules={{
                  required: "Enter your last name",
                  validate: (value) =>
                    /^[a-zA-Z]+$/.test(value) || "Your input can only contain alpahbetic letters",
                }}
                error={errors.lastName}
              />
    </div>
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
    <div className=' w-100 flex justify-between w-full gap-4 '>
          <InputField
            name="location"
            placeholder="business address"
            register={register}
            validationRules={{ required: 'Business address is required' }}
            error={errors.location}
          />
          <InputField
            name="postcode"
            placeholder="postcode"
            register={register}
            validationRules={{ required: 'Postcode is required',
                validate: (value) =>
                    /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s\d{1,2}[A-Za-z]{2}$/.test(value) || "Please enter a valid postcode",
                }}
            error={errors.postcode}
          />
        
    </div>
    <InputField
            name="phoneNumber"
            placeholder="phone number"
            register={register}
            validationRules={{ required: 'Phone number is required',
               
                }}
            error={errors.phoneNumber}
          />
             <InputField
             type='select'
             options={services}
            name="business_type"
            placeholder="type of business you own"
            register={register}
            validationRules={{ required: 'Business type is required',
               
                }}
            error={errors.business_type}
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
    
    <InputField
      name="confirmPassword"
      placeholder="confirm password"
      type="password"
      register={register}
      validationRules={{
        required: 'Please confirm your password',
        validate: (value) =>
          value === watch('password') || 'Passwords do not match',
      }}
      error={errors.confirmPassword}
    />
    
   
        <button className='submit-btn'>Submit</button>
      </form>
    </div>
    </div>
      );
  
}

export default BusinessSignup;