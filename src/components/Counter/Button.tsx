import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Style = styled.button`
  margin: 1rem;
  font-size: 1.8rem;
  color: palevioletred;
  padding: 0.5rem 2rem;
  border: 0.2rem solid palevioletred;
  border-radius: 0.3rem;
  &:hover {
    cursor: pointer;
  }
`

export const Button: FC<Props> = ({ handleClick, children }) => (
  <Style onClick={handleClick}>{children}</Style>
)
