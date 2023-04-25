import {PROGRESS_BAR_ID} from '../constants.js'

// function progressBar line
export const changeProgress = (progress) => {
    const progressbar = document.getElementById(PROGRESS_BAR_ID)
      progressbar.style.width = `${progress}%`; 

    };