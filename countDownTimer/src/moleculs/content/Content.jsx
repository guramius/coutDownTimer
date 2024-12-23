import Icones from "../../atoms/icones/Icones";
import Timer from "../../atoms/timer/Timer";
import bg from '../../images/bg.png';
import mountains from '../../images/mountains.png';
import star from '../../images/star.png';

const Content = () => {
    return (
        <div className="relative ">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-[-5]" src={bg} alt="background" />
            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-2]" src={star} alt="star" />
            <img className="absolute bottom-0 left-0 w-full object-cover z-[-1]" src={mountains} alt="mountains" />
            <div className="flex flex-col gap-8 justify-center items-center h-screen relative z-50">
                <div>
                    <h1 className="font-redhat font-bold mb-24 text-base sm:text-[22px] uppercase tracking-[6px] text-white">We’re launching soon</h1>
                </div>
                <div>
                    <Timer />
                </div>
                <div className="absolute bottom-4">
                    <Icones/>  
                </div>

            </div>
                          
        </div>
    );
};

export default Content;