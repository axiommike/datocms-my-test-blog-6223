import Head from "next/head";
import Image from 'next/image'
import { useState } from "react";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { Card, CardBody, CardFooter } from "tailwind-react-ui";
import Avatar from "../../components/avatar";
import Container from "../../components/container";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import MoreStories from "../../components/more-stories";
import PostPreview from "../../components/post-preview";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Index({ subscription }) {
  const {
    data: { allPosts, site, blog, author },
  } = useQuerySubscription(subscription);

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const metaTags = blog.seo.concat(site.favicon);
  console.log(allPosts);
   const [filteredPosts, setFilteredPosts] = useState(allPosts)
  const filterData = (e)=>{
    let _filteredPosts = allPosts.filter(posts=>posts.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredPosts(_filteredPosts)
  }

  const sortData = (e)=>{
    
  }
  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Container>
          <div className='h-20 shadow-lg rounded-md flex border-1 mt-4'>
            <div className='my-auto relative  border-3'>
            <div className=''><label className='p-2 relative -top-6 left-16 bg-white'>Filter:</label><input type='text' className='box-border h-12 p-4 border-4 rounded-lg pr-6' onChange={(e)=>{filterData(e)}}/></div>
            </div>
              <h1 className='flex flex-row mx-auto my-auto font-extrabold text-2xl'>Recent Articles </h1>
            {/* <div className='my-auto relative  border-3'>
            <div className=''><label className='p-2 relative -top-6 left-16 bg-white'>Order By:</label><select className='box-border h-12 p-4 border-4 rounded-lg pr-6 w-25' onChange={(e)=>{sortData(e)}}><option>Date</option></select></div>
            </div> */}
          </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {filteredPosts.map((post) => (
            
              <Card className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mt-5">
                <CardBody>
                  
                    <Image
                      className="absolute inset-0 h-full w-full object-cover rounded-t-lg"
                      src={post.coverImage.responsiveImage.src}
                      alt=""
                      width={500}
                      height = {200}
                    />
                  <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{post.date}</span>

                  <h2 className="mt-2 mb-2  font-bold">{post.title}</h2>
                  <div className="text-sm">
                   {post.excerpt}
                   <Avatar name={post.author.name} picture={post.author.picture} className='flex'/><div className='relative text-right'>
                     <a href={`/posts/${post.slug}`}>
                       Read more...</a></div>
                  </div>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
           
          ))} 
          </div>
        </Container>
      </Layout>
    </>
  );
}
