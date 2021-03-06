import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home/Home";
import Profile from "../components/Profile";
import Programs from "../components/Program/Programs";
import ProgramScreen from "../components/Program/ProgramScreen";
import BoardUser from "../components/BoardUser";
import BoardModerator from "../components/BoardModerator";
import BoardAdmin from "../components/BoardAdmin";
import ProtectedRoute from "../services/ProtectedRoute"

import { ScheduleScreen } from "../components/Academy/ScheduleScreen";
import { CareerScreen } from "../components/views/CareerScreen";
import { GetStarted } from "../components/Contact/GetStarted";
import { InstructorsScreen } from "../components/Academy/InstructorsScreen";
import { Contact } from "../components/Contact/Contact";
import { Pricing } from '../components/Academy/Pricing';
import { Filosophy } from '../components/Academy/Filosophy';
import { ContainerComponent } from '../components/shared/ContainerComponent';

import { Footer } from "../components/shared/Footer";
import { NavbarComponent } from "../components/shared/Navbar";
import { PhotoAndVideo } from '../components/views/PhotoAndVideo/PhotoAndVideo';

export const AppRouter = () => {
  return (
    <>
      <NavbarComponent />
      <ContainerComponent />
      <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/schedule" component={ScheduleScreen} />
            <Route exact path="/program/:programId" component={ ProgramScreen } />
            <Route exact path="/programs" component={Programs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/get-started" component={GetStarted} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/filosophy" component={Filosophy} />
            <Route exact path="/photos-video" component={PhotoAndVideo} />
            <ProtectedRoute exact path="/career" component={CareerScreen} />
            <Route exact path="/instructors" component={InstructorsScreen} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
      </Switch>
      <Footer />
    </>
  );
};
