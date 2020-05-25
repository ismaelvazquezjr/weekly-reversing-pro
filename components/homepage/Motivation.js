function Motivation() {
    return (
        <div className="Motivation">
            <div className="Motivation-container">
                <p><span className="App-strong">Consistent</span> practice is the best way to get good at reverse engineering(or anything else in life). In this field, continuous learning is an absolute necessity whether you're a beginner or whether you're at the top of your field. Things change rapidly and those who can't keep up, unfortunately, get left behind.</p>
                <p><span className="App-strong">There's no catch!</span> Just sign up and I'll start sending you weekly challenges. You're also free to unsubscribe at any time. No hard feelings.</p>
                <p>Pro subscriptions are available to help with the costs associated with running the site but there's absolutely no obligation to spend a dime. If you're unable to pay the subscription fee and would still like a little help, send me an email. No one should be limited by their current financial situation.</p>
                <p>I hope to see you on the other side.</p>
                <p>- Ismael Vazquez</p>
            </div>
            <style jsx>{`
            .Motivation {
                align-items: center;
                display: flex;
                font-size: 1.2rem;
                justify-content: center;
                flex-direction: column;
                padding: 5%
            }

            .Motivation-container {
                max-width: 800px;
            }
        `}</style>
        </div>
    );
}

export default Motivation;