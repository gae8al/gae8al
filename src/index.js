import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import "./css/common.css";
import "./css/Document.css";
import "./css/List.css";
import "./css/reset.css";

import reportWebVitals from './reportWebVitals';

import DetailMember from "./components/MemberDetail/DetailMember";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="gae8al" element={<App />} />
        <Route path="gae8al/member" element={<DetailMember />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
