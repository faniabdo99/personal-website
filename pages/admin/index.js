import React from "react";
import HeaderTitle from "../../components/Partials/HeaderTitle";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import AdminCard from "./AdminCard";
import Link from "next/link";
const Admin = () => {
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
      <HeaderTitle text="Admin Panel" />
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Link className="admin-card-link" href="/">
            <AdminCard
              title="Articles"
              description="Manage all articles on the blog page"
            />
          </Link>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Link className="admin-card-link" href="/admin/contact">
            <AdminCard
              title="Contact requests"
              description="Manage all conatct requests"
            />
          </Link>
        </Col>
      </Row>
    </motion.div>
  );
};
export default Admin;
