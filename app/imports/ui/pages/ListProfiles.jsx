import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Card, Col, Row, Table } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';
import { UserProfiles } from '../../api/user/UserProfileCollection';
import UserProfileItem from '../components/UserProfileItem';
import { AdminProfiles } from '../../api/user/AdminProfileCollection';
import AdminProfileItem from '../components/AdminProfileItem';
import { AccountantProfiles } from '../../api/user/AccountantProfileCollection';
import AccountantProfileItem from '../components/AccountantProfileItem';
import { ClientProfiles } from '../../api/user/ClientProfileCollection';
import { BossAccountantProfiles } from '../../api/user/BossAccountantProfileCollection';
import BossAccountantProfileItem from '../components/BossAccountantProfileItem';

/* Renders a table containing all of the Users documents. Use <UserProfileItem> to render each row. */
const ListProfiles = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { userProfileItems, adminProfileItems, accountantProfileItems, bossAccountantProfileItems, userSubReady, adminSubReady, accountantSubReady, clientSubReady, bossAccountantSubReady } = useTracker(() => {
    // Get access to Users and Admins documents.
    const userSub = UserProfiles.subscribeUserProfilesAdmin();
    const adminSub = AdminProfiles.subscribeAdmin();
    const acctSub = AccountantProfiles.subscribeAccountantProfilesAdmin();
    const clntSub = ClientProfiles.subscribeClientProfilesAdmin();
    const bossAcctSub = BossAccountantProfiles.subscribeBossAccountantProfilesAdmin();
    // Determine if subscriptions are ready
    const userSubRdy = userSub.ready();
    const adminSubRdy = adminSub.ready();
    const acctSubRdy = acctSub.ready();
    const clntSubRdy = clntSub.ready();
    const bossAcctSubRdy = bossAcctSub.ready();
    // Get the Users documents
    const usrProfiles = UserProfiles.find({}).fetch();
    const admProfiles = AdminProfiles.find({}).fetch();
    const acctProfiles = AccountantProfiles.find({}).fetch();
    const clntProfiles = ClientProfiles.find({}).fetch();
    const bossAcctProfiles = BossAccountantProfiles.find({}).fetch();
    return {
      userProfileItems: usrProfiles,
      adminProfileItems: admProfiles,
      accountantProfileItems: acctProfiles,
      clientProfileItems: clntProfiles,
      bossAccountantProfileItems: bossAcctProfiles,
      userSubReady: userSubRdy,
      adminSubReady: adminSubRdy,
      accountantSubReady: acctSubRdy,
      clientSubReady: clntSubRdy,
      bossAccountantSubReady: bossAcctSubRdy,
    };
  }, []);

  return ((userSubReady && adminSubReady && accountantSubReady && clientSubReady && bossAccountantSubReady) ? (
    <Card id={PAGE_IDS.LIST_PROFILES} style={{ height: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center text-black py-lg-4"><h2>Profiles</h2></Col>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Role</th>
                <th>{}</th>
              </tr>
            </thead>
            <tbody>
              {userProfileItems.map((profile) => <UserProfileItem key={profile._id} profile={profile} />)}
              {accountantProfileItems.map((profile) => <AccountantProfileItem key={profile._id} profile={profile} />)}
              {bossAccountantProfileItems.map((profile) => <BossAccountantProfileItem key={profile._id} profile={profile} />)}
              {adminProfileItems.map((profile) => <AdminProfileItem key={profile._id} profile={profile} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Card>
  ) : <LoadingSpinner />);
};

export default ListProfiles;
