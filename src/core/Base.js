import React from 'react'

const Base = ({
    title = "GOT EXPLORER",
    className = "bg-dark text-white p-4",
    children }) => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='jumbotron bg-dark text-white text-center'>
                    <h2 className='display-4'>{title}</h2>
                    <p>This is a got explorer</p>
                    <div className={className}>{children}</div>
                </div>

            </div>
            <footer className='footer bg-dark mt-auto py-3'>
                <div className='container text-center'>
                    <span className='text-muted'>Amazing GOT Explorer</span>
                </div>
            </footer>
        </div>
    )
}

export default Base;
