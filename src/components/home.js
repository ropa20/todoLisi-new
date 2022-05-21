import { Layout } from "antd";
import React from "react";
import {useNavigate} from 'react-router-dom';
import "../index.css";
import { Card } from 'antd';
import Search from "antd/lib/transfer/search";
import Searching from "./search";
const {  Footer, Content, Header } = Layout;
const Home=()=> {
    const navigate = useNavigate()

    return ( 
      <div className="container">
        <Layout>
        <Header>
          <div className="search"><Search><Searching/></Search></div>
          <div className="today-scheduled">
          <div className="flex-child today">
            <Card className="today" title="Today" extra={<a href="#">More</a>} style={{ width: 240 }}>ALL</Card>
          </div>
          <div className="flex-child scheduled">
            <Card title="Scheduled" className="scheduled" extra={<a href="#">More</a>} style={{ width: 240 }}>Scheduled</Card>
          </div>
          </div>
          <div className="all-flagged">
          <div className="flex-child all">
            <Card className="all" title="All" extra={<a href="#">More</a>} style={{ width: 240 }}>ALL</Card>
          </div>
          <div className="flex-child flagged">
            <Card title="Flagged" className="flagged" extra={<a href="#">More</a>} style={{ width: 240 }}>Flagged</Card>
          </div>          </div>
        </Header>
        <Content><h2>My Lists</h2></Content>
        <Footer>
        <div className="add-list">
          <button className="add-list-btn" onClick={()=>navigate('/toDo')}><span className="add-list-link">Add list</span></button>
        </div>
        </Footer>
      </Layout>
      </div>
     );
}

export default Home;