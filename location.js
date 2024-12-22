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

  country.children.forEach((state) => {
    const elementLIState = document.createElement('li');
    elementLIState.textContent = state.stateName;
    elementULState.appendChild(elementLIState);

    state.children.forEach((city) => {
      const elementLICity = document.createElement('li');
      elementLICity.textContent = city.cityName;
      elementULCity.appendChild(elementLICity);
    });
  });

  elementLI.appendChild(elementULState);
  elementULState.appendChild(elementULCity);
  elementUL.appendChild(elementLI);
});

fragment.appendChild(elementUL);
document.body.appendChild(fragment);
