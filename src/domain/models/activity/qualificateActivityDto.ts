import type { fieldDto } from "../common/fieldDto";
import { fieldStringDefault, fieldNumberDefault } from "../common/fieldDto";
import { fieldsPlaceHolder } from "../../../shared/constnats";

export interface qualifyingDto{
  studentQualification: fieldDto;
  studentCurrentQualification: fieldDto;
  activityQualification: fieldDto;
  qualificationName: fieldDto;
}

export interface qualificationDto{
  typeId: fieldDto;
  activityStudentId: fieldDto;
}

export interface qualificateActivityDto{
  qualfication: qualificationDto;
  attitudinal: qualifyingDto;
  procedural: qualifyingDto;
  declarative: qualifyingDto;
}


