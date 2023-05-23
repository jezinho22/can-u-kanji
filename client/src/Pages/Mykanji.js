export default function Mykanji() {
    return (
        <div className="sub-heading">
            <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Mykanji</h2>

            <div
                style={{
                    backgroundColor: "white",
                    border: "solid black 1px",
                    width: "250px",
                    textAlign: "center",
                    padding: "0.75rem 0 0 0",
                    boxShadow: "2px 2px grey",
                }}
                className="card"
            >
                <h3 style={{ fontSize: "4rem" }}>日</h3>
                <button>See Stroke Order</button>
                <p style={{ marginBottom: "0.5rem" }}>
                    Meaning- <span style={{ backgroundColor: "pink" }}>day</span>; sun
                </p>
                <p>
                    Kunyomi-
                    <span style={{ fontWeight: "500" }}>
                        　に,　
                        <span style={{ backgroundColor: "pink" }}>にち</span>
                    </span>
                </p>
                <p>
                    Onyomi- <span style={{ fontWeight: "500" }}>び,　ひ,　か</span>
                </p>
                <button style={{ marginLeft: "210px", marginTop: "1.5rem" }}>X</button>

                {/* link to video field opens in model? */}
            </div>
        </div>
    );
}
