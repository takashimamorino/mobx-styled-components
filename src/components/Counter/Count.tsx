import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  count: number
}

const Style = styled.h2`
  font-size: 4.8rem;
`

export const Count: FC<Props> = ({ count }) => <Style>{count}</Style>
