import Head from 'next/head';

class Index extends React.Component {
    render() {
        return <main>
            <Head>
                <title>Oskari Järvelin</title>
                <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
            </Head>
            
            <div className="container">
                <h1>Oskari Järvelin</h1>
            </div>

            <style jsx>{`
                main {
                    background-attachment: fixed;
                    background-image: url(/images/oskari.jpg);
                    background-position: 75% 10%;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 100vh;
                    position: relative;
                    width: 100vw;
                    z-index: 1;
                }

                main::before {
                    background-attachment: fixed;
                    background-image: linear-gradient(0deg,rgba(255,255,255,1) 0,rgba(255,255,255,.5) 10%,rgba(255,255,255,0) 40%);
                    content: '';
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 100%;
                }

                main::after {
                    background-attachment: fixed;
                    background-image: linear-gradient(18deg,rgba(255,255,255,.95) 0,rgba(255,255,255,.6) 30%,rgba(255,255,255,0) 55%,rgba(255,255,255,0) 100%);
                    content: '';
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 100%;
                }

                @media (min-width: 992px) {
                    main::before {
                        background-image: linear-gradient(90deg,#fff 0,rgba(255,255,255,.5) 4%,rgba(255,255,255,0) 6%);
                    }

                    main::after {
                        background-image: linear-gradient(105deg,rgba(248,248,248,.95) 0,rgba(248,248,248,.8) 32%,rgba(248,248,248,.5) 42%,rgba(248,248,248,0) 55%,rgba(248,248,248,0) 100%);
                    }
                }   

                h1 {
                    margin: 0;
                }

                .container {
                    padding: 2rem;
                    position: relative;
                    z-index: 2;
                }
            `}</style>
        </main>
    }
}
export default Index;