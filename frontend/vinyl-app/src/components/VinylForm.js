import React, { useState } from "react";
import "./vinylForm.css";

const VinylForm = (props) => {
  const [vinyl, setVinyl] = useState({
    artistName: "",
    albumName: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setVinyl({ ...vinyl, [name]: value });
    //   const copy = Object.assign({}, vinyl);
    //   copy[name] = value;
    //   setVinyl(copy);
    console.log(vinyl);
  };

  // const handleChangeArtistName = (event)=>{
  //   setVinyl({...vinyl,
  //     artistName: event.target.value
  //   })
  // }
  // const handleChangeAlbumName = (event)=>{
  //   setVinyl({...vinyl,
  //     albumName: event.target.value
  //   })
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(vinyl);
    fetch("http://localhost:5000/vinyls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vinyl),
    })
      .then((data) => setVinyl({ artistName: "", albumName: "" }))
      .then(() => {
        fetch("http://localhost:5000/vinyls")
          .then((res) => res.json())
          .then((data) => props.setVinyls(data));
      });
  };
  return (
    <div>
      <h1>Vinyl Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="artistName"
          placeholder="Artist Name"
          value={vinyl.artistName}
        />
        <input
          onChange={handleChange}
          type="text"
          name="albumName"
          placeholder="Album Name"
          value={vinyl.albumName}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default VinylForm;
