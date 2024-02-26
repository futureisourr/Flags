import React from "react"
import './index.css'
import { StyledNavigation } from "./styled-navigation"
import { IconMoon } from "../../assets/icons/moon"
import { Container } from "../global"

export const Navigation = ({onSwitchMode, mode}) => {
    return(
    <StyledNavigation>
        <Container>
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            }}>
            <h3>Where in the World?...</h3>
           <button 
           style={{border: "none" , 
           background: "transparent" , 
           cursor: "pointer" }}
           onClick={onSwitchMode}
           >
           <div style={{display: 'flex' , gap: 8, alignItems: 'center'}}>
                <IconMoon  stroke={mode === 'dark' ? '#fff' : '#000'}/>
                <p style={{fontSize: 16 }}>Dark Mode</p>
            </div>
           </button>
           </div>
    </Container>
        </StyledNavigation>
    ) 
}