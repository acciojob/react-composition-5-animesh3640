
import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";
const App = () => {
  let [tabs1,setTabs1] = useState([
    {title:'Tab 1',content:'Content for Tab 1'},
    {title:'Tab 2',content:'Content for Tab 2'},
    {title:'Tab 3',content:'Content for Tab 3'}
  ])
  let [tabs2,setTabs2] = useState([
    {title:'Tab A',content:'Content for Tab A'},
    {title:'Tab B',content:'Content for Tab B'},
    {title:'Tab C',content:'Content for Tab C'}
  ])
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs 
          tabs1 = {tabs1}
          tabs2 = {tabs2}
        />
    </div>
  )
}

export default App
