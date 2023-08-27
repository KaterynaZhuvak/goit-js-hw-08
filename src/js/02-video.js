import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 1140
});


const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('play', onPlay);

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime).then(function (seconds) {
});
