let allCountries = [];

async function fetchCountries() {
   try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population");
      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
      skeleton();
      const data = await response.json();
      if (!data || data.length === 0) {
         throw new Error("No countries found");
      }
      const countries = data.map(country => ({
         name: country.name?.common || "No name",
         capital: Array.isArray(country.capital) && country.capital.length > 0 ? country.capital[0] : "No capital",
         region: country.region || "No region",
         flag: country.flags?.svg || "",
         population: country.population || 0
      }));
      displayCountries(countries);
      allCountries = countries;
      return countries;
   } catch (error) {
      const cardContainer = document.querySelector("#cardsContainer");
      cardContainer.innerHTML = "<p class='text-center font-medium text-sm text-red-500'>Failed to fetch countries data</p>";
   };
};

const searchInput = document.querySelector("#search");

function performSearch(){
   try {
      const searchValue = searchInput.value.trim().toLowerCase();

      // if (searchValue.length === 0) {
      //    displayCountries(allCountries);
      //    return;
      // }
      const filteredCountries = allCountries.filter(country => 
         country.name.toLowerCase().includes(searchValue) || 
         country.capital.toLowerCase().includes(searchValue) || 
         country.region.toLowerCase().includes(searchValue)
      );

      const cardContainer = document.querySelector("#cardsContainer");
      if(filteredCountries.length === 0){
         cardContainer.innerHTML = "<p class='text-center text-red-500'>No countries found</p>";
      } else {
         displayCountries(filteredCountries);
      }
   } catch (error) {
      const cardContainer = document.querySelector("#cardsContainer");
      cardContainer.innerHTML = "<p class='text-center text-red-500'>No countries found</p>";
   }
};

searchInput.addEventListener("input", (e)=>{
   e.preventDefault();
   performSearch();
})

function skeleton() {
   const loading = document.querySelector("#loader");
   loading.classList.remove("hidden");
   loading.classList.add("grid");
   setTimeout(() => {
      loading.classList.remove("grid");
      loading.classList.add("hidden");
   }, 5000);
}

async function displayCountries(countries) { 
   const cardContainer = document.querySelector("#cardsContainer");
   cardContainer.innerHTML = "";

   countries.forEach(country => {
      const countryCard = document.createElement("div");
      countryCard.classList.add("bg-gray-100","mb-5","p-3", "shadow-lg", "rounded-md", "transition-all", "hover:shadow-xl", "break-inside-avoid");
      countryCard.innerHTML = `
         <div class="flex justify-center flex-wrap items-center w-[100%]">
            <div class="flex justify-center flex-col w-[50%]"><h2 class="font-bold text-2xl mb-1">${country.name}</h2><h3 class="text-gray-600 font-bold">${country.capital}</h3></div>
            <div class="ml-auto shadow-md h-[100px] w-[45%] object-cover bg-center"><img class="h-[100%] object-cover bg-center  w-[100%]" src="${country.flag}" alt=""></div>
         </div>
         <div class="mt-2">
            <h3 class="font-bold"><span class="text-gray-600">Region:</span><span class="font-bold">${country.region}</span></h3>
            <p class="mt-2 font-bold text-[16px]"><span class="text-gray-600">Population: </span><span class="">${country.population}</span></p>
         </div>
      `
      cardContainer.appendChild(countryCard);
   });
};
fetchCountries();

async function showFilter() {
   try {
      const filteredSelection = document.querySelector("#filters");
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population");
      if (!response.ok) {
         throw new Error("Network response was not ok");
      };
      filteredSelection.innerHTML = "";

      const data = await response.json();
      const regions = [...new Set(data.map(country => country.region))].sort();
      regions.forEach(region => {
         const option = document.createElement("button");
         option.id = "filterButtons";
         option.classList.add("bg-red-400", "active:bg-red-500", "hover:bg-red-500", "px-4", "py-1", "rounded-md", "text-white", "font-bold", "mr-2", "mb-2");
         option.innerHTML = region;
         filteredSelection.appendChild(option);
      });
      const filterButtons = document.querySelectorAll("#filterButtons");
      filterButtons.forEach(button =>{
         button.addEventListener("click", (e)=>{
            e.preventDefault();
            const selectedRegion = e.target.innerHTML;
            const filteredCountries = allCountries.filter(country => country.region.toLowerCase() === selectedRegion.toLowerCase());
            if (filteredCountries.length === 0) {
               const cardContainer = document.querySelector("#cardsContainer");
               cardContainer.innerHTML = "<p class='text-center text-red-500'>No countries found in this region</p>";
            } else {
               searchInput.value = selectedRegion.toLowerCase(); 
               performSearch();

               // displayCountries(filteredCountries);
            }
         });
      });

   } catch (error) {
      const filteredSelection = document.querySelector("#filters");
      filteredSelection.innerHTML = "<p class='text-center font-medium text-sm text-red-500'>Failed to fetch regions</p>";
   }
};

// showFilter();
const filter = document.querySelector("#filters")
document.querySelector("#filter-btn").addEventListener("click", ()=>{
   if (filter.classList.contains("hidden")) {
      filter.classList.remove("hidden");
      filter.classList.add("flex");
      showFilter();
   } else {
      filter.classList.remove("flex");
      filter.classList.add("hidden");
   }
});
console.log(filter);