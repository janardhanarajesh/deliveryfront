import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import order from "../../serverside/models/order";

function User()
{
    const[product,getProduct]=useState([]);

    useEffect(()=>{
        if(!localStorage.getItem("user"))
        {
            alert("have to login first");
            window.location.href="/login"
        }
        else{
            axios.get("https://deliveryclient-1.onrender.com/getpro").then((resp)=>{
                getProduct(resp.data.proinfo)
            })
            // let qy=document.getElementById("qyt").value;

        }
    })
    const order=(a,b,c,x,t)=>{
        let user_id=localStorage.getItem("userid");
        
    

        let Qty=document.getElementById("qty"+x).value;
    if(Qty=="")
    {
alert("please enter quantity")

// var Qty=1;

    }
    else{
        let username=localStorage.getItem("username")
        let location=localStorage.getItem("location")
        let pn=localStorage.getItem("number")
        let em=localStorage.getItem("mail")
        // alert(em)

let q=Qty*t;

        /* eslint-disable no-restricted-globals */
       let con=confirm("total cost:"+(Qty*t));
       

       /* eslint-disable no-restricted-globals */

       if(con)
       {

        // console.log(day)
        let order={
            user:user_id,
            name:username,
            image:a,
            itemname:b,
            itemdisc:c,
            mail:em,
            qty:Qty,
            cost:q,
            place:location,
            phn:pn

        }
        axios.post("https://deliveryclient-1.onrender.com/postorder",order).then((respo)=>{
            if(respo.data.msg=="done")
            {
                alert("order placed successfully");
                alert("check your gmail");


            }
            else{
                alert("not placed")
            }
        })
    }
    else{
        alert("order not placed")
    }
    }
    }
    return(
        <div>
           <Link to="/myorder"> <button>my orders</button></Link>

            <div>
                {localStorage.getItem("user")}
            </div>
{
product.map((ele,i)=>{
    return(
        
        <center>
        <div className="pro">
               <img src={`https://deliveryclient-1.onrender.com/images/${ele.profile}`} className="imgh"/>
               <br/>
               <b>
                {ele.item}
               </b>
               <br/>
               {ele.disc}
               <br/>
               {ele.cost}  UNITS
               <br/>
               <input type="number" id={"qty"+i} className="in" placeholder="quantity"/>
               <br/>
               <button onClick={()=>order(ele.profile,ele.item,ele.disc,i,ele.cost)}>order now</button>
            </div>
            </center>
    )
})
}
        </div>
        
    )
}
export default User
