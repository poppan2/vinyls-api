import { useState } from "react";

const ViewVinyls = (props) => {
  
  const vinylsArr =
    props.vinyls &&
    props.vinyls.vinyls.map((vinyl) => {
      return (
        <ul key={vinyl._id}>
          <li>
            <span>Artist: </span>
            {vinyl.artistName}
          </li>
          <li>
            <span>Album: </span>
            {vinyl.albumName}
          </li>
        </ul>
      );
    });

  return (
    <div>
      {/* <button onClick={handleClick}>View Albums</button> */}
      <div className='vinyls-list'>
        {vinylsArr}
      </div>
    </div>
  );
};

export default ViewVinyls;
