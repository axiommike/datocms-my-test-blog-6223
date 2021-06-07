
import react from 'react';

export async function getGroupByID( id ){
    const res = await fetch(`https://mikecameron.ca/wp-json/buddyboss/v1/groups/${id}`);
 const data = await res.json();

 return data;
}

export async function getAllGroupsID( ){
 const res = await fetch("https://mikecameron.ca/wp-json/buddyboss/v1/groups");
 const data = await res.json();
 return data
    
}

export async function getGroupActivityFeed( id ){
    const res = await fetch("https://mikecameron.ca/wp-json/buddyboss/v1/activity?group_id=10");
    const data = await res.json();
    return data
       
}