const url = "https://omgapi-two.vercel.app"
const categoryUrl = "/category"
const bestSellersUrl = "/maisVendidos"
const newArrivalsUrl = "/lancamentos"
const kitsUrl = "/kits"

const imageUrl = "https://omgapi-two.vercel.app/retrieve/images/";
const logoId = "66c0a35b5461c9aa3f7fc72f";
const bannerIdOne = "66c22c48e93e8a840a4bdc39";
const bannerIdTwo = "66c22c66e93e8a840a4bdc3e";
const bannerCabelo = "66c0a35b5461c9aa3f7fc737";
const bannerBanho = "66c0a35b5461c9aa3f7fc735";
const bannerSkincare = "66c0a35b5461c9aa3f7fc740";
const bannerMaquiagem = "66c0a35b5461c9aa3f7fc73e";
const bannerPerfumes = "66c0a35b5461c9aa3f7fc73f";
const bannerAbout = "66c0a35b5461c9aa3f7fc734";

document.addEventListener('DOMContentLoaded', async () => {

    const swiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    const topSellersContainer = document.getElementById('carousel-maisVendidos');
    const newArrivalsContainer = document.getElementById('carousel-lancamentos');
    const kitsContainer = document.getElementById('carousel-kits');

    const fetchProductsSlide = async (url, container) => {

        try {

            const response = await fetch(url);

            if (!response.ok) throw new Error('Erro ao acessar URL');

            const products = await response.json();

            container.innerHTML = '';

            products.forEach(product => {

                const slide = createElement(product, "slide")
                container.appendChild(slide);
            });

        } catch (error) {

            console.error('Ocorreu um erro:', error);
        }
    };

    const fetchProductSection = async (section, containerId) => {
        try {
            const response = await fetch(`https://omgapi-two.vercel.app/section/${section}`);
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const products = await response.json();
            const container = document.getElementById(containerId);
    
            container.innerHTML = '';
    
            products.forEach(product => {

                const slide = createElement(product, "card")
                container.appendChild(slide);
            });
        }  catch (error) {

            console.error(`Erro ao puxar produtos da seção ${section}:`, error);
        }
    };

    const createElement = (product, swiperType) => {
        const slide = document.createElement('div');
        slide.className = `swiper-${swiperType}`;
        slide.title = `${product.name} R$${product.price.toFixed(2)}`;
        slide.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2 class="swiper__title">${product.name}</h2>
            <p class="swiper_price"><b class="price-bold">R$</b>${product.price.toFixed(2)}</p>
            <button class="action__btn">Comprar</button>
        `;
        return slide;
    };

    await fetchProductsSlide(url + categoryUrl + bestSellersUrl, topSellersContainer);
    await fetchProductsSlide(url + categoryUrl + newArrivalsUrl, newArrivalsContainer);
    await fetchProductsSlide(url + categoryUrl + kitsUrl, kitsContainer);

    await fetchProductSection("cabelo", "carousel-cabelo");
    await fetchProductSection("banho", "carousel-banho");
    await fetchProductSection("skincare", "carousel-skincare");
    await fetchProductSection("maquiagem", "carousel-maquiagem");
    await fetchProductSection("perfume", "carousel-perfume");


    const updateImageAttributes = async (apiUrl, selector) => {

        try {
    
            const res = await fetch(apiUrl);
    
            if (!res.ok) throw new Error('Erro ao acessar URL');
            
            const imageData = await res.json();
            
            const imageElement = document.querySelector(selector);
            
            if (imageElement) {
    
                imageElement.src = imageData.url;
                imageElement.alt = imageData.alt;
            } else {
                console.error('Imagem não encontrada para o seletor:', selector);
            }
        } catch (error) {
    
            console.error('Erro ao encontrar dados da imagem:', error);
        }
    }
        
    await updateImageAttributes(imageUrl + logoId, ".container__header__logo .container__header__image");
    await updateImageAttributes(imageUrl + logoId, ".footer__logo img");
    await updateImageAttributes(imageUrl + logoId, ".popup__img");
    await updateImageAttributes(imageUrl + bannerIdOne, ".banner__kit .banner__container__image .banner__image");
    await updateImageAttributes(imageUrl + bannerIdTwo, ".banner__kit .banner__container__imageTwo .banner__image");
    await updateImageAttributes(imageUrl + bannerAbout, ".banner__kit .banner__container .banner__container__image .banner__image__about");
    await updateImageAttributes(imageUrl + bannerCabelo, ".banner__kit .banner__container .banner__container__image .banner__image__cabelo");
    await updateImageAttributes(imageUrl + bannerBanho, ".banner__kit .banner__container .banner__container__image .banner__image__banho");
    await updateImageAttributes(imageUrl + bannerSkincare, ".banner__kit .banner__container .banner__container__image .banner__image__skincare");
    await updateImageAttributes(imageUrl + bannerMaquiagem, ".banner__kit .banner__container .banner__container__image .banner__image__maquiagem");
    await updateImageAttributes(imageUrl + bannerPerfumes, ".banner__kit .banner__container .banner__container__image .banner__image__perfumes");

});