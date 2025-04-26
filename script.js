// Элементы DOM
const elements = {
  inputCvc: document.querySelector('#cvc-input'),
  cvc: document.querySelector('#cvc__number'),
  card: document.querySelector('#card'),
  cardNumber: document.querySelector('[data-card-number]'),
  inputCardNumber: document.querySelector('#input-card-number'),
  cardHolders: document.querySelector('#holders-name'),
  inputCardHolders: document.querySelector('#input-card-holders'),
  year: document.getElementById('year-card'),
  month: document.getElementById('month-card'),
  inputYear: document.getElementById('year'),
  inputMonth: document.getElementById('month')
};

// Обработчики CVC
elements.inputCvc.addEventListener('focus', () => {
  elements.card.classList.add('to-backface');
});

elements.inputCvc.addEventListener('focusout', () => {
  elements.card.classList.remove('to-backface');
});

elements.inputCvc.addEventListener('keyup', () => {
  elements.inputCvc.value = elements.inputCvc.value.replace(/\D/g, '');
  elements.cvc.textContent = elements.inputCvc.value || '•••';
});

// Обработчики номера карты
elements.inputCardNumber.addEventListener('focus', () => {
  elements.cardNumber.classList.add('selected');
});

elements.inputCardNumber.addEventListener('focusout', () => {
  elements.cardNumber.classList.remove('selected');
});

elements.inputCardNumber.addEventListener('keydown', (e) => {
  if ([4, 9, 14].includes(elements.inputCardNumber.value.length) {
    elements.inputCardNumber.value += ' ';
  }
});

elements.inputCardNumber.addEventListener('keyup', () => {
  elements.inputCardNumber.value = elements.inputCardNumber.value.replace(/[^\d\s]/g, '');
  const rawValue = elements.inputCardNumber.value.replaceAll(' ', '').padEnd(16, '#');
  elements.cardNumber.setAttribute('data-card-number', rawValue);
  
  Array.from(elements.cardNumber.children).forEach((item, idx) => {
    item.textContent = rawValue.slice(4 * idx, 4 * (idx + 1));
  });
});

// Обработчики имени владельца
elements.inputCardHolders.addEventListener('focus', () => {
  elements.cardHolders.classList.add('selected');
});

elements.inputCardHolders.addEventListener('focusout', () => {
  elements.cardHolders.classList.remove('selected');
});

elements.inputCardHolders.addEventListener('keyup', () => {
  elements.inputCardHolders.value = elements.inputCardHolders.value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
  elements.cardHolders.textContent = elements.inputCardHolders.value || 'FIRST NAME SECOND NAME';
});

// Обработчики даты
elements.inputMonth.addEventListener('change', () => {
  elements.month.textContent = elements.inputMonth.value;
});

elements.inputYear.addEventListener('change', () => {
  elements.year.textContent = elements.inputYear.value;
});