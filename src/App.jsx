import { useState } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import validator from 'validator';
import Success from './components/Success';


const App = () => {
  const [ emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!validator.isEmail(email)){
      setEmailError('This email is not valid')
      setTimeout(()=>{
        setEmailError('')
      }, 3000)
    }else if(email.length === 0) {
      setEmailError('Please enter your email')
      setTimeout(()=>{
        setEmailError('')
      }, 3000)
    }else{
      console.log('Valid email', email);
      setEmail('');
      setSuccess(true)
    }

    // if(validator.isEmail(email)){
    //   return console.log('Valid email', email)
    // }else{
    //   setEmailError("Valid email is required")
    // }

    // if(email.length <= 0) return setEmailError('Please  enter your email')
  }


  const handleChange = (e) =>{
    setEmail(e.target.value);
    if(emailError){
      setEmailError('')
    }
  }

  const dismissMessage = ()=> {
    setSuccess(false)
  }


  return (
    <div className="flex justify-center items-center h-screen">
      {success ? (<Success dismissMessage={dismissMessage} />) : (
      <div className="bg-white h-5/6 w-4/6 rounded-2xl sm:flex  "> 

        <div className="grid grid-cols-2 ">

          <div className="flex flex-col m-8  ">
            <h1 className="color-darkSlated text-7xl font- font-roboto">Stay Updated!</h1>
            <p className='text-2xl mt-5'>
            Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className='mt-9 text-lg flex flex-col'>
              <li className='flex items-center my-3'>
                <IoIosCheckmarkCircle className='text-tomato' />
                Product discovery and building what matters
              </li> 
              <li className='flex items-center my-3'>
                <IoIosCheckmarkCircle className='text-tomato' />
                Measuring to ensure updates are a success
              </li> 
              <li className='flex items-center my-3'>
                <IoIosCheckmarkCircle className='text-tomato' />
                And much more!
              </li> 
             </ul>


               <form onSubmit={handleSubmit} className='flex flex-col'>
                 <label htmlFor="" className='mt-5 text-lg'>Email Adress: </label>
                 {emailError && <span className='text-tomato'> {emailError}</span>}
                 <input type="text" id="email" placeholder="example@gmail.com" onChange={handleChange} className='border border-darkSlate h-10 rounded-md mt-1 '/>
                 
                 <button type='submit' className='bg-darkSlate rounded-md text-white text-lg font-robot mt-5 h-12 hover:bg-tomato transition-all duration-500'>Subscribe to monthly newsletter</button>
               </form>

          </div>

          <div className="flex justify-center items-center mt-3 ml-10">
            <img src="public/images/illustration-sign-up-desktop.svg" className="sm: " alt="" />
          </div>

        </div>
      </div>
      )}
    </div>
  )
}

export default App
