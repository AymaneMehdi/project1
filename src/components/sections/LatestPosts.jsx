import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import ArrowIcon from "@layouts/svg-icons/Arrow";

const LatestPostsSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://back-end-zlgx.onrender.com/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const fetchedBlogs = await response.json();
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <>
      <Head>
        <title>FeizhouCom</title>
        <meta name="description" content="FeizhouCom l'agence qui donne vie à votre identité,reflétant fidèlement votre essence et vos valeurs." />
        <meta name="keywords" content="seo, organisation, film, mangement, sites, anglais" />
        <meta name="author" content="FeizhouCom" />
      </Head>
      <section>
        <div className="container mil-p-120-60">
          <div className="row align-items-center mil-mb-30">
            <div className="col-lg-6 mil-mb-30 ">
              <h3 className="mil-up blog-tit text-3xl font-bold ">
              </h3>
            </div>
            <div className="col-lg-6 mil-mb-30">
              <div className="mil-adaptive-right mil-up">
                <a
                  className="mil-link mil-dark mil-arrow-place"
                >
                  <span>voir plus</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs && blogs.slice(0, 2).map(blog => (
              blog && (
                <div className="col-lg-6" key={`blog-post-${blog._id}`}>
                  <Link
                    href={`/blog/${blog._id}`}
                    className="mil-blog-card mil-mb-60"
                  >
                    <div className="mil-cover-frame mil-up">
                      <Image src={blog.url} alt={blog.alt} width={500} height={300} />
                    </div>
                    <div className="mil-post-descr">
                      <div className="mil-labels mil-up mil-mb-30">
                        {/* Assuming `Date` component renders the date properly */}
                        <div className="mil-label mil-upper">
                          <Date dateString={blog.createdAt} />
                        </div>
                      </div>
                      <h4 className="mil-up mil-mb-30">{blog.title}</h4>
                      <p className="mil-post-text mil-up mil-mb-30">
                        {blog.text}
                      </p>
                      <div className="mil-link mil-dark mil-arrow-place mil-up">
                        <span>Lire plus</span>
                        <ArrowIcon />
                      </div>
                    </div>
                  </Link>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestPostsSection;
