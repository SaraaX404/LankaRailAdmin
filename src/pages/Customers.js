import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
 
const columns = [
  
  {
    title: "Name",
    dataIndex: "full_name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Loyalty Points",
    dataIndex: "loyaltyPoints",
  },
];

const Customers = () => {
  const [data1, setData1] = useState([])

  const fetchData = async()=>{
    const res = await axios.get('http://localhost:4000/users')
    if(res){
      setData1(res.data)
    }
  
  }
  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    console.log(data1, "data")
  },[data1])
  
  

  

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
