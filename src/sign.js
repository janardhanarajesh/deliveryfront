import axios from "axios"
function Sign()
{
    
    const register=(e)=>{
        e.preventDefault();
        let name=document.getElementById("name").value;
        let pass=document.getElementById("pass").value;
        let mail=document.getElementById("mail").value;
        let addr=document.getElementById("add").value;
        let phn=document.getElementById("phn").value;

        var userinfo={
            username:name,
            password:pass,
            email:mail,
            address:addr,
            phnumber:phn
        }
        axios.get("https://deliveryclient-1.onrender.com/getuser/"+name+"/"+phn+"/"+mail).then((response)=>{
            if(response.data.msg=="no")
            {
                axios.post("https://deliveryclient-1.onrender.com/signup",userinfo).then((res)=>{
                    if(res.data.msg=="success")
                    {
        alert("registered successfully")
        window.location.href="/login"
                    }
                    else{
        alert("regisetered unsuccessfully")
                    }
                })
            }
            else{
                alert("alredy registered")
            }
        })
       
    }
    return(
        <div>
            <form onSubmit={register}>
                <input type="text" placeholder="username" id="name" required/>
                <br/>
                <input type="password" placeholder="password"  id="pass" required/>
                <br/>
                <input type="email" placeholder="email"  id="mail" required/>
                <br/>
                <input type="text" placeholder="address"  id="add" required/>
                <br/>
                <input type="tel" placeholder="phone number"  id="phn" required/>
                <br/>
                <button type="submit">submit</button>
            </form>
        </div>
    )


}
export default Sign 
