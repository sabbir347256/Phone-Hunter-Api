const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);
    // console.log(phones);
}

const displayPhone = phones => {
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAll = document.getElementById('show-all-container');
    if(phones.length > 12){
        showAll.classList.remove('hidden');
    }else{
        showAll.classList.add('hidden');
    }

    phones = phones.slice(0,12);
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList.add = `card w-96 bg-gray-100 shadow-xl`;
        console.log(phone);
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10 bg-gray-100 rounded-t-2xl	">
          <img src=" ${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body bg-gray-100 rounded-b-2xl	">
         <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard)
        toggleSearch(false);
    });
}

const handleSearch = () => {
    const searchField = document.getElementById('searchText');
    const searchText = searchField.value;
    toggleSearch(true);
    loadPhone(searchText);
}

const toggleSearch = (isloading) => {
    const loading = document.getElementById('loading');
    if(isloading){
        loading.classList.remove('hidden');
    }else{
        loading.classList.add('hidden');
    }

}

// loadPhone();