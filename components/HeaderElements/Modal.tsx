import React from 'react'


export interface ModalProps {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>,
}
 
const Modal: React.SFC<ModalProps> = ({ setLogin }) => {
    return (
        <div className="loginModalCover">
            <style jsx>
                {
                    `
                    .loginModalCover {
                        width: 100vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 1000;
                        height: 100vh;
                        background: rgba(0, 0, 0, 0.2);
                    }

                    .loginModal {
                        width: 35vw;
                        padding: 2rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        height: 75vh;
                        border-radius: 16px;
                        background: white;
                    }

                    input {
                        width: 100%;
                        padding: .5rem 1rem;
                    }
                    `
                }
            </style>
            <div className="loginModal">
                <h1>Login</h1>
                <div style={{maxWidth: 500}}>
                <label>Email</label>
                <input type="email" placeholder="email@example.com"></input>
                <button onClick={() => setLogin(false)}>Close</button>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;