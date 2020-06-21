import Link from 'next/link';

export default function Osaaminen() {
    return (
        <div id="olen" className="osaaminen">
            <div className="osaaminen__content">
                <h2>Olen 25-vuotias oululainen</h2>

                <div className="taidot">
                    <Link href="/web-developer">
                        <a className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/internet.svg?include') }} />
                            <p className="taito__title">Web Developer</p>
                        </a>
                    </Link>

                    <Link href="/valomies">
                        <a className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/lights.svg?include') }} />
                            <p className="taito__title">Valomies</p>
                        </a>
                    </Link>

                    <Link href="/wordpress-kehittaja">
                        <a className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/wordpress.svg?include') }} />
                            <p className="taito__title">WordPress-kehittäjä</p>
                        </a>
                    </Link>

                    <Link href="/miksaaja">
                        <a className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/mic.svg?include') }} />
                            <p className="taito__title">Miksaaja</p>
                        </a>
                    </Link>

                    <Link href="/kanelin-kasvattaja">
                        <a className="taito">
                            <div className="taito__icon" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/sheltie.svg?include') }} />
                            <p className="taito__title">Kanelin kasvattaja</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}