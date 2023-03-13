import React, { useState, useEffect } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import { blogList } from "../../config/data";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client";
import "./index.css";

const builder = imageUrlBuilder(sanityClient);

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  function urlFor(source) {
    return builder.image(source);
  }

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) => blog.title.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      category,
      subCategory,
      mainImage,
      description,
      createdAt,
      postLink
    }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);
  console.log(blogs);
  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      <h1 style={{ marginBottom: "20px" }}>
        <span class="heading-line heading-line-first">Wana buy?!!!</span>
        <a href="https://mydukaan.io/syncininkbysupriya">
          <span class="heading-line heading-line-third">Jump directly to the shop</span>
        </a>
      </h1>

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
