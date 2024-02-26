import styled from "styled-components";


export const StyledCountryCard = styled.div`
 overflow: hidden;
 width:267px;
 padding: 16px 24px;
 border-radius: 5px;
 backgroundColor: ${({theme}) => theme.backgroundColor};
 box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
`