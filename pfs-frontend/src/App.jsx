import './App.css'

function NavBar() {
    const domainName = window.location.hostname;
    return (
        <div className='navbar'>
            <header className='navbar-home-link'>
                <a href='/'>{domainName}</a>
            </header>
            <header className='navbar-menubar-items'>
                <div className='navbar-menu-item'>
                    <a href='/about'>About Me</a>
                </div>
                <div className='navbar-menu-item'>
                    <a href='/posts'>Posts</a>
                </div>
                <div className='navbar-menu-item'>
                    <a href='/contact'>Contact</a>
                </div>
            </header>
        </div>
    )
}

function Body() {
    return (
        <div className='home'>
            <div className='hero'>
                <div className='intro-text'>
                    <span>Hi!, I am </span>
                    <a className='intro-name-link' href='/about'>Kyle Pham</a>
                </div>
                <span className='position'>software engineer</span>
            </div>
        </div>
    )
}

function App() {
    return (
        <>
            <NavBar/>
            <Body/>
            <footer className='footer'>
                patented trademarked copyrighted copylefted copyup-down-allaround
            </footer>
        </>
    )
}



export default App
