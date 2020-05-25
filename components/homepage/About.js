function About() {
    return (
        <div className="About">
            <div className="About-container">
                <h2># whoami</h2>
                <img src="/me-original.png" alt="Selfie of Ismael Vazquez Jr." />
                <p>My name is Ismael and I first got introduced to reverse engineering back in the early 2000s. I was just a young punk nose kid looking to get the upper edge in a little indie game when I noticed others doing things that the game didn't allow.</p>
                <p>After months of begging, one of these hackers gave me a cryptic message, "learn assembly and download w32dasm." The whole thing went over my head and after downloading what had to surely have been malware, I gave up. Using other's scripts and being a skid was a lot easier but it doesn't come without a price. When you play stupid games, you win stupid prizes, and eventually my computer crapped out. I was raised by a single mother on welfare and we couldn't afford a new one... Life went on.</p>
                <p>That childlike curiosity would never dissipate and in 2012 I got my first job working at McDonald's. After months of saving, I had saved enough to purchase a computer and several computer science, C++, and reverse engineering books. I spent every moment I could studying and eventually things began to click!</p>
                <p>Fast forward to today and I'm in a good enough position to pursue formal education and now I'm working towards a Bachelor's degree in Computer Science. In my spare time, around work, family, and studies I like to share whatever knowledge I've acquired.</p>
                <p>None of this is particularly important because the only thing that matters is that we continue learning and growing. I've only included this because giving up my data to strangers makes me uneasy and it's only fair to provide you with some information about myself as well.</p>
            </div>
            <style jsx>{`
            .About {
                align-items: center;
                background-color: #425A89;
                color: #fff;
                display: flex;
                justify-content: center;
            }

            .About img {
                border-radius: 50%;
                max-width: 90%;
                margin: 5% 0;
            }

            .About-container {
                align-items: center;
                display: flex;
                flex-direction: column;
                max-width: 900px;
                padding: 2% 5%;
            }

            .About h2 {
                font-size: 2rem;
                border-bottom: 4px solid #C3CBDE;
                text-align: center;
                width: 150px;
            }

            .About p {
                font-size: 1.2rem;
            }
        `}</style>
        </div>
    );
}

export default About;