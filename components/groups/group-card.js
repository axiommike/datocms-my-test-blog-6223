import React from 'react'

function GroupCard({ group }) {
    return (
        <div className='w-34 bg-white rounded-lg shadow-lg p-4 m-4'>
            <div className='h-48 w-full max-h-1080 max-w-1920 object-clip overflow-hidden'><img src={group.cover_url} className=' h-240  rounded-t-lg'></img></div>
            <div className='h-16 w-16 bg-white rounded-full mx-auto block overflow-hidden relative -top-9'></div>
            <div className='h-14 w-14 bg-mike-blue rounded-full mx-auto block overflow-hidden -top-24 relative'><img src={group.avatar_urls.thumb} className='object-cover'></img></div>
            <div className='w-full mx-auto text-center font-semibold relative -top-20'>{group.name} </div>
            <div className='w-full mx-auto text-sm  text-center relative -top-20'>@{group.slug} </div>
            <div className='w-full flex -top-16 relative'>
                <div className=' w-1/2 font-bold text-lg text-center mx-auto'>{group.members_count}
                <p className='text-gray-400 text-sm'>Members</p></div>
                <div className='w-1/2 text-center mx-auto'>{group.members_count}</div>
               
            </div>
            <div dangerouslySetInnerHTML={{__html: group.description.rendered}}></div>
        </div>
    )
}

export default GroupCard
