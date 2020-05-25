import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import QuestionGenerator from "../components/faq/QuestionGenerator";
import Head from "next/head";

function Faq() {
    return(
        <div className="Faq">
            <Head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <meta name="description" content="Weekly Reversing Pro sends you weekly reverse engineering challenges to sharpen your cyber security skills in a convenient and effective manner." />
                <meta name="keywords" content="Reverse Engineering, Malware Analysis, Vulnerability Research, Hacking, Cyber Security" />
                <title>Weekly Reversing Pro</title>
            </Head>
            <NavBar />
            <QuestionGenerator />
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
            `}</style>
        </div>
    );
}

export default Faq;