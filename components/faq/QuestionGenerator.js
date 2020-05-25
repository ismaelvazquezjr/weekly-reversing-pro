import Question from "./Question";

const questions = [
    {
        question: "Do you offer refunds?",
        answer: "At this time, I'm unfortunately unable to offer refunds. Please only upgrade to a pro subscription after trying the free model and deciding you're happy with the service. If you're unable to pay but are struggling with a particular challenge. Please reach out via the contact page and I'll be happy to help!"
    },
    {
        question: "When do the challenges go out?",
        answer: "You should expect an email every Sunday at 12:00PM PST."
    },
    {
        question: "Why haven't I received my challenge?",
        answer: "It may take a few minutes for the email to reach you. While you wait, please double check to see that it isn't in your spam folder. If it's been more than 10 minutes and you still haven't received an email, use the contact page and I'll look into it on my end."
    },
    {
        question: "What do I do if my question wasn't answered?",
        answer: "Feel free to send me a message. I do my best to respond within 24 hours but please don't get offended if it takes me a little longer than that to reply. I'm working diligently to improve the site! Cool stuff is coming soon ;)"
    }
];

function QuestionGenerator() {
    return (
        <div className="QuestionGenerator">
            <h1>Frequently Asked Questions (FAQ)</h1>
            {questions.map((q, i) => <Question key={i} question={q.question} answer={q.answer} />)}

            <style jsx>{`
            .QuestionGenerator {
                align-items:center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 2%;
            }

            .QuestionGenerator h1 {
                margin: 5% 0 2% 0;
                padding: 0 5%;
                text-align: center;
            }
        `}</style>
        </div>
    );
}

export default QuestionGenerator;