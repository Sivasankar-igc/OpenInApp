import "../Css/signin.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const nav = useNavigate();
    return (
        <>
            <section className="signin-wrapper">
                <div className="signin-container">
                    <header>Sign In</header>
                    <h6>Sign in to your account</h6>

                    <div className="google-div">
                        <button className="google-btn">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse)
                                }}
                                onError={() => console.log("login failed")}
                            />
                        </button>
                        <button>Sign in with Apple</button>
                    </div>
                    <div className="signin-box">
                        <div className="input-box">
                            <p>Email Id</p>
                            <input type="email" required placeholder="Enter Your Email Id" />
                        </div>
                        <div className="input-box">
                            <p>Password</p>
                            <input type="password" placeholder="Enter Your Password" />
                        </div>
                        <div className="input-box">
                            <a href="#"><p>Forgot Password?</p></a>
                            <button onClick={() => nav("/homepage")}>Sign In</button>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Don't have an account?<a href="#">Register Here</a></p>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SignIn;