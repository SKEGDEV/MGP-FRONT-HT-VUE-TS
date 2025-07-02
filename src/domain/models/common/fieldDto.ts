
export interface fieldDto{
  value: string | number | Date;
  name: string;
  isValid: boolean;
  validMessage: string;
  isApiField: boolean;
  regExValid: string;
  placeholder: string;
  example: string;
  isDisabled: boolean;
}


export const fieldStringDefault: fieldDto = {
  value: '',
  name: '',
  isValid: true,
  validMessage: '',
  isApiField: false,
  regExValid: '',
  placeholder: '',
  example: '',
  isDisabled: false,
}

export const fieldNumberDefault: fieldDto = {
  value: 0,
  name: '',
  isValid: true,
  validMessage: '',
  isApiField: false,
  regExValid: '',
  placeholder: '',
  example: '',
  isDisabled: false,
}

export const fieldDateDefault: fieldDto = {
  value: new Date(),
  name: '',
  isValid: true,
  validMessage: '',
  isApiField: false,
  regExValid: '',
  placeholder: '',
  example: '',
  isDisabled: false,
}
