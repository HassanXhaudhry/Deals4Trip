import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from '../../assets/slider2_1st.png';
import img2 from '../../assets/slider2_2nd.png';
import img3 from '../../assets/slider2_3rd.png';
import img4 from '../../assets/slider2_4th.png';
import { NavLink } from 'react-router-dom';
import { t } from 'i18next';

export default function Slider2() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4);
   
    const data = [
        {
            id: 1,
            img: img1,
            title: 'Desert Safari',
            duration: '7 Days',
            start: 5,
            rating: 4.8,
            description: 'Exceptional 3,014 reviews',
            description1: 'Starting from',
            description2: 'AED 20.86'
        },
        {
            id: 2,
            img: img2,
            title: 'Baku and Georgia',
            duration: '7 Days',
            start: 3,
            rating: 4.8,
            description: 'Exceptional 3,014 reviews',
            description1: 'Starting from',
            description2: 'AED 20.86'
        },
        {
            id: 3,
            img: img3,
            title: 'Staycation',
            duration: '7 Days',
            start: 4,
            rating: 4.8,
            description: 'Exceptional 3,014 reviews',
            description1: 'Starting from',
            description2: 'AED 20.86'
        },
        {
            id: 4,
            img: img4,
            title: 'Arabian deserts',
            duration: '7 Days',
            start: 2,
            rating: 4.8,
            description: 'Exceptional 3,014 reviews',
            description1: 'Starting from',
            description2: 'AED 20.86'
        },
        {
            id: 5,
            img: img1,
            title: 'Staycation',
            duration: '7 Days',
            start: 4,
            rating: 4.8,
            description: 'Exceptional 3,014 reviews',
            description1: 'Starting from',
            description2: 'AED 20.86'
        },
        {
            id: 6,
            img: img2,
            title: 'Arabian deserts',
            duration: '7 Days',
            start: 2,
            rating: 4.8,
            description: 'Exceptional 3,014 reviews',
            description1: 'Starting from',
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
        <div className="product-item flex flex-col items-center">
            <div className="product-image mx-[-10px] sm:mx-3 relative">
                <div className='absolute flex items-center justify-center bg-yellow h-7 w-28 top-4 text-center rounded-r-2xl'>Breakfast</div>
                <button className='absolute flex items-center justify-center bg-white text-gray-400 right-4 h-8 w-8 top-4 text-center rounded-full'><FaRegHeart /></button>
                <img src={product.img} alt={product.title} className="w-60 h-60 rounded-2xl" />
            </div>
            <div className="product-details pt-4">
                <h4 className="product-title font-bold">{product.title}</h4>
                <div className='text-xs text-gray-500'>{product.duration}</div>
                <div className='flex items-center justify-start gap-2 py-2'>
                    <div className='h-9 w-9 bg-[#80A102] flex justify-center items-center text-white text-center font-semibold'>{product.rating}</div>
                    <div className='flex flex-col'>
                        <div className="flex">{renderStars(product.start)}</div>
                        <div className='text-gray-500'>{product.description}</div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="product-description font-semibold">{product.description1}</div>
                    <div className="product-description text-[#80A102] text-xs font-semibold pt-[2px]">{product.description2}</div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="card py-8 relative">
        <div className='py-10 px-16'>
            <div className='text-lg font-light text-[#80A102]'>{t("Modern & Beautiful")}</div>
            <div className='flex flex-col md:flex-row sm:justify-between md:items-center'>
                <div className='text-2xl sm:text-4xl font-bold mb-4 md:mb-0'>{t("Top Best Seller Tour")}</div>
                <NavLink to='/'>
                    <button className='w-full px-4 text-sm font-semibold h-10 bg-white text-black hover:bg-[#80A102] hover:text-white hover:border-none text-center rounded-3xl border border-[#666666] shadow-lg flex items-center justify-center'>
                        <div className="mr-2">{t("View all Tour")}</div>
                        <GoArrowUpRight className='inline-block text-lg' />
                    </button>
                </NavLink>
            </div>
        </div>
        <div className="carousel-container relative">
            <div className="absolute top-1/3 transform -translate-y-1/2 lg:left-10 md:left-20 sm:left-48 left-8 z-10">
                <div 
                    className='h-10 w-10 bg-[#80A102] rounded-full flex items-center justify-center cursor-pointer'
                    onClick={handlePrev}
                    style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
                >
                    <IoIosArrowBack className='text-white'/>
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
            <div className="absolute top-1/3 transform -translate-y-1/2 lg:right-10 md:right-20 sm:right-48 right-8 z-10">
                <div 
                    className='h-10 w-10 bg-[#80A102] rounded-full flex items-center justify-center cursor-pointer'
                    onClick={handleNext}
                    style={{ opacity: activeIndex === data.length - visibleItems ? 0.5 : 1 }}
                >
                    <IoIosArrowForward className='text-white'/>
                </div>
            </div>
        </div>
    </div>
    );
}
