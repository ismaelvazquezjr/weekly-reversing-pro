import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Cart from "../components/upgrade/Cart";
import PaymentForm from "../components/upgrade/PaymentForm";

function Upgrade() {
    return(
        <div className="Upgrade">
            <Head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <meta name="description" content="Weekly Reversing Pro sends you weekly reverse engineering challenges to sharpen your cyber security skills in a convenient and effective manner." />
                <meta name="keywords" content="Reverse Engineering, Malware Analysis, Vulnerability Research, Hacking, Cyber Security" />
                <title>Weekly Reversing Pro</title>
            </Head>
            <NavBar />

            <div className="Upgrade-container">
                <Cart />
                <PaymentForm />
            </div>

            <Footer />
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

                .Upgrade-container {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    min-height: 80vh;
                    padding: 50px;
                }

                .Upgrade-container .Cart {
                    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
                    margin: 0 10%;
                    width: 100%;
                }

                .Upgrade-container .PaymentForm {
                    margin-right: 15%;
                    width: 100%;
                }

                @media(max-width: 1280px) {
                    .Upgrade-container .Cart {
                        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
                        margin-right: 10%;
                    }

                    .Upgrade-container .PaymentForm {
                        margin-right: 0;
                    }
                }

                @media(max-width: 1225px) {
                    .Upgrade-container {
                        flex-direction: column;
                    }

                    .Upgrade-container .Cart {
                        max-width: 500px;
                        width: 90%;
                    }

                    .Upgrade-container .PaymentForm {
                        margin-right: 0;
                        max-width: 500px;
                        width: 90%;
                    }
                }
            `}</style>
        </div>
    );
}

export default Upgrade;