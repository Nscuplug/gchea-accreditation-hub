
// This file automatically exports all accreditation records
// When adding new accreditations, just import and add them to the array

import { uitInstitutional } from './uit-institutional';
import { esciBusiness } from './esci-business';
import { iraResearch } from './ira-research';
import { nscuInstitutional } from './nscu-institutional';

export const allAccreditations = [
  uitInstitutional,
  esciBusiness,
  iraResearch,
  nscuInstitutional,
];

export * from './uit-institutional';
export * from './esci-business';
export * from './ira-research';
export * from './nscu-institutional';
