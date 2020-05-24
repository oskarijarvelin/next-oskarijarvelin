import Link from 'next/link';

const Header = () => (
    <header>
        <div className="header__branding">
            <Link href="/">
                <a>Oskari Järvelin</a>
            </Link>
        </div>

        <div className="header__cta">
            <a href="tel:+358458983883" aria-label="Soita 045 898 3883">
                <div className="cta" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/phone.svg?include') + '<span>045 898 3883</span>' }} />
            </a>
        </div>
    </header>
)

export default Header;