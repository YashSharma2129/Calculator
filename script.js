document.addEventListener("DOMContentLoaded", function () {
  let expression = "";
  let memory = 0; // Initialize memory to 0
  const inputField = document.querySelector('.input');
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const buttonText = e.target.innerHTML;
      
      if (buttonText === '=') {
        try {Q
          expression = eval(expression);
        } catch (error) {
          expression = 'Error';
        }
        inputField.value = expression;
      } else if (buttonText === 'C') {
        expression = '';
        inputField.value = '';
      } else if (buttonText === '%') {
        // Calculate percentage
        try {
          expression = eval(expression) / 100;
        } catch (error) {
          expression = 'Error';
        }
        inputField.value = expression;
      } else if (buttonText === 'M+') {
        // Add to memory
        memory += parseFloat(expression);
        expression = '';
        inputField.value = memory;
      } else if (buttonText === 'M-') {
        // Subtract from memory
        memory -= parseFloat(expression);
        expression = '';
        inputField.value = memory;
      } else {
        expression += buttonText;
        inputField.value = expression;
      }
    });
  });
});
