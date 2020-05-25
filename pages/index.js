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
                    <h2>Olen 25-vuotias oululainen</h2>

                    <div className="taidot">
                        <div className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/internet.svg?include') }} />
                            <p className="taito__title">Web Developer</p>
                        </div>

                        <div className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/lights.svg?include') }} />
                            <p className="taito__title">Valomies</p>
                        </div>

                        <div className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/wordpress.svg?include') }} />
                            <p className="taito__title">WordPress-kehittäjä</p>
                        </div>

                        <div className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/mic.svg?include') }} />
                            <p className="taito__title">Miksaaja</p>
                        </div>

                        <div className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/sheltie.svg?include') }} />
                            <p className="taito__title">Kanelin kasvattaja</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="asiakkaat">
                <div className="asiakkaat__content">
                    <h2>Osaamiseeni luottavat</h2>

                    <div className="asiakkuudet">
                        <div className="asiakas">
                            <picture>
                                <source srcSet={require('../public/images/digimoguli.png?webp')} type="image/webp" />
                                <source srcSet={require('../public/images/digimoguli.png')} type="image/png" />
                                <img src={require('../public/images/digimoguli.png')} alt="Logo: Digimoguli Oy" />
                            </picture>
                        </div>

                        <div className="asiakas">
                            <picture>
                                <source srcSet={require('../public/images/livepaletti.png?webp')} type="image/webp" />
                                <source srcSet={require('../public/images/livepaletti.png')} type="image/png" />
                                <img src={require('../public/images/livepaletti.png')} alt="Logo: Livepaletti Oy" />
                            </picture>
                        </div>

                        <div className="asiakas">
                            <picture>
                                <source srcSet={require('../public/images/oulunteatteri.png?webp')} type="image/webp" />
                                <source srcSet={require('../public/images/oulunteatteri.png')} type="image/png" />
                                <img src={require('../public/images/oulunteatteri.png')} alt="Logo: Oulun Kaupunginteatteri Oy" />
                            </picture>
                        </div>

                        <div className="asiakas">
                            <picture>
                                <source srcSet={require('../public/images/ouka.png?webp')} type="image/webp" />
                                <source srcSet={require('../public/images/ouka.png')} type="image/png" />
                                <img src={require('../public/images/ouka.png')} alt="Logo: Oulun Kaupunki" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>  
    )
}