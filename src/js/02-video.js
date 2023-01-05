import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
import storage from './utils/localStorage';

const VIDEO_CURRENT_TIME = 'videoplayer-current-time' || 0;

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = ({ seconds }) => {
  if (!seconds) return;

  storage.save(VIDEO_CURRENT_TIME, seconds);
};

player.setCurrentTime(storage.get(VIDEO_CURRENT_TIME) || 0);

player.on('timeupdate', throttle(onPlay, 1000));
