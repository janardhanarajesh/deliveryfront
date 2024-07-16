import { useEffect } from "react"
import { Link } from "react-router-dom"
function Admin()
{
useEffect(()=>{
    if(!localStorage.getItem("admin"))
    {
        alert("only admin can access this page");
        window.location.href="/login"
    }
},[])
const remove=(e)=>{
e.preventDefault();
localStorage.removeItem("adim")
window.location.href="/login"
}
    return(
        <div>
            <button onClick={remove}>log out</button>
           <Link to="/addpro"><button>add</button></Link>
           <Link to="/orders"><button>orders</button></Link>

        </div>
    )
}
export default Admin
