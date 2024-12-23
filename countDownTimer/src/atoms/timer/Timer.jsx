import { useState, useEffect } from "react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState(172800000); 

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(timeLeft - 1000); 
        }, 1000);
    
        return () => clearInterval(interval);
    }, [timeLeft]);

    const days = Math.floor(timeLeft / 86400000); 
    const hours = Math.floor((timeLeft % 86400000) / 3600000); 
    const minutes = Math.floor((timeLeft % 3600000) / 60000); 
    const seconds = Math.floor((timeLeft % 60000) / 1000);

    return (
        <>
            <div>
                <div className="flex gap-8 mb-4">
                    <p className='textStyles'>{days}</p>
                    <p className='textStyles'>{hours}</p>
                    <p className='textStyles'>{minutes}</p>
                    <p className='textStyles'>{seconds}</p>
                </div>
                <div className="flex justify-around">
                    <p className="w-[7%] lg:text-sm text-[7px]  text-[#8385A9] font-redhat uppercase">DAYS</p>
                    <p className="lg:text-sm text-[7px]  text-[#8385A9] font-redhat uppercase">HOURS</p>
                    <p className="lg:text-sm text-[7px]  text-[#8385A9] font-redhat uppercase">MINUTES</p>
                    <p className="lg:w-[8%] w-[6%] lg:text-sm text-[7px]  text-[#8385A9] font-redhat uppercase">SECONDS</p>
                </div>
            </div>
        </>

    );
};

export default Timer;
