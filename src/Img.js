import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
    const {url} = props;

    const Img = styled.img`
        width: 100%;
    `;

    return (
        <Img> src={url} </Img>
    );
}

export default Image;