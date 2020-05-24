import Head from 'next/head';
import Hero from '../components/hero';
import Layout from '../components/layout';

export default function Index() {
    return (
        <Layout title="Kuinka voin palvella?">
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
            
            <Hero />

            <div className="osaaminen">
                <div className="osaaminen__content">
                    <h2>Osaaminen</h2>
                </div>
            </div>

            <div className="asiakkaat">
                <div className="asiakkaat__content">
                    <h2>Osaamiseni luottavat mm.</h2>
                </div>
            </div>
        </Layout>  
    )
}