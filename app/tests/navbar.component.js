import { Selector, t } from 'testcafe';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class NavBar {

  /* If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout() {
    const loggedInUser = await Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists;
    if (loggedInUser) {
      await t.click(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`);
      await t.click(`#${COMPONENT_IDS.NAVBAR_SIGN_OUT}`);
    }
  }

  async gotoSignInPage() {
    await this.ensureLogout(t);
    const visible = await Selector(`#${COMPONENT_IDS.NAVBAR_COLLAPSE}`).visible;
    if (!visible) {
      await t.click('button.navbar-toggler');
    }
    await t.click(`#${COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_IN}`);
  }

  /* Check that the specified user is currently logged in. */
  async isLoggedIn(username) {
    const visible = await Selector(`#${COMPONENT_IDS.NAVBAR_COLLAPSE}`).visible;
    if (!visible) {
      await t.click('button.navbar-toggler');
    }
    const loggedInUser = Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).innerText;
    await t.expect(loggedInUser).eql(username);
  }

  /* Check that someone is logged in, then click items to logout. */
  async logout() {
    const visible = await Selector(`#${COMPONENT_IDS.NAVBAR_COLLAPSE}`).visible;
    if (!visible) {
      await t.click('button.navbar-toggler');
    }
    await t.expect(Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists).ok();
    await t.click(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_SIGN_OUT}`);
  }

  /* Pull down login menu, go to sign up page. */
  async gotoSignUpPage() {
    await this.ensureLogout(t);
    const visible = await Selector(`#${COMPONENT_IDS.NAVBAR_COLLAPSE}`).visible;
    if (!visible) {
      await t.click('button.navbar-toggler');
    }
    await t.click(`#${COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_UP}`);
  }

  /* Go to the Audited Balance Input page. */
  async gotoAuditedBalanceInputPage() {
    const visible = await Selector(`#${COMPONENT_IDS.NAVBAR_COLLAPSE}`).visible;
    if (!visible) {
      await t.click('button.navbar-toggler');
    }
    await t.expect(Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists).ok();
    await t.click(`#${COMPONENT_IDS.NAVBAR_DATA_INPUT}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_AUDITED_BALANCE_INPUT_PAGE}`);
  }

  /* Go to the Budget PL Input page. */
  async gotoBudgetPLInputPage() {
    const visible = await Selector(`#${COMPONENT_IDS.NAVBAR_COLLAPSE}`).visible;
    if (!visible) {
      await t.click('button.navbar-toggler');
    }
    await t.expect(Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists).ok();
    await t.click(`#${COMPONENT_IDS.NAVBAR_DATA_INPUT}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_BUDGET_PL_INPUT_PAGE}`);
  }

  /* Go to the Audited Input page. */
  async gotoAuditedInputPage() {
    const visible = await Selector(`#${COMPONENT_IDS.NAVBAR_COLLAPSE}`).visible;
    if (!visible) {
      await t.click('button.navbar-toggler');
    }
    await t.expect(Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists).ok();
    await t.click(`#${COMPONENT_IDS.NAVBAR_DATA_INPUT}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_AUDITED_INPUT_PAGE}`);
  }

  /* Go to dashboard page. */
  async gotoDashboardPage() {
    const visible = await Selector(`#${COMPONENT_IDS.NAVBAR_COLLAPSE}`).visible;
    if (!visible) {
      await t.click('button.navbar-toggler');
    }
    await t.expect(Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists).ok();
    await t.click(`#${COMPONENT_IDS.NAVBAR_DASHBOARD_PAGE}`);
  }

  /* Go to the manage database page. Must be adimin. */
  async gotoManageDatabasePage() {
    const visible = await Selector(`#${COMPONENT_IDS.NAVBAR_COLLAPSE}`).visible;
    if (!visible) {
      await t.click('button.navbar-toggler');
    }
    await t.expect(Selector(`#${COMPONENT_IDS.NAVBAR_CURRENT_USER}`).exists).ok();
    await t.click(`#${COMPONENT_IDS.NAVBAR_MANAGE_DROPDOWN}`);
    await t.click(`#${COMPONENT_IDS.NAVBAR_MANAGE_DROPDOWN_DATABASE}`);
  }
}

export const navBar = new NavBar();
