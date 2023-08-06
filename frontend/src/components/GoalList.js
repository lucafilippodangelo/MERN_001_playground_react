import React from 'react'

const GoalList = props =>{
  console.log("before");
  console.log(props.goals);
  console.log("after");
  return(
        <ul className="ldPersonalisedStyleInAppCss">
        <li>list item one</li>
        <li>list item two</li>
        <li>list item three f</li>
      </ul>
    );
};

export default GoalList; 