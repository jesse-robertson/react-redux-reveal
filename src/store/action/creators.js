import {
    NEXT_SLIDE,
    PREVIOUS_SLIDE,
    SET_SLIDE_COUNT
} from './types';

export const nextSlide = () => ({type:NEXT_SLIDE})
export const previousSlide = () => ({type:PREVIOUS_SLIDE})
export const setSlideCount = (slideCount) => ({
    type: SET_SLIDE_COUNT,
    payload: {slideCount}
});