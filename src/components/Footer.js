import React from 'react'
import './CSS/footer.css';

export default function footer() {
    return (
        <div className="container fixed-bottom">
            <div className="row">
            <footer className="d-flex flex-wrap py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></a>

                    <span className="mb-3 mb-md-0 text-muted">&copy; 2023 EetuOy</span>
                </div>
                <div className="me-5 d-none d-lg-block">
                    <a href="https://github.com/EetuHuttula" target="_blank" ><ion-icon name="logo-github"></ion-icon></a>
                    <a href="https://www.linkedin.com/in/eetu-huttula-3a2714244/" target="_blank" ><ion-icon name="logo-linkedin"></ion-icon></a>
                </div>

            </footer>
            </div>
        </div>
    )
}
