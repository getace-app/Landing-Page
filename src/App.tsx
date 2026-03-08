import logo from './res/logo.svg';
import showcase from './res/header-showcase.png';
import twitterLogo from './res/icons8_twitter.svg';
import githubIcon from './res/github.svg';
import playIcon from './res/play-icon.png';
import demoVideo from './res/demo.mp4';
import './App.css';
import { useState } from 'react';
import windowsIcon from './res/windows-brands.svg';
import appleIcon from './res/apple-brands.svg';

const GITHUB_URL = 'https://github.com/getace-app/Ace';

function App() {
    const [watchDemo, setWatchDemo] = useState(false);

    return (
        <div className="App">
            <div className="App-content">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <nav className="App-nav">
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="App-nav-link">
                            <img src={githubIcon} alt="GitHub" className="App-nav-icon" />
                            GitHub
                        </a>
                    </nav>
                </header>
                <section className="App-title">
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="open-source-badge animate__animated animate__fadeIn"
                    >
                        <span className="open-source-dot"></span>
                        Now Open Source
                    </a>
                    <h1>Access files across multiple devices seamlessly</h1>
                    <div className="Request-beta-form">
                        <a
                            href="https://aceapp-releases.s3.amazonaws.com/ace-app-win.exe"
                            className="downloadBtn"
                            data-value="download_for_windows"
                        >
                            Download for Windows
                            <img src={windowsIcon} alt="Windows Icon" />
                        </a>
                        <a
                            href="https://aceapp-releases.s3.amazonaws.com/ace-app-mac.dmg"
                            className="downloadBtn"
                            data-value="download_for_mac"
                        >
                            Download for Mac
                            <img src={appleIcon} alt="Apple Icon" />
                        </a>
                    </div>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="github-cta">
                        <img src={githubIcon} alt="" className="github-cta-icon" />
                        Star us on GitHub
                    </a>
                    <p className="message-text">Current version v1.0.1</p>
                </section>
                <section className="App-showcase">
                    <img
                        src={showcase}
                        alt="App showcase"
                        className="App-showcase-image animate__animated animate__bounceIn"
                    />
                </section>
            </div>
            <section className="App-how-it-works">
                <h1>How Ace works</h1>
                <br />
                <section className="App-how-it-works-steps">
                    <div className="item">
                        <div>1</div>
                        <div className="animate__animated animate__headShake animate__delay-2s">
                            Power on Ace on your host device
                        </div>
                    </div>
                    <div className="item">
                        <div>2</div>
                        <div className="animate__animated animate__headShake animate__delay-3s">
                            Make sure you are connected to the same WiFi network as your Host, Enter the generated IP
                            address into any browser or use the QR code option
                        </div>
                    </div>
                    <div className="item">
                        <div>3</div>
                        <div className="animate__animated animate__headShake animate__delay-4s">
                            Start viewing and downloading your files!
                        </div>
                    </div>
                </section>
                <br />
                <section className="App-watch-how-it-works">
                    {watchDemo && (
                        <video className="animate__animated animate__bounceIn" controls autoPlay loop>
                            <source src={demoVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                    {!watchDemo && (
                        <button onClick={() => setWatchDemo(true)}>
                            <img src={playIcon} alt="Watch 2-min demo" />
                            Watch 2-min demo
                        </button>
                    )}
                </section>
            </section>
            <section className="App-footer">
                <div className="App-footer-links">
                    <div className="App-footer-links-multiple">
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://twitter.com/getaceapp" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </div>
                    <div className="App-footer-social">
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="Ace GitHub" />
                        </a>
                        <a href="https://twitter.com/getaceapp" target="_blank" rel="noopener noreferrer">
                            <img src={twitterLogo} alt="Ace Twitter" />
                        </a>
                    </div>
                </div>
                <div className="App-Footer-copyright">
                    &copy; {new Date().getFullYear()} Ace &mdash; Open Source
                </div>
            </section>
        </div>
    );
}

export default App;
