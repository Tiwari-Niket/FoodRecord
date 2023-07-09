import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "Devolvi",
    description: "Keeping records for our employee."
};

const RootLayout = ({ children }) => {
    return (
        <html>
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