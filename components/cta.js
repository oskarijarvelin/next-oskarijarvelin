const Cta = () => (
    <a href="tel:+358458983883" aria-label="Soita 045 898 3883">
        <div className="cta" dangerouslySetInnerHTML={{ __html: require('../public/images/icons/phone.svg?include') + '<span>045 898 3883</span>' }} />
    </a>
)

export default Cta;