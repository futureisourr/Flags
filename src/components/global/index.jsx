import styled from "styled-components"

export const Container = styled.div`
    max-width: 1300px ;
    width: 100%;
    margin: auto;
`

export const StyledDropdown = styled.div`
 width:200px;
 height: 56px;
 padding: 18px 24px;
 border-radius: 5px;
 backgroundColor: ${({theme}) => theme.backgroundColor};
 box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
 cursor: pointer;
`

export const StyledDropdownContent = styled.div`
 position: absolute;
 margin-top: 60px;
 display:flex;
 flex-direction: column;
 gap: 8;
 width:200px;
 padding: 16px 24px;
 border-radius: 5px;
 backgroundColor: ${({theme}) => theme.backgroundColor};
 box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
 cursor: context-menu;
`