import HeaderTitle from "../../../components/Partials/HeaderTitle";
import { motion } from "framer-motion";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
const ContactRequestsPage = () => {
  const [ data, setData ] = useState([]);
  // Grab the data from the backend
  useEffect(() => {
      axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST + '/contact')
           .then(res => {
              setData(res.data.data);
           })
           .catch(err => {
              setData([]);
           })
  }, [])
  // Columns
  const columns = [
    { field: 'name', headerName: 'Name', flex: 1},
    { field: 'email', headerName: 'Email', flex: 1, renderCell: (params) => {
        const Url = "mailto:" + params.value;
        return (<a rel="noreferrer" target="_blank" href={Url}>{params.value}</a>)
      }  },
    { field: 'message', headerName: 'Message', flex: 1},
    { field: 'createdAt', headerName: 'Date', flex: 1, valueGetter: (params) => new Date(params.value).toLocaleDateString()  },
  ];
  
  
    return (
        <motion.div
          className="admin-page"
          initial={{
            y: "50%",
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: "50%",
            opacity: 0,
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <HeaderTitle text="Contact Requests" />
          <p className="admin-page__description">
            Here are all the contact requests we had
          </p>
          <DataGrid className="data-table" style={{height: 350, width: 'auto'}} rows={data} columns={columns} />
        </motion.div>
      );
}

export default ContactRequestsPage;