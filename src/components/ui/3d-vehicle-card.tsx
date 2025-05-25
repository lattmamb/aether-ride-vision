
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Battery, Timer } from 'lucide-react';
import { Vehicle } from '@/types';

interface Vehicle3DCardProps {
  vehicle: Vehicle;
}

export const Vehicle3DCard: React.FC<Vehicle3DCardProps> = ({ vehicle }) => {
  return (
    <div className="parent w-[290px] h-[300px]" style={{ perspective: '1000px' }}>
      <div className="card h-full rounded-[50px] transition-all duration-500 shadow-[rgba(155,135,245,0)_40px_50px_25px_-40px,rgba(155,135,245,0.2)_0px_25px_25px_-5px] hover:shadow-[rgba(155,135,245,0.3)_30px_50px_25px_-40px,rgba(155,135,245,0.1)_0px_25px_30px_0px]"
           style={{
             background: 'linear-gradient(135deg, rgb(155, 135, 245) 0%, rgb(126, 105, 171) 100%)',
             transformStyle: 'preserve-3d'
           }}>
        
        {/* Glass overlay */}
        <div className="glass absolute inset-2 rounded-[55px] border-l border-b border-white transition-all duration-500"
             style={{
               borderTopRightRadius: '100%',
               background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%)',
               transform: 'translate3d(0px, 0px, 25px)',
               transformStyle: 'preserve-3d'
             }}>
        </div>

        {/* Content */}
        <div className="content pt-[100px] pr-[60px] pl-[30px]"
             style={{ transform: 'translate3d(0, 0, 26px)' }}>
          <span className="title block text-[#4c1d95] font-black text-xl">
            {vehicle.model}
          </span>
          <span className="text block text-[rgba(76,29,149,0.764)] text-[15px] mt-5">
            {vehicle.tagline}
          </span>
        </div>

        {/* Bottom section */}
        <div className="bottom absolute bottom-5 left-5 right-5 flex items-center justify-between p-[10px_12px]"
             style={{ 
               transform: 'translate3d(0, 0, 26px)',
               transformStyle: 'preserve-3d'
             }}>
          
          {/* View more button */}
          <Link to={`/vehicles/${vehicle.id}`} 
                className="view-more flex items-center w-[40%] justify-end transition-all duration-200 hover:translate-z-[10px]">
            <button className="view-more-button bg-none border-none text-[#7c3aed] font-bold text-xs">
              VIEW MORE
            </button>
            <ArrowRight className="ml-1 h-[15px] w-[15px] stroke-[#7c3aed] stroke-[3px]" />
          </Link>

          {/* Performance stats */}
          <div className="social-buttons-container flex gap-[10px]"
               style={{ transformStyle: 'preserve-3d' }}>
            
            <div className="social-button w-[30px] aspect-square p-[5px] bg-white rounded-full border-none grid place-content-center shadow-[rgba(155,135,245,0.5)_0px_7px_5px_-5px] transition-transform duration-200 delay-[0.4s] hover:bg-black group">
              <Battery className="w-[15px] fill-[#6d28d9] group-hover:fill-white" />
            </div>
            
            <div className="social-button w-[30px] aspect-square p-[5px] bg-white rounded-full border-none grid place-content-center shadow-[rgba(155,135,245,0.5)_0px_7px_5px_-5px] transition-transform duration-200 delay-[0.6s] hover:bg-black group">
              <Zap className="w-[15px] fill-[#6d28d9] group-hover:fill-white" />
            </div>
            
            <div className="social-button w-[30px] aspect-square p-[5px] bg-white rounded-full border-none grid place-content-center shadow-[rgba(155,135,245,0.5)_0px_7px_5px_-5px] transition-transform duration-200 delay-[0.8s] hover:bg-black group">
              <Timer className="w-[15px] fill-[#6d28d9] group-hover:fill-white" />
            </div>
          </div>
        </div>

        {/* Logo circles */}
        <div className="logo absolute right-0 top-0"
             style={{ transformStyle: 'preserve-3d' }}>
          
          <span className="circle circle1 block absolute aspect-square rounded-full top-2 right-2 w-[170px] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] bg-[rgba(155,135,245,0.2)] transition-all duration-500"
                style={{ transform: 'translate3d(0, 0, 20px)' }}></span>
          
          <span className="circle circle2 block absolute aspect-square rounded-full top-[10px] right-[10px] w-[140px] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[1px] bg-[rgba(155,135,245,0.2)] transition-all duration-500 delay-[0.4s]"
                style={{ transform: 'translate3d(0, 0, 40px)' }}></span>
          
          <span className="circle circle3 block absolute aspect-square rounded-full top-[17px] right-[17px] w-[110px] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] bg-[rgba(155,135,245,0.2)] transition-all duration-500 delay-[0.8s]"
                style={{ transform: 'translate3d(0, 0, 60px)' }}></span>
          
          <span className="circle circle4 block absolute aspect-square rounded-full top-[23px] right-[23px] w-[80px] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] bg-[rgba(155,135,245,0.2)] transition-all duration-500 delay-[1.2s]"
                style={{ transform: 'translate3d(0, 0, 80px)' }}></span>
          
          <span className="circle circle5 block absolute aspect-square rounded-full top-[30px] right-[30px] w-[50px] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] bg-[rgba(155,135,245,0.2)] transition-all duration-500 delay-[1.6s] grid place-content-center"
                style={{ transform: 'translate3d(0, 0, 100px)' }}>
            <div className="text-white font-bold text-xs">${vehicle.price}</div>
          </span>
        </div>
      </div>

      {/* CSS-in-JS for hover effects */}
      <style>{`
        .parent:hover .card {
          transform: rotate3d(1, 1, 0, 30deg);
        }
        
        .parent:hover .card .bottom .social-buttons-container .social-button {
          transform: translate3d(0, 0, 50px);
          box-shadow: rgba(155, 135, 245, 0.2) -5px 20px 10px 0px;
        }
        
        .parent:hover .card .logo .circle2 {
          transform: translate3d(0, 0, 60px);
        }
        
        .parent:hover .card .logo .circle3 {
          transform: translate3d(0, 0, 80px);
        }
        
        .parent:hover .card .logo .circle4 {
          transform: translate3d(0, 0, 100px);
        }
        
        .parent:hover .card .logo .circle5 {
          transform: translate3d(0, 0, 120px);
        }
      `}</style>
    </div>
  );
};

export default Vehicle3DCard;
