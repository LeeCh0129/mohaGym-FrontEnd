import React from "react";
import { Route, Routes } from "react-router-dom";
import Inventory from "../../pages/Inventory/Inventory";
import Orders from "../../pages/Orders/Orders";
import Customers from "../../pages/Customers/Customers";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Attendance from "../../pages/Attendance/Attendance";
import Noticeboard from "../../pages/Noticeboard/Noticeboard";
import Members from "../../pages/Member/Members";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/attendance" element={<Attendance />}></Route>
      <Route path="/noticeboard" element={<Noticeboard />}></Route>
      <Route path="/members" element={<Members />}></Route>
    </Routes>
  );
}
