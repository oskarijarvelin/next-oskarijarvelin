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
        </main>
    }
}
export default Index;