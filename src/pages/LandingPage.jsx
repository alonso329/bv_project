import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import LandingBlocks from "../elements/LandingBlocks/LandingBlocks";
import "./LandingPage.css";

export default function LandingPage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = async () => {
    const res = await axios.get("https://randomuser.me/api/?results=8");
    setProfiles(res.data.results);
  };

  return (
    <div className="main-layout">
      <div className="welcome-section">
        <div className="welcome-content">
          <p>Welcome</p>
          <button>Join Today</button>
        </div>
      </div>
      <div className="blocks-section">
        <p className="blocks-heading">
          Lorem ipsum dolor sit amet. <br />
          Consectetur adipiscing elit.
        </p>
        <div className="blocks-content">
          <LandingBlocks
            imgUrl="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80"
            imgAlt="Yellow car"
            title="Lorem ipsum dolor sit amet"
            content="ed aliquam bibendum ipsum, vitae ultricies erat fringilla vitae. Etiam eu neque non leo pretium porttitor sit amet "
          />
          <LandingBlocks
            imgUrl="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80"
            imgAlt="Yellow car"
            title="Lorem ipsum dolor sit amet"
            content="ed aliquam bibendum ipsum, vitae ultricies erat fringilla vitae. Etiam eu neque non leo pretium porttitor sit amet "
          />
          <LandingBlocks
            imgUrl="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80"
            imgAlt="Yellow car"
            title="Lorem ipsum dolor sit amet"
            content="ed aliquam bibendum ipsum, vitae ultricies erat fringilla vitae. Etiam eu neque non leo pretium porttitor sit amet "
          />
        </div>
      </div>
      <div className="video-section">
        <iframe
          title="bv-video"
          src="https://players.brightcove.net/6314453161001/default_default/index.html?videoId=6310921815112"
          allowfullscreen=""
          allow="encrypted-media"
          width="100%"
          height="420"
        ></iframe>
        <div className="video-body">
          <div>
            <p className="video-title">
              Sed porta, nunc finibus commodo feugiat.
            </p>
            <p className="video-description">
              Praesent velit nunc, dignissim ut dolor vel, rutrum viverra velit.
              Nullam finibus sem massa, a interdum nisi lobortis nec. Curabitur
              non risus tellus. Proin enim erat, malesuada eget cursus vel,
              laoreet id ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="about-section">
        <p className="about-header">About the team</p>
        <p className="about-description">
          Aliquam a augue nulla. Nam eu odio ut mi accumsan mollis. Sed non
          vulputate erat. Fusce et euismod lectus.
        </p>
        <div className="team-members">
          {profiles.map((profile) => (
            <div className="team-name" key={profile.cell}>
              <img
                src={profile.picture.large}
                alt={profile.name.first + "picture"}
              />
              <p>{profile.name.first}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="join-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          bibendum ipsum, vitae ultricies erat fringilla vitae. Etiam eu neque
        </p>
        <div className="join-buttons">
          <button className="join-button">Join Today</button>
          <button className="contact-button">Contact us</button>
        </div>
      </div>
    </div>
  );
}
