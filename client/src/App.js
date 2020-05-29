import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import HomeDepot from './pages/HomeDepot';
import HomeWarehouse from './pages/HomeWarehouse';
import TicketNumber from './pages/TicketNumber';
import TicketDetails from './pages/TicketDetails';
import CreateJob from './pages/CreateJob';
import SelectCompanyJob from './pages/SelectCompanyJob';
import SelectDriver from './pages/SelectDriver';
import SelectTruck from './pages/SelectTruck';
import SelectChemicals from './pages/SelectChemicals';
import FinalizeCreateJob from './pages/FinalizeCreateJob';
import CheckStorage from './pages/CheckStorage';
import AllDeliveries from './pages/AllDeliveries';
import UpcomingDeliveries from './pages/UpcomingDeliveries';
import WarehousesOverview from './pages/WarehousesOverview';
import RejectTicket from './pages/RejectTicket';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />

      <Route path="/home-depot" component={HomeDepot} />

      <Route path="/home-warehouse" component={HomeWarehouse} />

      <Route path="/ticket-number" component={TicketNumber} />

      <Route path="/reject-ticket" component={RejectTicket} />

      <Route path="/ticket-details/:ticketNumber" component={TicketDetails} />

      <Route path="/create-job" component={CreateJob} />

      <Route path="/select-company-job" component={SelectCompanyJob} />

      <Route path="/select-driver" component={SelectDriver} />

      <Route path="/select-truck" component={SelectTruck} />

      <Route path="/select-chemicals" component={SelectChemicals} />

      <Route path="/finalize-job" component={FinalizeCreateJob} />

      <Route path="/check-storage" component={CheckStorage} />

      <Route path="/all-deliveries" component={AllDeliveries} />

      <Route path="/upcoming-deliveries" component={UpcomingDeliveries} />

      <Route path="/warehouses-overview" component={WarehousesOverview} />
    </Switch>
  );
};

export default App;
