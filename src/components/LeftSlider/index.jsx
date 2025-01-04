import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import { Wrapper, SliderWrapper } from './styles';

const LeftSlider = () => {
  const swiperRef = useRef(null);
  return (
    <Wrapper item size={2}>
        <Button variant="outlined" size='small' onClick={() => swiperRef.current?.slidePrev()}><KeyboardArrowUpTwoToneIcon/></Button>
        <SliderWrapper >
        <Swiper
          style={{ maxHeight: '100%', flexGrow: 1, width: '100%' }}
          modules={[FreeMode]}
          onSwiper={(swiper) => swiperRef.current = swiper}
          spaceBetween={20}
          slidesPerView={'auto'}
          autoHeight={true}
          direction={'vertical'}
          FreeMode={true}
          loop={true}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><Box sx={{ border: '1px solid red', borderRadius: 4, height: 200}}>1</Box></SwiperSlide>
          <SwiperSlide><Box sx={{ border: '1px solid red', borderRadius: 4, height: 200}}>2</Box></SwiperSlide>
          <SwiperSlide><Box sx={{ border: '1px solid red', borderRadius: 4, height: 200}}>3</Box></SwiperSlide>
          <SwiperSlide><Box sx={{ border: '1px solid red', borderRadius: 4, height: 200}}>4</Box></SwiperSlide>
          <SwiperSlide><Box sx={{ border: '1px solid red', borderRadius: 4, height: 200}}>5</Box></SwiperSlide>
          <SwiperSlide><Box sx={{ border: '1px solid red', borderRadius: 4, height: 200}}>6</Box></SwiperSlide>
          <SwiperSlide><Box sx={{ border: '1px solid red', borderRadius: 4, height: 200}}>7</Box></SwiperSlide>
          <SwiperSlide><Box sx={{ border: '1px solid red', borderRadius: 4, height: 200}}>8</Box></SwiperSlide>
        </Swiper>
        </SliderWrapper>
        <Button variant="outlined" size='small' onClick={() => swiperRef.current?.slideNext()}><KeyboardArrowDownTwoToneIcon/></Button>
    </Wrapper>
  );
}

export default LeftSlider;