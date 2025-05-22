import {fieldsPlaceHolder} from "../../../shared/constnats";
import type { fieldDto } from "../common/fieldDto";
import { fieldStringDefault, fieldNumberDefault } from "../common/fieldDto";


export interface qualificationDto{
  qualification: fieldDto;
  name: fieldDto;
}

export interface activityDto{
  classroomListId: fieldDto;
  subTypeId: fieldDto;
  unitNumber: fieldDto;
}

export interface createActivityDto{ 
  declarative: qualificationDto; 
  attitudinal: qualificationDto; 
  procedural: qualificationDto;
  activity: activityDto;
}

const declarativeDefault: qualificationDto = {
  qualification: {
    ...fieldNumberDefault,
    placeholder: fieldsPlaceHolder.firstPOV
				  .replace('@field', 'declarative qualification')
				  .replace('@required', ''),
    example: '10 points for activity',
    name: 'qualification@declarative@createActivityDto'
  },
  name:{
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder.firstPOV
				  .replace('@field', 'declarative name')
				  .replace('@required', '*'),
    example: 'Topic name of the day: Sum',
    name: 'name@declarative@createActivityDto',
  }
}

const attitudinalDefault: qualificationDto = {
  qualification: {
    ...fieldNumberDefault,
    placeholder: fieldsPlaceHolder.firstPOV
				  .replace('@field', 'attitudinal qualification')
				  .replace('@required', ''),
    example: '10 points for activity',
    name: 'qualification@attitudinal@createActivityDto'
  },
  name:{
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder.firstPOV
				  .replace('@field', 'attitudinal name')
				  .replace('@required', '*'),
    example: 'Good attitude?',
    name: 'name@attitudinal@createActivityDto',
  }
}

const proceduralDefault: qualificationDto = {
  qualification: {
    ...fieldNumberDefault,
    placeholder: fieldsPlaceHolder.firstPOV
				  .replace('@field', 'procedural qualification')
				  .replace('@required', '*'),
    example: '10 points for activity',
    name: 'qualification@procedural@createActivityDto'
  },
  name:{
    ...fieldStringDefault,
    placeholder: fieldsPlaceHolder.firstPOV
				  .replace('@field', 'procedural name')
				  .replace('@required', '*'),
    example: 'Sum excersice or homework',
    name: 'name@procedural@createActivityDto',
  }
}

const activityDefault: activityDto = {
  classroomListId: {
    ...fieldNumberDefault,
    placeholder: fieldsPlaceHolder.selectPOV
				  .replace('@field', 'classroom list')
				  .replace('@required', '*'),
    name: 'classroomListId@activity@createActivityDto'
  },
  subTypeId: {
    ...fieldNumberDefault,
    placeholder: fieldsPlaceHolder.selectPOV
				  .replace('@field', 'sub type activity')
				  .replace('@required', '*'),
    name: 'classroomListId@activity@createActivityDto'
  },
  unitNumber:{
    ...fieldNumberDefault,
    placeholder: fieldsPlaceHolder.selectPOV
				  .replace('@field', 'unit Number')
				  .replace('@required', '*'),
    name: 'classroomListId@activity@createActivityDto'
  },
}

export const createActivityDefault: createActivityDto = {
  declarative: declarativeDefault, 
  attitudinal: attitudinalDefault, 
  procedural: proceduralDefault,
  activity: activityDefault,
}
