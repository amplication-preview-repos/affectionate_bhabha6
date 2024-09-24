import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { PlayerProfileList } from "./playerProfile/PlayerProfileList";
import { PlayerProfileCreate } from "./playerProfile/PlayerProfileCreate";
import { PlayerProfileEdit } from "./playerProfile/PlayerProfileEdit";
import { PlayerProfileShow } from "./playerProfile/PlayerProfileShow";
import { MatchList } from "./match/MatchList";
import { MatchCreate } from "./match/MatchCreate";
import { MatchEdit } from "./match/MatchEdit";
import { MatchShow } from "./match/MatchShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Soccer Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="PlayerProfile"
          list={PlayerProfileList}
          edit={PlayerProfileEdit}
          create={PlayerProfileCreate}
          show={PlayerProfileShow}
        />
        <Resource
          name="Match"
          list={MatchList}
          edit={MatchEdit}
          create={MatchCreate}
          show={MatchShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
