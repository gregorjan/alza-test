import { FC, ReactNodeArray, useState, useEffect, useCallback } from 'react'
import * as S from './styled'

type Props = {
  actions: ReactNodeArray
}

export const DropdownButton: FC<Props> = ({ children, actions }) => {
  const [open, setOpen] = useState(false)

  const handleClick = useCallback(() => {
    open && setOpen(false)
  }, [open])

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return (
    <S.Wrapper onClick={() => setOpen((prev) => !prev)}>
      <S.Button
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {children} {String.fromCharCode(open ? 9650 : 9660)}
      </S.Button>
      <S.List open={open} aria-labelledby="dropdownMenuButton">
        {actions}
      </S.List>
    </S.Wrapper>
  )
}
