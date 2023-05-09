import React, { useContext,useState } from "react";
import "../index.css";
import SearchPage from "./searchPage";
import { HandleDelete } from "./App";
import myPhoto from './myphoto.jpg';

const MainNavbar = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [isOpena, setIsOpena] = useState(false);
  const helper = useContext(HandleDelete);
  const { state, dispatch } = helper;
  return (
    <section className="navbar">
      <div className="logo-container">
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logo">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt=""
          />
        </div>
      </div>
      <div className="search-bar">
        <div
          className="search-button ui icon"
          data-tooltip="Search"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-search" />
        </div>
        <div className="text-input">
          <input
            type="text"
            placeholder="Search mail"
            value={state.searchItem}
            onChange={(e) =>
              dispatch({
                type: "setSearchItem",
                payload: { searchItem: e.target.value },
              })
            }
          />
        </div>
        {state.searchItem.length > 0 ? <SearchPage /> : ""}
		
        <div onClick={() => setIsOpen(!isOpen)}
          className="search-setting ui icon"
          data-tooltip="Show search options"
          data-position="bottom left"
          data-inverted=""
        >
		 
          <i className="fas fa-sliders-h" />
        </div>
		{isOpen && (
        <div ><label>From:</label> <input type="text" id="rcorners1" /><br/><label>To:</label>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="rcorners2"  />
		<input type ="submit" value="Search" id="butrenk"/>&nbsp;&nbsp;&nbsp;&nbsp;</div>
		
		
      )}
      </div>

      <div className="user-profiles">
        <div
          className="ui icon"
          data-tooltip="Help"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="far fa-question-circle" />
        </div>
        <div
          className="ui icon"
          data-tooltip="Setting"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-cog"></i>
        </div>
        <div onClick={() => setIsOpena(!isOpena)}
          className="ui icon"
          data-tooltip="Apps"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fal fa-border-none"></i>
        </div>
		{isOpena && (
		
        <ul ><br/><br/><br/><br/>
      <li><img
            src="https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA=w240-h480-rw"
            alt=""
			style={{width: "20px", height: "20px"}}
          /></li>
      <li><img
            src="https://logowik.com/content/uploads/images/google-play-store4701.jpg"
            alt=""
			style={{width: "20px", height: "20px"}}
          /></li>
      <li><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
            alt=""
			style={{width: "20px", height: "20px"}}
          /></li>
	  <li><img
            src="https://play-lh.googleusercontent.com/t-juVwXA8lDAk8uQ2L6d6K83jpgQoqmK1icB_l9yvhIAQ2QT_1XbRwg5IpY08906qEw"
            alt=""
			style={{width: "20px", height: "20px"}}
          /></li>
	  
       </ul>
	   
		
		
      )}
		
        <div
          className="ui icon user-image"
          data-tooltip="User"
          data-position="bottom left"
          data-inverted=""
        >
          <img
            src={myPhoto}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
