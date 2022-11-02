import picture from '../assets/images/_MG_9829.jpeg'
import flag from '../assets/icons/icons8-spain-48.png'
import styled from 'styled-components'

const ProfilePic = () => {
  return (
    <Wrapper>
      <Picture src={picture} alt="profile_picture" />
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
