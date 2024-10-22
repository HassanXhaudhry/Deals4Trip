import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import homes from '../../assets/homes.png';
import { NavLink } from 'react-router-dom';
import { t } from 'i18next';

export default function HomesSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4);
   
    const data = [
        {
            id: 1,
            img: homes,
            title: 'Desert Safari',
            duration: '7 Days',
            start: 5,
            rating: 4.8,
            reviews: 'Exceptional 3,014 reviews',
            date: 'Starting from',
            charges: 'AED 20.86'
        },
        {
            id: 2,
            img: homes,
            title: 'Baku and Georgia',
            duration: '7 Days',
            start: 3,
            rating: 4.8,
            reviews: 'Exceptional 3,014 reviews',
            date: 'Starting from',
            charges: 'AED 20.86'
        },
        {
            id: 3,
            img: homes,
            title: 'Staycation',
            duration: '7 Days',
            start: 4,
            rating: 4.8,
            reviews: 'Exceptional 3,014 reviews',
            date: 'Starting from',
            charges: 'AED 20.86'
        },
        {
            id: 4,
            img: homes,
            title: 'Arabian deserts',
            duration: '7 Days',
            start: 2,
            rating: 4.8,
            reviews: 'Exceptional 3,014 reviews',
            date: 'Starting from',
            charges: 'AED 20.86'
        },
        {
            id: 5,
            img: homes,
            title: 'Staycation',
            duration: '7 Days',
            start: 4,
            rating: 4.8,
            reviews: 'Exceptional 3,014 reviews',
            date: 'Starting from',
            charges: 'AED 20.86'
        },
        {
            id: 6,
            img: homes,
            title: 'Arabian deserts',
            duration: '7 Days',
            start: 2,
            rating: 4.8,
            reviews: 'Exceptional 3,014 reviews',
            date: 'Starting from',
            charges: 'AED 20.86'
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
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setVisibleItems(1);
            } else if (window.innerWidth <= 991) {
                setVisibleItems(2);
            } else {
                setVisibleItems(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
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
    const handlePrev = () => {
        setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => Math.min(data.length - visibleItems, prevIndex + 1));
    };
    const productTemplate = (product) => (
        <div className="product-item flex flex-col items-center mb-8">
            <div className="product-image mx-[-10px] sm:mx-3 relative">
                <button className='absolute flex items-center justify-center bg-white text-gray-400 right-4 h-8 w-8 top-4 text-center rounded-full'><FaRegHeart /></button>
                <img src={product.img} alt={product.title} className="w-60 h-60 rounded-2xl" />
            </div>
            <div className="product-details pt-4 shadow-lg  rounded-xl py-2 px-2">
                <h4 className="product-title font-bold">{product.title}</h4>
                <div className='text-xs text-gray-500'>{product.duration}</div>
                <div className='flex items-center justify-start gap-2 py-2'>
                    <div className='h-9 w-9 bg-[#80A102] flex justify-center items-center text-white text-center font-semibold'>{product.rating}</div>
                    <div className='flex flex-col'>
                        <div className="flex">{renderStars(product.start)}</div>
                        <div className='text-gray-500'>{product.reviews}</div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="product-description font-semibold">{product.data}</div>
                    <div className="product-description text-[#80A102] text-xs font-semibold pt-[2px]">{product.charges}</div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="card pt-4 relative">
        <div className="carousel-container relative">
            <div className="absolute top-1/3 transform -translate-y-1/2 lg:left-10 md:left-20 sm:left-48 left-6 z-10">
                <div 
                    className='h-10 w-10 bg-[#E9EAEB] rounded-full flex items-center justify-center cursor-pointer'
                    onClick={handlePrev}
                    style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
                >
                    <IoIosArrowBack className='text-black'/>
                </div>
            </div>
            <Carousel
                className="carousel-custom sm:px-6 px-4"
                value={data}
                numVisible={visibleItems}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                onPageChange={(e) => setActiveIndex(e.page)}
                page={activeIndex}
                showNavigators={false}
            />
            <div className="absolute top-1/3 transform -translate-y-1/2 lg:right-10 md:right-20 sm:right-48 right-6 z-10">
                <div 
                    className='h-10 w-10 bg-[#E9EAEB] rounded-full flex items-center justify-center cursor-pointer'
                    onClick={handleNext}
                    style={{ opacity: activeIndex === data.length - visibleItems ? 0.5 : 1 }}
                >
                    <IoIosArrowForward className='text-black'/>
                </div>
            </div>
        </div>
    </div>
    );
}
