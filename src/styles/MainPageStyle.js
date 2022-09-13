import styled from "styled-components";

export const Background = styled.div`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #232323;
    overflow: hidden;
    padding: 100px 20px;
    box-sizing: border-box;
  }

  section:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ef3b36;
    clip-path: circle(65% at 100% -20%);
  }

  section:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #47aafa;
    clip-path: circle(35% at 0 100%);
  }

  .container {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;

    align-items: center;
  }

  .container .card {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 20px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
  }

  .container .card .imgbx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    transition: 0.5s ease-in-out;
  }

  .container .card:hover .imgbx {
    transform: translateY(-100px);
  }

  .container .card .imgbx img {
    max-width: 100%;

    transition: 0.5s ease-in-out;
  }

  .container .card:hover .imgbx img {
    transform: translate(-20px, -40px) rotate(-25deg) scale(1.4);
  }

  .container .card h2 {
    color: #ffffff;
    font-weight: 600;
    transform: translateY(-37px);
  }

  .container .card .content {
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }

  .container .card:hover .content {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50px);
  }

  .container .card .content .size,
  .container .card .content .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
  }

  .container .card .content .size h3,
  .container .card .content .color h3 {
    color: #ffffff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
  }

  .container .card .content .size span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 24px;
    display: inline-block;
    color: #111;
    background-color: #fff;
    border-radius: 4px;
    margin: 0 5px;
    font-size: 14px;
    font-weight: 500;
    transition: 0.5s;
    cursor: pointer;
  }

  .container .card .content .size span:hover {
    background-color: #9bdc28;
  }
  .container .card .content .color span {
    width: 20px;
    height: 20px;
    background-color: #f00;
    border-radius: 50%;
    margin: 0 5px;
    border: 2px solid #fff;
    box-sizing: border-box;
    cursor: pointer;
  }

  .container .card .content .color span:nth-child(2) {
    background-color: #9bdc28;
  }

  .container .card .content .color span:nth-child(3) {
    background-color: #03a9f4;
  }

  .container .card .content .color span:nth-child(4) {
    background-color: #e91e63;
  }

  .container .card .content a {
    position: relative;
    top: 10px;
    display: inline-block;
    padding: 12px 30px;
    background-color: #fff;
    border-radius: 40px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #111;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
