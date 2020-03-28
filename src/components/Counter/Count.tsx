import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  count: number
}

export const Count: FC<Props> = ({ count }) => {
  const Style = styled.h2`
    font-size: 4.8rem;
  `

  return <Style>{count}</Style>
}
