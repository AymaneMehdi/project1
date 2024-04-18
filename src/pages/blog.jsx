import { PER_PAGE } from "./blog/page/[page]";
import PaginatedBlog from "@components/PaginatedBlog";
import Pagination from "@components/Pagination";
import Link from "next/link";

import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sections/PopularPosts";
import SubscribeSection from "@components/sections/Subscribe";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";

import PopularsPostsData from "@data/sections/popular-posts.json";

const Blog = ({ posts, totalPosts, currentPage, popular }) => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={
          'Explorer <span className="mil-thin">le monde</span> <br> avec nos <span className="mil-thin">Blogs</span>'
        }
        breadTitle={"Blog"}
        anchorLabel={"Blogs"}
        anchorLink={"/blog"}
        paddingBottom={1}
      />

      {/* blog */}
      <section>
        <div className="container mil-p-120-120">
          <div className="row align-items-center mil-mb-30">
            <div className="col-lg-4 mil-mb-30"></div>
            <div className="col-lg-8 mil-mb-30">
              <div className="mil-adaptive-right mil-up"></div>
            </div>
          </div>
          <div className="row">
            <PaginatedBlog items={posts} />

            <Pagination
              currentPage={currentPage}
              totalItems={totalPosts}
              perPage={PER_PAGE}
              renderPageLink={(page) => `/blog/page/${page}`}
            />
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps() {
  const { posts, total } = getPaginatedPostsData(PER_PAGE, 1);

  const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1,

      popular: popularsData,
    },
  };
}
