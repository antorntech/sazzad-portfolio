import React, { useEffect, useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link, useParams } from "react-router-dom";
import blog1 from "../assets/imgs/evenet-sched-1.jpg";
import blog2 from "../assets/imgs/evenet-sched-2.jpg";
import blog3 from "../assets/imgs/evenet-sched-3.jpg";
import blog4 from "../assets/imgs/evenet-sched-4.jpg";

const BlogDetails = () => {
  const { id } = useParams();

  // const [blog, setBlog] = useState({});
  // const [recentBlogs, setRecentBlogs] = useState([]);

  // useEffect(() => {
  //   fetch(`https://localhost:5000/api/v1/blogs/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBlog(data);
  //       // Extract tags from the single string element
  //       if (data.tags) {
  //         setTags(data.tags[0]?.split(","));
  //       }
  //     });
  // }, [id]);

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/blogs/recent")
      .then((res) => res.json())
      .then((data) => setRecentBlogs(data));
  }, []);

  const blog = {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    date: "24, Jan - 2024",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus aliquid eveniet repellat aspernatur nostrum at perferendis magnam nesciunt cumque praesentium eum obcaecati quaerat dicta expedita eaque, sit possimus fugit dolore molestiae totam porro veritatis repudiandae nam. Illum eveniet qui ad perspiciatis excepturi, tempore vero explicabo nemo eligendi impedit necessitatibus aliquam quod quibusdam rerum ut fugiat dolorem cum vel aut a? Officia, asperiores. Quos voluptas esse, animi aspernatur enim amet repellendus alias odio aliquam. Aliquam, odio magni maxime iste veritatis vitae dolorem est iure tempora itaque autem quae mollitia et minus molestiae suscipit. Suscipit illo, reiciendis temporibus dicta laborum veritatis?",
    img: blog1,
  };

  const recentBlogs = [
    {
      _id: 4,
      title: "Lorem ipsum dolor sit amett.",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: blog4,
    },
    {
      _id: 5,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: blog3,
    },
    {
      _id: 6,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: blog2,
    },
  ];
  return (
    <>
      <PageHeader title={`Blog Details`} />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="col-span-2 w-full">
              <img
                src={`${blog?.img}`}
                alt=""
                className="w-full h-[400px] object-cover rounded-md"
              />
              <h1 className="text-2xl md:text-4xl font-bold mt-8">
                {blog?.title}
              </h1>
              <div className="flex items-center gap-5 py-2">
                <div>
                  <i className="fa-solid fa-user me-2 text-[#18377e]"></i>
                  <span>{blog.author}</span>
                </div>
                <div>
                  <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                  <span>{blog.date}</span>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-500 mt-3 text-justify">
                {blog?.description}
              </p>
            </div>
            <div className="w-full">
              <h1 className="text-2xl md:text-4xl font-bold">Recent Blogs</h1>
              <div className="w-20 h-1 bg-[#18377e]"></div>
              <div className="grid grid-cols-1 gap-8 mt-5">
                {recentBlogs.map((blog, index) => (
                  <Link key={blog._id} to={`/blog/${blog._id}`}>
                    <div key={blog.id} className="grid grid-cols-3 gap-5">
                      <div className="col-span-1 w-full">
                        <img
                          src={`${blog.img}`}
                          alt=""
                          className="w-full rounded-md"
                        />
                      </div>
                      <div className="col-span-2 w-full">
                        <div className="w-full h-full flex flex-col justify-between">
                          <h1 className="text-md">{blog.title}</h1>
                          <div className="">
                            <p className="text-gray-500">
                              <i className="fa-solid fa-user me-2 text-[#18377e]"></i>
                              {blog.author}
                            </p>
                            <p className="text-gray-500">
                              <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                              {blog.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
