import React, { useRef, useState } from "react";

function StudentMarks() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let stateInputRef = useRef();
  let [Score, setScore] = useState(0);
  let [Balls, setBalls] = useState(0);
  let [Doubles, setDoubles] = useState(0);
  let [Fours, setFours] = useState(0);
  let [Sixes, setSixes] = useState(0);
  let [Wickets, setWickets] = useState(0);
  let [Noballs, setNoballs] = useState(0);
  return (
    <div>
      <form>
        <div>
          <label>First Name :</label>
          <input type="text" placeholder="Enter your first name" ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>Last Name :</label>
          <input type="text" placeholder="Enter your last name" ref={lastNameInputRef}></input>
        </div>
        <label>State :</label>
        <select ref={stateInputRef}
          onChange={(eventObj) => {
            console.log(eventObj.target.value);
            let state=eventObj.target.value
            switch (state) {
              case "Andhra Pradesh":
                console.log("Amaravathi");
                break;
              case "Arunachal Pradesh":
                console.log("Itanagar");
                break;
              case "Assam":
                console.log("Dispur");
                break;
              case "Bihar":
                console.log("Patna");
                break;
              case "Chhattisgarh":
                console.log("Raipur");
                break;
              case "Goa":
                console.log("Panaji");
                break;
              case "Gujarat":
                console.log("Gandhi Nagar");
                break;
              case "Haryana":
                console.log("Chandigarh");
                break;
              case "Himachal Pradesh":
                console.log("Shimla");
                break;
              case "Jharkhand":
                console.log("Ranchi");
                break;
              case "Karnataka":
                console.log("Bengaluru");
                break;
              case "Kerala":
                console.log("Thiruvananthapuram");
                break;
              case "Madhya Pradesh":
                console.log("Bhopal");
                break;
              case "Maharastra":
                console.log("Mumbai");
                break;
              case "Manipur":
                console.log("Imphal");
                break;
              case "Meghalaya":
                console.log("Shillong");
                break;
              case "Mizoram":
                console.log("Aizawl");
                break;
              case "Nagaland":
                console.log("Kohima");
                break;
              case "Odisha":
                console.log("Bhubaneswar");
                break;
              case "Punjab":
                console.log("Chandigarh")
                break;
              case "Rajasthan":
                console.log("Jaipur")
                break;
              case "Sikkim":
                console.log("Gantok")
                break;
              case "Tamilnadu":
                console.log("Chennai")
                break;
              case "Telangana":
                console.log("Hyderabad")
                break;
              case "Tripura":
                console.log("Agartala")
                break;
              case "Uttar Pradesh":
                console.log("Lucknow")
                break;
              case "Uttarakhand":
                console.log("Dehradun")
                break;
              case "West Bengal":
                console.log("Kolkata")
                break;

              default:
                break;
            }
          }}>
          <option>select</option>
          <option>Andhra Pradesh</option>
          <option>Arunachal Pradesh</option>
          <option>Assam</option>
          <option>Bihar</option>
          <option>Chhattisgarh</option>
          <option>Goa</option>
          <option>Gujarat</option>
          <option>Haryana</option>
          <option>Himachal Pradesh</option>
          <option>Jharkhand</option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Madhya Pradesh</option>
          <option>Maharastra</option>
          <option>Manipur</option>
          <option>Meghalaya</option>
          <option>Mizoram</option>
          <option>Nagaland</option>
          <option>Odisha</option>
          <option>Punjab</option>
          <option>Rajasthan</option>
          <option>Sikkim</option>
          <option>Tamilnadu</option>
          <option>Telangana</option>
          <option>Tripura</option>
          <option>Uttar Pradesh</option>
          <option>Uttarakhand</option>
          <option>West Bengal</option>
        </select>
        <div>
          <label>Gender :</label>
          <input type="radio" name="radio"></input>
          <label className="radioInput">Male</label>
          <input type="radio" name="radio"></input>
          <label className="radioInput">Female</label>
        </div>
        <div>
          <button type="button" className="firstName"
          onClick={()=>{
            let firstName=firstNameInputRef.current.value;
            let lastName=lastNameInputRef.current.value;
            let stateSelect=stateInputRef.current.value;
            alert(`${firstName} ${lastName} from ${stateSelect}`)
          }}>Sign up</button>
        </div>
      </form>
      <hr></hr>
      <div>
        <h1>Score:{Score}/{Wickets}</h1>
        <h1>Balls:{Balls}</h1>
        <h1>Doubles:{Doubles}</h1>
        <h1>Fours:{Fours}</h1>
        <h1>Doubles:{Sixes}</h1>
        <h1>Wickets:{Wickets}</h1>
        <h1>NoBalls:{Noballs}</h1>
        <button type="button" onClick={()=>{
          setScore(Score+1);
          setBalls(Balls+1);
        }}>Single</button>
        <button type="button" onClick={()=>{
          setScore(Score+2);
          setDoubles(Doubles+1);
          setBalls(Balls+1);
        }}>Doubles</button>
        <button type="button" onClick={()=>{
          setScore(Score+4);
          setFours(Fours+1);
          setBalls(Balls+1);
        }}>Fours</button>
        <button type="button" onClick={()=>{
          setScore(Score+6);
          setSixes(Sixes+1);
          setBalls(Balls+1);
        }}>Sixes</button>
        <button type="button" onClick={()=>{
          setWickets(Wickets+1);
          setBalls(Balls+1);
        }}>Wickets</button>
        <button type="button" onClick={()=>{
          setNoballs(Noballs++);
        }}>No Balls</button>
      </div>
    </div>
  );
}

export default StudentMarks;
