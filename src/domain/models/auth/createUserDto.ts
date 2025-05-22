import type { fieldDto } from "../common/fieldDto";
import { fieldStringDefault, fieldNumberDefault, fieldDateDefault } from "../common/fieldDto";
import { fieldsPlaceHolder } from "../../../shared/constnats";


export interface createUserDto {
  first_name: fieldDto;
  last_name: fieldDto;
  school_name: fieldDto;
  school_direction: fieldDto;
  birthday: fieldDto;
  password: fieldDto;
  confirmPassword: fieldDto;
  document_number: fieldDto;
  email: fieldDto;
  phone_number: fieldDto;
  document_type: fieldDto;
}


export const createUserDefault: createUserDto = {
  first_name: {
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'first name')
				.replace('@required', '*'),
    example: 'Jonh',
    name: 'first_name@createUserDefault',
  },
  last_name:  {
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'last name')
				.replace('@required', '*'),
    example: 'Parker',
    name: 'last_name@createUserDefault',
  },
  school_name: {
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'school name')
				.replace('@required', '*'),
    example: 'National school of Guatemala',
    name: 'school_name@createUserDefault',
  },
  school_direction: {
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'school direction')
				.replace('@required', '*'),
    example: 'zone 3, 3 street hose 225',
    name: 'school_direction@createUserDefault',
  },
  birthday: {
    ...fieldDateDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'birthday')
				.replace('@required', '*'),
    example: '2000-02-01',
    name: 'birthday@createUserDefault',
  },
  password: {
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'password')
				.replace('@required', '*'),
    example: 'Test21123',
    name: 'password@createUserDefault',
  },
  confirmPassword:{
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'confirm password')
				.replace('@required', '*'),
    example: 'Test21123',
    name: 'password@createUserDefault',
  },
  document_number: {
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'document number')
				.replace('@required', '*'),
    name: 'document_number@createUserDefault',
  },
  email: {
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'email')
				.replace('@required', '*'),
    example: 'email@Provider.com',
    name: 'email@createUserDefault',
  },
  phone_number: {
    ...fieldNumberDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'phone number')
				.replace('@required', '*'),
    example: '55443322',
    name: 'phone_number@createUserDefault',
  },
  document_type: {
    ...fieldNumberDefault,
    placeholder: fieldsPlaceHolder
				.selectPOV
				.replace('@field', 'document type')
				.replace('@required', '*'),
    name: 'document_type@createUserDefault',
  },
}

