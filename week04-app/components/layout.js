import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
    return(
     <div>
        <Head>
        <title>Week4 Basic Next.js App</title>
        </Head>
        <header>
            <nav>
                <a href="http://santarosa.edu">Visit SRJC</a>
            </nav>
        </header>
        <main>
            {children}

        </main>
        {!home && (
             <Link href="/" className="btn btn-danger mt-3">
              Back to home
            </Link>
        )
        }

        <footer>
        <p>Hey There</p>
        </footer>
        
        </div>
    );
}