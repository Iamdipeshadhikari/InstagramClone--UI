import { keyframes } from "styled-components";

export const LikeAnimation = keyframes`
    0%{
        transform: scale(0);
        opacity: 0;
    }
    90%{
        transform: scale(2);
        opacity: 1;
    }
`;
