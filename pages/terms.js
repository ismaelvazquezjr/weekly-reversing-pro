import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Terms() {
    return(
        <div className="Terms">
            <NavBar />
            Terms Page
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

export default Terms;