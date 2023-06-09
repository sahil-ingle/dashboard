import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CollectFee from "./components/CollectFee";
import GenerateReceipt from "./components/Generatereceipt";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components//Maincontent";
import AddStudent from "./components/AddStudentForm";
import AddAcademicYear from "./components/AddAcademicYearForm";
import AddBranch from "./components/AddBranchForm";
import AddCategory from "./components/AddCategoryForm";
import AddFeeHeads from "./components/AddFeeHeadsForm";
import Mapping from "./components/MapFeeHeadsForm";


const App = () => {

  return (
    <div>
      {/* <Layout /> */}
      <Router>
        <div className="container">
          <Navbar />
          <div className="content">
            <Sidebar />
            <Switch>
              
              <Route exact path="/" component={MainContent} />
              <Route exact path="/collectfee" component={CollectFee} />
              <Route exact path="/generatereceipts" component={GenerateReceipt} />
              <Route exact path="/addacademicyearform" component={AddAcademicYear} />
              <Route exact path="/addbranchform" component={AddBranch} />
              <Route exact path="/addcategoryform" component={AddCategory} />
              <Route exact path="/addfeeheadsform" component={AddFeeHeads} />
              <Route exact path="/addstudentform" component={AddStudent} />
              <Route exact path="/mappingform" component={Mapping} />
              <Route exact path="/logout" component={''} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
