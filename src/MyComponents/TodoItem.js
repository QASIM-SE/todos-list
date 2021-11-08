import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {

  return (
    <>
    <div className="container w-50 my-3">
      <div className="card text-dark bg-light">
        <div className="card-header">Todo no: {todo.sno+1}</div>
        <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
        </div>
        <button className="btn btn-primary btn-sm" key={todo.sno} onClick={() => { onDelete(todo) }}>Done</button>
      </div>
     
    </div>
    </>
  )
}
