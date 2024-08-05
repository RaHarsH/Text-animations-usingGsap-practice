import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    
    const contentRef = useRef(null);
    const contentRef2 = useRef(null);
    const paraRef = useRef(null);
    useEffect(() => {
        const splitText = new SplitType(textRef1.current, {types: 'chars'});
        gsap.fromTo(splitText.chars, {
            x:'30%',
            y: '100%',
            opacity: 0,
        },
    {
        x: '0%',
        y:'0%',
        opacity: 1,
        stagger: 0.05,
        duration: 1.5,
        ease: 'bounce',
        // repeat: Infinity,
        scrollTrigger: {
            trigger: textRef1.current,
            start: 'top 40%',
            end: 'top 0%',
            scrub: 3,
            markers: false,
            toggleActions: 'play none none reverse'
        }
    })

    const splitpara = new SplitType(paraRef.current, {types: 'chars'});
    gsap.fromTo(splitpara.chars, {
        color: '#464242',
        // y: '100%'
    }, {
        y: '0%',
        opacity: 1,
        color: 'white',
        stagger: 0.2,
        duration: 1.5,
        ease: 'bounce',
        scrollTrigger: {
            trigger: paraRef.current,
            start: 'top 60%',
            end: "top 50%",
            scrub: 4,
            toggleActions: 'play none none reverse'
        }
    })


    const splitText2 = new SplitType(textRef2.current, {types: 'chars'})
    gsap.fromTo(splitText2.chars, {
        x: '100%',
        opacity: 0,
    }, {
        x: '0%',
        opacity: 1,
        duration: 1.5,
        stagger: 0.05,
        ease: 'elastic.in',
        scrollTrigger: {
            trigger: textRef2.current,
            start: 'top 100%',
            end: 'top 20%',
            scrub: 1,
            markers: false,
            toggleActions: 'play none none reverse'
        }
    })

    const splitContent = new SplitType(contentRef.current, {types: 'lines'})

    gsap.fromTo(splitContent.lines, {
        y: '100%',
        opacity: 0,
        color: '#464242',
    },{
        y: '0%',
        opacity: 1,
        color: 'white',
        stagger: 0.5,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 100%',
            end: 'top 30%',
            markers: false,
            toggleActions: 'play none none reverse',
            scrub: 2,
        }
    })

    const splitText3 = new SplitType(textRef3.current, {types: 'chars'})

    gsap.fromTo(splitText3.chars, {
        color: '#464242',
    },{
        y: '0%',
        opacity: 1,
        color: 'white',
        stagger: 0.5,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: textRef3.current,
            start: 'top 80%',
            end: 'top 20%',
            markers: false,
            toggleActions: 'play none none reverse',
            scrub: 2,
        }
    })

    const splitContent2 = new SplitType(contentRef2.current, {types: 'lines'})

    gsap.fromTo(splitContent2.lines, {
        y: '100%',
        opacity: 0,
        color: '#464242',
    },{
        y: '0%',
        opacity: 1,
        color: 'white',
        stagger: 0.5,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: contentRef2.current,
            start: 'top 100%',
            end: 'top 30%',
            markers: false,
            toggleActions: 'play none none reverse',
            scrub: 2,
        }
    })
        
    }, [])
    return (
        <div className='home'>
            <h2>Scroll to view text animation</h2>
            <div className="text-container1">
                <h1 ref={textRef1}>This is text animation 1</h1>
                <p ref={paraRef}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sed ipsa. Delectus possimus praesentium non aperiam quo, amet eaque laudantium dolorum? Ad, ratione? Natus et ratione ut quisquam porro, veniam debitis? Ut explicabo debitis accusamus! Mollitia enim distinctio fuga odio quidem! Asperiores quae deserunt iure recusandae maiores repellendus dolorum ut quia temporibus et, maxime eveniet. Ex molestias consequatur, minus praesentium, obcaecati iure magnam temporibus vel a quidem ab dicta delectus rem sit nam? Corrupti alias in saepe atque officia quasi est at. Maxime dolorum harum vel ea, iure nisi iusto repudiandae corporis nemo numquam, ducimus architecto eum quidem laudantium illo.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quam, dolorum commodi iste quibusdam ipsa nesciunt unde explicabo neque minima ab et aut iure eligendi vel, sint omnis. Blanditiis, ab velit! Obcaecati, aperiam ipsum fugiat in doloremque iusto ducimus exercitationem error similique et cupiditate repudiandae enim ab? Voluptatem, fuga reprehenderit!
                </p>
            </div>
            
            <div className="text-container2">
                <h1 ref={textRef2}>This is text animation 2</h1>
                <p ref={contentRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab impedit cumque qui! Nobis, quo commodi culpa neque voluptates voluptas sint dolor incidunt dolorem vitae, optio expedita aut illo aperiam error laboriosam necessitatibus est nemo sit libero. Delectus nisi sit modi quaerat adipisci. Odio est minima saepe itaque corporis ad dolorum reiciendis, id, ut labore similique quam corrupti facilis cupiditate suscipit officia aliquam ducimus voluptas laboriosam! Cum quisquam quasi molestias dolorum amet quas tempore optio eveniet ipsa repellendus, quam nulla quidem, voluptas ab deserunt perspiciatis fugiat ipsam aperiam fugit. Ab neque, dolor nam tenetur quaerat totam nisi deleniti unde. Et, rerum?</p>
            </div>
            
            <div className="text-container3">
                <h1 ref={textRef3}>This is text animation 3</h1>
                <p ref={contentRef2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab impedit cumque qui! Nobis, quo commodi culpa neque voluptates voluptas sint dolor incidunt dolorem vitae, optio expedita aut illo aperiam error laboriosam necessitatibus est nemo sit libero. Delectus nisi sit modi quaerat adipisci. Odio est minima saepe itaque corporis ad dolorum reiciendis, id, ut labore similique quam corrupti facilis cupiditate suscipit officia aliquam ducimus voluptas laboriosam! Cum quisquam quasi molestias dolorum amet quas tempore optio eveniet ipsa repellendus, quam nulla quidem, voluptas ab deserunt perspiciatis fugiat ipsam aperiam fugit. Ab neque, dolor nam tenetur quaerat totam nisi deleniti unde. Et, rerum?</p>
            </div>
        </div>
    );
};

export default Home;
