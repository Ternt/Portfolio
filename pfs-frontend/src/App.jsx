import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard/ProjectCard.jsx'
import './App.css'

function App() {
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);

    return (
        <>
            <div id='pfs-page-alignment'>
                <div id='pfs-page-fg'>
                    <div class='top-bar'>
                        <div id='pfs-top-bar-content'>
                            <div id='pfs-name-banner-container'>
                                <h1 id='pfs-name-banner-text'>
                                    Kyle Pham
                                </h1>
                            </div>
                            <div id='pfs-nav-bar'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
