import { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard';
const MainPage = () => {
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState([]);
    //   const [timeToComplete, setTimeToComplete] = useState('');

    //   const handleSubmit = (e) => {
    //       e.preventDefault();
    //       // Replace with your logic to handle the form submission
    //       console.log(`Label: ${label}, Description: ${description}, Time to Complete: ${timeToComplete}`);
    //       // Reset the form fields after submission
    //       setLabel('');
    //       setDescription('');
    //       setTimeToComplete('');
    //   };

    const noteSubmit = async () => {
        const response = await fetch("http://localhost:3001/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("authtoken") || 404,
            },
            body: JSON.stringify({ label, description }),
        })
        const res = await response.json()
        console.log(res)
        if (res.success === true) {
            console.log(`Label: ${label}, Description: ${description}`);
            setLabel('');
            setDescription('');
            const getNotes = async () => {
                const response = await fetch("http://localhost:3001/notes", {
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
    };


    useEffect(() => {
        const getNotes = async () => {
            const response = await fetch("http://localhost:3001/notes", {
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
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {/* //Task cards */}
                    Latest Three Notes
                    <div className="row mt-2 mx-auto justify-content-center">
                        {notes && notes.map && notes.map((note) => {
                            return (
                                <FeatureCard key={note.id} title={note.label} description={note.description} />
                            )
                        }
                        )}
                    </div>


                    <div className="col-md-6">
                        <h2 className="text-center mb-4">Add Note</h2>

                        <div className="mb-3">
                            <label htmlFor="noteLabel" className="form-label">Label</label>
                            <input
                                type="text"
                                className="form-control"
                                id="noteLabel"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="noteDescription" className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                id="noteDescription"
                                rows="1"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" onClick={noteSubmit} className="btn btn-primary w-100">Add Note</button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;