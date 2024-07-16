import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Aorder()
{
    const[order,getOrder]=useState([]);
    useEffect(()=>{
        if(!localStorage.getItem("admin"))
        {
            alert("only admin can access this page")
            window.location.href="/login"
        }
        else{
        axios.get("http://localhost:2000/getor").then((respo)=>{
getOrder(respo.data.orders)
        })
    }
    })
    const logout=(e)=>{
e.preventDefault();
localStorage.removeItem("admin");
    }
    const postStatus=(r)=>{
// r.preventDefault();
let st="done"

axios.put("http://localhost:2000/putstat/"+r+"/"+st).then((rep)=>{
alert(rep.data.msg);

}
)
    }
    return(
        <div>
            <button onClick={logout}>logout</button>
            {
                order.map((ele,i)=>{
                    return(
                        <div>

                           <b>custmor name:</b> {ele.name}
                            <br/>
                            <b>item name:</b>   {ele.itemname}
                          
                            <br/>
                            <b>item discription:</b> {ele.itemdisc}

                            <br/>
                            <b>quantity:</b>  {ele.qty}

                            <br/>
                            
                            <br/>
                            <b>total cost:</b>  {ele.cost}
                            <br/>
                            <b>address:</b>  <Link to={`https://www.google.com/search?q=${ele.place}`} target="new">{ele.place}</Link>
                            <br/>
                            <b>custmor number:</b>  {ele.phn}
                            <br/>
                            <br />


<b>ordered on:</b>{ele.date}
<br/>
                            {ele.status === "done" ? (
            <b>Status: Done</b>
          ) : (
            <button onClick={() => postStatus(ele._id)} id={`bu${i}`}>
              Mark as Done
            </button>
          )}


                            <hr/>
                            </div>
                    )

                })
            }
        </div>
    )
}
export default Aorder