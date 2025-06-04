import { useArtistForm } from './ArtistFormContext'
import InputField from '../InputField';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function SignUpArtist() {
    const {
        setArtistFormData
    } = useArtistForm()
const [but, updateButt] = useState(false)
    const {handleSubmit, register, formState: {errors}} = useForm({shouldUseNativeValidation: false})

    function onSubmit(data){
        
            setArtistFormData(data);
            console.log('Form submitted:', data);
    
    }

  return (
    <div className=" flex flex-col p-4 justify-center text-center items-center">


<div className=' flex  w-[40rem] justify-center items-center'>
    <form className=' flex flex-col w-[90vw] flex items-left p-4 justify-center text-center '  onSubmit={handleSubmit(onSubmit)}>
          <legend className="text-xl text-center font-semibold mb-4">Make a Booking</legend>

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
        placeholder="home address"
        register={register}
        validationRules={{ required: 'Home address is required' }}
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
<div className='flex flex-col items-center gap-5  self-left'>
   <div className='flex  justify-left items-center gap-5  self-left'>
        <span onClick={()=> updateButt (prev=> ! prev) }>+</span>
        <p className='text-xs py-1'>Add social media:</p>
        </div>
        {but && true ?<textarea className='bg-ternary-light'></textarea> : ''  }
      </div>
    <button className='submit-btn'>Submit</button>
  </form>
</div>
</div>
  );
}

export default SignUpArtist;