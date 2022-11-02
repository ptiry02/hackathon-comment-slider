import styled from 'styled-components'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const Arrow = ({ right = false, left = false }) => {
  return (
    <>
      {left && (
        <Wrapper>
          <HiOutlineChevronLeft size={28} color={'#569B51'} />
        </Wrapper>
      )}
      {right && (
        <Wrapper>
          <HiOutlineChevronRight size={28} color={'#569B51'} />
        </Wrapper>
      )}
    </>
  )
}

export default Arrow

const Wrapper = styled.div`
  width: 34px;
  height: 36px;
  border: 1px solid #39424e;
  border-radius: 5px;
  background-color: #1e212e;
  display: flex;
  align-items: center;
  justify-content: center;
`
