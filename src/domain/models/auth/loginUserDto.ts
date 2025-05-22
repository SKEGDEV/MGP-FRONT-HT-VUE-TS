import type { fieldDto } from "../common/fieldDto";
import { fieldsPlaceHolder } from "../../../shared/constnats";
import { fieldNumberDefault, fieldStringDefault } from "../common/fieldDto";

export interface login{
  document_number: fieldDto;
  document_type: fieldDto;
  password: fieldDto;
}

export const loginDefault: login = {
  document_number: {
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder
				.firstPOV
				.replace('@field', 'document number')
				.replace('@required', '*'),
    name: 'document_number@createUserDefault',
  },
  document_type: {
    ...fieldNumberDefault,
    placeholder: fieldsPlaceHolder
				.selectPOV
				.replace('@field', 'document type')
				.replace('@required', '*'),
    name: 'document_type@createUserDefault',
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

}


