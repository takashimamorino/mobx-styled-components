import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Count } from './Count'
import { Button } from './Button'

type Props = {
  count: number
  increment: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  decrement: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Container = styled.article`
  text-align: center;
`

const ButtonsContainer = styled.section`
  margin: 0 auto;
`

const Component: FC<Props> = ({ count, increment, decrement }) => (
  <Container>
    <Count count={count} />
    <ButtonsContainer>
      <Button handleClick={increment}>+1</Button>
      <Button handleClick={decrement}>-1</Button>
    </ButtonsContainer>
  </Container>
)

export const Counter: FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return <Component count={count} increment={increment} decrement={decrement} />
}
