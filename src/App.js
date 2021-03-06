import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/e26ff574-e19b-430c-b59b-d34c128a49be">
            <Validzhon />
          </Route>
          <Route path="/20032464-489b-41c0-9a70-179d697af09b">
            <Ganidzhon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Ganidzhon() {
  return (
    <>
      <div className="advansed">
        <dl>
          <dt>Пациент</dt>
          <dd>Р***ва Р. Б.</dd>
          <dt>Год рождения</dt>
          <dd>2000</dd>
          <dt>Коронавирус, РНК (SARS-CoV-2, ПЦР) мазок, кач.</dt>
          <dd>РНК НЕ ОБНАРУЖЕНА (23 фев 2021)</dd>
        </dl>
      </div>
      <div className="advansed">
        <dl>
          <dt>Patient</dt>
          <dd>R***va R. B.</dd>
          <dt>Year of birth</dt>
          <dd>2000</dd>
          <dt>
            Coronavirus, RNA (SARS-CoV-2, Real-time PCR) smear, qualitative
          </dt>
          <dd>RNA not detected (Feb 23, 2021)</dd>
        </dl>
      </div>
    </>
  );
}

function Validzhon() {
  return (
    <>
      <div className="advansed">
        <dl>
          <dt>Пациент</dt>
          <dd>Т***в В. М.</dd>
          <dt>Год рождения</dt>
          <dd>1997</dd>
          <dt>Коронавирус, РНК (SARS-CoV-2, ПЦР) мазок, кач.</dt>
          <dd>РНК НЕ ОБНАРУЖЕНА (24 фев 2020)</dd>
        </dl>
      </div>
      <div className="advansed">
        <dl>
          <dt>Patient</dt>
          <dd>T***v V. M.</dd>
          <dt>Year of birth</dt>
          <dd>1997</dd>
          <dt>
            Coronavirus, RNA (SARS-CoV-2, Real-time PCR) smear, qualitative
          </dt>
          <dd>RNA not detected (Feb 24, 2020)</dd>
        </dl>
      </div>
    </>
  );
}
