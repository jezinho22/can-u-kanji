export default function Header() {
    return (
        <div className="header-container">
            <h1>Can U Kanji?</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/allkanji">All Kanji</a>
                    </li>
                    <li>
                        <a href="/mykanji">My Kanji</a>
                    </li>
                    <li>
                        <a href="/pairgame">Pair Game</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
