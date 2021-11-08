import React from 'react'
import { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !des) {
            alert("Title or Description can't be blank")
        }
        else {
            addTodo(title, des);
            setTitle("");
            setDes("");
        }

    }
    return (
        <>
        <div className="container my-3 w-50 card py-3">
            <h3 className="text-center text-success">Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="Todotitle" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="Todotitle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Todo Description</label>
                    <input type="text" value={des} onChange={(e) => setDes(e.target.value)} className="form-control" id="Description" />
                </div>
                <button type="submit" className="btn btn-success btn-sm w-100">Add</button>
            </form>
        </div>
        </>
    )
}
