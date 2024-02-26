import {useState} from "react"
import { StyledDropdown, StyledDropdownContent } from "../global"
import { IconArrow } from "../../assets/icons/arrow-down"

export const Select = ({options = [] }) => {
const [selectedOption, setSelectedOption] = useState (null)
const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <div style={{display: 'flex' , flexDirection: 'column', gap: 4}}>
        <StyledDropdown onClick={() => setIsOpen(prev => !prev)}>
            <div 
            style={{
            display: 'flex' , 
            alignItems: 'center' ,
            justifyContent: 'space-between'
            }}>
        <p style={{fontSize: 14}}> 
    {selectedOption === null ? 'Filter by region' : selectedOption.label}  
        </p> 
        <div style={{transform: isOpen ? 'rotate(180deg)' : undefined }}><IconArrow/></div>       
            </div>
        </StyledDropdown>
        {isOpen && (<StyledDropdownContent>
            {options.map(option => {
                return (
                <p 
                style={{}}
                key={option.value} 
                onClick={() => {
                    setSelectedOption(option)
                    setIsOpen(false)
                }}
                >
                  {option.label}
                </p>
            )
            })}
        </StyledDropdownContent>)}
        </div>
        </>
    )
}