import './App.scss';
import emailjs from 'emailjs-com';
import { useRef } from 'react';


function App() {

  const formRef = useRef();
  const handleReset = () => {
    formRef.current.reset();
  };

    const handleEmail = async (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jt3gynu', 'template_qom99ya', e.target, 'qkTnVWYC16VmRAYgi')
    .then(function(response) {
      handleReset();
   }, function(error) {
      console.log('FAILED...', error);
   });

  }

  const formClass = 'd-flex flex-column align-items-center justify-content-center'
  const inputClass = 'w-100 form-control'
  const h2Class ='mb-4'
  const buttonClass = 'w-100 mt-4 btn btn-outline-primary'


  return (
      <form onSubmit={handleEmail} className={formClass} ref={formRef}>
        <h2 className={h2Class}>#REMIND ME#</h2>
        <label className='form-label'>Subject</label>
        <input
        className={inputClass}
        type="text"  
        id='subject' 
        name= 'subject'
        />
        <label className='form-label'>Desc.</label>
        <input
        className={inputClass}
        type="text"  
        id='description' 
        name= 'description'
        />
        <label className='form-label'>Date</label>
        <input
        className={inputClass}
        type="text"  
        id='date' 
        name= 'date'
        />
        <label className='form-label'>Time</label>
        <input
        className={inputClass}
        type="text"  
        id='time' 
        name= 'time'
        />
        <label className='form-label'>Email</label>
        <input
        className={inputClass}
        type="text"  
        id='email' 
        name= 'email'
        />
        <button type='submit' className={buttonClass}>Send</button>
      </form>
  );
}

export default App;
