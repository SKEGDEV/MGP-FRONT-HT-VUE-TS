
export interface fieldDto{
  value: string | number | Date;
  name: string;
  isValid: boolean;
  validMessage: string;
  isApiField: boolean;
  regExValid: string;
  placeholder: string;
  example: string;
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
}
