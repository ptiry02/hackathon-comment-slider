import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import { CardsInfo } from '../helpers/constants'
import Card from './Card'

const MyCarousel = () => {
  return (
    <Wrapper>
      <Carousel indicators={false} interval={null} style={{ width: 'min-content' }}>
        {CardsInfo.map((item, index) => (
          <Carousel.Item key={index}>
            <Card profilePic={item.picture} flag={item.flag} name={item.name} text={item.comment} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Wrapper>
  )
}

export default MyCarousel

const Wrapper = styled.div`
  align-self: center;
`
