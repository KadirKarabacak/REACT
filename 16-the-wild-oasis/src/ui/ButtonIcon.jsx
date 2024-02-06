import styled from "styled-components";

const ButtonIcon = styled.button`
    background: none;
    border: none;
    padding: 0.6rem;
    border-radius: var(--border-radius-sm);
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 2.2rem;
        height: 2.2rem;
        color: var(--color-brand-600);
        margin: 0 5px 0 0;
    }
`;

export default ButtonIcon;
