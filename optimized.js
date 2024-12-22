const LOCATION_MAP = [
    { countryName: "India", children:[{stateName:"Tamil Nadu"}] },
    { countryName: "Japan", children:[{stateName:"Kyoto"}]},
    { countryName: "USA",children:[{stateName:"California"}] }
  ];
  
  const fragment = document.createDocumentFragment();
  const elementUL = document.createElement('ul');
  elementUL.className = 'country-list';
  
  if (!document.body) {
    throw new Error('Document body not found');
  }
  
  // Pre-create all elements in a single pass
  const allElements = LOCATION_MAP.map(() => ({
      country: document.createElement('li'),
      stateList: document.createElement('ul'),
      state: document.createElement('li')
  }));
  
  // Single pass to populate and connect elements
  allElements.forEach((elements, i) => {
      const { countryName, children: [{ stateName }] } = LOCATION_MAP[i];
      
      elements.country.className = 'country-item';
      elements.country.textContent = countryName;
      elements.stateList.className = 'state-list';
      elements.state.textContent = stateName;
      
      elements.stateList.appendChild(elements.state);
      elements.country.appendChild(elements.stateList);
      elementUL.appendChild(elements.country);
  });
  
  fragment.appendChild(elementUL);
  document.body.appendChild(fragment);