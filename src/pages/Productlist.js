import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
 
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Train Id",
    dataIndex: "key",
  },
  {
    title: "Train Name",
    dataIndex: "name",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Start Destination",
    dataIndex: "Sdestination",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "End Destination",
    dataIndex: "Edestination",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Start Time",
    dataIndex: "Stime",
  },
  {
    title: "End Time",
    dataIndex: "Etime",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    render:()=>(
      <>
      <Link to="/" className=" fs-3 text-danger">
        <BiEdit size={'10px'} />
      </Link>
      <Link className="ms-3 fs-3 text-danger" to="">
        <AiFillDelete size={'15px'}  />
      </Link>
    </>
    )
  },
];

const Productlist = () => {
  
  const [data1, setData1] = useState([])

  // {
  //   key: "001",
  //   name:"Ruhunu Kumari",
  //   Sdestination:"Colombo Fort",
  //   Edestination:"belliattha",
  //   Stime:"6.00 AM",
  //   Etime:"9.30 AM",
  //   price:"Rs.450"
  // },

  const fetchData = async()=>{
    const res = await axios.get('http://localhost:4000/trains')
    console.log(res)
    if(res){
      setData1(res.data.map((x)=>{
        return{
         key:x?._id,
         name:x?.name,
         Sdestination:x?.startStation,
         Edestination:x?.endStation,
         Stime:new Date(x?.startTime).toLocaleTimeString(),
         Etime:new Date(x?.endTime).toLocaleTimeString(),
         status:x?.status
        }
      }))
    }
  
  }

  useEffect(()=>{
    fetchData()
  },[])

  
  console.log(data1);
  return (
    <div>
      <h3 className="mb-4 title">Trains</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Productlist;
