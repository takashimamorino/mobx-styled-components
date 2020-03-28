import React, { FC } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  color: palevioletred;
  &:after {
    content: ' 🦄';
  }
`

export const AppTitle: FC = () => <Title>Counter App</Title>
