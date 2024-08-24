

const ageOfNeonate = document.getElementById('age');  
const gestationalAge = document.getElementById('gestationalAge');
const sex = document.getElementById('sex');
const onsetOfVomiting = document.getElementById('onsetOfVomiting');
const colourOfVomitus = document.getElementById('colourOfVomitus');
const abdominalDistension = document.getElementById('abdominalDistension');
const passageOfStool = document.getElementById('passageOfStool');
const xrayFindings = document.getElementById('xrayFindings');
const submit = document.getElementById('submit');




submit.addEventListener('click', vomit);

// Add the following JavaScript to toggle the pop-up


function openPopup1() {
  const popup1 = document.getElementById('popup1');
  popup1.classList.remove('hidden');
  const popupmessage = document.getElementById('popupmessage');
}


function openPopup2() {
  const popup2 = document.getElementById('popup2');
  popup2.classList.remove('hidden');
}

function closePopup1() {
  const popup1 = document.getElementById('popup1');
  popup1.classList.add('hidden');
}
function closePopup2() {
  const popup2 = document.getElementById('popup2');
  popup2.classList.add('hidden');
}

// Function to save input values to localStorage

function vomit() {
  if (
    parseInt(ageOfNeonate.value) >= 0 &&
    parseInt(gestationalAge.value) >= 37 &&
    (sex.value === 'Male' || sex.value === 'Female') &&
    parseInt(onsetOfVomiting.value) >= 0 &&
    colourOfVomitus.value === 'greenish' &&
    abdominalDistension.value === 'No' &&
    passageOfStool.value === 'Yes' &&
    xrayFindings.value === 'Normal X-ray')  {
      openPopup1();
    }

    else if( xrayFindings.value === 'Double-bubble sign'){openPopup1();}
   else {
    openPopup2();
  }
}

