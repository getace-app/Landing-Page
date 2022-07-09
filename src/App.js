import logo from './res/logo.svg';
import showcase from './res/header-showcase.png';
import twitterLogo from './res/icons8_twitter.svg';
import playIcon from './res/play-icon.png';
import './App.css';
import {useState} from "react";
import validator from 'validator'

function App({onRequestBeta}) {

    const [emailAddress, setEmailAddress] = useState('')
    const [loading, setLoading] = useState(false)
    const [isValidEmail, setValidEmail] = useState(false)
    const [watchDemo, setWatchDemo] = useState(false)
    const [buttonText, setButtonText] = useState('Request Beta Access')
    const [messageText, setMessageText] = useState('')

    async function submitRequestBeta() {
        if (validator.isEmail(emailAddress)) {
            setButtonText("Loading...")
            setLoading(true)
            const result = await onRequestBeta(emailAddress)
            if (result === 'ADDED') {
                setMessageText("Thank you for requesting to test our beta release. " +
                    "You'll receive a mail from us soon")
            } else if (result === 'EXISTS') {
                setMessageText("We got you covered! You'll receive a mail from us soon")
            } else {
                setMessageText("We are currently unable to process this request, please try again later!")
            }
            setLoading(false)
            setButtonText('Request Beta Access')
        } else {
            setMessageText("Please enter a valid email address")
        }
    }

    return (
        <div className="App">
            <div className={'App-content'}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <a href={'#requestBetaAccess'}>Request Beta Access</a>
                </header>
                <section className={'App-title'}>
                    <h1>Access files across multiple devices seamlessly</h1>
                    <div className={'Request-beta-form'}>
                        <label>
                            <input placeholder={'Your email address'} type={"email"} required={true}
                                   onChange={e => {
                                       setEmailAddress(e.target.value)
                                       setValidEmail(validator.isEmail(emailAddress))
                                   }}/>
                        </label>
                        <button onClick={submitRequestBeta} disabled={loading || !isValidEmail}>{buttonText}</button>
                    </div>
                    <h3 className={'message-text'}>{messageText}</h3>
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
                <section className={'App-watch-how-it-works'} style={{display: 'none'}}>
                    {/*{watchDemo && <video className={'animate_animated animate__bounceIn'} controls>*/}
                    {/*    <source src={demoVideo}  type="video/mp4"/>*/}
                    {/*    Your browser does not support the video tag.*/}
                    {/*</video>}*/}
                    {!watchDemo && <button onClick={() => setWatchDemo(true)}>
                        <img src={playIcon} alt={'Watch 3-mins demo'}/>
                        Watch 3-mins demo
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
