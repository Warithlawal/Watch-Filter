const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;
const length = images.length;


for (let i = 0; i < length; i++) {
	const div = document.createElement("div");
	div.className = "button";
	bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
	buttons.forEach((button) => {
		button.style.backgroundColor = "transparent";
	});
};


buttons.forEach((button, i) => {
	button.addEventListener("click", () => {
		resetBg()
		slideNumber = i + 1;	
		slider.style.transform = `translateX(-${i * 100}%)`;
		button.style.backgroundColor = 'white';
	});
});

const nextSlide = ()=> {
	slider.style.transform = `translateX(-${slideNumber * 100}%)`;
	slideNumber++;
};

const prevSlide = ()=> {
	slider.style.transform = `translateX(-${(slideNumber-2) * 100}%)`;
	slideNumber--;
};

const getFirstSlide = ()=> {
	slider.style.transform = `translateX(0px)`;
	slideNumber = 1;
};

const getLastSlide = ()=> {
	slider.style.transform = `translateX(-${(length - 1) * 100}%)`;
	slideNumber = length; 
};

const changeColor = () => {
	resetBg()
	buttons[slideNumber-1].style.backgroundColor = "white";
}

right.addEventListener("click", ()=> {
	/*if (slideNumber < length) {
		getFirstSlide()
	} else {
		getLastSlide();
	}
	alternative way to write if statement*/
	slideNumber < length ? nextSlide() : getFirstSlide();
	changeColor();
});


left.addEventListener("click", ()=> {
	slideNumber > 1 ? prevSlide() : getLastSlide();
	changeColor();
});


const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
  {
    id: 6,
    name: "OLEVS Watch Men",
    img: "https://m.media-amazon.com/images/I/61oXCET6C6L._AC_UL640_FMwebp_QL65_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 7,
    name: "OLEVS Skeleton Watch for Men",
    img: "https://m.media-amazon.com/images/I/71+AoVcynNL._AC_UL640_FMwebp_QL65_.jpg",
    price: 250,
    cat: "Luxury",
  },
  {
    id: 8,
    name: "Timex Men's Easy Reader Watch",
    img: "https://m.media-amazon.com/images/I/71S-CCwawqL._AC_UL640_FMwebp_QL65_.jpg",
    price: 52,
    cat: "Dress",
  },
{
    id: 9,
    name: "Natural Walnut Automatic",
    img: "https://m.media-amazon.com/images/I/81BsI0MFrlL._AC_UL640_FMwebp_QL65_.jpg",
    price: 38,
    cat: "Sport",
  },
{
    id: 10,
    name: "Casio FT500WC-5BVCF",
    img: "https://m.media-amazon.com/images/I/91AgG0TMbDL._AC_UL640_FMwebp_QL65_.jpg",
    price: 34,
    cat: "Dress",
  },
  {
    id: 12,
    name: "Men’s Watches Fashion",
    img: "https://m.media-amazon.com/images/I/81LkQJXDa6L._AC_UL640_FMwebp_QL65_.jpg",
    price: 40,
     cat: "Dress",
  },
{
    id: 13,
    name: "BENYAR Classic Fashion Quartz",
    img: "https://m.media-amazon.com/images/I/613m-YrCn0L._AC_UL640_FMwebp_QL65_.jpg",
    price: 39,
    cat: "Sport",
  },
{
    id: 14,
    name: "Timex Men's Easy Reader Watch",
    img: "https://m.media-amazon.com/images/I/817Ex2Pe2pL._AC_UL640_FMwebp_QL65_.jpg",
    price: 42,
     cat: "Dress",
  },
{
    id: 15,
    name: "Casio Quartz Fitness Watch",
    img: "https://m.media-amazon.com/images/I/611VI65YTiL._AC_UL640_FMwebp_QL65_.jpg",
    price: 40,
    cat: "Sport",
  },
{
    id: 16,
    name: "Tag Heuer Formula 1 Blue Dial",
    img: "https://m.media-amazon.com/images/I/716V3w0E8EL._AC_UL640_QL65_.jpg",
    price: 1383,
    cat: "Sport",
  },
{
    id: 17,
    name: "Raymond Weil Tango",
    img: "https://m.media-amazon.com/images/I/61AeW3K1jxL._AC_UL640_QL65_.jpg",
    price: 740,
    cat: "Luxury",
  },
{
    id: 18,
    name: "Hamilton Watch Khaki Aviation",
    img: "https://m.media-amazon.com/images/I/81Hj7HgHMGL._AC_UL640_QL65_.jpg",
    price: 817,
    cat: "Luxury",
  },
{
    id: 19,
    name: "Seiko Automatic Watch SRPF37J1",
    img: "https://m.media-amazon.com/images/I/71EgStxWutL._AC_UL640_QL65_.jpg",
    price: 381,
    cat: "Luxury",
  },
{
    id: 20,
    name: "Casio MQ24 Series",
    img: "https://m.media-amazon.com/images/I/516s1Ljzp6L._AC_UL640_QL65_.jpg",
    price: 19,
    cat: "Casual",
  },

];

const productsContainer = document.querySelector('.products');
const searchInput = document.querySelector('.search');
const categoriesContainer = document.querySelector('.cats');
const priceRange = document.querySelector('.priceRange');
const priceValue = document.querySelector('.priceValue');

const displayProducts = (filteredProducts) => {
	productsContainer.innerHTML = filteredProducts.map(
		(product) => 
		`
		<div class="product">
			<img src=${product.img}>
			<span class="name">${product.name}</span>
			<span class="priceText">$${product.price}</span>
		</div>
		`
	).join('');
};

displayProducts(data)

searchInput.addEventListener('keyup',(e)=>{
	const value = e.target.value.toLowerCase();

	if(value) {
		displayProducts(data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1)
			);
	} else {
		displayProducts(data)
	}
});

const setCategories = () => {
	const allCats = data.map((item) => item.cat);
	const categories = [
		"All",
		...allCats.filter((item, i) => {
			return allCats.indexOf(item) === i;
		}),
	];

	categoriesContainer.innerHTML = categories.map (cat => 
	`
	<span class="cat">${cat}</span>
	`).join("");

	categoriesContainer.addEventListener("click", (e) => {
		const selectedCat = e.target.textContent;

		selectedCat === "All"
		? displayProducts(data)
		: displayProducts(data.filter((item) => item.cat === selectedCat));
	});
};

const setPrices = () => {
	const priceList = data.map(item => item.price);
	const minPrice = Math.min(...priceList);
	const maxPrice = Math.max(...priceList);

	priceRange.min = minPrice
	priceRange.max = maxPrice
	priceRange.value = maxPrice
	priceValue.textContent = "$" + maxPrice

	priceRange.addEventListener("input", (e) => {
		priceValue.textContent = "$" + e.target.value;
		displayProducts(data.filter((item) => item.price <= e.target.value));
	});
};

setCategories();

setPrices();










