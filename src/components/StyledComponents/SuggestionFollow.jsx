import styled from "styled-components";

export const SuggestionFollow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    

    .list {
        &--left {
            display: flex;
            align-items: center;

            img {
                height: 2rem;
                width: 2rem;
                border-radius: 50%;
                background-size: cover;
                background-position: center;
                object-fit: cover;
                margin-right: 1rem;
            }
        }
    }
`;
