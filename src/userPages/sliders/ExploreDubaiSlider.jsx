import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { t } from 'i18next';
import exploreimg from "../../assets/explore.png";

export default function ExploreDubaiSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4);
   

    const data = [
        { id: 1, image: exploreimg, title: "Deira", properties: "4,256 properties", stars: 5, reviews:"23" },
        { id: 2, image: exploreimg, title: "Downtown Dubai", properties: "4,256 properties", stars: 5, reviews:"23" },
        { id: 3, image: exploreimg, title: "Dubai Marina", properties: "4,256 properties", stars: 5, reviews:"23" },
        { id: 4, image: exploreimg, title: "Jumeirah", properties: "4,256 properties", stars: 5, reviews:"23" },
        { id: 5, image: exploreimg, title: "Business Bay", properties: "4,256 properties", stars: 5, reviews:"23" },
        { id: 6, image: exploreimg, title: "Palm Jumeirah", properties: "4,256 properties", stars: 5, reviews:"23" },
        { id: 7, image: exploreimg, title: "Palm Jumeirah", properties: "4,256 properties", stars: 5, reviews:"23" },
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
            <div className="product-image mx-[-10px] sm:mx-3 relative mb-8">
                <button className='absolute flex items-center justify-center bg-white text-gray-400 right-4 h-8 w-8 top-4 text-center rounded-full'><FaRegHeart /></button>
                <img src={product.image} alt={product.title} className="w-60 h-56 rounded-2xl" />
            
            <div className="absolute flex flex-col rounded-2xl left-0 lg:bottom-[-5px] bottom-[-10px] w-full h-[35%] bg-white bg-opacity-40 backdrop-filter backdrop-blur-md">
                <div className='flex flex-col items-start py-5 px-4'>
                <h4 className="product-title font-bold">{product.title}</h4>
                <div className='text-xs text-gray-500'>{product.properties}</div>
                </div>
                <div className='flex items-center justify-start gap-2 py-2'>
                    <div className='flex items-center text-xs bg-[#80A102] py-1 px-2 rounded-2xl absolute top-[-10px] right-2'>
                        <div className="flex">{renderStars(product.stars)}</div>
                        <div className='text-white'>({product.reviews})Reviews</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );

    return (
        <div className="card py-4 relative">
        <div className="carousel-container relative">
            <div className="absolute top-28 transform -translate-y-1/2 lg:left-10 md:left-20 sm:left-48 left-6 z-10">
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
            <div className="absolute top-28 transform -translate-y-1/2 lg:right-10 md:right-20 sm:right-48 right-6 z-10">
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
