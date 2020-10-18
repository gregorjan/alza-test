import { FC } from 'react'
import * as S from './styled'

export type ButtonProps = S.Props

export const Button: FC<S.Props> = (props) => <S.Button {...props} />
