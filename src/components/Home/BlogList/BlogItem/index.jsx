import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../../../client";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const BlogItem = ({
  blog: { description, title, createdAt, mainImage, authorName, authorAvatar, cover, category, id, postLink },
}) => {
  return (
    <div className="blogItem-wrap animate__animated animate__flipInY">
      <a href={postLink} target="_blank">
        <img className="blogItem-cover" src={urlFor(mainImage.asset._ref)} alt="cover" />
      </a>
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src="/assets/images/author.jpg" alt="avatar" />
          <div>
            <h6>Supriya Ghosh</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        {/* <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link> */}
      </footer>
    </div>
  );
};

export default BlogItem;
