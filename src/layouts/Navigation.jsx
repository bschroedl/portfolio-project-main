import React, {useEffect, useState} from 'react';
import GitHubBug from '../assets/GitHub_Invertocat_Dark.png'
import GitHubLogo from '../assets/GitHub_Lockup_Dark.png'
import LinkedInBug from '../assets/LI-In-Bug.png'
import LinkedInLogo from '../assets/LI-Logo.png'

/*
Ideas
- Add animation to image changing so not as hard to go from right to left
- Add a button to go to the top or back button
 */

function NavBar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const supportsHover = window.matchMedia('(hover: hover)').matches;
        setIsMobile(!supportsHover);
    }, []);

    return (
        <nav className='sticky top-2.5 left-2.5 w-fit'>
            <ul className='flex flex-row gap-3'>
                {/* Must be at minimum 21px tall via linked in requirements */}
                <a href='https://github.com/bschroedl' target='blank'>
                    <img
                        className='h-[21px] hover:h-[21px]'
                        onMouseOver={e => !isMobile && (e.currentTarget.src = GitHubLogo)}
                        onMouseOut={e => !isMobile && (e.currentTarget.src = GitHubBug)}
                        src={GitHubBug} alt='GitHub logo' />
                </a>
                <a href='https://www.linkedin.com/in/brian-schroedl' target='blank'>
                    <img
                        className='h-[21px] hover:h-[21px]'
                        onMouseOver={e => !isMobile && (e.currentTarget.src = LinkedInLogo)}
                        onMouseOut={e => !isMobile && (e.currentTarget.src = LinkedInBug)}
                        src={LinkedInBug} alt='LinkedIn logo' />
                </a>
            </ul>
        </nav>
    );
}

export default NavBar;