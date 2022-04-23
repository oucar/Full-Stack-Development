// THIS IS THE STYLED NAV LINK
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
        margin-top: 5px;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }

    /* click animation */
    /* NavLink adds class "active" to them */
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }

        h4{
            color: white;
        }

    }
`;