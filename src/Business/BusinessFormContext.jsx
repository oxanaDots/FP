import { useContext, createContext, useState } from "react";

const BusinessFormContext  = createContext()
export const BusinessFormProvider =({children})=>{
  const [businessFormData, setbusinessFormData] = useState({
    firstName: '',
    lastName:'',
    businessName: '',
    email: '',
    phoneNumber:'',
    business_type:'',
    location:'',
    postcode:''
  });
  return(
   < BusinessFormContext.Provider value={{businessFormData, setbusinessFormData}}>
   {children}
   </BusinessFormContext.Provider>
  )
}
export const useBusinessForm = ()=> useContext(BusinessFormContext)