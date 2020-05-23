import Head from 'next/head';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

class Index extends React.Component {
    render() {
        return <main>
            <Head>
                <title>Kuinka voin palvella? - Oskari Järvelin</title>
                <meta name="description" content="Olen 25-vuotias Web Developer Oulusta. Ydinosaamistani ovat verkkopalvelut, WordPress, tietoturva ja tapahtumatekniikka. Kuinka voin palvella?" />
            </Head>
            
            <div className="content">
                <h1>Oskari Järvelin</h1>
            </div>
        </main>
    }
}
export default Index;