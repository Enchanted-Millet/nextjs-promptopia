import '@/styles/global.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'Promptopia',
  description: 'A place to find inspiration for your next prompt.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
