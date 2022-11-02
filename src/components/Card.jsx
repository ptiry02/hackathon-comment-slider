import styled from 'styled-components'
import bgLogo from '../assets/icons/Vector.png'
import ProfilePic from './ProfilePic'

const Card = ({ profilePic, flag, name, text }) => {
  return (
    <Wrapper>
      <Title>
        <ProfilePic img={profilePic} flag={flag} />
        <Name>{name}</Name>
      </Title>
      <Comment>{text}</Comment>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  width: 508px;
  height: 258.58px;
  padding: 35px 26px;
  margin: 0 100px;
  background-color: #252835;
  border: 2px solid #2e353f;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-image: url(${bgLogo});
  background-repeat: no-repeat;
  background-position: right;
`
const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 17px;
  margin-bottom: 27px;
`
const Name = styled.h3`
  font-weight: 700;
  margin: 0;
`
const Comment = styled.p`
  color: #cdcdcd;
`
