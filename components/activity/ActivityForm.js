import React from "react";

export default function ActivityForm() {
  return (
    <div className="bg-white rounded-lg shadow-medium m-3">
      <div className="flex flex-row text-sm p-2">
        <img
          src="https://mikecameron.ca/wp-content/uploads/avatars/1/607382b3d5878-bpthumb.jpg"
          className="w-8 h-8 rounded-full"
        />

        <div className="w-full text-left">
          <div className="font-bold ml-3">Mike Cameron</div>
          <div className="ml-3">Status Update</div>
        </div>
        <div className="border border-gray-400 rounded-md px-2 h-14">
          <label className="bg-white relative -top-2 px-2 -left-10">
            Post In
          </label>
          <div className="p-2">
            <select className="text-lg font-semibold mb-6 relative p-2 -top-4">
              <option>My Profile</option>
            </select>
          </div>
        </div>
      </div>
      <div className='px-1'>
        <textarea
          rows="4"
          cols="75"
          placeholder="Hi there! Write something here!"
          className="border border-gray-300 w-full rounded-lg p-3"
        ></textarea>
      </div>
      <div className='text-right p-3'>
      <button className='bg-blue-800 rounded-md text-white px-6'>Post</button>
      </div>
    </div>
  );
}
