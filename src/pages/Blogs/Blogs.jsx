import { useEffect, useState } from "react";

import "./blogs.css"; // CSS

// appData
import { blogsData } from "../../../appData";

// component
import BlogCard from "../../components/BlogCard/BlogCard";

const Blogs = () => {
  const [blogsCount, setBlogsCount] = useState(4);
  const [totalBlogs, setTotalBlogs] = useState(blogsData.slice(0, 4));
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const initialBlogs = blogsData.slice(0, blogsCount);
    setTotalBlogs(initialBlogs);
  }, [blogsCount]);

  const handleSeeMoreClick = () => {
    if (blogsCount < blogsData.length) {
      setBlogsCount((prev) => prev + 4);
    } else setShowWarning(true);
  };

  return (
    <div className="blogs">
      <div className="blogs_wrapper">
        <h1>Blogs</h1>
        <main>
          {totalBlogs?.map((data) => (
            <BlogCard key={data.id} data={data} />
          ))}
        </main>
        {showWarning && (
          <div className="no_moreBlogs">No more blogs to show</div>
        )}
        <button className="blogs_button" onClick={handleSeeMoreClick}>
          See More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
