
// import React, { useState } from 'react';
// import './Header.css';

// const items = [
//   'Experience contextual conversations',
//   'Brand your customer experience',
//   'Offer support beyond your website',
//   'Tap customer support with bots',
//   'Build your team',
// ];

// function Header() {
//   const [completedItems, setCompletedItems] = useState(Array(5).fill(false));
//   const totalItems = completedItems.length;
//   const progress = (completedItems.filter((item) => item).length / totalItems) * 100;

//   const toggleItemCompletion = (index) => {
//     const updatedItems = [...completedItems];
//     updatedItems[index] = !updatedItems[index];
//     setCompletedItems(updatedItems);
//   };

//   const skipAllItems = () => {
//     setCompletedItems(Array(5).fill(true));
//   };

//   return (
//     <div className="header-container">
//       <div className="quiz-card">
//         <div className="header-flex">
//           <h2>
//             Take a quick tour
//             <img
//               src="https://www.veryicon.com/download/png/miscellaneous/digital-workshop-console-general-icon/expand-down-arrow-01?s=256"
//               alt="Expand"
//               className="expandable-image"
//             />
//           </h2>
//         </div>

//         <p className="card-paragraph">Here are a few steps to help you</p>
//         <p className="card-paragraph">hit the ground.</p>

//         <div className="progress-container">
//           <div className="fixed-value">
//             <h2>{progress.toFixed(0)}%</h2>
//           </div>
//           <div className="progress">
//             <div className="progress-label"></div>
//             <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//           </div>
//         </div>
        
//         <div className="partition-line"></div>
        
//         {items.map((item, index) => (
//           <div key={index} className="item" onClick={() => toggleItemCompletion(index)}>
//             <div className={`circle ${completedItems[index] ? 'completed' : ''}`}>
//               {completedItems[index] && <span className="tick-mark"><svg width="20" height="16" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                <path d="M2.41663 7L7.83329 12.4167L18.6666 1.58333" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg></span>}
//             </div>
//             <span className="item-text">{item}</span>
//           </div>
//         ))}
        
       
//         <div className="left-align">
//   <span className="skip-link">Skip this</span>
// </div>

//       </div>
//       <div className="get-started-button">
//         <button>Get Started <span className="items-count">{items.length}</span></button>
//       </div>
//     </div>
//   );
// }

// export default Header;




import React, { useState } from 'react';
import './Header.css';

const items = [
  'Experience contextual conversations',
  'Brand your customer experience',
  'Offer support beyond your website',
  'Tap customer support with bots',
  'Build your team',
];

function Header() {
  const [completedItems, setCompletedItems] = useState(Array(5).fill(false));
  const totalItems = completedItems.length;
  const progress = (completedItems.filter((item) => item).length / totalItems) * 100;

  const toggleItemCompletion = (index) => {
    const updatedItems = [...completedItems];
    updatedItems[index] = !updatedItems[index];
    setCompletedItems(updatedItems);
  };

  const skipAllItems = () => {
    setCompletedItems(Array(5).fill(true));
  };

  return (
    <div className="header-container">
      {/* Left card */}
      <div className="quiz-card">
        <div className="header-flex">
          <h2>
            Take a quick tour
            <img
              src="https://www.veryicon.com/download/png/miscellaneous/digital-workshop-console-general-icon/expand-down-arrow-01?s=256"
              alt="Expand"
              className="expandable-image"
            />
          </h2>
        </div>

        <p className="card-paragraph">Here are a few steps to help you</p>
        <p className="card-paragraph">hit the ground.</p>

        <div className="progress-container">
          <div className="fixed-value">
            <h2>{progress.toFixed(0)}%</h2>
          </div>
          <div className="progress">
            <div className="progress-label"></div>
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        
        <div className="partition-line"></div>
        
        {items.map((item, index) => (
          <div key={index} className="item" onClick={() => toggleItemCompletion(index)}>
            <div className={`circle ${completedItems[index] ? 'completed' : ''}`}>
              {completedItems[index] && <span className="tick-mark"><svg width="20" height="16" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2.41663 7L7.83329 12.4167L18.6666 1.58333" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></span>}
            </div>
            <span className="item-text">{item}</span>
          </div>
        ))}
        
        <div className="left-align">
          <span className="skip-link" onClick={skipAllItems}>Skip this</span>
        </div>
      </div>

      {/* Partition line */}
      {/* <div className="partition-line"></div> */}

      {/* Right card */}
      {/* <div className="quiz-card">
        {/* ... (similar content as the left card) */}
      {/* </div> */} 

      <div className="get-started-button">
        <button>Get Started <span className="items-count">{items.length}</span></button>
      </div>
    </div>
  );
}

export default Header;
