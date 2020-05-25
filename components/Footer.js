import Link from 'next/link';

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-copy">
                <p>&copy; 2020 Weekly Reversing Pro</p>
            </div>
            <div className="Footer-links">
                <p><Link href="/contact"><a>Contact</a></Link></p>
                <p><Link href="/terms"><a>Terms</a></Link></p>
                <p><Link href="/privacy"><a>Privacy</a></Link></p>
            </div>

            <style jsx>{`
                .Footer {
                    background-color: #fff;
                    display: flex;
                    font-size: 1.2rem;
                    justify-content: space-between;
                    padding: 1% 10%;
                }

                .Footer-links {
                    display: flex;
                }

                .Footer-links a {
                    color: #333;
                    text-decoration: none;
                }

                .Footer-links p {
                    margin-right: 10%;
                }

                @media(max-width: 725px) {
                    .Footer {
                        align-items: center;
                        flex-direction: column;
                        margin: 0;
                        padding: 0;
                    }

                    .Footer-links {
                        align-items: center;
                        display: flex;
                        justify-content: space-around;
                    }

                    .Footer-links p {
                        margin: 0 25% 5% 25%;
                    }
                }
            `}</style>
        </div>
    );
}

export default Footer;