import useEmailState from "../../hooks/useInputState";

function Main() {
    const [emailState, handleEmailChange] = useEmailState("");
    return (
        <div className="Main">
            <div className="Main-text">
                <h1 className="Main-header">Weekly reverse engineering challenges for free.</h1>
                <p>Join an <span className="App-strong">ex-hacker</span> who's presented to thousands of people on how to exploit buffer overflows, how to reverse engineer undocumented windows kernel functions, and has created dozens of keygens for fun and profit.</p>
                <p className="App-strong">Here's how it works:</p>
                <ul>
                    <li>Sign up to recieve a crackme, keygenme, unpackme... etc. in your mailbox once a week.</li>
                    <li>Try to solve the challenge! It's fun and it sharpens your skills.</li>
                    <li>(<span className="App-strong">PRO</span>) Sign up for a pro subscription if you'd like a written writeup and video walkthrough.</li>
                </ul>
            </div>
                
            <div className="Main-form-container">
            <form className="Main-form">
                <div className="Main-form-text">
                    <i className="fal fa-envelope-open-text"></i>
                    <h2>Subscribe</h2>
                    <p>Master x86/x64, the PE file format, and anti-debugging techniques one week at a time.</p>
                </div>
                <input 
                    value={emailState}
                    onChange={handleEmailChange}
                    className="Main-email-field" 
                    type="email" 
                    placeholder="Email" />
                <button className="Main-cta-button">Sign up (FREE)</button>
            </form>
            </div>
            
            <style jsx>{`

                .Main p, .Main li {
                    font-size: 1.2rem;
                }

                .Main li {
                    margin-bottom: 2%;
                }

                .Main h2 {
                    font-size: 2rem;
                }

                .Main {
                    display: flex;
                    margin: 0 7%;
                    padding: 0 0 50px 0;
                }

                .Main-text {
                    padding: 25px 50px;
                    width: 60%;
                }

                .Main-form-text .fal {
                    font-size: 4rem;
                    margin-top: 2%;
                }

                .Main-form-container {
                    width: 50%;
                }

                .Main-form {
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
                    margin-top: 15%;
                    padding: 25px;
                    text-align: center;
                }

                .Main-header {
                    font-size: 2.5rem;
                }

                .Main-email-field {
                    font-size: 1.2rem;
                    padding: 10px;
                    margin-top: 5%;
                    width: 80%;
                }

                .Main-cta-button {
                    background-color: #d92027;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 1.2rem;
                    margin-top: 2%;
                    margin-bottom: 7%;
                    padding: 10px;
                    width: 80%;
                }

                @media(max-width: 1200px) {
                    .Main {
                        flex-direction: column;
                        margin: 0;
                        width: 100%;
                    }

                    .Main-text {
                        align-items: center;
                        display: flex;
                        flex-direction: column;
                        padding: 0 5%;
                        width: 100%;
                    }

                    .Main p {
                        max-width: 875px;
                    }

                    .Main-form-container {
                        align-items: center;
                        display: flex;
                        justify-content: center;
                        width: 100%;
                    }

                    .Main-header {
                        margin-bottom: 0;
                    }

                    .Main-form {
                        max-width: 500px;
                        margin-top: 0;
                    }
                }
            `}</style>
        </div>
    );
}

export default Main;