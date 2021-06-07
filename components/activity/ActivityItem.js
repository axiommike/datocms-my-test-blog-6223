import React from "react";

export default function ActivityItem({ item }) {
  console.log(item);
  return (
    <div className="bg-white rounded-lg shadow-medium m-3">
      <div className="flex text-sm p-2">
        <div>
          <img src={item.user_avatar.thumb} className="w-6 h-6 rounded-full" />
        </div>
        <span className="font-bold ml-3">{item.name} </span>&nbsp;posted an
        update on {item.date}
      </div>
      <div dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
      <div className="flex p-1 border-gray-300 mt-3 border-t border-b rounded-b-lg">
        <div className='flex hover:bg-gray-100 w-1/5 rounded-lg p-1 justify-center'>
          Like
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        </div>
        <div className='flex hover:bg-gray-100 w-1/5 rounded-lg p-1 justify-center'>
          Comment
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
