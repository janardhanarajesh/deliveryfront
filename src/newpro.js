import axios from "axios";
import { useEffect, useState } from "react";

function Addnew()
{
    const[product,addproduct]=useState([]);
    const addpro=(h)=>{
        h.preventDefault();
        let itemname=document.getElementById("item").value;
        let discription=document.getElementById("discription").value;
        let cost=document.getElementById("price").value;

        let picture=document.getElementById("pic").files[0]; 
        const profilepicture= new FormData()
profilepicture.append('file',picture,picture.name);
profilepicture.append('item',itemname);
profilepicture.append('disc',discription);
profilepicture.append('cost',cost);

axios.post("https://deliveryclient-1.onrender.com/addproduct",profilepicture).then((resp)=>{
if(resp.data.msg=="done")
{
    alert("added success fully");
}
else{
    alert("unsuccessful");

}
})
    }
    useEffect(()=>{
        axios.get("https://deliveryclient-1.onrender.com/getpro").then((reps)=>{
            
            addproduct(reps.data.proinfo);
        })
    })
    const delpro=(e,x)=>{
// e.preventDefault();
axios.delete("https://deliveryclient-1.onrender.com/delpro/"+e).then((resp)=>{
alert(resp.data.msg)
})
    }
    return(
        <div>
<form onSubmit={addpro}>
    <input type="text" id="item" placeholder="item name" required/>
    <br/>
    <input type="text" id="discription"  placeholder="discription" required/>
    <br/>
    <input type="file" id="pic" required/>
    <br/>
    <input type="number" id="price" required placeholder="price"/>
<br/>
    <input type="submit" value="add"/>
</form>
<div>
    {
        product.map((ele,i)=>{
            return(
                <center>
                <div className="pro">
                    <img src={`https://deliveryclient-1.onrender.com/images/${ele.profile}`} className="imgh"/>
                    <br/>
                <b style={{fontSize:"30px"}}>
                  {ele.item}
                  </b>
                    <br/>
                    {ele.disc}
                    <br/>
                    <button onClick={()=>delpro(ele._id)}>delete</button>
                                        </div>
                                        </center>
            )
        })
        
    }
</div>
        </div>
    )
}
export default Addnew
