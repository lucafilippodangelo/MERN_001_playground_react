import React, {useState} from 'react';

import './NewGoal.css';

//
const NewGoal = (props) => {

  const [enteredText, setEnteredText] = useState('');
   
  //I want to handle the submit of the form with javascript, so not firing a request to the server.
  // the "event" parameter is passed automatically by react
  const addGoalHandler = event => {
    event.preventDefault(); //prevent to send a request to server side

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText('');

    console.log(newGoal);
    //differently than as done in "GoalList", this time I call the function I get by the prop
    props.onAddGoal(newGoal);
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  //LD I want in "text" the latest value inputed by the user
  //LD the value of "text" is always "enteredText"
  return (
    <form className="new-goal" onSubmit={addGoalHandler}> 
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;

//DYNAMIC -> everything starts from the click in the form.. by the onSubmit
// I call "addGoalHandler"