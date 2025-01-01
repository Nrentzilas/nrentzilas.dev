import React from 'react';

const BentoGrid = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-primary-dark">
      <div
        className="grid p-6 rounded-lg"
        style={{
          width: 'clamp(600px, 90vw, 1800px)', // Double the size range for width
          gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
          gridAutoRows: 'calc((200% - 9 * 1rem) / 4)', // Adjust row height for larger sizing
          gap: '1rem', // Increased gap
        }}
      >
        <div className="col-span-2 row-span-2 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <div className="text-lg">
            <h2 className="font-bold text-center">Section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu eros non orci tempus blandit.</p>
          </div>
        </div>

        <div className="col-span-1 row-span-1 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <p>Quick Links</p>
        </div>

        <div className="col-span-1 row-span-1 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <ul className="list-disc pl-4">
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>

        <div className="col-span-1 row-span-1 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <p>Den kserw akoma</p>
        </div>

        <div className="col-span-3 row-span-3 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <div className="text-lg">
            <h3 className="font-semibold">Main Content</h3>
            <p>
              Curabitur vehicula elit ut libero eleifend, sit amet commodo eros hendrerit. Phasellus euismod neque non
              odio accumsan varius.
            </p>
          </div>
        </div>

        <div className="col-span-2 row-span-3 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <div className="text-lg">
            <p>
              Integer et ligula at elit tristique posuere. Sed suscipit est a ante egestas, eget scelerisque ipsum
              dignissim.
            </p>
          </div>
        </div>

        <div className="col-span-3 row-span-3 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <div className="text-lg">
            <h4 className="font-medium">Gay af</h4>
            <ul className="list-disc pl-4">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 row-span-2 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <div className="text-lg">
            <p>Quick Overview</p>
          </div>
        </div>

        <div className="col-span-2 row-span-3 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <div className="text-lg">
            <h5>Lorem ipsum</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu eros non orci tempus blandit.</p>
          </div>
        </div>

        <div className="col-span-3 row-span-3 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <div className="text-lg">
            <h6>Contact Us</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu eros non orci tempus blandit.</p>
          </div>
        </div>

        <div className="col-span-2 row-span-2 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <div className="text-lg">
            <p>Statistics</p>
            <p>Projects:12345</p>
          </div>
        </div>

        <div className="col-span-3 row-span-2 dark:bg-primary-darkish bg-white rounded-xl shadow-sm p-6 flex items-center justify-center dark:text-white text-black">
          <div className="text-lg">
            <p>Footer</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
