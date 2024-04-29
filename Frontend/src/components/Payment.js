
import React,{useState} from 'react';
import Navbar from './Navbar';

function Payment() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_ihlc3tnPkb6Riz",
        key_secret:"KJyTIXfijzWUXnfeZt12CSm0",
        amount: amount *100,
        currency:"INR",
        name:"SDP_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Vijayalakshmi",
          email:"vaishnavi@gmail.com",
          contact:"9123456789"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div>
      <Navbar/>
    <div className="App">
     <h2>Razorpay Payment Integration Using React</h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
    </div>
    </div>
  );
}


export default Payment;
