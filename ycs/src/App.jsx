import * as React from "react";
// import { createRoot } from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./container/Welcome";
import Login from "./components/Login/Login";
import User from "./components/User/User";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Welcome></Welcome> ,
//   },
//   {
//     path: "about",
//     element: <div>this is sbout page</div>,
//   },
//   {
//     path: "login",
//     element: <Login></Login>,
//   },
//   {
//     path:"adminlogin",
//     element:<AdminLogin></AdminLogin>
//   }
// ]);

// export default function App(){ 
//   createRoot(document.getElementById("root")).render(
//     <Layout>
//   <RouterProvider router={router} />
//   </Layout>
//   );
// };

const App = () => {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="about" element={<div>This is about page</div>} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<User />} />

        </Routes>
      </Layout>
  );
};

export default App;