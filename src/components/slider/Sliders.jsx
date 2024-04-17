import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Sliders = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div  >
                        <img className='w-full bg-cover lg:h-[450px]  h-[250px]' src="https://i.ibb.co/0BJ0w9n/real-estate-6688945-1280.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  >
                        <img className='w-full bg-cover lg:h-[450px]  h-[250px]' src="https://i.ibb.co/9qK4RmF/realtor-3182376-1280.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  >
                        <img className='w-full bg-cover lg:h-[450px]  h-[250px]' src="https://i.ibb.co/2WLNfKR/house-1353389-1280.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  >
                        <img className='w-full bg-cover lg:h-[450px]  h-[250px]' src="https://i.ibb.co/LQ2tNzm/house-purchase-1019764-1280.jpg" alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Sliders;