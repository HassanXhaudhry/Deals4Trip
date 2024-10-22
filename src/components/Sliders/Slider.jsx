import React, { useState } from 'react';
import './Slider.css'
import { Carousel } from 'primereact/carousel';
import img1 from '../../assets/dubai.png';
import img2 from '../../assets/abudabhi.png';
import img3 from '../../assets/ras.png';
import img4 from '../../assets/ain.png';
import img5 from '../../assets/international.png';
import img6 from '../../assets/fujairah.png';
import { useTranslation } from 'react-i18next';

export default function Slider() {

    const { t } = useTranslation();

    const [activeIndex, setActiveIndex] = useState(0);
   
    const data = [
        {
            id: 1,
            img: img1,
            title: 'Dubai Adventure',
            description: '18 Tours',
        },
        {
            id: 2,
            img: img2,
            title: 'Abu Dhabi Experience',
            description: '26 Tours',
        },
        {
            id: 3,
            img: img3,
            title: 'Ras Al Khaimah',
            description: '12 Tours',
        },
        {
            id: 4,
            img: img4,
            title: 'Al Ain Oasis',
            description: 'TV',
        },
        {
            id: 5,
            img: img5,
            title: 'International Trips',
            description: '18 Tours',
        },
        {
            id: 6,
            img: img6,
            title: 'Fujairah Escape',
            description: '18 Tours',
        }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 6,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
           
            <div className="product-item flex flex-col text-center items-center">
                <div className="product-image mx-[-10px] sm:mx-3">
                    <img src={product.img} alt={product.title} className="w-44 h-44 rounded-full" />
                </div>
                <div className="product-details pt-4">
                    <h4 className="product-title font-bold">{product.title}</h4>
                    <h6 className="product-description">{product.description}</h6>
                </div>
            </div>
        );
    };

    const CustomIndicator = ({ onClick }) => {
        return (
            <div className="custom-indicator">
                {[0, 1, 2].map((index) => (
                    <div 
                        key={index} 
                        className={`indicator-bar ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => onClick(index)}
                    ></div>
                ))}
            </div>
        );
    };

    const onPageChange = (event) => {
        setActiveIndex(event.page);
    };

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    return (
       
        <div className="card text-center py-8">
        <div className='py-10'>
            <div className='text-lg font-light'>{t("The most popular tours of the week")}</div>
            <div className='text-4xl font-bold'>{t("Popular Destinations")}</div>
        </div>
        <div className="carousel-container">
            <Carousel
                className="carousel-custom sm:px-6 px-10"
                value={data}
                numVisible={6}
                numScroll={2}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                onPageChange={onPageChange}
                page={activeIndex}
                showNavigators={false}
            />
            <CustomIndicator onClick={handleIndicatorClick} />
        </div>
    </div>
    );
}