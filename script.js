const products = [
    {
        name: "QR Pro Scanner",
        price: 799.99,
        description: "Escáner profesional de códigos QR con alta velocidad de lectura y conectividad Bluetooth.",
        image: "https://m.media-amazon.com/images/I/51eU+Iy7b5L._AC_SX466_.jpg",
        video: "https://www.youtube.com/watch?v=xs-8jOXLKqE" // Añade la propiedad video aquí
    },
    {
        name: "QR Pocket Reader",
        price: 359.99,
        description: "Lector de códigos QR compacto y portátil, perfecto para uso móvil.",
        image: "https://m.media-amazon.com/images/I/51eU+Iy7b5L._AC_SX466_.jpg",
        video: "https://www.youtube.com/watch?v=anotherVideoID" // Añade la propiedad video aquí
    },
    {
        name: "QR Industrial Scanner",
        price: 1399.99,
        description: "Escáner robusto diseñado para entornos industriales con protección IP65.",
        image: "https://m.media-amazon.com/images/I/51eU+Iy7b5L._AC_SX466_.jpg?height=200&width=200",
        video: "https://www.youtube.com/watch?v=anotherVideoID" // Añade la propiedad video aquí
    }
];

function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">S/ ${product.price.toFixed(2)}</div>
            <button onclick="addToCart('${product.name}')">Añadir al Carrito</button>
            <a href="${product.video}" target="_blank" class="btn">Ver Video</a> <!-- Añade el enlace del video -->
        `;
        productGrid.appendChild(productCard);
    });
}

function addToCart(productName) {
    alert(`Producto añadido al carrito: ${productName}`);
}

document.addEventListener('DOMContentLoaded', renderProducts);
