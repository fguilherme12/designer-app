import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay } from "swiper/modules";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    background-color: #fad9d33b;
`

const Imagem = styled.img`
    width: 100%;
    background-repeat: no-repeat;
    object-fit: contain;
    height: 40rem;

    @media(max-width: 1000px) {
    height: 28rem;
    }
`


function Banner() {

    const data = [
        {id: '1', imagem: '/imagens/banner1.png'},
        {id: '2', imagem: '/imagens/banner2.png'}
       
    ]
    return (
        <Container>
            <Swiper 
                modules={[Navigation, Autoplay]}
                autoplay={{delay: 4000}}
                slidesPerView={1}
                navigation={{nextEl: undefined, prevEl: undefined }}
                
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}> <Imagem src={item.imagem} /> </SwiperSlide>
                ))}
                
            </Swiper>
        </Container>
    )
}

export default Banner;