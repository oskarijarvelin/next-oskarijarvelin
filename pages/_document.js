import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="fi">
                <Head>
                    <meta charSet="UTF-8" />
                    <link rel="profile" href="https://gmpg.org/xfn/11" />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

                    <meta property="og:locale" content="fi_FI" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Oskari Järvelin" />
                    <meta name="twitter:card" content="summary_large_image" />
                    
                    <link rel="manifest" href="manifest.json" />

                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="application-name" content="Oskari Järvelin" />
                    <meta name="apple-mobile-web-app-title" content="Oskari Järvelin" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="msapplication-navbutton-color" content="#ffffff" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="msapplication-starturl" content="/" />
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

                    <link rel="icon" type="image/png" sizes="72x72" href="images/icons/icon-72x72.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="images/icons/icon-72x72.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="images/icons/icon-96x96.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="96x96" href="images/icons/icon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="128x128" href="images/icons/icon-128x128.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="128x128" href="images/icons/icon-128x128.png" />
                    <link rel="icon" type="image/png" sizes="144x144" href="images/icons/icon-144x144.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="images/icons/icon-144x144.png" />
                    <link rel="icon" type="image/png" sizes="152x152" href="images/icons/icon-152x152.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="images/icons/icon-152x152.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="images/icons/icon-192x192.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="images/icons/icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="384x384" href="images/icons/icon-384x384.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="384x384" href="images/icons/icon-384x384.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="images/icons/icon-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="images/icons/icon-512x512.png" />
                </Head>

                <body>
                    <Main />
                    <NextScript />            
                </body>
            </html>
        )
    }
}