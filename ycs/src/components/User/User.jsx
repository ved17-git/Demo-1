import React from "react";
import { Form, Field } from "react-final-form";
import profile from "../../assets/profile 1.svg";
import TextField from "@mui/material/TextField";

function User() {
  return (
    <>
      <Form
        onSubmit={(values) => {
          console.log(values);
        }}
        render={(renderProps) => {
          const { handleSubmit } = renderProps;

          return (
            <>
              <div className="h-screen w-full flex justify-center items-center  ">
                <div className="bg-[#DDE6F3] w-[25%] text-center rounded-lg relative  ">
                  <div className="relative bottom-[3.5rem] left-[33%] w-[30%]">
                    <img src={profile} alt="" className="w-full" />
                  </div>

                  <div className="mt-[-11%]">
                    <h1 className="font-bold text-4xl text-[#333333]  ">
                      Add User Account
                    </h1>

                    <form onSubmit={handleSubmit}>
                      <div className="px-[6vh] my-4">
                        <Field
                          name="Emp_id"
                          component="input"
                          placeholder="Emp_id"
                          className="w-full border-[2px] border-blue-400  py-3 pl-3  rounded-xl text-2xl outline-none"
                        />
                      </div>

                      <div className="px-[6vh] my-4">
                        <Field
                          name="Emp_Name"
                          component="input"
                          placeholder="Emp_Name"
                          className="w-full border-[2px] border-blue-400  py-3 pl-3  rounded-xl text-2xl outline-none"
                        />
                      </div>

                      <div className="px-[6vh] my-4">
                        <Field
                          name="Emp_Contact"
                          component="input"
                          placeholder="Emp_Contact"
                          className="w-full border-[2px] border-blue-400  py-3 pl-3  rounded-xl text-2xl outline-none"
                        />
                      </div>

                      <div className="px-[6vh] my-4">
                        <Field
                          name="User_Type"
                          component="select"
                          placeholder="User_Type"
                          className="w-full border-[2px] border-blue-400  py-3 pl-3  rounded-xl text-2xl outline-none"
                        >
                          <option className="bg-[#E2E0FD] rounded-lg">
                            Data Applicant
                          </option>
                          <option className="bg-[#E2E0FD] rounded-lg">
                            Technical Team
                          </option>
                          <option className="bg-[#E2E0FD] rounded-lg">
                            Director
                          </option>
                          <option className="bg-[#E2E0FD] rounded-lg">
                            Finance
                          </option>
                          <option className="bg-[#E2E0FD] rounded-lg">
                            MD
                          </option>
                        </Field>
                      </div>

                      <div className="bg-[#D9D9D9] py-3 w-full rounded-b-lg">
                        <button
                          type="submit"
                          className="bg-[#4A90E2] text-white font-bold text-2xl px-16 rounded-lg py-2 hover:bg-blue-500">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      ></Form>
    </>
  );
}

export default User;
