import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "Food Record",
    description: "Keeping records for our employee."
};

const RootLayout = ({ children }) => {
    return (
        <html>
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Food Record" />
                <link rel="apple-touch-icon" href="/assets/logo.png" />
            </head>
            <body suppressHydrationWarning={true}>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;
