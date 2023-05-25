export default function Header({logInEmail, handleChangeEmail, logIn, logOut }) {
    return (
        <div className="header-container">
            <input placeholder="Log in with email address" onChange={handleChangeEmail} />
            <button onClick={logIn}>Submit</button>
            {logInEmail ? <p>Logged in as {logInEmail}</p> : <p>Logged out</p>}
            <button onClick={logOut}>Log out</button>
            <h1>Can U Kanji?</h1>
            <nav>
                <ul>
                    <li>
                        <a href="./">Home</a>
                    </li>
                    <li>
                        <a href="./allkanji">All Kanji</a>
                    </li>
                    <li>
                        <a href="./mykanji">My Kanji</a>
                    </li>
                    <li>
                        <a href="./pairgame">Pair Game</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
