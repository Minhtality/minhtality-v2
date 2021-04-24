import styled from 'styled-components';

export const HeroContainer = styled.div`
    position: relative;
    max-width: 1200px;
    border: 1px solid black; // remove
    margin: 0 auto;
`;
export const ImageContainer = styled.img`
    width: 100%;
    height: auto;
    vertical-align: top;
`;
export const CopyContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
`;
export const Heading = styled.h1`
    font-size: 28px;
    margin: 0;
    margin-bottom: 15px;
    line-height: 20px;
    
`;
export const Description = styled.div`
    margin-bottom: 15px;
`;