import React from 'react'
import ReactDOM from 'react-dom/client'
import './MyApp.css'
import Button from "@mui/material/Button";
import Popup from 'reactjs-popup';


function MyApp() {
  return (
    <div class="btn-group">
    <div class="mypage">Friend Sync</div>
    <div class="friendslist">Friends List</div>
      
    {/* <a href="second.html"><Button class="button" variant="contained"></Button></a>
 */}
      
      <Popup  trigger= {<Button class="button" variant="contained">  </Button>}>
          <div class="popup">
          <div class="group1">Group 1</div>
          <div class="popup-group">
          <button class="previous">Previous</button>
          <a href="second.html"><button class="newhangout">+</button></a>
          </div>

          </div>
      </Popup>
     
      
    

    

      
    <Button class="button" variant="contained"></Button>
    <Button class="button" variant="contained"></Button>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
)
