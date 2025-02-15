document.addEventListener("DOMContentLoaded", () => {
    const discord = "lgplp";
    const twitter = "https://x.com/lgplp_";
    const youtube = "https://www.youtube.com/@lgplpp";
    const bsky = "https://bsky.app/profile/lgplp.bsky.social";

    document.getElementById("twitter-link").setAttribute("href", twitter);
    document.getElementById("youtube-link").setAttribute("href", youtube);
    document.getElementById("bsky-link").setAttribute("href", bsky);
});

function toggleView() {
    const desktopView = document.getElementById("DesktopView");
    const mobileView = document.getElementById("MobileView");

    desktopView.style.display = "block";
    mobileView.style.display = "none";

    const stylesheet = document.getElementById("1");
    stylesheet.setAttribute("href", "css/global.css");
}

document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.hash) {
        window.location.hash = "#home";
    }
    loadContent();
});


const routes = {
    "#home": `
        <section>
            <h1>Buenas, me presento</h1>
            <div>
            <p class="main-section">Soy lgplp, me dicen lg, lgp y lpgm pero de preferencia dime lg, pronunciado como "eleje". Soy de  <img src="assets/clflag.png" style="margin: 2px"> Chile, como corresponde.
                Juego al maicra principalmente como pvpero rata pero de 1.9+ (cooldown combat, básicamente). Por si te interesa hablarme, arriba están mis redes, por si no las viste XDDD
                <br><br>
                Si no respondo DM es porque estoy ocupado o porque eres raro, pls no preguntes cosas incómodas. También te recomiendo visitar <a href="https://nohello.net/es" target="_blank">https://nohello.net/</a> para contexto adicional.
                <br><br>
                <h1>¿Por qué me llamo lgplp?</h1>
                <br>
                Me lo han preguntado miles y miles de veces, y se que parece que le di un cabezazo al teclado pero realmente no es aleatorio. Mi nombre anterior era lpgm2397, y antes de eso tenía un nombre cringe que me da penita mencionar. En mi defensa tenía 8 años cuando me hice ese nombre lol
                <br><br>
                <h1>Cuéntame un poco sobre ti</h1>
                <br>
                Pues para ser más específico soy de Santiago de Chile, nací en el 2006 y soy <img src="assets/beeflag.png" style="margin: 2px"> BI. Si eres más o menos cercano a mi probablemente esto ya lo sabías :P
                <br>
                si quieres que te cuente más, nuevamente eres bienvenidx a hablarme por alguna de mis redes. BTW, ya sé que mi página no está hecha 100% óptima, tiene un par de malas prácticas, pero la verdad es q no me importa mucho. Es principalmente para que me conozcas un poco y me puedas contactar por si necesitas cualquier cosa 😵‍💫
            </p>

            <ul class="skin-section">
                <li>
                <img src="assets/skin3.png" alt="mi skin :v">
                </li>
            </ul>
        </section>
    `,
    "#comms": `
        <section>
            <h1>Algún día lol</h1>
        </section>
    `,
    "#instagram": `
        <section>
            <h1>Instagram</h1>
            <h3>Estas son las cuentas de Instagram que uso de momento !!!!</h3>
            <ul class="socials-section">
                <li>
                    <a href="https://www.instagram.com/lgplp_/" target="_blank" class="socials-link">
                        <i class="fa-brands fa-instagram socials-icon"></i>
                        <div>
                            <h4>lgplp_</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lpglp.0/" target="_blank" class="socials-link">
                        <i class="fa-brands fa-instagram socials-icon"></i>
                        <div>
                            <h4>lpglp.0</h4>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    `,
    "#twitter": `
        <section>
            <h1>Twitter, también conocido como twitter</h1>
            <h3>Estas son las cuentas de Twitter que uso !!!!</h3>
            <ul class="socials-section">
                <li>
                    <a href="https://x.com/lgplp_/" target="_blank" class="socials-link">
                        <i class="fa-brands fa-twitter socials-icon"></i>
                        <div>
                            <h4>Cuenta principal</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://x.com/vtr_hater/" target="_blank" class="socials-link">
                        <i class="fa-brands fa-twitter socials-icon"></i>
                        <div>
                            <h4>🎨 Dibujitos</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://x.com/clotiam_addict/" target="_blank" class="socials-link">
                        <i class="fa-brands fa-twitter socials-icon"></i>
                        <div>
                            <h4>🔒 Priv</h4>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    `,
    "#bsky": `
        <section>
            <h1>Bluesky</h1>
            <h3>Estas son las cuentas de Bsky que uso !!!!</h3>
            <ul class="socials-section">
                <li>
                    <a href="https://bsky.app/profile/lgplp.bsky.social" target="_blank" class="socials-link">
                        <i class="fa-brands fa-bluesky socials-icon"></i>
                        <div>
                            <h4>Cuenta principal</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://bsky.app/profile/vtr-hater.bsky.social/" target="_blank" class="socials-link">
                        <i class="fa-brands fa-bluesky socials-icon"></i>
                        <div>
                            <h4>🎨 Dibujitos</h4>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    `,
};

function loadContent() {
    const hash = window.location.hash || defaultRoute;
    const content = routes[hash] || `<h1>Página no encontrada</h1>`;
    document.getElementById("content").innerHTML = content;
}

function navigate(route) {
    window.location.hash = route;
    loadContent();
}

window.addEventListener("hashchange", loadContent);
document.addEventListener("DOMContentLoaded", loadContent);
