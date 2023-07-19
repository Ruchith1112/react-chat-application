import React from 'react'
import { ParentHeaderDiv,HeaderLeft,HeaderRight,HeaderRightImg,HeaderTitle,HeaderDesc,HeaderMain} from './Header.Styled'
import UserImage from './../../assets/images/user.png';
function Header() {
  return (
   <>
    <ParentHeaderDiv >
      <HeaderMain>
      <HeaderLeft >
        <HeaderTitle >Introductions</HeaderTitle>
        <HeaderDesc>This Channel Is For Company Wide Chatter</HeaderDesc>
      </HeaderLeft>
      <HeaderRight>
         3|100
        <HeaderRightImg src={UserImage} alt='' width='25px' height='25px' />
      </HeaderRight>
      </HeaderMain>
    </ParentHeaderDiv>
   </>
  )
}

export default Header
