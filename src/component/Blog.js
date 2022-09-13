import React from "react";

import {
  Images,
  Btns,
  Button,
  Blogimages,
  Blockimages,
  Commercialimages,
  BlogImg,
  Allimages,
  BlockImg,
  CommercialImg,
} from "../styles/BlogStyle";

const Blog = () => {
  return (
    <Images>
      <Btns>
        <Button>left</Button> <Button>right</Button>
      </Btns>
      <Allimages>
        <Blogimages>
          <BlogImg src="./images/wilblog.png" alt="" />
        </Blogimages>
        <Blockimages>
          <BlockImg src="./images/blockchain.png" alt="" />
        </Blockimages>
        <Commercialimages>
          <CommercialImg src="./images/commercial.png" alt="" />
        </Commercialimages>
      </Allimages>
    </Images>
  );
};

export default Blog;
