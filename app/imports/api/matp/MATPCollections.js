import { Meteor } from 'meteor/meteor';
import { AdminProfiles } from '../user/AdminProfileCollection';
import { UserProfiles } from '../user/UserProfileCollection';
import { AuditedBalance } from '../Inputs/auditedBalanceCollection';
// inputing ABS collections
import { AuditedBalanceSheets } from '../Inputs/auditedBalanceSheet.js';// inputing ABS collections

class MATPClass {
  collections;

  collectionLoadSequence;

  collectionAssociation;

  constructor() {
    // list of all the MATPCollections collections
    this.collections = [
      AdminProfiles,
      AuditedBalanceSheets, // inputing ABS collections
      UserProfiles,
      AuditedBalance,
    ];
    /*
     * A list of collection class instances in the order required for them to be sequentially loaded from a file.
     */
    this.collectionLoadSequence = [
      AdminProfiles,
      UserProfiles,
      AuditedBalance,
      AuditedBalanceSheets, // inputing ABS collections
    ];

    /*
     * An object with keys equal to the collection name and values the associated collection instance.
     */
    this.collectionAssociation = {};
    this.collections.forEach((collection) => {
      this.collectionAssociation[collection.getCollectionName()] = collection;
    });

  }

  /**
   * Return the collection class instance given its name.
   * @param collectionName The name of the collection.
   * @returns The collection class instance.
   * @throws { Meteor.Error } If collectionName does not name a collection.
   */
  getCollection(collectionName) {
    // console.log('MATPCollections', collectionName, this.collectionAssociation);
    const collection = this.collectionAssociation[collectionName];
    if (!collection) {
      throw new Meteor.Error(`Called MATPCollections.getCollection with unknown collection name: ${collectionName}`);
    }
    return collection;
  }
}

export const MATPCollections = new MATPClass();
