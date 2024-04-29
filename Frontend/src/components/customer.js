import React from 'react';
import NavBar1 from './Navbar1';
import image1 from './Home1.png';

const Customer = () => {
  return (
    <div>
      <NavBar1 />
      <div>
        <img src={image1} alt='show null' style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', width: '100%', height: '750px' }} />
      </div>
    </div>
  );
};

export default Customer;
