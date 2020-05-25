import useToggleState from "../../hooks/useToggleState";

function Question(props) {
    const [toggleState, toggle] = useToggleState(false);
    return (
        <div className="Question">
            <div className="Question-container" onClick={toggle}>
                <h2>{props.question}</h2>
                <i className={`far ${toggleState ? 'fa-minus-circle' : 'fa-plus-circle'}`}></i>
            </div>

            {toggleState && <p className="Question-answer">{props.answer}</p>}

            <style jsx>{`
                .Question {
                    background-color: #fff;
                    margin-bottom: 1%;
                    padding: 10px 5%;
                    width: 90%;
                }

                .Question-container {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                }

                .Question .far {
                    font-size: 1.8rem;
                    padding-left: 5px;
                }

                .Question-answer {
                    font-size: 1.2rem;
                    margin-top: 0;
                    padding: 0;
                }
            `}</style>
        </div>
    );
}

export default Question;