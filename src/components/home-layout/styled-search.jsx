import React from 'react'
import styled from 'styled-components'

export const StyledSearch = styled.input`
  width: 480px;
  height:56px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  background-color: ${({theme}) => theme.backgroundColor};
`