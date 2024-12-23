import { Meteor } from 'meteor/meteor';
import { AuditedBalanceSheet } from '../../api/Inputs/AuditedBalanceSheetCollection';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { Budget } from '../../api/Inputs/BudgetP&LCollection';
/* eslint-disable no-console */

function addData(data, collection) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  collection.define(data);
}

// Initialize the AuditedBalanceSheetsCollection if empty.
if (Stuffs.count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Initialize the AuditedBalanceSheetsCollection if empty.
if (AuditedBalanceSheet.count() === 0) {
  if (Meteor.settings.defaultAuditedBalanceSheets) {
    console.log('Creating default data for AuditedBalanceSheets.');
    Meteor.settings.defaultAuditedBalanceSheets.forEach(data => addData(data, AuditedBalanceSheet));
  } else {
    console.log('No default data found in Meteor.settings');
  }
} else {
  console.log(`AuditedBalanceSheets collection is not empty, count: ${AuditedBalanceSheet.count()}`);
}

if (Budget.count() === 0) {
  if (Meteor.settings.defaultBudget) {
    console.log('Creating default data for Budget.');
    Meteor.settings.defaultBudget.forEach(data => addData(data, Budget));
  } else {
    console.log('No default data found in Meteor.settings');
  }
} else {
  console.log(`Budget collection is not empty, count: ${Budget.count()}`);
}
