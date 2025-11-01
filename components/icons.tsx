
import React from 'react';

interface IconProps {
    className?: string;
}

export const BuildingIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0v-4m0 4h5m0 0v-4m0 4H5m9 0v-4m0 4h2m-2-4h2m-2-4V5m0 12v-4m0 0H9" />
    </svg>
);

export const Bars3Icon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const WrenchScrewdriverIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.528-1.036.94-2.13.992-3.217l-.001-2.06a5.814 5.814 0 00-2.308-5.138 5.814 5.814 0 00-5.138-2.308l-2.06.001a5.814 5.814 0 00-3.217.992l-3.03 2.496m11.42 15.17l-5.877 5.877M11.42 15.17l5.877-5.877" />
    </svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

export const PaintBrushIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.62-3.385m0 5.043a15.998 15.998 0 01-3.388-1.62m5.043-.025a15.998 15.998 0 00-3.385-1.621m-5.043.025a15.998 15.998 0 01-1.622-3.385m-1.62 3.385a15.998 15.998 0 01-3.388-1.621m16.5 9.585a2.25 2.25 0 01-2.25 2.25h-5.379a2.25 2.25 0 01-1.591-.659l-4.5-4.5a2.25 2.25 0 010-3.182l5.379-5.379a2.25 2.25 0 013.182 0l4.5 4.5a2.25 2.25 0 01.659 1.591v5.379z" />
    </svg>
);

export const Cog8ToothIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.007 1.11-1.227l.128-.052c.635-.248 1.298-.248 1.933 0l.128.052c.55.22 1.02.685 1.11 1.227l.068.416c.46.282.91.616 1.32.99l.377.362c.52.502.94 1.134 1.13 1.817l.05.158c.247.635.247 1.299 0 1.934l-.05.158c-.19.683-.61 1.315-1.13 1.817l-.377.362a6.93 6.93 0 01-1.32.99l-.068.416c-.09.542-.56 1.007-1.11 1.227l-.128.052c-.635.248-1.298.248-1.933 0l-.128-.052c-.55-.22-1.02-.685-1.11-1.227l-.068-.416a6.93 6.93 0 01-1.32-.99l-.377-.362c-.52-.502-.94-1.134-1.13-1.817l-.05-.158c-.247-.635-.247-1.299 0-1.934l.05-.158c.19-.683.61-1.315 1.13-1.817l.377-.362c.41-.374.86-.708 1.32-.99l.068-.416zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const CloudIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M16.75 13.96c.25.13.43.2.5.33.07.13.07.68-.16 1.32-.23.64-.75 1.16-1.29 1.32-.54.16-1.15.2-1.8.13-.65-.07-1.32-.23-2.03-.53-.71-.3-1.36-.7-1.93-1.2-2.25-1.97-3.5-4.4-3.5-4.4-.13-.25-.26-.5-.36-.72-.1-.22-.2-.44-.2-.66s.03-.4.1-.56.16-.3.29-.42.3-.2.46-.26.36-.1.56-.1h.5c.2 0 .38.03.53.1.15.07.26.13.33.2.1.1.13.16.2.29s.1.26.16.42c.07.16.13.35.2.56.07.2.13.4.2.62.1.2.2.4.26.6.1.2.13.3.16.4s0 .23-.03.33c-.03.1-.1.2-.16.3-.07.1-.13.16-.23.26l-.2.16c-.07.07-.1.13-.1.2s0 .13.03.2c.03.07.07.13.13.23.23.32.5.65.83 1 .32.35.62.62.9.83.2.13.3.2.4.23s.2.07.3.07c.1 0 .2-.03.3-.07.1-.03.16-.07.2-.13l.16-.23c.07-.1.13-.16.23-.2.1-.03.2-.07.3-.07s.2.03.3.07.2.1.26.16.13.16.2.23c.07.07.13.16.16.26.1.16.16.3.2.46.03.15.07.3.07.46s-.03.3-.07.42-.1.23-.2.33c-.07.1-.16.2-.26.26-.1.07-.2.13-.3.16-.1.03-.2.07-.3.07-.13 0-.26-.03-.36-.07zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    </svg>
);
