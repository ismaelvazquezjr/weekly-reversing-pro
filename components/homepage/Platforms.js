function Platforms() {
    return (
        <div className="Platforms">
        <img className="Platforms-logo" src="/windows-logo.png" alt="Windows Logo" />
        <img className="Platforms-logo" src="/android-logo.png" alt="Android Logo" />
        <img className="Platforms-logo" src="/ubuntu-logo.png" alt="Ubuntu Logo" />
        <img className="Platforms-logo" src="/apple-logo.png" alt="Apple Logo" />
        <style jsx>{`
            .Platforms {
                background-color: #fff;
                text-align: center;
                width: 100%;
            }

            .Platforms-logo {
                width: 15%;
                margin: 2%;
                padding: 25px 0;
                max-width: 150px;
            }
        `}</style>
        </div>
    )
}

export default Platforms;