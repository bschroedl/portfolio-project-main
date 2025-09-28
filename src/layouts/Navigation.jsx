import React from 'react';

/*
Ideas
- Add animation to image changing so not as hard to go from right to left
- Add a button to go to the top or back button
 */

function NavBar() {
    return (
        <nav className='fixed top-[10px] left-[10px]'>
            <ul className='flex flex-row gap-3'>
                {/* Must be at minimum 21px tall via linked in requirements */}
                <a href='https://github.com/bschroedl' target='blank'>
                    <img
                        className='h-[21px] hover:h-[21px]'
                        onMouseOver={e => (e.currentTarget.src = 'src/assets/GitHub_Lockup_Dark.png')}
                        onMouseOut={e => (e.currentTarget.src = 'src/assets/GitHub_Invertocat_dark.png')}
                        src='src/assets/GitHub_Invertocat_Dark.png' alt='GitHub logo' />
                </a>
                <a href='https://www.linkedin.com/in/brian-schroedl' target='blank'>
                    <img
                        className='h-[21px] hover:h-[21px]'
                        onMouseOver={e => (e.currentTarget.src = 'src/assets/LI-Logo.png')}
                        onMouseOut={e => (e.currentTarget.src = 'src/assets/LI-In-Bug.png')}
                        src='src/assets/LI-In-Bug.png' alt='LinkedIn logo' />
                </a>
            </ul>
        </nav>
    );
}

export default NavBar;