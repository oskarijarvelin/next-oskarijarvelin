import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { attributes, react as MdContent } from '../content/kanelin-kasvattaja.md';

export default function Webdeveloper() {
    return (
        <Layout title="Kanelin kasvattaja">
            <Head>
                <title>Kanelin kasvattaja - Oskari Järvelin</title>
                <meta name="description" content="Olen 25-vuotias Web Developer Oulusta. Ydinosaamistani ovat verkkopalvelut, WordPress, tietoturva ja tapahtumatekniikka. Kuinka voin palvella?" />
                <meta property="og:title" content="Kanelin kasvattaja - Oskari Järvelin" />
                <meta property="og:description" content="Olen 25-vuotias Web Developer Oulusta. Ydinosaamistani ovat verkkopalvelut, WordPress, tietoturva ja tapahtumatekniikka. Kuinka voin palvella?" />
                <meta property="og:url" content="https://oskarijarvelin.fi/kanelin-kasvattaja" />
                <meta property="og:image" content={ require('../public/images/oskari.jpg') } />
                <meta property="og:image:width" content="3000" />
                <meta property="og:image:height" content="2000" />
            </Head>

            <div className="content-wrapper">
                <div className="content">
                    <Link href="/"><a>&larr; Palaa takaisin</a></Link>
                    <h1>Kanelin kasvattaja</h1>
                    <MdContent />
                </div>
            </div>
        </Layout>
    )
}