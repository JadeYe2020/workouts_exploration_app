import React, { useContext } from 'react'
import BodyParts from './BodyParts'
import { Box } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'


const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);

  return (
    <MdNavigateBefore onClick={() => scrollPrev()} className="left-arrow" size='48px' />
  );
};

const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext)

  return (
    <MdNavigateNext onClick={() => scrollNext()} className="right-arrow" size='48px' />
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>        
      { data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m='0 40px'
        >
          <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ) ) }        
    </ScrollMenu>    
  )
}

export default HorizontalScrollbar