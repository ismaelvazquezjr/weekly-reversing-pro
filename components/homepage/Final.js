import useInputState from "../../hooks/useInputState";

function Final() {
    const [emailState, handleEmailChange] = useInputState("");

    return (
        <div className="Final">
            <img className="Final-logo" src="/WeeklyReversingPro.png" alt="Weekly Reversing Pro Logo" />
            <div className="Final-form-container">
                <h2>Get FREE reverse engineering challenges!</h2>
                <p>Where would you like me to send them?</p>
                <input 
                    value={emailState}
                    onChange={handleEmailChange}
                    type="email" 
                    className="Final-email-field" 
                    placeholder="Email" />
                <button className="Final-cta-button">Sign up (FREE)</button>
            </div>
            <style jsx>{`
                .Final {
                    align-items: center;
                    font-size: 1.2rem;
                    display: flex;
                    justify-content: center;
                    padding: 5%;
                }

                .Final img {
                    margin-right: 5%;
                    max-width: 90%;
                }

                .Final-email-field {
                    font-size: 1.2rem;
                    padding: 10px;
                    width: 60%;
                }

                .Final-cta-button {
                    background-color: #d92027;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 1.2rem;
                    padding: 10px;
                    margin-left: 2%;
                }

                @media(max-width: 1080px) {
                    .Final {
                        flex-direction: column;
                        text-align: center;
                    }

                    .Final-email-field {
                        width: 90%;
                        margin-bottom: 2%;
                        max-width: 400px;
                    }

                    .Final-cta-button {
                        margin: 0;
                        width: 90%;
                        max-width: 400px;
                    }
                }


            `}</style>
        </div>
    );
}

export default Final;