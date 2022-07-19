import windowsIcon from './res/windows-brands.svg'
import appleIcon from './res/apple-brands.svg'
import logo from "./res/dp-light.png";

function DownloadBeta() {
    return <div className={'App BetaDownload'}>
        <center>
            <img src={logo} width={'100px'} alt="logo"/>
            <h2 style={{marginTop: '5px', marginBottom: '10px'}}>Use the download button below</h2>
            <a href={'https://getace.app/beta-releases/Ace App-0.0.15-win-nsisx.exe'} className={'downloadBtn'}>
                Download for Windows <img src={windowsIcon} alt={''}/>
            </a>
            <a href={'https://getace.app/beta-releases/Ace App-0.0.15-mac-x64.dmg'} className={'downloadBtn'}>
                Download for Mac <img src={appleIcon} alt={''}/>
            </a>
        </center>
    </div>
}

export default DownloadBeta;