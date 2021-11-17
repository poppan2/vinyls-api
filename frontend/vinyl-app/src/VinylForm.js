import React, { useState } from "react";

const VinylForm = () => {
  const [vinyl, setVinyl] = useState({
    artistName: "",
    albumName: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const copy = Object.assign({}, vinyl);
    copy[name] = value;
    setVinyl(copy);
  };

  //   const handleChangeArtistName = (event) => {
  //     setVinyl({ artistName: event.target.value });
  //   };
  //   const handleChangeAlbumName = (event) => {
  //     setVinyl({ albumName: event.target.value });
  //   };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(vinyl)
  //   fetch("http://localhost:4000/vinyls", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(vinyl),
  //   }).then((response) => response.json())
  //     .then((data) => console.log(data));
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(vinyl)
    fetch("http://localhost:4000/vinyls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vinyl),
    })
      .then((response) => response.json())
      .then((data) => setVinyl({ artistName: "", albumName: "" }));
  };
  return (
    <div>
      <h1>Hello to Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="artistName"
          value={vinyl.artistName}
        />
        <input
          onChange={handleChange}
          type="text"
          name="albumName"
          value={vinyl.albumName}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default VinylForm;
