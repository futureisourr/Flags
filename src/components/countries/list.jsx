import React, { useEffect, useState } from "react"
import { CountryItem } from "./country-item"

export const CountryList = () => {
const [countries, setCountries] = useState([])

useEffect(() => {
    const getCountries = async () => {
        const result = await fetch('https://restcountries.com/v3.1/all')
        const data = await result.json()
        setCountries(data.slice(0, 8))
    }
    getCountries()
}, [])

return <div>
    {countries.map(country => {
        return <CountryItem key={country.name.common}/>
    })}
</div>
}