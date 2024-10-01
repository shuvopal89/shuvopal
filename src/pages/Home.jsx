import { useState, useEffect } from 'react';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import About from '../components/About';
import TechnicalSkills from '../components/TechnicalSkills';
import ProjectSection from '../components/ProjectSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
    const [scroll, setScroll] = useState(false);
    const commonStyle = 'w-20 h-[3px] my-20 m-auto rounded-full bg-green-200'

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='w-full bg-gray-900'>
            <Header scroll={scroll} />
            <div className='px-4'>
                <div className='max-w-[1000px] m-auto'>
                    <IntroSection />
                    <div className={commonStyle}></div>
                    <TechnicalSkills />
                    <About />
                    <ProjectSection />
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;













// import React, { useEffect } from 'react';

// const Home = () => {
//     // Function to scroll to a specific section with sticky header offset
//     const scrollToSection = (id) => {
//         const section = document.getElementById(id);
//         if (section) {
//             const headerHeight = document.querySelector('header').offsetHeight; // Get header height
//             const sectionPosition = section.offsetTop - headerHeight; // Calculate position with header offset

//             window.scrollTo({
//                 top: sectionPosition,
//                 behavior: 'smooth', // Smooth scroll
//             });
//         }
//     };

//     useEffect(() => {
//         // Prevent browser auto-scroll on page load by forcing it to scroll to top
//         window.scrollTo({
//             top: 0,
//             behavior: 'auto', // Immediate scroll to top on page load
//         });

//         // If there is a hash, remove it
//         if (window.location.hash) {
//             window.history.pushState("", document.title, window.location.pathname + window.location.search);
//         }
//     }, []); // Run only on page load

//     return (
//         <div>
//             {/* Sticky Header */}
//             <header style={{ position: 'sticky', top: 0, backgroundColor: 'gray', height: '60px', zIndex: 1000 }}>
//                 <nav>
//                     {/* Button to trigger manual scroll without modifying the URL */}
//                     <button onClick={() => scrollToSection('google')}>Go to Google Section</button>
//                 </nav>
//             </header>

//             {/* Page content */}
//             <div style={{ height: '100vh', backgroundColor: '#f1f1f1' }}>
//                 Scroll down to see more sections...
//             </div>

//             {/* The section you want to scroll to */}
//             <div id="google" style={{ height: '100vh', backgroundColor: '#add8e6' }}>
//                 <h2>Google Section</h2>
//             </div>
//         </div>
//     );
// };

// export default Home;
