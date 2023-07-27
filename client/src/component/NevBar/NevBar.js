import React from "react"
import { Link } from "react-router-dom"

function NevBar(props) {
    return (
        <div className="container-fluid" style={{
            position: "sticky",
            top: "15px",
            zIndex: "1",
        }}>
            <nav className="navbar navbar-expand-lg border rounded rounded-4" style={{ backgroundColor: "whitesmoke" }} >
                <div className="container-fluid">
                    <h3><Link className="navbar-brand" to="/">Violent Weather</Link></h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/weather">Weather</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            {
                                (props.email) ?
                                    <span>{props.email}
                                        <span className="ms-3 dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Option
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="/bookmark">Bookmark</Link></li>
                                                <li><Link className="dropdown-item" to="/history">History</Link></li>
                                            </ul>
                                        </span>
                                        <button onClick={props.outHandle} className="ms-3 btn btn-info">LogOut</button>
                                    </span>

                                    : <form onSubmit={props.handler}>
                                        <input className="border rounded bg-dark text-white" placeholder="Enter your Email" type="email" name="email" /><button className="btn btn-info ms-2" type="submit">login</button>
                                    </form>
                            }
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NevBar;