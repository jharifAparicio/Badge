function obtenerValores(name) {
    const pathUrl = new URLSearchParams(window.location.search);
    const valor = pathUrl.get(name);
    console.log(valor);
    return valor;
}

function generateBadge() {
    const ShortName = obtenerValores('shortname') || 'Js';
    const name = obtenerValores('name') || 'JavaScript';
    const backgroundColor = `#${obtenerValores('color')}` || '#F7DF1E';

    svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="132" height="20" role="img" aria-label="${ShortName}: ${name}">
            <linearGradient id="s" x2="0" y2="100%">
                <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
                <stop offset="1" stop-opacity=".1"/>
            </linearGradient>
            <clipPath id="r">
                <rect width="132" height="20" rx="3" fill="#fff"/>
            </clipPath>
            <g clip-path="url(#r)">
                <rect width="31" height="20" fill="#555"/>
                <rect x="31" width="101" height="20" fill="${backgroundColor}"/>
                <rect width="132" height="20" fill="url(#s)"/>
            </g>
            <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
                <text aria-hidden="true" x="165" y="150" fill="#010101" fill-opacity="1" transform="scale(.1)">${ShortName}</text>
                <text x="165" y="140" transform="scale(.1)" fill="#fff">${ShortName}</text>
                <text aria-hidden="true" x="805" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)">${name}</text>
                <text x="805" y="140" transform="scale(.1)" fill="#fff">${name}</text>
            </g>
        </svg>`
    const BadgeContainer = document.getElementById('BadgeContainer');
    BadgeContainer.innerHTML = svg;
}
window.onload = function () {
    generateBadge();
}