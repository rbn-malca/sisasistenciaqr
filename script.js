const products = [
   {
    name: "QR Pro Scanner",
    price: 409.99,
    description: "Escáner de código de barras de escritorio, código QR, certificado Digital europeo, 2D",
    image: "https://example.com/image_of_qr_pro_scanner.png",
    video: "https://www.youtube.com/watch?v=xs-8jOXLKqE"
} },
   {
        name: "QR Pocket Reader",
        price: 108.99,
        description: "NETUM-escáner de código de barras 2D QR de escritorio, lector de código de barras grande, USB, omnidireccional, manos libres A5, pantalla QR 1D",
        image: "https://drive.google.com/file/d/1aXy3YUdzkpIX15KOIcrrujsEg8Pb6BVJ/view?usp=drive_link"
    },
    {
        name: "QR Industrial Scanner",
        price: 1399.99,
        description: "Escáner robusto diseñado para entornos industriales con protección IP65.",
        image: "https://m.media-amazon.com/images/I/51eU+Iy7b5L._AC_SX466_.jpg?height=200&width=200"
    },
    {
        name: "QR Industrial Scanner",
        price: 1399.99,
        description: "Escáner robusto diseñado para entornos industriales con protección IP65.",
        image: "https://m.media-amazon.com/images/I/51eU+Iy7b5L._AC_SX466_.jpg?height=200&width=200"
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
        `;
        productGrid.appendChild(productCard);
    });
}

function addToCart(productName) {
    alert(`Producto añadido al carrito: ${productName}`);
    // Aquí puedes implementar la lógica real del carrito
}

document.addEventListener('DOMContentLoaded', renderProducts);
