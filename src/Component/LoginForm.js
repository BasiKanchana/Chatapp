import { useState } from "react";
import axios from "axios";


const projectID = "83ee38e7-fb2b-454a-9c77-ad9b15cbaa60";

const LoginForm = () => {

    const [ username,setUserName ] = useState('');
    const [ password , setPassword] = useState('');
    const [ error ,setError ] = useState('');

     const handleSubmit = async (e)  => {
        e.preventDefault();

        const authObject = {'Project-ID': projectID , 'user-Name' :username , 'User-Secret' : password };

        try{
            await axios.get('https://api.chatengine.io/chats' , { headers : authObject });

            localStorage.setItem('username' , username ) ;
            localStorage.setItem('password' , password);

            window.location.reload();
            setError('');

        } 
        catch(err){

            setError('Oops, incorrect credentials');
        }

        };

    return(
        <div className="wrapper py-5 bg-warning" style={{height:'693px'}}>
            <div className="form text-center ">
                <h1 className =" title py-5 text-primary" >Chat Application</h1>
                <form   onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUserName(e.target.value)}  placeholder="UserName"   className="input py-2 px-4 " required/><br/><br/>

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"   className="input py-2 px-4" required/><br/><br/>

                    <button className="button py-2 px-4" ><span>Start Chatting</span></button>

                </form>
                <h1>{error}</h1>
            </div>
        </div>

    );
};
export default LoginForm;


