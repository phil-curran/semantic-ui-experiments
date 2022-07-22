var firstName = document.querySelector(
  '[data-automation-id="legalNameSection_firstName"]'
);
var lastName = document.querySelector(
  '[data-automation-id="legalNameSection_lastName"]'
);
var streetAddress = document.querySelector(
  '[data-automation-id="addressSection_addressLine1"]'
);
var city = document.querySelector('[data-automation-id="addressSection_city"]');
var state = document.querySelector(
  '[data-automation-id="addressSection_countryRegion"]'
);
var zip = document.querySelector(
  '[data-automation-id="addressSection_postalCode"]'
);
var phone = document.querySelector('[data-automation-id="phone-number"]');

const fillPersonalData = () => {
  firstName.innerText = "Philip";
  lastName.innerText = "Curran";
  streetAddress.innerText = "18333 Bothell Way NE #232";
  city.innerText = "Bothell";
  state.innerHTML = "Washington";
  zip.innerText = "98011";
  phone.innerText = "(425)-217-6073";
};
