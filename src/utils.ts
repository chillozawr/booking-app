export const onPhoneInputHandler = (event: Event) => {
  // let numbersValue = (event.target as HTMLInputElement).value.replace(/\D/g, '');
  const target = event.target as HTMLInputElement;
  let numbersValue = target.value.replace(/\D/g, '');
  // console.log(numbersValue);

  let formatted = '';
  if (['7', '8', '9'].indexOf(numbersValue[0]) > -1) {
    if (numbersValue[0] === '9') {
      numbersValue = '7' + numbersValue;
    }
    const firstSymbols = numbersValue[0] === '8' ? '8' : '+7';
    formatted = firstSymbols + '';
    if (numbersValue.length > 1) {
      formatted += '(' + numbersValue.substring(1, 4);
    }
    if (numbersValue.length >= 5) {
      formatted += ') ' + numbersValue.substring(4, 7);
    }
    if (numbersValue.length >= 8) {
      formatted += '-' + numbersValue.substring(7, 9);
    }
    if (numbersValue.length >= 10) {
      formatted += '-' + numbersValue.substring(9, 11);
    }
  } else {
    formatted = '+' + numbersValue;
  }
  target.value = formatted;
};

export const phoneFormatting = (phone: string): string => {
  const phoneFormatted = phone.replace(/\D/g, '').split('');
  if (phoneFormatted[0] === '7') {
    phoneFormatted[0] = '8';
  }
  // console.log(phoneFormatted.join(''));
  return phoneFormatted.join('');
};

export type Place = {
  accommodation_id: number;
  address: string;
  image_preview: string;
  owner_id: number;
  owner_name: string;
  price: number;
  type: string;
};

export type getPlacesResponse = {
  data: Place[];
};
