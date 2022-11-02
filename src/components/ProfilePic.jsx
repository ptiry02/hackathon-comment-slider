import styled from 'styled-components'

const ProfilePic = ({ img, flag }) => {
  return (
    <Wrapper>
      <Picture src={img} alt="profile_picture" />
      <Flag src={flag} alt="flag" />
    </Wrapper>
  )
}

export default ProfilePic

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Picture = styled.img`
  width: 50px;
  border-radius: 999px;
`
const Flag = styled.img`
  position: absolute;
  margin-top: 40px;
  width: 24px;
  align-self: flex-end;
`
