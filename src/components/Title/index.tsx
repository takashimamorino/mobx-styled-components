import React, { FC } from 'react'
import styled from 'styled-components'

export const AppTitle: FC = () => {
  const Title = styled.h1`
    font-size: 3.6rem;
    text-align: center;
    color: palevioletred;
    &:after {
      content: ' 🦄';
    }
  `

  return <Title>Counter App</Title>
}
