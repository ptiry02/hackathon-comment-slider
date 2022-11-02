import styled from 'styled-components'

const ProfilePic = ({ img, flag }) => {
  return (
    <Wrapper>
      <Picture img={img}></Picture>
      <Flag src={flag} alt="flag" />
    </Wrapper>
  )
}

export default ProfilePic

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Picture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
`
const Flag = styled.img`
  position: absolute;
  margin-top: 40px;
  width: 24px;
  align-self: flex-end;
`
