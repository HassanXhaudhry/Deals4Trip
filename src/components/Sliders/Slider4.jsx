import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { IoIosStar } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from '../../assets/person1.png';
import img2 from '../../assets/person2.png';
import img3 from '../../assets/person3.png';
import img4 from '../../assets/person4.png';
import img5 from '../../assets/person5.jpg';
import img6 from '../../assets/person6.jpg';
import img7 from '../../assets/person7.jpg';
import img8 from '../../assets/person8.jpg';
import img9 from '../../assets/person9.jpg';
import img10 from '../../assets/person10.jpg';
import img11 from '../../assets/person11.jpg';
import img12 from '../../assets/person12.jpg';
import img13 from '../../assets/person13.jpg';
import img14 from '../../assets/person14.jpg';
import img15 from '../../assets/person15.jpg';
import img16 from '../../assets/person16.jpg';
import img17 from '../../assets/person17.jpg';
import img18 from '../../assets/person18.jpg';
import { useTranslation } from 'react-i18next';

export default function Slider4() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4);

    const data = [
        {
            id: 1,
            description: 'Desert Safari',
            start: 5,
            img: img1,
            name: 'Jane Smith',
            job: 'Freelance Designer',
        },
        {
            id: 2,
            description: 'It was amazing! they handled everything perfectly!!!',
            start: 5,
            img: img2,
            name: 'Tom Williams',
            job: 'Software Developer',
        },
        {
            id: 3,
            description: 'It was a great experience staying in Abu dhabi with deals4 trips',
            start: 5,
            img: img3,
            name: 'Michael Brown',
            job: 'Online Entrepreneur',
        },
        {
            id: 4,
            description: 'Very good agency have the best and good deals interms of hotels and tickets',
            start: 4,
            img: img4,
            name: 'Sarah Johnson',
            job: 'Blogger',
        },
        {
            id: 5,
            description: 'Nadia is simply the best. Nothing too much trouble',
            start: 5,
            img: img5,
            name: 'Temmie Ladeh',
            job: 'Meakup Artist',
        },
        {
            id: 6,
            description: 'Thank you a lot Nadia we went many times with you to hotels , trips and many more We enjoyed every minute ,,',
            start: 4,
            img: img6,
            name: 'Gary Hill',
            job: 'Lecturer',
        },
        {
            id: 7,
            description: 'It was the best tour planned loved the services. Highly recommended',
            start: 5,
            img: img7,
            name: 'Jack Leo',
            job: 'Amazon DropShipper',
        },
        {
            id: 8,
            description: 'Its awesomeness and great planner with value for money',
            start: 5,
            img: img8,
            name: 'Olivia Lily',
            job: 'Human Resource',
        },
        {
            id: 9,
            description: 'It was an awesome trip to parks and resorts with a stay in lapita ….thanks much dear for the amazing deals',
            start: 5,
            img: img9,
            name: 'James Harry',
            job: 'Textile Engineer',
        },
        {
            id: 10,
            description: 'You are very welcome, Nadia! We have shared so many wonderful experiences with you, from hotel stays to unforgettable trips. Every moment has been a true joy!',
            start: 4,
            img: img10,
            name: 'Aaron Smith',
            job: 'Banker',
        },
        {
            id: 11,
            description: 'Nadia helped us organise and set up a corporate event. She was brilliant and on dot with her coordination. Thank you Deals4trip team for such a large scale event would not be possible without you.',
            start: 5,
            img: img11,
            name: 'Eva Hazel',
            job: 'YouTuber',
        },
        {
            id: 12,
            description: 'An amazing company with a very fast reply and perfect service. We loved our stay in Eid at Fujairah and it was way less money to book through them 😍',
            start: 5,
            img: img12,
            name: 'Adam Lucas',
            job: 'Business owner',
        },{
            id: 13,
            description: 'Sohail great driver and accommodating. Had a great time dune bashing and sand-boarding',
            start: 4,
            img: img13,
            name: 'Andrew Wyatt',
            job: 'Ethical Hacker',
        },
        {
            id: 14,
            description: 'Thank you Nadia for a wonderful support right from creating the itinerary till we finally completed our visit. Seamless experience and very efficient rates. God Bless You and keep up the good work👍',
            start: 5,
            img: img14,
            name: 'Noah Jhon',
            job: 'IT Specialist',
        },
        {
            id: 15,
            description: 'Deal4Trip took me to places I never knew existed and had the best times no matter what. everytime i felt the need to go somewhere new or have a luxury holiday i’d check out deals4trips and they take me to the best places with better discounts.',
            start: 5,
            img: img15,
            name: 'Thomas Aiden',
            job: 'Doctor',
        },
        {
            id: 16,
            description: 'We have used Deals4Trip several times, be it for entertainment tickets, hotel staycations and holiday packages, and they have always come through and organised everything in a professional manner.',
            start: 4,
            img: img16,
            name: 'Alex James',
            job: 'Civil Engineer',
        },
        {
            id: 17,
            description: 'Nadia is always responsive and helps us find the best deals.',
            start: 5,
            img: img17,
            name: 'Elena Clara',
            job: 'Nurse',
        },
        {
            id: 17,
            description: 'Nadia is always quick to respond and consistently helps us discover the best deals.',
            start: 5,
            img: img18,
            name: 'Charlie George',
            job: 'Chartered Accountant',
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
        <div className="product-item flex flex-col items-center my-4">
    <div className='h-72 w-56 flex flex-col px-6 py-6 items-center justify-center bg-[#EDF2DB] border border-[#80A102] shadow-md rounded-md'>
        <div className='text-xs flex flex-col items-center text-center mb-2'>
            {t(product.description)}
        </div>
        <div className="flex justify-center mb-2">
            {renderStars(product.start)}
        </div>
        <div className="product-image relative mb-2">
            <img src={product.img} alt='' className="w-12 h-12 rounded-full" />
        </div>
        <div className='flex flex-col items-center text-center gap-1'>
            <div className="text-xs font-semibold">{product.name}</div>
            <div className="text-xs text-gray-600">{product.job}</div>
        </div>
    </div>
</div>
    );


    return (
        <div className="card pb-16">
            <div className='py-10 px-10'>
                <div className='flex flex-col md:flex-row sm:justify-between md:items-center md:mx-2 mx-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-2xl sm:text-4xl font-bold mb-4 md:mb-0'>{t("Testimonial")}</div>
                        <div className='font-light'>{t("Don't just take our word for it - see what actual users of our service have to say about their experience.")}</div>
                    </div>
                    <div className='flex gap-4 items-center justify-center md:mt-0 mt-4'>
                        <div 
                            className='h-10 w-10 bg-[#EDF2DB] rounded-sm flex items-center justify-center cursor-pointer'
                            onClick={handlePrev}
                            style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
                        >
                            <IoIosArrowBack className='text-[#80A102]'/>
                        </div>
                        <div 
                            className='h-10 w-10 bg-[#EDF2DB] rounded-sm flex items-center justify-center cursor-pointer'
                            onClick={handleNext}
                            style={{ opacity: activeIndex === data.length - visibleItems ? 0.5 : 1 }}
                        >
                            <IoIosArrowForward className='text-[#80A102]'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-container relative">
                <Carousel
                    className="carousel-custom px-6"
                    value={data}
                    numVisible={visibleItems}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
                    onPageChange={(e) => setActiveIndex(e.page)}
                    page={activeIndex}
                    showNavigators={false}
                />
            </div>
        </div>
    );
}