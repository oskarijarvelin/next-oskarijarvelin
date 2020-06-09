import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Webdeveloper() {
    return (
        <Layout title="Kuinka voin palvella?">
            <Head>
                <title>Web Developer - Oskari Järvelin - Web Developer</title>
                <meta name="description" content="Olen 25-vuotias Web Developer Oulusta. Ydinosaamistani ovat verkkopalvelut, WordPress, tietoturva ja tapahtumatekniikka. Kuinka voin palvella?" />
                <meta property="og:title" content="Web Developer - Oskari Järvelin - Web Developer" />
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

                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit lacus sed interdum euismod. Nullam eu tempor diam. Phasellus eget mi eu sem vulputate venenatis ultrices in dolor. Proin lobortis pretium venenatis.</p>
                    
                    <p>Vivamus blandit dolor ac neque laoreet, ac suscipit sapien luctus. Sed nec porttitor massa. Phasellus porttitor eget est sed commodo. Ut pulvinar sapien vitae urna mattis, vitae consectetur tellus mattis. Morbi maximus arcu suscipit consectetur porta. Aenean interdum justo et risus euismod rhoncus.</p>

                    <p>Curabitur luctus leo a erat molestie efficitur. Phasellus in massa consequat, viverra odio et, cursus mi. Pellentesque eu feugiat arcu. Sed condimentum sapien lacus, nec ultricies velit pretium non. Mauris consectetur nulla pulvinar mauris imperdiet sollicitudin. Vivamus a feugiat libero. Integer ornare magna non maximus tristique. Vestibulum lacinia sem eu ante tempor, vitae vehicula elit mattis. Aenean lobortis at ante nec eleifend. Morbi vitae ex nisi.</p>

                    <p>Aliquam eget congue augue. Suspendisse non sem et turpis iaculis viverra. Nulla varius nulla cursus elementum accumsan. Maecenas augue nulla, blandit eu sapien at, iaculis suscipit dui. Etiam id cursus tellus. Duis consectetur sit amet ex vitae tincidunt. Ut sollicitudin ipsum at dolor molestie, ac condimentum orci dapibus. Aliquam eget massa porttitor, egestas enim ut, pellentesque elit. Quisque ex quam, aliquam id nibh id, malesuada fermentum mauris. Morbi aliquam porttitor turpis at vestibulum. Cras vitae iaculis arcu. Nunc nibh libero, mattis quis maximus vel, hendrerit et tortor. Mauris nec magna massa.</p>

                    <p>Fusce eu eros ac sem fermentum rhoncus quis ac odio. Phasellus nec sagittis arcu, eget laoreet lectus. Sed gravida libero vitae odio pellentesque pretium. Nulla facilisi. Etiam accumsan suscipit magna rutrum tristique. Nunc rutrum vehicula purus, ut tempus velit varius in. Sed sodales, nibh nec condimentum tristique, turpis nulla posuere velit, in ultricies diam urna sed diam. Nulla facilisi. Pellentesque scelerisque nulla mauris, vitae lacinia elit lacinia eu. Aliquam ut blandit augue. Sed pretium pretium scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare nisi ligula, venenatis ullamcorper elit vehicula vestibulum. Duis bibendum auctor elit. Duis a arcu elit. Suspendisse dignissim sapien at orci tincidunt, non dapibus lorem pulvinar.</p>

                    <p>Vestibulum in imperdiet libero. Ut vel lorem fermentum, aliquet ligula non, tincidunt augue. Fusce efficitur arcu sem, non commodo magna luctus eget. Etiam nibh tellus, porttitor id dolor eget, efficitur interdum tortor. Cras a pellentesque neque, nec lobortis tortor. Donec ac scelerisque est, eu rhoncus purus. Ut ut ex in lacus finibus mattis at in ligula. Donec rhoncus viverra lectus, eget pharetra libero imperdiet in. Sed pretium orci vitae malesuada varius. Nunc accumsan condimentum eros, sit amet lobortis tellus porttitor vestibulum. Nunc nec turpis nec risus finibus mollis. Pellentesque vitae felis quam. Nullam vel finibus metus. Ut tincidunt mauris ac commodo egestas. Etiam fringilla, sapien non blandit interdum, quam turpis ultrices velit, eget tincidunt nulla purus ac nisi.</p>
                </div>
            </div>
        </Layout>
    )
}