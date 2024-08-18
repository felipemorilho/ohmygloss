document.addEventListener('DOMContentLoaded', () => {
    const topSellersContainer = document.getElementById('carousel-maisVendidos');
    const newArrivelsContainer = document.getElementById('carousel-lancamentos');
    const kitsContainer = document.getElementById('carousel-kits');

    const fetchProductsTopSellers = async () => {

        try {

            const response = await fetch('https://omgapi-two.vercel.app/category/maisVendidos');

            if (!response.ok) {

                throw new Error('Network response was not ok');
            }

            const products = await response.json();

            topSellersContainer.innerHTML = '';

            products.forEach(product => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.title = `${product.name} &#013R$${product.price.toFixed(2)}`;
                slide.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2 class="swiper__title">${product.name}</h2>
                    <p class="swiper_price"><b class="price-bold">R$</b>${product.price.toFixed(2)}</p>
                    <button class="action__btn">Comprar</button>
                `;
                topSellersContainer.appendChild(slide);
            });

        } catch (error) {

            console.error('Failed to fetch products:', error);
        }
    };

    const fetchProductsNewArrivals = async () => {

        try {

            const response = await fetch('https://omgapi-two.vercel.app/category/lancamentos');

            if (!response.ok) {

                throw new Error('Network response was not ok');
            }

            const products = await response.json();

            newArrivelsContainer.innerHTML = '';

            products.forEach(product => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.title = `${product.name} &#013R$${product.price.toFixed(2)}`;
                slide.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2 class="swiper__title">${product.name}</h2>
                    <p class="swiper_price"><b class="price-bold">R$</b>${product.price.toFixed(2)}</p>
                    <button class="action__btn">Comprar</button>
                `;
                newArrivelsContainer.appendChild(slide);
            });

        } catch (error) {
            
            console.error('Failed to fetch products:', error);
        }
    };

    const fetchProductsKits = async () => {

        try {

            const response = await fetch('https://omgapi-two.vercel.app/category/kits');

            if (!response.ok) {

                throw new Error('Network response was not ok');
            }

            const products = await response.json();

            kitsContainer.innerHTML = '';

            products.forEach(product => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.title = `${product.name} &#013R$${product.price.toFixed(2)}`;
                slide.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2 class="swiper__title">${product.name}</h2>
                    <p class="swiper_price"><b class="price-bold">R$</b>${product.price.toFixed(2)}</p>
                    <button class="action__btn">Comprar</button>
                `;
                kitsContainer.appendChild(slide);
            });

        } catch (error) {
            
            console.error('Failed to fetch products:', error);
        }
    };

    fetchProductsTopSellers();
    fetchProductsNewArrivals();
    fetchProductsKits();
});