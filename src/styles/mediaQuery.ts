export const PC = 'pc';
export const PC_SMALL = 'pcSmall';
export const TABLET = 'tablet';
export const MOBILE = 'mobile';

export const breakpoints = {
    pc: 1440,
    pcSmall: 1150,
    tablet: 800,
    mobile: 592,
};

export const mediaQuery = (key: keyof typeof breakpoints) => {
    return `@media (max-width: ${breakpoints[key]}px)`;
};
