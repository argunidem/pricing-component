const toggle = document.querySelector('input');
const elements = Array.from(document.getElementsByClassName('price'));
const prices = elements.map((element) => element.textContent);

const monthly = ['$19.99', '$24.90', '$39.99'];
const annually = ['$199.99', '$249.99', '$399.99'];

toggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    elements.map((element, index) => {
      return (element.textContent = monthly[index]);
    });
  } else {
    elements.map((element, index) => {
      return (element.textContent = annually[index]);
    });
  }
});
