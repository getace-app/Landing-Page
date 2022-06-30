import logo from './res/logo.svg';
import showcase from './res/header-showcase.png';
import twitterLogo from './res/icons8_twitter.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className={'App-content'}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <a href={'#requestBetaAccess'}>Coming Soon!</a>
                    {/*<a href={'#requestBetaAccess'}>Request Beta Access</a>*/}
                </header>
                <section className={'App-title'}>
                    <h1>Access files across multiple devices seamlessly</h1>
                    <div className={'Request-beta-form'}>
                        <label>
                            <input placeholder={'Your email address'} type={"email"}/>
                        </label>
                        <button disabled>Request Beta Access</button>
                    </div>
                </section>
                <section className={'App-showcase'}>
                    <img src={showcase} alt={'App showcase'}
                         className={'App-showcase-image animate__animated animate__bounceIn'}/>
                </section>
            </div>
            <section className={'App-how-it-works'}>
                <h1>How it works</h1>
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
                        <div className={'animate__animated animate__headShake animate__delay-3s'}>Making sure you are
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
