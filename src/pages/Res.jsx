
import React from "react";
import { data } from "../assets/rest";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Res = () => {
    return <React.Fragment>
    

    <main
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        position: "absolute",
        left: "0",
        top: "0",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: "3rem",
        placeItems: "center",
        overflowX: "hidden",
        background: "#F7DED0",
        gap: "4rem 0"
      }}
    >

      {data.map((item, index) => {
        return <Card key={index} index={index} name={item.name} image={item.image} desc={item.description} location={item.location} />
      })}

    </main>

  </React.Fragment>
}


const Card = ({ name, image, desc, location,index }) => {
  return (<motion.div 
    animate={{
      y: 0,
      opacity: 1,
    }}
    initial={{
      y: 100,
      opacity: 0
    }}
    transition={{
      duration: 1,
      ease: [0.85, 0, 0.15, 1],
      delay: 0.1 * index
    }}
    style={{ width: "25rem", overflow: "hidden", padding: "1rem", height: "35rem", background: "#FF6500", borderRadius: "4rem", display: "flex", flexDirection: "column", justifyItems: "flex-start", alignItems: "center" }}>
    <div style={{
      width: "100%",
      height: "60%",
      background: "white",
      borderRadius: "4rem",
      overflow: "hidden",
      padding: "5px"
    }}>

      <img src={image} alt="" style={{ width: "100%", height: "100%", borderRadius: "3rem", objectFit: "cover" }} />
    </div>
    <h1 style={{ color: 'white', padding: "1rem", textTransform: "uppercase" }}>{name}</h1>
    <p style={{ color: 'white', textAlign: "justify", paddingInline: "1.5rem" }}>{desc}</p>
    <Link to={`/home`}>
      <button
        style={{ width: "90%", margin: "1rem", border: "0", bacground: "white", color: "white", fontWeight: "bold", fontSize: "1rem" }}>{location}</button>
    </Link>
  </motion.div>
  )
}
export default Res
