import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListStuff from '../pages/ListStuff';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import AddStuff from '../pages/AddStuff';
import EditStuff from '../pages/EditStuff';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import UserPage from '../pages/UserPage';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import { ROLE } from '../../api/role/Role';
import LoadingSpinner from '../components/LoadingSpinner';
import ManageDatabase from '../pages/ManageDatabase';
import AuditedBalanceInputTest from '../pages/AuditedBalanceInputTest';
import AuditedBalanceInput from '../pages/AuditedBalanceInput';
import AuditedBalanceSchemaInput from '../pages/AuditedBalanceSchemaInput';
import BudgetPlInput from '../pages/BudgetPlInput';
import Audited from '../pages/Audited';
import Dashboard from '../pages/Dashboard';
import Information from '../pages/Information';
import ContactUs from '../components/ContactUs';
import CSV from '../pages/CSV';
import AboutUs from '../pages/AboutUs';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/userpage" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
          <Route path="/list" element={<ProtectedRoute><ListStuff /></ProtectedRoute>} />
          <Route path="/add" element={<ProtectedRoute><AddStuff /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/information" element={<ProtectedRoute><Information /></ProtectedRoute>} />
          <Route path="/auditedbalanceinput" element={<ProtectedRoute><AuditedBalanceInput /></ProtectedRoute>} />
          <Route path="/auditedbalanceschema" element={<ProtectedRoute><AuditedBalanceSchemaInput /></ProtectedRoute>} />
          <Route path="/budgetplinput" element={<ProtectedRoute><BudgetPlInput /></ProtectedRoute>} />
          <Route path="/csv" element={<ProtectedRoute><CSV /></ProtectedRoute>} />
          <Route path="/audited" element={<ProtectedRoute><Audited /></ProtectedRoute>} />
          <Route path="/auditedbalanceinputtest" element={<ProtectedRoute><AuditedBalanceInputTest /></ProtectedRoute>} />
          <Route path="/edit/:_id" element={<ProtectedRoute><EditStuff /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminProtectedRoute ready={ready}><ListStuffAdmin /></AdminProtectedRoute>} />
          <Route path="/manage-database" element={<AdminProtectedRoute ready={ready}><ManageDatabase /></AdminProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  console.log('ProtectedRoute', isLogged);
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]);
  console.log('AdminProtectedRoute', isLogged, isAdmin);
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

export default App;
