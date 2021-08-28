import styled from 'styled-components'

export const SContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;

    flex-grow: 4;
    margin: 0 2rem 0 2rem;

    width: 15rem;
    height: 25rem;
    border-radius: 10px;

    background-color: var(--green);

    span {
        margin-bottom: 23rem;
        position: absolute;
    }

    img {
        position: absolute;

        margin-top: -330px;
        margin-left: -22px;
        width: 200px;
        height: 200px;
    }
`
