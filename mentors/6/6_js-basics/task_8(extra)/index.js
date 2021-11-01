const password = 'sdSF34234' //prompt('Введите пароль');
const errorMessage = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.';
const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!';

if (password.length < 3 || password.length > 20) {
  alert(errorMessage);
} else {
  let hasBigSymbol = false;
  let hasNumbers = false;
  for (let i = 0; i < password.length; i += 1) {
    const symbol = password[i];
    symbol
    const numberSymbol = Number(symbol);
    numberSymbol
    const isNumberSymbol = numberSymbol && typeof numberSymbol === 'number';
    isNumberSymbol
    if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
      hasBigSymbol = true;
      hasBigSymbol
    }
    if (isNumberSymbol) {
      hasNumbers = true;
    }
  }

  if (!hasBigSymbol || !hasNumbers) {
    alert(errorMessage);
  } else {
    alert(successMessage);
  }
}