class Player {

    constructor(media){
        this.media = media;

    }

    play(){
        (this.media.paused) ? this.media.play() : this.media.pause()
    }

    icon(){
        if(this.media.paused){
            document.getElementById('off').style.display = 'block';
            document.getElementById('on').style.display = 'none';
        } else {
            document.getElementById('off').style.display = 'none';
            document.getElementById('on').style.display = 'block';
        }
    }
}

export default Player