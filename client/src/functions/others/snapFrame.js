import unparseTime from "./unparseTime"

const setFrame = (canvas, scale, video) => { 
    canvas.style.width = document.querySelector('.div-canvas').offsetWidth + 'px'
    canvas.width = scale * document.querySelector('.div-canvas').offsetWidth
    canvas.style.height = ((canvas.width / scale) * (video.videoHeight / video.videoWidth)) + 'px'
    canvas.height = (canvas.width * (video.videoHeight / video.videoWidth) * scale)
    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0, canvas.width, canvas.height)
}

const snapFrame = (url, selectedTime) => {
    const canvas = document.querySelector('canvas')

    if (canvas) {
        const video = document.createElement('video')
        const scale = 2.4
        video.src = url

        video.onloadeddata = _ => {
            if (!isNaN(video.duration)) {
                video.currentTime = unparseTime(selectedTime)
            }
        }

        video.onseeked = _ => {
            setFrame(canvas, scale, video)
        }

        document.querySelector('body').onresize = _ => {
            setFrame(canvas, scale, video)
        }
    }
}

export default snapFrame