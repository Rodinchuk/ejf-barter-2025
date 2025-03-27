"use client";
import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Сторінку не знайдено</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  title: {
    fontSize: "6rem",
    fontWeight: "bold",
    color: "#257BFC",
  },
  message: {
    fontSize: "1.5rem",
    color: "#6c757d",
    marginBottom: "20px",
  },
  link: {
    fontSize: "1.2rem",
    color: "#257BFC",
    textDecoration: "none",
    border: "1px solid #257BFC",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background-color 0.3s, color 0.3s",
  },
};

export default NotFound;