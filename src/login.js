import axios from "axios";
function Login()
{
const loguser=(r)=>{
    r.preventDefault();
    let useor=document.getElementById("user").value;
    let pass=document.getElementById("pass").value;

    if(useor=="admin")
    {
if(pass=="spadmin")
{
    let passkey=prompt("enter paskey");
    if(passkey=="143")
    {
        alert("logged in as admin");
        window.location.href="/admin"
        localStorage.setItem("admin",useor)
    }
    else{
        alert("invalid passkey")
    }
}
else{
alert("invalid password")
}
    }
    else{
        axios.get("https://deliveryclient-1.onrender.com/loguser/"+useor+"/"+pass).then((reponse)=>{
            if(reponse.data.msg=="found")
            {
                localStorage.setItem("userid",reponse.data.useid);
                localStorage.setItem("username",reponse.data.usename);
                localStorage.setItem("location",reponse.data.loc);
                localStorage.setItem("number",reponse.data.ph);
localStorage.setItem("mail",reponse.data.mail)

                localStorage.setItem("user",useor);
                alert("signed in as"+" "+useor);
                window.location.href="/orderpro";
            }
            else{
                alert("invalid details or have to register");
                window.location.reload();
            }
            })
    }
}
    return(
        <center>
        <div id="sin">
            <h3>sign in</h3>
<form onSubmit={loguser}>
    <input type="text" placeholder="username" id="user" required/>
    <br/>
    <input type="password" placeholder="password" id="pass" required/>
    <br/>
    <input type="submit" value="login"/>
</form>
        </div>
        </center>
    )
}
export default Login
