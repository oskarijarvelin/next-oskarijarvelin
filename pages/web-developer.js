import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { attributes, react as MdContent } from '../content/web-developer.md';

export default function Webdeveloper() {
    return (
        <Layout title="Web Developer">
            <Head>
                <title>Web Developer - Oskari Järvelin</title>
                <meta name="description" content="Olen 25-vuotias Web Developer Oulusta. Ydinosaamistani ovat verkkopalvelut, WordPress, tietoturva ja tapahtumatekniikka. Kuinka voin palvella?" />
                <meta property="og:title" content="Web Developer - Oskari Järvelin" />
                <meta property="og:description" content="Olen 25-vuotias Web Developer Oulusta. Ydinosaamistani ovat verkkopalvelut, WordPress, tietoturva ja tapahtumatekniikka. Kuinka voin palvella?" />
                <meta property="og:url" content="https://oskarijarvelin.fi/web-developer" />
                <meta property="og:image" content={ require('../public/images/oskari.jpg') } />
                <meta property="og:image:width" content="3000" />
                <meta property="og:image:height" content="2000" />
            </Head>

            <div className="content-wrapper">
                <div className="content">
                    <Link href="/"><a>&larr; Palaa takaisin</a></Link>
                    <h1>Web Developer</h1>
                    <MdContent />
                </div>
            </div>
        </Layout>
    )
}