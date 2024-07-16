import axios from "axios";
import { useEffect, useState } from "react";

function Myorder()
{
    const[order,getOrder]=useState([])
useEffect(()=>{
    if(!localStorage.getItem("userid"))
    {
        alert("have to login first");
        window.location.href="/login";
    }
    else{
let user_id=localStorage.getItem("userid");
// alert(user_id)
axios.get("https://deliveryclient-1.onrender.com/getorder/"+user_id).then((reponse)=>{
    // alert(reponse.data.msg);
    getOrder(reponse.data.userorder)

})

    }
})
    return(
        <div>
{
    order.map((ele,i)=>{
        return(
            <div>
                <div>
                <img src={`https://deliveryclient-1.onrender.com/images/${ele.image}`} className="imgh"/>
                
                </div>
                <div>
                  ITEM:  {ele.itemname}
                    </div>
                    <div>
                   ITEM DISCRIPTION: {ele.itemdisc}
                    </div>
                   
                    <div>
                   OREDER ON: {ele.date}
                    </div>
                    <div>
                   QTY: {ele.qty}
                    </div>
                    <div>
                   COST: {ele.cost}
                    </div>
                    <hr/>
                </div>
        )
    })
}
        </div>
    )
}
export default Myorder
