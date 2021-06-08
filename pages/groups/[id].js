import React from 'react'
import ActivityForm from '../../components/activity/ActivityForm.js';
import ActivityItem from '../../components/activity/ActivityItem.js';
import Layout from '../../components/layout.js';
import { getAllGroupsID, getGroupByID, getGroupActivityFeed} from '../../lib/buddyboss.js'

export async function getStaticPaths() {
    const allGroups = await getAllGroupsID()
    console.log(allGroups)
    return {
      paths: allGroups?.map((group) => `/groups/${group.id}`) || [],
      fallback: true,
    }
  }
  export async function getStaticProps({ params }) {
    const group = await getGroupByID(params.id);
    
    return {
      props: {
        group: group,
        feed: await getGroupActivityFeed()
        },
    }
  }
 

export default function Group({ group, feed }) {
    return (
     
        <>
        {group !== undefined && 
        <Layout>
        <div className="bg-gray-100 pt-5">
            <div className='max-w-screen-xl mx-auto'>
          <div class=" w-full rounded-lg shadow-lg flex-col  mx-auto bg-white">
            <div class="bg-white rounded-t-md">
              <img
                src={group.cover_url}
                class="rounded-t-lg object-cover w-full max-h-64 "
              />
            </div>
            <div class="bg-white ml-6 w-28 h-28 relative -top-14  flex-row rounded-full -mb-16">
              <div
                class="w-24 h-24 ml-3 relative top-2 right-1 flex-row rounded-full text-white bg-contain"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://staging3.mikecameron.ca/wp-content/uploads/2021/05/default-avatar.jpg" +
                    ")",
                }}
              ></div>
            </div>
            <div class="bg-white top-5 text-left flex flex-row rounded-b-lg">
              <div class="text-center p-3 text-black text-xl font-bold relative -top-6 ml-36">
                {group.name}
              </div>
            </div>
          </div>
          <div class="w-full rounded-lg shadow-lg flex-col bg-white mx-auto">
            <div class="md:grid-cols-12 flex gap-1 mt-3 overflow-auto h-8">
              <div class="w-full h-full text-center rounded-b-sm font-bold my-auto hover:border-b-4 border-blue-600">
                Groups
              </div>
              <div> |</div>
              <div class="h-8 w-full text-center font-bold">{group?.name}</div>
              <div> |</div>
              <div class="h-8 w-full text-center font-bold">Videos</div>
              <div> |</div>
              <div class="h-8 w-full text-center font-bold">Events</div>
              <div> |</div>
              <div class="h-8 w-full text-center font-bold">Groups</div>
              <div> |</div>
              <div class="h-8 w-full text-center font-bold">Quests</div>
              <div> |</div>
              <div class="h-8 w-full text-center font-bold">Forum</div>
              <div> |</div>
              <div class="h-8 w-full text-center font-bold">Blog</div>
              <div> |</div>
            </div>
          </div>
          {/* Layout widget columns and feed column */}
          <div class=" w-full rounded-lg shadow-lg flex-col  mx-auto">
            <div className="flex grid-cols-3 mx-auto gap-2 space-x-1 m-3">
              <div className="bg-white md:block md:w-1/4 p-4 text-center flex-col rounded-lg hidden">
                <div className="font-black p-3">Social Networks</div>
                <div>No Networks Configured</div>
                <div>Social Networks</div>
              </div>
              <div className="md:w-1/2 text-center flex-col rounded-lg w-full">
                <ActivityForm/>
                {feed.map((item)=>(
                  <ActivityItem item={item}/>
                ))}
                </div>
              <div className="bg-white md:block w-1/4 text-center flex-col rounded-lg hidden">Right Widget col</div>
            </div>
          </div>
        </div>
        </div>
      </Layout> }
      </>
    
    )}
