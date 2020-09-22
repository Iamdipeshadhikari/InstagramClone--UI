import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { DarkText } from "../StyledComponents/Text";
import { MenuIcon } from "../StyledComponents/Icon";
import { SecondaryInput } from "../StyledComponents/Input";
import { SimpleButton } from "../StyledComponents/Button";
import { Like } from "../StyledComponents/Like";

const Post = () => {
  const [slider, setSlider] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const [like, setLike] = React.useState(null);

  const SliderSettings = {
    dots: false,
    infinity: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const giveLikeAnimation = () => {
    if (like) {
      return setLike(false);
    }

    setLike(true);
  };

  return (
    <PostContainer>
      <div className="header">
        <div className="header--left">
          <img
            src="https://i0.wp.com/odishabytes.com/wp-content/uploads/2020/08/15_06_2020-sushant-singh-rajput_20394126_164957773.jpg?resize=650%2C430&ssl=1"
            alt="Sushant Singh Rajput"
          />

          <DarkText>Sushant singh rajput</DarkText>
        </div>

        <div className="header--right">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>

      <div className="main">
        {slider && (
          <div className="main--slider">
            <Slider {...SliderSettings}>
              <img
                src="https://i.pinimg.com/originals/d4/7f/ab/d47fabb6866fc7394d18e00656b38aa7.jpg"
                alt="Sushant Singh Rajput"
              />
              <img
                src="https://cmsimages.tribuneindia.com/gallary_content/2020/9/2020_9$largeimg_1266302640.jpg"
                alt="Sushant Singh Rajput"
              />
              <img
                src="https://www.rd.com/wp-content/uploads/2018/03/rdj.jpg"
                alt="Sushant Singh Rajput"
              />
            </Slider>
          </div>
        )}

        {!slider && (
          <div className="main--photo">
            <img
              src="https://www.rd.com/wp-content/uploads/2018/03/rdj.jpg"
              alt="Sushant Singh Rajput"
            />
          </div>
        )}
      </div>

      <div className="footer">
        <div className="footer--left">
          <MenuIcon
            onClick={giveLikeAnimation}
            as="span"
            style={{ marginRight: "1rem" }}
          >
            <i class="fas fa-heart"></i>
          </MenuIcon>
          <MenuIcon as="span" style={{ marginRight: "1rem" }}>
            <i class="fas fa-comment"></i>
          </MenuIcon>
          <MenuIcon as="span" style={{ marginRight: "1rem" }}>
            <i class="fas fa-paper-plane"></i>
          </MenuIcon>
        </div>
        <div className="footer--right">
          <MenuIcon as="span">
            <i class="fas fa-bookmark"></i>
          </MenuIcon>
        </div>
      </div>

      <div className="engagement">
        <DarkText
          style={{
            marginLeft: "1rem",
            marginBottom: ".5rem",
            fontSize: "0.5rem",
          }}
        >
          15 Likes
        </DarkText>

        <div className="borderbottm"></div>
      </div>

      <SecondaryInput>
        <input
          type="text"
          placeholder="Add a comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {comment !== "" && (
          <SimpleButton className="Enabled">Post</SimpleButton>
        )}
        {comment === "" && <button className="Disabled">Post</button>}
      </SecondaryInput>

      <Like>
        {like && <i class="fas fa-heart showAnimation"></i>}
        {like === null && <i class="fas fa-heart"></i>}
        {like === false && <i class="fas fa-heart-broken removeAnimation"></i>}
      </Like>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
  padding: 0.5rem 0 0 0;
  position: relative;

  /* Header Class */
  .header {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--left {
      display: flex;
      align-items: center;

      img {
        height: 1.8rem;
        width: 1.8rem;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        object-fit: cover;
        margin-right: 0.5rem;
      }
    }
    &--right {
      i {
        color: ${(props) => props.theme.fontColor1};
        font-size: 0.8rem;
      }
    }
  }

  /* Main Class */
  .main {
    width: 100%;
    overflow-x: hidden;

    &--photo {
      width: 100%;

      img {
        background-size: cover;
        background-position: center;
        object-fit: cover;
        width: 100%;
      }
    }

    &--slider {
      position: relative;

      .slick-next {
        position: absolute;
        right: 1rem;

        &:before {
          font-size: 1.2rem;
        }
      }
      .slick-prev {
        position: absolute;
        left: 1rem;
        z-index: 2;

        &:before {
          font-size: 1.2rem;
        }
      }
    }
  }

  /* Footer Class */
  .footer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
    justify-content: space-between;
  }

  /* Engagement Class */
  .engagement {
    .borderbottm {
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }
  }
`;
