"use client";
import { useState, useEffect, useRef } from 'react';

interface AnimatedNotificationsProps {
  mode?: 'loop' | 'scroll';
  delay?: number;
}

const notifications = [
  {
    id: 1,
    bg: '#E8F5E9',
    iconBg: '#4CAF50',
    icon: 'check',
    title: 'Dose Taken',
    subtitle: '(On Time)',
    description: 'Mom took their 9:30 AM dose of Metformin.',
    time: '2h ago'
  },
  {
    id: 2,
    bg: '#FFF3E0',
    iconBg: '#FF9800',
    icon: 'check',
    title: 'Dose Taken',
    subtitle: '(Delayed)',
    description: 'Mom took their 10:00 PM dose of Metformin.',
    time: '1d ago'
  },
  {
    id: 3,
    bg: '#FFEBEE',
    iconBg: '#F44336',
    icon: 'alert',
    title: 'Critical Miss',
    subtitle: '(Missed)',
    description: 'Dad Missed their 10:00 PM dose of Dolo 650.',
    time: '3h ago'
  }
];

// Reusable Phone Mockup Component
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: '320px', height: '650px' }}>
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-[50px] shadow-2xl p-3">
        {/* Screen */}
        <div className="relative w-full h-full bg-gradient-to-br from-teal-400 to-cyan-500 rounded-[42px] overflow-hidden">
           {/* Notch */}
           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10">
             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-800 rounded-full"></div>
           </div>
          
          {/* Status Bar */}
          <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-4 text-white text-xs z-20">
            <span className="ml-2">8:45</span>
            <div className="flex gap-1 items-center mr-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <div className="w-6 h-3 border-2 border-white rounded-sm relative">
                <div className="absolute inset-0.5 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="absolute top-12 left-0 right-0 bottom-0 overflow-hidden px-4">
            {children}
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
        </div>

        {/* Side Buttons */}
        <div className="absolute -left-1 top-32 w-1 h-8 bg-gray-800 rounded-l"></div>
        <div className="absolute -left-1 top-44 w-1 h-12 bg-gray-800 rounded-l"></div>
        <div className="absolute -left-1 top-60 w-1 h-12 bg-gray-800 rounded-l"></div>
        <div className="absolute -right-1 top-44 w-1 h-16 bg-gray-800 rounded-r"></div>
      </div>
    </div>
  );
}

export default function AnimatedNotifications({ 
  mode = 'loop', 
  delay = 2000 
}: AnimatedNotificationsProps) {
  const [isVisible, setIsVisible] = useState(mode === 'loop');
  const [hasTriggered, setHasTriggered] = useState(false);
  const [visibleNotifications, setVisibleNotifications] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode === 'scroll') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTriggered) {
              setIsVisible(true);
              setHasTriggered(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, [mode, hasTriggered]);

  useEffect(() => {
    if (!isVisible) return;

    let interval: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;

    const showNotifications = () => {
      setVisibleNotifications([]);
      let currentIndex = 0;
      
      interval = setInterval(() => {
        if (currentIndex < notifications.length) {
          setVisibleNotifications(prev => [...prev, currentIndex]);
          currentIndex++;
        } else {
          clearInterval(interval);
          if (mode === 'loop') {
            // Wait before clearing and restarting
            restartTimeout = setTimeout(() => {
              showNotifications();
            }, delay * 2);
          }
        }
      }, delay);
    };

    showNotifications();

    return () => {
      if (interval) clearInterval(interval);
      if (restartTimeout) clearTimeout(restartTimeout);
    };
  }, [isVisible, mode, delay]);
  return (
    <div ref={sectionRef} className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            See It In Action
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our smart notifications keep you connected with your loved ones' medication schedule in real-time.
          </p>
        </div>

        {/* Phone with Notifications */}
        <div className="flex justify-center">
          <PhoneMockup>
            {/* Time Display */}
            <div className="text-center mb-6 mt-8">
              <div className="w-8 h-8 mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white text-5xl font-light">08:45</p>
              <p className="text-white/70 text-sm mt-1">Thursday, October 16</p>
            </div>

            {/* Notification Cards */}
            <div className="space-y-3 mt-8">
              {visibleNotifications.map((notifIndex) => {
                const notification = notifications[notifIndex % notifications.length];
                const uniqueKey = `${notification.id}-${notifIndex}`;
                
                return (
                  <div
                    key={uniqueKey}
                    className="animate-slideIn"
                    style={{
                      animation: 'slideIn 0.5s ease-out forwards',
                      opacity: 0
                    }}
                  >
                    <div 
                      className="rounded-2xl p-3 shadow-lg backdrop-blur-xl"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                    >
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: notification.iconBg }}
                        >
                          {notification.icon === 'check' ? (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 text-left min-w-0">
                          <p className="text-gray-900 font-semibold text-sm leading-tight">
                            {notification.title} <span className="text-gray-500 font-normal">{notification.subtitle}</span>
                          </p>
                          <p className="text-gray-600 text-xs mt-1 leading-snug">
                            {notification.description}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </PhoneMockup>
        </div>

        {/* Bottom Text */}
        <div className="mt-12">
          <p className="text-gray-600 text-base lg:text-lg">
            Stay connected and informed with real-time updates
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}