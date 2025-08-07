let currentSearchText = "iphone"; // Default search text

const loadPhone = async (searchText = "iphone", showAll = false) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones, showAll);
};

const displayPhone = (phones, showAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = ""; // Clear previous content

  // Display show all button or hide it
  const showAllBtn = document.getElementById("show-all-btn");
  if (phones.length > 12 && !showAll) {
    showAllBtn.classList.remove("hidden");
  } else {
    showAllBtn.classList.add("hidden");
  }

  if (!showAll) {
    phones = phones.slice(0, 12); // Limit to the first 12 results
  }

  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList = `card card-compact bg-gray-100 shadow-xl p-2`;
    phoneDiv.innerHTML = `
      <figure>
        <img src="${phone.image}" alt="${phone.phone_name}" />
      </figure>
      <div class="card-body">
        <h2 class="text-slate-950 card-title">${phone.phone_name}</h2>
        <p class="text-slate-800">${phone.brand}</p>
        <div class="card-actions justify-end">
          <button onClick="showDetails('${phone.slug}')" class="btn btn-primary">Details</button>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
};

const showDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  showDetailsModal(phone);
  console.log(phone);
};

const showDetailsModal = (phone) => {
  const modal = document.getElementById("show_details_modal");
  const modalBody = document.getElementById("modal-body");
  // Blur the background when the modal is opened
  document.getElementById("phone-container").classList.add("blur");

  modalBody.innerHTML = `
    <div class="card bg-white shadow-lg rounded-lg overflow-hidden">
      <figure class="flex justify-center p-2 bg-gray-100">
        <img class="rounded-lg" src="${phone.image}" alt="${phone.brand}" />
      </figure>
      <div class="card-body p-4">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">${phone.name}</h2>
        <p class="text-gray-700 mb-2"><strong>Brand:</strong> ${phone.brand}</p>
        <p class="text-gray-700 mb-2"><strong>ChipSet:</strong> ${
          phone.mainFeatures.chipSet
        }</p>
        <p class="text-gray-700 mb-2"><strong>DisplaySize:</strong> ${
          phone.mainFeatures.displaySize
        }</p>
        <p class="text-gray-700 mb-2"><strong>Storage:</strong> ${
          phone.mainFeatures.storage
        }</p>
        
        <p class="text-gray-700 mb-2"><strong>GPS:</strong> ${
          phone.others?.GPS || "N/A"
        }</p>
        <p class="text-gray-700 mb-2"><strong>Release Date:</strong> ${
          phone.releaseDate || "N/A"
        }</p>
      </div>
    </div>
  `;

  modal.showModal();

  // Remove blur when the modal is closed
  modal.addEventListener("close", () => {
    document.getElementById("phone-container").classList.remove("blur");
  });
  modal.showModal();
};

// Search button
const searchPhone = () => {
  const searchField = document.getElementById("search-field");
  currentSearchText = searchField.value; // Update current search text
  loadPhone(currentSearchText);
  searchField.value = ""; // Clear search field
};

// Load default phones on page load
loadPhone();

// Show all button functionality
const showAll = () => {
  loadPhone(currentSearchText, true); // Use the current search text
};

document.getElementById("show-all-btn").addEventListener("click", showAll);
