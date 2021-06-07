import React from "react";
import Layout from "../../components/layout";
import GroupCard from "../../components/groups/group-card";
import LoadingOverlay from "react-loading-overlay";

export async function getStaticProps() {
 const res = await fetch("https://mikecameron.ca/wp-json/buddyboss/v1/groups");
 const data = await res.json();
  return { props: { data }, revalidate: 60 };
}

export default function index({ data }) {
    
  return (
    <Layout>
        <LoadingOverlay active={false}>
      <div className='container mx-auto bg-gray-50'>
        Groups List!
        {data.length}
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.map((group) => (
            <>
            <GroupCard group={group} key={group.id}/> 
          </>
        ))}
        </div>
      </div>
      </LoadingOverlay>
    </Layout>
  );
}
