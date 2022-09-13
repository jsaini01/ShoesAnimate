import { Background } from "../styles/MainPageStyle";

import data from "./data.json";

import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <Background>
      <motion.section>
        <motion.div className="container" animate={{ scale: [1, 0.8, 1.1, 1] }}>
          {data.map((cur) => (
            <div className="card" key={cur.id}>
              <div className="imgbx">
                <img src={cur.img} alt="" />
                <h2>{cur.brand}</h2>
              </div>
              <div className="content">
                <div className="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                <div className="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <motion.a
                  href="https://www.nike.com/404"
                  whileTap={{ scale: 1.1 }}
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                >
                  Buy Now
                </motion.a>
              </div>
              <motion.p
                style={{ color: "white" }}
                animate={{ scale: 2 }}
                transition={{ repeat: Infinity, duration: 0.9 }}
              >
                💥Sale💥
              </motion.p>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </Background>
  );
};

export default MainPage;
