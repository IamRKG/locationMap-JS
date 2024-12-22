const LOCATION_MAP = [
  {
    countryName: "India",
    children: [{
      stateName: "Tamil Nadu",
      children: [{ cityName: "Chennai" }]
    }]
  },
  {
    countryName: "Japan",
    children: [{
      stateName: "Kyoto",
      children: [{ cityName: "Uji" }]
    }]
  },
  {
    countryName: "USA",
    children: [{
      stateName: "California",
      children: [{ cityName: "Los Angeles" }]
    }]
  }
];

const fragment = document.createDocumentFragment();
const elementUL = document.createElement('ul');
elementUL.classList.add('country-list');

if (!document.body) {
  throw new Error('Document body not found');
}

LOCATION_MAP.forEach((country) => {
  const elementLI = document.createElement('li');
  elementLI.classList.add('country-item');
  elementLI.textContent = country.countryName;



  const elementULState = document.createElement('ul');
  const elementULCity = document.createElement('ul');
  elementULState.classList.add('state-list');
  elementULCity.classList.add('city-list');

  country.children.forEach((state) => {
    const elementLIState = document.createElement('li');
    elementLIState.textContent = state.stateName;
    elementLIState.className = 'state-item'
    elementULState.appendChild(elementLIState);
    // Set initial display state
    elementULState.style.display = 'none';
    elementULCity.style.display = 'none';

    // Single event handler for country
    elementLI.addEventListener('click', function(event) {
      if (event.target === this) {
        toggleList(elementULState);
       // elementULState.style.display = elementULState.style.display === 'none' ? 'block' : 'none';
        event.stopPropagation();
      }
    });

    state.children.forEach((city) => {
      const elementLICity = document.createElement('li');
      elementLICity.textContent = city.cityName;
      elementLICity.className = 'city-item'
      elementULCity.appendChild(elementLICity);

      // Single event handler for state
      elementLIState.addEventListener('click', function(event) {
        if (event.target === this) {
        //  elementULCity.style.display = elementULCity.style.display === 'none' ? 'block' : 'none';
          toggleList(elementULCity);
          event.stopPropagation();
        }
      });
    });
  });

  elementLI.appendChild(elementULState);
  elementULState.appendChild(elementULCity);
  // elementULState.style.display = 'none'
  elementUL.appendChild(elementLI);

});

fragment.appendChild(elementUL);
document.body.appendChild(fragment);

const toggleList = (listElement) => {
  const isExpanded = listElement.style.display === 'block';
  listElement.style.display = isExpanded ? 'none' : 'block';
 // arrow.parentElement.classList.toggle('expanded');
};
