import React from "react"
import { StyledSearch } from "./styled-search"
import { SearchIcon } from "../../assets/icons/search"
import { Container } from "../global"
import { Select } from "../ui/select"
import { CountryList } from "../countries/list"


export const HomeLayout = () => {
    return(
    <Container style={{marginTop: 48}}>
        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
        <div style={{position: 'relative'}}>
    <StyledSearch placeholder="Search for a country"/>   
    <div style={{position: 'absolute' , top: 12 , left: 32}}>
    <SearchIcon/>
   </div>
      </div>
      <Select
    options={[
        {
            value: 'africa',
            label: 'Africa'
        },
        {
            value: 'america',
            label: 'America'
        },
        {
            value: 'asia',
            label: 'Asia'
        },
        {
            value: 'europe',
            label: 'Europe'
        },
        {
            value: 'oceania',
            label: 'Oceania'
        }
    ]}
      />
         </div>  
         <div style={{marginTop: 48}}>
            <CountryList/>
            </div> 
    </Container>
    )
}