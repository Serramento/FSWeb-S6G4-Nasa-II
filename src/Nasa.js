import React from 'react';
import Image from "./Img.js";
import Video from "./Video";
import Arama from './Arama.js';
import styled from 'styled-components';

const Nasa = (props) => {
    const {arama, aramaHandler, veri} = props;

    const NasaDiv = styled.div`
        width: 70%;
        border: 1px solid #082e90;
        border-radius: 15px;
        margin: auto;
        margin-top: 1%;
    `;

    const NasaBaslik = styled.h2`
        width: 65%;
        height: 50px; 
        color: #082e90;
        text-align: left;
        padding-left: 5%;
    `;

    const NasaDiv2 = styled.div`
        width: 90%;
        height: 50px;
        padding-left: 5%;
        padding-right: 5%;
        display:flex;
    `;

    const NasaMetin = styled.p`
        width: 90%;
        padding-left: 5%;
        text-align: justify;
    `;


    return (
        <NasaDiv>

            <NasaBaslik> {veri.title} </NasaBaslik>

            <Arama arama={arama} aramaHandler={aramaHandler} />
            {veri.media_type == Image ? <Image url={veri.hdurl} /> : <Video url={veri.url} />}

            <NasaDiv2>
                <p> {veri.copyright ? `copyright: ${veri.copyright}` : ""}</p>
                <p> {veri.date} </p>
            </NasaDiv2>
            <NasaMetin>
                {veri.explanation}
            </NasaMetin>
        </NasaDiv>
    )
}

export default Nasa;
