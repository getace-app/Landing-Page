import logo from './res/logo.svg';
import showcase from './res/header-showcase.png';
import twitterLogo from './res/icons8_twitter.svg';
import playIcon from './res/play-icon.png';
import demoVideo from './res/demo.mp4'
import './App.css';
import {useState} from "react";
import validator from 'validator'
import windowsIcon from "./res/windows-brands.svg";
import appleIcon from "./res/apple-brands.svg";

function App({onRequestBeta}) {

    const [emailAddress, setEmailAddress] = useState('')
    const [loading, setLoading] = useState(false)
    const [isValidEmail, setValidEmail] = useState(false)
    const [watchDemo, setWatchDemo] = useState(false)
    const [buttonText, setButtonText] = useState('Request Beta Access')
    const [messageText, setMessageText] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    async function submitRequestBeta() {
        setMessageText('')
        if (validator.isEmail(emailAddress)) {
            setButtonText("Sending request...")
            setLoading(true)
            const result = await onRequestBeta(emailAddress)
            if (result === 'ADDED') {
                setMessageText("Thank you for requesting to test our beta release. " +
                    "You'll receive a mail from us soon")
                setIsSuccess(true)
            } else if (result === 'EXISTS') {
                setMessageText("We got you covered! You'll receive a mail from us soon")
                setIsSuccess(true)
            } else {
                setMessageText("We are currently unable to process this request, please try again later!")
            }
            setLoading(false)
            setButtonText('Request Beta Access')
        } else {
            setMessageText("Please enter a valid email address")
            setLoading(false)
        }
    }

    return (
        <div className="App">
            <div className={'App-content'}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <section className={'App-title'}>
                    <h1>Access files across multiple devices seamlessly</h1>
                    <div className={'Request-beta-form'}>
                        <a href={'https://getace.app/beta-releases/ace-app-win.exe'} className={'downloadBtn'}>
                            Download for Windows<img src={windowsIcon} alt={'Windows Icon'}/>
                        </a>
                        <a href={'https://getace.app/beta-releases/ace-app-mac.pkg'} className={'downloadBtn'}>
                            Download for Mac<img src={appleIcon} alt={'Apple Icon'}/>
                        </a><br/>
                    </div>
                    <p className={'message-text'}>Current version v1.0.0</p>
                    {isSuccess && <span style={{fontSize : '.8em', color: 'white'}}>
                        Kindly check your <strong>Spam</strong> folder,
                            if you can't find a confirmation mail in your <strong>Inbox</strong>
                    </span>}
                </section>
                <section className={'App-showcase'}>
                    <img src={showcase} alt={'App showcase'}
                         className={'App-showcase-image animate__animated animate__bounceIn'}/>
                </section>
            </div>
            <section className={'App-how-it-works'}>
                <h1>How Ace works</h1>
                <br/>
                <section className={'App-how-it-works-steps'}>
                    <div className={'item'}>
                        <div>1</div>
                        <div className={'animate__animated animate__headShake animate__delay-2s'}>Power on Ace on your
                            host device
                        </div>
                    </div>
                    <div className={'item'}>
                        <div>2</div>
                        <div className={'animate__animated animate__headShake animate__delay-3s'}>Make sure you are
                            connected to the same WiFi network as your Host, Enter the generated IP
                            address into any browser or use the QR code option
                        </div>
                    </div>
                    <div className={'item'}>
                        <div>3</div>
                        <div className={'animate__animated animate__headShake animate__delay-4s'}>Start viewing and
                            downloading your files!
                        </div>
                    </div>
                </section>
                <br/>
                <section className={'App-watch-how-it-works'}>
                    {watchDemo && <video className={'animate_animated animate__bounceIn'} controls autoPlay={true} loop={true}>
                        <source src={demoVideo}  type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>}
                    {!watchDemo && <button onClick={() => setWatchDemo(true)}>
                        <img src={playIcon} alt={'Watch 2-min demo'}/>
                        Watch 2-min demo
                    </button>}
                </section>
            </section>
            <section className={'App-footer'}>
                <div className={'App-footer-links'}>
                    <div className={'App-footer-links-multiple'}>
                        <a href={'#privacyPolicy'}>Privacy Policy</a>
                        <a href={'#contactUs'}>Contact Us</a>
                    </div>
                    <div>
                        <a href={'https://twitter.com/getaceapp'}>
                            <img src={twitterLogo} alt={"Ace Twitter"}/>
                        </a>
                    </div>
                </div>
                <div className={'App-Footer-copyright'}>
                    &copy; Copyright Ace 2022
                </div>
            </section>
        </div>
    );
}

export default App;
