import styled from 'styled-components'

export const Button = styled.button`
 background: ${({theme}) => theme.background};
 border-radius: 20px;
 border: 2px solid ${({theme}) => theme.toggleBorder};
 color: ${({theme}) => theme.color};
 margin: 0 1em;
 padding: 10px;
 font-size: 14px;
 boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.10)'
`