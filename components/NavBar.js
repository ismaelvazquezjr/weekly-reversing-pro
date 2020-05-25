import Link from 'next/link';

function NavBar() {
    return (
        <div className="NavBar">
            <div className="NavBar-logo-container">
                <img className="NavBar-logo" src="/WeeklyReversingPro.png" alt="Weekly Reversing Pro Logo" />
            </div>
            <div className="NavBar-links">
                <ul>
                    <li className="NavBar-link"><Link href="/"><a>Home</a></Link></li>
                    <li className="NavBar-link"><Link href="/contact"><a>Contact</a></Link></li>
                    <li className="NavBar-link"><Link href="/faq"><a>FAQ</a></Link></li>
                    <li className="NavBar-link"><Link href="/upgrade"><a>Upgrade</a></Link></li>
                </ul>
            </div>
            <style jsx>{`
                .NavBar {
                    align-items: center;
                    justify-content: space-between;
                    display: flex;
                    background-color: #fff;
                    width: 100%;
                }

                .NavBar-logo-container {
                    margin-left: 10%;
                    width: 100%;
                }

                .NavBar-logo {
                    max-width: 250px;
                    padding: 25px 0;
                }

                .NavBar-links {
                    font-size: 1.2rem;
                    width: 100%;
                }

                .NavBar-links ul{
                    display: flex;
                    justify-content: flex-end;
                    margin-right: 10%;
                }

                .NavBar-link {
                    list-style-type: none;
                    margin: 0 2%;
                }

                .NavBar-link a{
                    color: #333;
                    text-decoration: none;
                }

                @media(max-width: 1200px) {
                    .NavBar {
                        text-align: center;
                    }

                    .NavBar-logo {
                        margin: 0;
                    }
                }

                @media(max-width: 975px) {
                    .NavBar {
                        flex-direction: column;
                        justify-content: center;
                    }

                    .NavBar-logo-container {
                        margin: 0;
                        padding: 5% 0 0 0;
                    }

                    .NavBar-links ul{
                        justify-content: center;
                    }

                    .NavBar-link {
                        margin: 0 0 0 5%;
                    }
                }
            `}</style>
        </div>
    );
}

export default NavBar;