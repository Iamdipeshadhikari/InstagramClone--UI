import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryInput } from "../StyledComponents/Input";
import { MenuIcon } from "../StyledComponents/Icon";
import { Notification } from "../StyledComponents/Notification";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <HeaderContainer>
      <div className="content">
        <div className="logo">Instagram</div>

        <div className="search">
          <PrimaryInput
            type="text"
            name="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search !== "" && (
            <span className="close" onClick={() => setSearch("")}>
              <i class="fas fa-times"></i>
            </span>
          )}
        </div>

        <div className="menus">
          <li>
            <MenuIcon href="#">
              <i class="fas fa-home"></i>
            </MenuIcon>
            <Notification className="notification__position">15</Notification>
          </li>

          <li>
            <MenuIcon href="#">
              <i class="fas fa-paper-plane"></i>
            </MenuIcon>
            <Notification className="notification__position">8</Notification>
          </li>

          <li>
            <MenuIcon href="#">
              <i class="fas fa-heart"></i>
            </MenuIcon>
          </li>

          <li>
            <MenuIcon href="#">
              <img
                src="https://a.wattpad.com/cover/115784134-352-k808919.jpg"
                alt="RDJ profile"
              />
            </MenuIcon>
          </li>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;

// Styles
const HeaderContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 2.8rem;

  /* Content Class */
  .content {
    width: 65%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  /* Search Class */
  .search {
    position: relative;

    &::before {
      font-family: "Font Awesome 5 Free";
      content: "\f002";
      display: inline-block;
      font-weight: 900;
      position: absolute;
      left: 7px;
      top: 6px;
      font-size: 0.7rem;
      color: ${(props) => props.theme.fontColor1};
    }

    .close {
      position: absolute;
      right: 7px;
      top: 2px;
      cursor: pointer;

      i {
        color: ${(props) => props.theme.fontColor2};
        font-size: 0.8rem;
      }
    }
  }

  /* Logo Class */
  .logo {
    font-style: italic;
    font-family: "Handlee", cursive;
    font-size: 1.2rem;
    color: #000;
  }

  /* Menus Class */
  .menus {
    display: flex;
    align-items: center;

    li {
      list-style: none;
      margin: 0 1rem;
      position: relative;

      .notification__position {
        position: absolute;
        top: -.5rem;
        right: -.5rem;
      }
    }
  }
`;
