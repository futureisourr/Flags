import React from "react"
import { StyledCountryCard } from "./country-card"

export const CountryItem = ({flags, population, region, capital, name }) =>{
    return(
    <StyledCountryCard>
        <img src={flags.png} alt={flags.alt}  width={220} height={130} />
        <div style={{padding: 24}}>
            <p style={{fontSize: 18, fontWeight: 800}}>{name}</p>
            <div style={{
                marginTop: 16, 
                display: 'flex' , 
                flexDirection: 'column',
                gap: 8}}>
                <p style={{fontSize:18, fontWeight: 600 }}>Population:{' '} 
                <span style={{fontWeight: 300}}>{population}</span></p>
                <p style={{fontSize:18, fontWeight: 600}}>Region: {' '}
                <span style={{fontWeight: 300}}>{region}</span></p>
                <p style={{fontSize:18, fontWeight: 600}}>Capital: {' '} 
                <span style={{fontWeight: 300}}>{capital}</span></p>
            </div>
        </div>
    </StyledCountryCard>
    )
}
