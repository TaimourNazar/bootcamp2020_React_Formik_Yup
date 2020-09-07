import React from 'react';
import './App.css';
import UserForm from './Forms/UserForm';
import UserFormWithFormik from './Forms/UserFormWithFormik';
import UserFormWithFormikValidation from './Forms/UserFormWithFormikValidation';
import UserFormWithFormikContext from './Forms/UserFormWithFormikContext';
import UserFormWithFormikMaterialUI from './Forms/UserFormWithFormikMaterialUI';

function App() {
  return (
    <div>
      <UserForm/><hr/>
      <UserFormWithFormik/><hr/>
      <UserFormWithFormikValidation/><hr/>
      <UserFormWithFormikContext/><hr/>
      <UserFormWithFormikMaterialUI/>
    </div>
  );
}

export default App;
