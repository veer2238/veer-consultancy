import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Login = () => {
  const { isOpen, setIsOpen,setRopen } = useContext(MyContext);




  return (
    <Drawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      direction="right"
      className="bla bla bla"
      overlayOpacity={0.1}
      size={400}
    >
  <div>
  <button onClick={()=>setIsOpen(false) || setRopen(true)}>Register</button>
  </div>
    </Drawer>
  );
};

export default Login;
