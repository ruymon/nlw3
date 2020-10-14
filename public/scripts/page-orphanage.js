const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create Map
const map = L.map('mapid', options).setView([-23.5905904,-46.6423963], 15);

// Create and add a TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


// Create and add Marker

L.marker([-23.5905904,-46.6423963], { icon } )
    .addTo(map)
 


// Image Gallery

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de Image
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add('active')
}