import Welcome from "./container/Welcome";
export default function Route(){
    return [
    {
      path: "/",
      element:<Welcome></Welcome> ,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    ];
}