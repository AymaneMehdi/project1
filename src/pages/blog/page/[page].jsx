import PaginatedBlog from "@components/PaginatedBlog";
import Pagination from "@components/Pagination";
import Link from "next/link";

import PageBanner from "@components/PageBanner";
import SubscribeSection from "@components/sections/Subscribe";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData } from "@library/posts";

export const PER_PAGE = 8;

const Blog = ({ posts, currentPage, totalPosts }) => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={
          'Exploring <span className="mil-thin">the World</span> <br> Through Our <span className="mil-thin">Blog</span>'
        }
        breadTitle={"Blog"}
        anchorLabel={"Publications"}
        anchorLink={"#blog"}
        paddingBottom={1}
      />

      {/* blog */}
      <section>
        <div className="container mil-p-120-120">
          <div className="row align-items-center mil-mb-30">
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
      {/* blog end */}

      <SubscribeSection />
    </Layouts>
  );
};
export default Blog;

export async function getStaticPaths() {
  return {
    paths: Array.from({ length: 5 }).map((_, i) => `/blog/page/${i + 2}`),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const page = Number(params?.page) || 1;
  const { posts, total } = getPaginatedPostsData(PER_PAGE, page);

  if (!posts.length) {
    return {
      notFound: true,
    };
  }

  if (page === 1) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: page,
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  };
}
