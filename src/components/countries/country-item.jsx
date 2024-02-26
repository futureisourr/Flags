import React from "react"
import { StyledCountryCard } from "./country-card"
import georgiaFlag from '../../assets/test-photo/georgia-flag.jpg'

export const CountryItem = () =>{
    <StyledCountryCard>
        <img src={georgiaFlag} width={267} height={160}/>
        <div style={{padding: 24}}>
            <p style={{fontSize: 18, fontWeight: 800}}>Germany</p>
            <div style={{marginTop: 16, display: 'flex' , flexDirection: 'column'}}>
                <p style={{fontSize:18, fontWeight: 600 }}>Population: <span style={{fontWeight: 300}}>81,770,900</span></p>
                <p style={{fontSize:18, fontWeight: 600}}>Region: <span style={{fontWeight: 300}}>Europe</span></p>
                <p style={{fontSize:18, fontWeight: 600}}>Capital: <span style={{fontWeight: 300}}>Berlin</span></p>
            </div>
        </div>
    </StyledCountryCard>
}