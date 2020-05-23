import Head from 'next/head';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

class Index extends React.Component {
    render() {
        return <main>
            <Head>
                <title>Kuinka voin palvella? - Oskari Järvelin - Web Developer</title>
                <meta name="description" content="Olen 25-vuotias Web Developer Oulusta. Ydinosaamistani ovat verkkopalvelut, WordPress, tietoturva ja tapahtumatekniikka. Kuinka voin palvella?" />
                <meta property="og:title" content="Kuinka voin palvella? - Oskari Järvelin - Web Developer" />
                <meta property="og:description" content="Olen 25-vuotias Web Developer Oulusta. Ydinosaamistani ovat verkkopalvelut, WordPress, tietoturva ja tapahtumatekniikka. Kuinka voin palvella?" />
                <meta property="og:url" content="https://oskarijarvelin.fi/" />
                <meta property="og:image" content={ require('../public/images/oskari.jpg') } />
                <meta property="og:image:width" content="3000" />
                <meta property="og:image:height" content="2000" />
            </Head>
            
            <div className="content">
                <h1>Oskari Järvelin</h1>
            </div>
        </main>
    }
}
export default Index;