import { React, useEffect, useState } from 'react'
import FeatureCard from './FeatureCard';


const AllUserNotes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const getNotes = async () => {
            const response = await fetch("http://localhost:3001/notesall", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("authtoken") || 404,
                },
            })
            const res = await response.json()
            console.log(res.notes)
            setNotes(res.notes)
        }
        getNotes()
    }
        , [])

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block sidebar bg-primary-subtle" style={{ height: '89vh' }}>
                    <div className="position-sticky">
                        <ul className="nav flex-column pt-2">
                            <li className="nav-item pt-2">
                                <a className="nav-link active" href="/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item pt-2">
                                <a className="nav-link" href="/usernotes">Notes</a>
                            </li>
                            <li className="nav-item pt-2">
                                <a className="nav-link" href="#">Reminder</a>
                            </li>
                            <li className="nav-item pt-2">
                                <a className="nav-link" href="#">Edit Label</a>
                            </li>
                            <li className="nav-item pt-2">
                                <a className="nav-link" href="#">Archive/Bin</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2">
                    <span className=''>All User Notes</span>
                    <div className="row mt-2 mx-auto justify-content-center">
                        {notes && notes.map && notes.map((note) => {
                            return (
                                <FeatureCard key={note.id} title={note.label} description={note.description} />
                            )
                        }
                        )}
                    </div>
                </main>

            </div>
        </div>
    );
}

export default AllUserNotes;
