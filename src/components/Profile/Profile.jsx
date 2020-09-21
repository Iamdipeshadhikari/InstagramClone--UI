import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <ProfileComponent>
      <img
        src="https://images.outlookindia.com/public/uploads/articles/2019/12/7/Akshay-Kumar-3_630_630.jpg"
        alt="Akshay Kumar"
      />

      <div className="info">
        <span className="info__username">Manzil_offical</span>
        <span className="info__fullname">Manjil Pangeni</span>
      </div>
    </ProfileComponent>
  );
};

export default Profile;

const ProfileComponent = styled.div`
  padding: 1.5rem;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    margin-right: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .info__username {
    font-size: 0.7rem;
    color: ${(props) => props.theme.fontColor2};
    padding: 0.5rem 0;
  }

  .info__fullname {
    font-size: 0.7rem;
    color: ${(props) => props.theme.fontColor1};
  }
`;
