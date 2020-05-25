import Head from 'next/head';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useInputState from "../hooks/useInputState";

function Contact() {
    const [nameState, handleNameChange] = useInputState("");
    const [emailState, handleEmailChange] = useInputState("");
    const [messageState, handleMessageChange] = useInputState("");

    return(
        <div className="Contact">
            <Head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <meta name="description" content="Weekly Reversing Pro sends you weekly reverse engineering challenges to sharpen your cyber security skills in a convenient and effective manner." />
                <meta name="keywords" content="Reverse Engineering, Malware Analysis, Vulnerability Research, Hacking, Cyber Security" />
                <title>Weekly Reversing Pro | Contact Me</title>
            </Head>
            <NavBar />
            <div className="Contact-container">
                <form className="Contact-form">
                    <div className="Contact-form-header">
                        <h1>Get in touch!</h1>
                        <p>I'm always looking for ways to improve the site :]</p>
                    </div>

                    <label htmlFor="full-name" className="Contact-label">Name</label>
                    <input 
                        value={nameState}
                        onChange={handleNameChange}
                        type="text" 
                        id="full-name" 
                        name="full-name" 
                        placeholder="John Doe" 
                        className="Contact-form-group"/>
                    <label htmlFor="email" className="Contact-label">Email</label>
                    <input 
                        value={emailState}
                        onChange={handleEmailChange}
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="john@gmail.com" 
                        className="Contact-form-group"/>
                    <label htmlFor="message" className="Contact-label Contact-message-label">Message</label>
                    <textarea 
                        value={messageState}
                        onChange={handleMessageChange}
                        id="message" 
                        name="message" 
                        rows="5" 
                        placeholder="Write your message here." 
                        className="Contact-form-group Contact-text-area"/>

                    <button className="Contact-button">Send Message<i className="fal fa-paper-plane"></i></button>
                </form>
            </div>

            <Footer />
            <style jsx>{`
                .Contact {
                    min-height: 100vh;
                }

                .Contact-container {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    font-size: 1.2rem;
                    margin: 0;
                    padding: 50px 0;
                    width: 100vw;
                    min-height: 80vh;
                }

                .Contact-form {
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
                    width: 90%;
                    max-width: 500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 25px;
                }

                .Contact-label {
                    color: #444;
                    font-size: 0.9rem;
                    margin-top: 2%;
                }

                .Contact-form-group::placeholder {
                    color: #aaa;
                }

                .Contact-form-group {
                    border: 1px solid #999;
                    font-size: 1.2rem;
                    margin-top: 2%;
                    padding: 10px;
                }

                .Contact-form-header{
                    color: #444;
                    text-align: center;
                }

                .Contact-form-header h1 {
                    margin-bottom: 0;
                    padding-bottom: 0;
                }

                .Contact-text-area {
                    border: 1px solid #999;
                    font-family: 'Open Sans', sans-serif;
                }

                .Contact-message-label {
                    margin-top: 5%;
                }

                .Contact-form-header p {
                    color: #666;
                    margin-top: 0;
                    padding-top: 0;
                }

                .Contact-button {
                    background-color: #d92027;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 1.2rem;
                    margin-top: 5%;
                    padding: 10px;
                }

                .Contact-button .fal {
                    margin-left: 15px;
                }
            `}</style>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap');
                
                body {
                    background-color: #F6F6F6;
                    color: #333;
                    font-family: 'Open Sans', sans-serif;
                    overflow-x: hidden;
                    padding: 0;
                    margin: 0;
                    width: 100vw;
                }

                * {
                    box-sizing: border-box;
                }

                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
        </div>
    );
}

export default Contact;