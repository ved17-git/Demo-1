import { Link } from "react-router-dom"

export default function Header(){
    return <div className="flex  justify-around py-4 bg-indigo-100">
        <div className="text-4xl font-bold "> This is a header</div>
        <ul className="flex gsp-4">
            <a href="/about" className="text-xl font-semibold  underline">About US</a>
            <li className=""></li>
            <li className=""></li>
        </ul>
        <a href="/login" className="text-2xl  bg-indigo-400 font-semibold  text-white rounded-lg  px-4"><button>Login/signUp</button></a> 
        <Link to='/user'>  <button className="bg-zinc-950 p-2 rounded-lg text-white">User</button>   </Link>
      
    </div>
}