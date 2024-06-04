import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        console.log('aaa', email, password)
        if (!email || email.trim() === '' || !password || password.trim() === '') {
            return navigate('/');
        }

        setUser(email);
        return navigate('/dashboard');
    }

    return (
        <form onSubmit={loginHandler} style={{ padding: 30, margin: 20, backgroundColor: "aliceblue", width: 250, height: 140, display: "flex", alignItems: "center", borderRadius: 8 }}>
            <table>
                <tbody>
                    <tr style={{ marginBottom: 30 }}>
                        <td>Email :</td>
                        <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" /></td>
                    </tr>
                    <tr>
                        <td style={{ textWrap: "nowrap" }}>Password :</td>
                        <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /></td>
                    </tr>
                    <tr>
                        <td><button type="sumbit" style={{ marginTop: 15, width: 80 }}>Login</button></td>
                    </tr>
                </tbody>

            </table>
        </form>
    );
}

export default Login;