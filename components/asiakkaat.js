export default function Asiakkaat() {
    return (
        <div className="asiakkaat">
            <div className="asiakkaat__content">
                <h2>Osaamiseeni luottavat</h2>

                <div className="logot">
                    <a className="logo" href="https://digimoguli.fi/" target="_blank" rel="noopener">
                        <picture>
                            <source srcSet={require('../public/images/digimoguli.png?webp')} type="image/webp" />
                            <source srcSet={require('../public/images/digimoguli.png')} type="image/png" />
                            <img src={require('../public/images/digimoguli.png')} alt="Logo: Digimoguli Oy" />
                        </picture>
                    </a>

                    <a className="logo" href="https://www.livepaletti.fi/" target="_blank" rel="noopener">
                        <picture>
                            <source srcSet={require('../public/images/livepaletti.png?webp')} type="image/webp" />
                            <source srcSet={require('../public/images/livepaletti.png')} type="image/png" />
                            <img src={require('../public/images/livepaletti.png')} alt="Logo: Livepaletti Oy" />
                        </picture>
                    </a>

                    <a className="logo" href="https://teatteri.ouka.fi/" target="_blank" rel="noopener">
                        <picture>
                            <source srcSet={require('../public/images/oulunteatteri.png?webp')} type="image/webp" />
                            <source srcSet={require('../public/images/oulunteatteri.png')} type="image/png" />
                            <img src={require('../public/images/oulunteatteri.png')} alt="Logo: Oulun Kaupunginteatteri Oy" />
                        </picture>
                    </a>

                    <a className="logo" href="https://www.ouka.fi/etusivu" target="_blank" rel="noopener">
                        <picture>
                            <source srcSet={require('../public/images/ouka.png?webp')} type="image/webp" />
                            <source srcSet={require('../public/images/ouka.png')} type="image/png" />
                            <img src={require('../public/images/ouka.png')} alt="Logo: Oulun Kaupunki" />
                        </picture>
                    </a>
                </div>
            </div>
        </div>
    )
}