import React from 'react';

const Sidebar = () => {
    return (
        <div>
            {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <input
          type="text"
          placeholder="Search Categories"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <ul>
          <li className="mb-2">
            <button className="block text-left w-full p-2 bg-green-100 rounded">
              Dua's Importance
            </button>
          </li>
          <li className="mb-2">
            <button className="block text-left w-full p-2">Dua's Excellence</button>
          </li>
          <li className="mb-2">
            <button className="block text-left w-full p-2">Time of Dua</button>
          </li>
        </ul>
      </aside>
        </div>
    );
};

export default Sidebar;