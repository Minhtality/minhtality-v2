import React from 'react'
import Styled from './index.styled';
import {MobileBreakpoint,TabletBreakpoint,DesktopBreakpoint} from '../breakpoints';

const Image = ({
    alt = '',
    src = '',
    StyledImage
}) => (
        <StyledImage src={src} alt={alt} />
)

const ImageComponent = ({
    image = {},
    StyledImage = Styled.Image,
    StyledWrapper = Styled.ImageWrapper
}) => {
    const {
        mobile = undefined,
        tablet = undefined,
        desktop = {},
    } = image;

    const imageProps = {
        StyledImage,
    }

    return (
        <StyledWrapper >
            <MobileBreakpoint>
                <Image {...imageProps} {...(mobile || tablet || desktop)} />
            </MobileBreakpoint>
            <TabletBreakpoint>
                <Image {...imageProps} {...(tablet || desktop)} />
            </TabletBreakpoint>
            <DesktopBreakpoint up>
                <Image {...imageProps} {...(desktop)} />
            </DesktopBreakpoint>
        </StyledWrapper>
    )
};

export default ImageComponent
