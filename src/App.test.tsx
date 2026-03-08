import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const noop = () => {};

function renderApp(downloadedAppEvent = noop) {
    return render(<App downloadedAppEvent={downloadedAppEvent} />);
}

describe('Hero section', () => {
    test('renders main heading', () => {
        renderApp();
        expect(screen.getByText(/access files across multiple devices/i)).toBeInTheDocument();
    });

    test('renders open source badge linking to GitHub', () => {
        renderApp();
        const badge = screen.getByText(/now open source/i).closest('a');
        expect(badge).toHaveAttribute('href', 'https://github.com/getace-app/Ace');
        expect(badge).toHaveAttribute('target', '_blank');
    });

    test('renders version text', () => {
        renderApp();
        expect(screen.getByText(/current version v1\.0\.1/i)).toBeInTheDocument();
    });
});

describe('Download buttons', () => {
    test('renders Windows download button with correct link', () => {
        renderApp();
        const btn = screen.getByText(/download for windows/i).closest('a');
        expect(btn).toHaveAttribute('href', 'https://aceapp-releases.s3.amazonaws.com/ace-app-win.exe');
        expect(btn).toHaveAttribute('data-value', 'download_for_windows');
    });

    test('renders Mac download button with correct link', () => {
        renderApp();
        const btn = screen.getByText(/download for mac/i).closest('a');
        expect(btn).toHaveAttribute('href', 'https://aceapp-releases.s3.amazonaws.com/ace-app-mac.dmg');
        expect(btn).toHaveAttribute('data-value', 'download_for_mac');
    });

    test('renders Star us on GitHub CTA', () => {
        renderApp();
        const cta = screen.getByText(/star us on github/i).closest('a');
        expect(cta).toHaveAttribute('href', 'https://github.com/getace-app/Ace');
    });
});

describe('Header navigation', () => {
    test('renders logo', () => {
        renderApp();
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    test('renders GitHub nav link', () => {
        renderApp();
        const navLink = screen.getByRole('navigation').querySelector('a');
        expect(navLink).toHaveAttribute('href', 'https://github.com/getace-app/Ace');
        expect(navLink).toHaveTextContent('GitHub');
    });
});

describe('How it works section', () => {
    test('renders section heading', () => {
        renderApp();
        expect(screen.getByText(/how ace works/i)).toBeInTheDocument();
    });

    test('renders all three steps', () => {
        renderApp();
        expect(screen.getByText(/power on ace on your host device/i)).toBeInTheDocument();
        expect(screen.getByText(/connected to the same wifi network/i)).toBeInTheDocument();
        expect(screen.getByText(/start viewing and downloading your files/i)).toBeInTheDocument();
    });
});

describe('Demo video', () => {
    test('shows watch demo button initially', () => {
        renderApp();
        expect(screen.getByText(/watch 2-min demo/i)).toBeInTheDocument();
        expect(screen.queryByRole('video')).not.toBeInTheDocument();
    });

    test('shows video after clicking watch demo button', async () => {
        const user = userEvent.setup();
        renderApp();
        await user.click(screen.getByText(/watch 2-min demo/i));
        expect(screen.queryByText(/watch 2-min demo/i)).not.toBeInTheDocument();
        expect(document.querySelector('video')).toBeInTheDocument();
    });
});

describe('Footer', () => {
    test('renders GitHub footer link', () => {
        renderApp();
        const footerLinks = screen.getAllByText('GitHub');
        const footerTextLink = footerLinks.find(
            (el) => el.closest('.App-footer-links-multiple') !== null
        );
        expect(footerTextLink?.closest('a')).toHaveAttribute('href', 'https://github.com/getace-app/Ace');
    });

    test('renders Twitter footer link', () => {
        renderApp();
        const twitterLink = screen.getByText('Twitter').closest('a');
        expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/getaceapp');
    });

    test('renders social icons', () => {
        renderApp();
        expect(screen.getByAltText('Ace GitHub')).toBeInTheDocument();
        expect(screen.getByAltText('Ace Twitter')).toBeInTheDocument();
    });

    test('renders copyright with current year', () => {
        renderApp();
        const year = new Date().getFullYear().toString();
        expect(screen.getByText(new RegExp(`© ${year} Ace`))).toBeInTheDocument();
    });
});
