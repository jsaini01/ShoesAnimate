import { Background } from "../styles/MainPageStyle";

import data from "./data.json";

const MainPage = () => {
  return (
    <Background>
      <section>
        <div className="container">
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
                <a href="https://www.nike.com/404">Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Background>
  );
};

export default MainPage;
