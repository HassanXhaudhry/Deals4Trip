import React, { useState } from 'react';
import './Slider3.css'
import { Carousel } from 'primereact/carousel';
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import img1 from '../../assets/slider3_1st.png';
import img2 from '../../assets/slider3_2nd.png';
import img3 from '../../assets/slider3_3rd.png';
import img4 from '../../assets/slider3_4th.png';
import { useTranslation } from 'react-i18next';

export default function Slider3() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedLocation, setSelectedLocation] = useState('All');
   
    const data = [
        {
            id: 1,
            img: img1,
            title: 'Raffles Abu Dhabi',
            start: 5,
            description1: 'AED 19.86',
            description2: 'AED 20.86'
        },
        {
            id: 2,
            img: img2,
            title: 'Versace Dubai',
            start: 1,
            description1: 'AED 19.86',
            description2: 'AED 20.86'
        },
        {
            id: 3,
            img: img3,
            title: 'Taj Exotica Resort Palms Dubai',
            start: 2,
            description1: 'AED 19.86',
            description2: 'AED 20.86'
        },
        {
            id: 4,
            img: img4,
            title: 'Royal Al Ain',
            start: 3,
            description1: 'AED 19.86',
            description2: 'AED 20.86'
        },
        {
            id: 1,
            img: img3,
            title: 'Taj Exotica Resort Palms Fujairah',
            start: 2,
            description1: 'AED 19.86',
            description2: 'AED 20.86'
        },
        {
            id: 2,
            img: img4,
            title: 'Royal International',
            start: 3,
            description1: 'AED 19.86',
            description2: 'AED 20.86'
        },
    ];

    const responsiveOptions = [
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
    const renderStars = (stars) => {
        const starElements = [];
        for (let i = 0; i < 5; i++) {
            if (i < stars) {
                starElements.push(<IoIosStar key={i} className="text-yellow" />);
            } else {
                starElements.push(<IoIosStar key={i} className="text-gray-300" />);
            }
        }
        return starElements;
    };

    const filteredData = selectedLocation === 'All' ? data : data.filter(item => item.title.toLowerCase().includes(selectedLocation.toLowerCase()));

    const productTemplate = (product) => (
        <div className="product-item flex flex-col items-center">
            <div className="product-image mx-[-10px] sm:mx-3 relative">
            <div className='absolute flex items-center justify-center bg-yellow h-7 w-28 top-4 text-center rounded-r-2xl'>Breakfast</div>
            <button className='absolute flex items-center justify-center bg-white text-gray-400 right-4 h-8 w-8 top-4 text-center rounded-full'><FaRegHeart /></button>
                <img src={product.img} alt={product.title} className="w-60 h-60 rounded-2xl" />
            </div>
            <div className="product-details pt-4">
                <h4 className="product-title font-bold">{product.title}</h4>
                <div className="flex py-2">{renderStars(product.start)}</div>
                <div className="flex gap-2 items-center">
                    <div className="product-description font-semibold text-[#80A102]">{product.description1}</div>
                    <div className="product-description text-xs relative">
                    <span className="absolute inset-x-0 bottom-[8px] transform -translate-y-1/2 border-t border-gray-400 w-full block"></span>
                    <span className='text-gray-400'>{product.description2}</span>
                </div>
                </div>
            </div>
        </div>
    );
    
    

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

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    return (
       
        <div className="card py-8">
            <div className='py-10 px-10'>
                <div className='text-lg font-light text-[#80A102]'>{t("Modern & Beautiful")}</div>
                <div className='flex flex-col md:flex-row sm:justify-between md:items-center'>
                    <div className='text-lg lg:text-3xl font-bold mb-4 md:mb-0'>{t("Top Rated Hotel")}</div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2'>
                        <button onClick={() => handleLocationClick('Dubai')} className='w-full sm:px-4 px-2 sm:text-sm text-xs font-semibold h-10 bg-white text-black hover:bg-[#80A102] hover:text-white hover:border-none text-center rounded-3xl border border-[#666666] shadow-lg'>{t("Dubai")}</button>
                        <button onClick={() => handleLocationClick('Abu Dhabi')} className='w-full sm:px-4 px-2 sm:text-sm text-xs font-semibold h-10 bg-white text-black hover:bg-[#80A102] hover:text-white hover:border-none text-center rounded-3xl border border-[#666666] shadow-lg'>{t("Abu Dhabi")}</button>
                        <button onClick={() => handleLocationClick('Al Ain')} className='w-full sm:px-4 px-2 sm:text-sm text-xs font-semibold h-10 bg-white text-black hover:bg-[#80A102] hover:text-white hover:border-none text-center rounded-3xl border border-[#666666] shadow-lg'>{t("Al Ain")}</button>
                        <button onClick={() => handleLocationClick('Fujairah')} className='w-full sm:px-4 px-2 sm:text-sm text-xs font-semibold h-10 bg-white text-black hover:bg-[#80A102] hover:text-white hover:border-none text-center rounded-3xl border border-[#666666] shadow-lg'>{t("Fujairah")}</button>
                        <button onClick={() => handleLocationClick('International')} className='w-full sm:px-4 px-2 sm:text-sm text-xs font-semibold h-10 bg-white text-black hover:bg-[#80A102] hover:text-white hover:border-none text-center rounded-3xl border border-[#666666] shadow-lg'>{t("International")}</button>
                    </div>
                </div>
            </div>
            <div className="carousel-container">
                <Carousel
                    className="carousel-custom sm:px-6 px-6"
                    value={filteredData}
                    numVisible={4}
                    numScroll={1}
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