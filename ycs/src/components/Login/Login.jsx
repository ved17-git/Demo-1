import React from 'react';
import { Form } from 'react-final-form';
import { Field } from 'react-final-form';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import logoUrl from '../../assets/logo.svg';
import profile from '../../assets/profile.svg';

const Login = () => {
  return (
    <Form
      onSubmit={(values) => {
        console.log('Form submitted with values:', values);
      }}
      render={({ handleSubmit }) => (
        <div className="flex-wrap sm:flex ">
        <div className=" justify-between mb-4 w-28 h-28">
              <img src={logoUrl} alt="Logo" className="w-full h-full" />
            </div>
        <form onSubmit={handleSubmit} className="md:mx-64 sm:mx-40 rounded-lg flex-col ">
          <div className= " shadow-lg max-w-sm mx-auto bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center ">
                <img src={profile} alt="Logo" className="w-full h-full" />
          </div>
          <div className="p-8 shadow-lg max-w-sm mx-auto bg-blue-50">
            <div className="flex flex-col items-center mb-6">
              
              <h2 className="text-2xl font-bold">Add Account</h2>
            </div>
            <div className="space-y-4">
              <Field
                name="name"
                render={({ input, meta }) => (
                  <TextField
                    {...input}
                    type="text"
                    placeholder="Name"
                    className="w-full bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
              <Field
                name="user_id"
                render={({ input, meta }) => (
                  <TextField
                    {...input}
                    type="text"
                    placeholder="User ID"
                    className="bg-white w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
              <Field
                name="employee_id"
                render={({ input, meta }) => (
                  <TextField
                    {...input}
                    type="text"
                    placeholder="Employee ID"
                    className="bg-white w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
            </div>
          </div>
          <div className="p-8 shadow-lg max-w-sm mx-auto bg-gray-200">
            <Button
              type="submit"
              variant="contained"
              className="mt-16 mb-16 w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold"
            >
              Add
            </Button>
          </div>
        </form>
        </div>
      )}
    />
  );
};

export default Login;