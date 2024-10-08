/* import { Selector, t } from 'testcafe'; */
import { /* manageDatabasePage, */ signOutPage, auditedBalanceInputPage, budgetPLInputPage, auditedInputPage } from './simple.page';
import { signInPage } from './signin.page';
import { signUpPage } from './signup.page';
import { navBar } from './navbar.component';
import { dashboardPage } from './dashboard.page';
import { landingPage } from './landing.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'I50sAE05P?&' };
/** const adminCredentials = { username: 'admin@foo.com', password: 'changeme' }; */
const newCredentials = { username: 'jane@foo.com', password: 'I50sAE05P?&' };

fixture('meteor-application-template-production localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async () => {
  await landingPage.isDisplayed();
});

test('Test that sign up and sign out work', async () => {
  await navBar.gotoSignUpPage();
  await signUpPage.isDisplayed();
  await signUpPage.signupUser(newCredentials.username, newCredentials.password);
  await navBar.isLoggedIn(newCredentials.username);
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that dashboard page and 4-8-12 year graphs display', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.gotoDashboardPage();
  await dashboardPage.isDisplayed();
  await dashboardPage.goto4YearGraphs();
  await dashboardPage.goto8YearGraphs();
  await dashboardPage.goto12YearGraphs();
});

test('Test that signin and signout work', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that user input pages show up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.gotoAuditedBalanceInputPage();
  await auditedBalanceInputPage.isDisplayed();
  await navBar.gotoBudgetPLInputPage();
  await budgetPLInputPage.isDisplayed();
  await navBar.gotoAuditedInputPage();
  await auditedInputPage.isDisplayed();
  /** await navBar.gotoAddStuffPage();
  await addStuffPage.isDisplayed();
  await navBar.gotoListStuffPage();
  await listStuffPage.isDisplayed();
  // want to see if we can get to the editStuffPage
  const editLinks = await Selector(`.${COMPONENT_IDS.LIST_STUFF_EDIT}`);
  await t.click(editLinks.nth(0));
  await editStuffPage.isDisplayed();
  await navBar.logout();
  await signOutPage.isDisplayed(); */
});

/**
test('Test that admin pages show up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.gotoAddStuffPage();
  await addStuffPage.isDisplayed();
  await navBar.gotoListStuffPage();
  await listStuffPage.isDisplayed();
  // want to see if we can get to the editStuffPage
  const editLinks = await Selector(`.${COMPONENT_IDS.LIST_STUFF_EDIT}`);
  await t.click(editLinks.nth(0));
  await editStuffPage.isDisplayed();
  await navBar.gotoListStuffAdminPage();
  await listStuffAdminPage.isDisplayed();
  // await navBar.gotoManageDatabasePage();
  // await manageDatabasePage.isDisplayed();
});
*/
