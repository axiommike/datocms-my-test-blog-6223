import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import { Card, CardBody, CardFooter } from "tailwind-react-ui";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";

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
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);
  const [ session, loading ] = useSession()

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Container>
          <main className="mt-1">
            <div
              className="relative pt-16 pb-32 flex content-center items-center justify-center"
              style={{
                minHeight: "75vh",
              }}
            >
              <div
                className="absolute top-0 w-full h-full bg-center bg-contain bg-no-repeat bg-black"
                style={{
                  backgroundImage:
                    "url('https://mikecameron.ca/wp-content/uploads/2020/08/banner-home-quote.jpg')",
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-75 bg-black"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="items-start flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-left">
                    <div className="pr-12">
                      <h1 className="text-white font-semibold text-5xl">
                        Learning React and CSS in public!
                      </h1>
                      <p className="mt-4 text-lg text-gray-300">
                        This is a playground for me learning how to code in
                        React and using the Tailwind CSS framework. Thanks to{" "}
                        <a
                          href="https://github.com/creativetimofficial/tailwind-starter-kit"
                          className="font-bold"
                        >
                          Tailwind Starter Kit
                        </a>{" "}
                        for this landing page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: "70px" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>

            <section className="pb-20 bg-gray-300 -mt-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-mike-lt-blue">
                          <i className="fas fa-award"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Frameworks used
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          This site is built in React with the Next.js framework
                          and hosted on Vercel. I am using the Tailwind CSS
                          library for all of the styling. Content is stored on
                          DatoCMS and using their GraphQL API.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-mike-blue">
                          <i className="fas fa-retweet"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          So much to learn!
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          I love to learn but figuring out where to focus can be
                          a pretty big challenge. I've got the fundementals of
                          programming somewhat in hand so I'll just keep playing
                          with features that are appealing for me.
                        </p>
                        <p>
                          
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-salmon">
                          <i className="fas fa-fingerprint"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Community Focused
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          I'm having a lot of fun building community with the
                          work I do online in the Men's space and will likely
                          look at ways in which I can leverage tech to foster
                          connection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                      <i className="fas fa-user-friends text-xl"></i>
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                      Let's play with some quasi dynamic content on the home
                      page.
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                      We'll see about pulling the most recent blog posts here
                      using getStaticProps() from Next.js. For now I am going to
                      play with styling the blog grid below by hand. Stay
                      tuned...
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                      Or you can jump right to the blog page linked below. Still
                      some dummy content there but I will update as I go.
                    </p>
                    <a href="/posts" className="font-bold text-gray-800 mt-8">
                      Check out my blog posts!
                    </a>
                  </div>

                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block"
                          style={{
                            height: "95px",
                            top: "-94px",
                          }}
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-pink-600 fill-current"
                          ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                          Top Notch Services
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever happens.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <section>
                  <Card className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mt-5">
                    <CardBody>
                      <Image
                        className="absolute inset-0 h-full w-full object-cover rounded-t-lg"
                        src="https://mikecameron.ca/wp-content/uploads/2021/05/bullying-768x432.png"
                        alt=""
                        width={1920}
                        height={1080}
                      />
                      <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                        Jan 22, 2021
                      </span>

                      <h2 className="mt-2 mb-2  font-bold">Test Title</h2>
                      <div className="text-sm">
                        Test Excerpt
                        <div className="relative text-right">
                          <a href={`/posts/tet`}>Read more...</a>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </section>
              </div>
            </section>

            <section className="relative py-20">
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-white fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>

              <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img
                      alt="..."
                      className="max-w-full rounded-lg shadow-lg"
                      src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    />
                  </div>
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                      <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                        <i className="fas fa-rocket text-xl"></i>
                      </div>
                      <h3 className="text-3xl font-semibold">
                        A growing company
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        The extension comes with three pre-built pages to help
                        you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                <i className="fas fa-fingerprint"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">
                                Carefully crafted components
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                <i className="fab fa-html5"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">
                                Amazing page examples
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                <i className="far fa-paper-plane"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">
                                Dynamic components
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pb-20 relative block bg-gray-900">
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-gray-900 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>

              <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                <div className="flex flex-wrap text-center justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold text-white">
                      Build something
                    </h2>
                    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                      Put the potentially record low maximum sea ice extent tihs
                      year down to low ice. According to the National Oceanic
                      and Atmospheric Administration, Ted, Scambos.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap mt-12 justify-center">
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-medal text-xl"></i>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-white">
                      Excelent Services
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-poll text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      Grow your market
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-lightbulb text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      Launch time
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Container>
      </Layout>
    </>
  );
}
