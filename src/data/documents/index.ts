
// This file automatically exports all document records
// When adding new documents, just import and add them to the array

import { marieDuboisAIMaster } from './marie-dubois-ai-master';
import { pierreMartinMBA } from './pierre-martin-mba';
import { sophieLaurentPhD } from './sophie-laurent-phd';
import { ramNiwasPatarwalPhD } from './ram-niwas-patarwal-phd';

export const allDocuments = [
  marieDuboisAIMaster,
  pierreMartinMBA,
  sophieLaurentPhD,
  ramNiwasPatarwalPhD,
];

export * from './marie-dubois-ai-master';
export * from './pierre-martin-mba';
export * from './sophie-laurent-phd';
export * from './ram-niwas-patarwal-phd';
