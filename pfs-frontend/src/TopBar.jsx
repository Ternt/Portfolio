import './TopBar.css'

function TopBar() {
    return (
        <div className='top-bar'>
            <div className='top-bar-content'>
                <div className='name-banner-container'>
                    <a className='name-banner-text' href='/' native='true'>
                        Kyle Pham
                    </a>
                </div>
                <div id='nav-bar'></div>
            </div>
        </div>
    )
}

export default TopBar;
