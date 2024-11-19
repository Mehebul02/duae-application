import React from 'react';

const DuasPage = () => {
    const timelineData = [
        {
          title: "Dua's Importance (21)",
          items: [
            "The servant is dependent on his Lord",
            "The most important thing to ask Allah for",
            // ... other items
          ],
        },
        // ... other categories
      ];
    return (
      <div className='bg-white   rounded-lg'>
        <div className='flex justify-center items-center bg-primary-color w-52 h-14 rounded-t-md'>
            <h1 className='text-md text-white'>Categories</h1>
        </div>

      </div>
    );
};

export default DuasPage;