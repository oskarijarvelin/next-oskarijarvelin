export default function Osaaminen() {
    return (
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
    )
}