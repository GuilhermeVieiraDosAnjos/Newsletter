import { IoIosCheckmarkCircle } from "react-icons/io";
import PropTypes from 'prop-types';

const Success = ({dismissMessage, email}) => {
  return (
    <>
   <div className="bg-white h-full w-full flex justify-center flex-col items-center sm:h-full sm:w-full md:3/6 md:2/6 md:m-5 lg:h-4/6 lg:w-1/4 rounded-xl">
          <div className="flex justify-start mx-10">
              <IoIosCheckmarkCircle className="text-tomato text-5xl "  />
          </div>
      <div className="flex justify-center items-center flex-col mt-8 mx-10 ">
          <h1 className="text-4xl font-bold mb-2">Thanks for subscribing</h1>
          <p className="mt-1">
            Thanks for subscribing! A confirmation email has been sent to <strong>{email}</strong> .Please open it and click the button inside to
            confirm your subscription. Dismiss message
          </p>
              <button type='submit' onClick={dismissMessage} className='bg-darkSlate rounded-md text-white text-lg font-robot m-5  h-12 hover:bg-tomato transition-all px-10 duration-500'> Dismiss Message </button>
      </div>
    </div>
    </>
  );
};

Success.propTypes = {
    dismissMessage: PropTypes.func,
    email: PropTypes.string
}

export default Success;
