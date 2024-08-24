

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
}


function openPopup2() {
  const popup2 = document.getElementById('popup2');
  popup2.classList.remove('hidden');
}

function openPopup3() {
  const popup3 = document.getElementById('popup3');
  popup3.classList.remove('hidden');
}

function openPopup4() {
  const popup4 = document.getElementById('popup4');
  popup4.classList.remove('hidden');
}

function closePopup1() {
  const popup1 = document.getElementById('popup1');
  popup1.classList.add('hidden');
}
function closePopup2() {
  const popup2 = document.getElementById('popup2');
  popup2.classList.add('hidden');
}

function closePopup3() {
  const popup3 = document.getElementById('popup3');
  popup3.classList.add('hidden');
  
}

function closePopup4() {
  const popup4 = document.getElementById('popup4');
  popup4.classList.add('hidden');
  
}






// Function to save input values to localStorage

function vomit() {
  if (
    parseInt(ageOfNeonate.value) >= 0 &&
    parseInt(gestationalAge.value) >= 32 &&
    (sex.value === 'Male' || sex.value === 'Female') &&
    parseInt(onsetOfVomiting.value) >= 0 &&
    colourOfVomitus.value === 'greenish' &&
    abdominalDistension.value === 'No' &&
    passageOfStool.value === 'Yes' &&
   xrayFindings.value === 'Normal X-ray') {
     
      openPopup1();
    }

    else if( xrayFindings.value === 'Double-bubble sign' || xrayFindings.value === 'Triple-bubble sign'){openPopup1();}

    else if (colourOfVomitus.value === 'greenish' && xrayFindings.value === 'No xray done') {openPopup1();}	

    else if(colourOfVomitus.value === 'greenish'){openPopup1();}

    else if (abdominalDistension.value === 'Yes' && passageOfStool.value === 'No') {openPopup3();}

    else if (onsetOfVomiting.value >= 14 && colourOfVomitus.value === 'clear'&& abdominalDistension.value === 'No') {openPopup4();}
   else {
    openPopup2();
  }
}

