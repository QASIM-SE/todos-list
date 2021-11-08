import React from 'react'

export const Footer = () => {
    let FooterStyle = {
        position: "relative",
        top: "5vh",
        width: "100%",
        border: "2px solid blue"
    }
    return (
        <footer className="bg-dark text-light my-1" style={FooterStyle}>
            <p className="text-center">
            CopyRights &copy; MytodoList.com</p>
        </footer>
    )
}
