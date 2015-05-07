_.bindAll(album, 'play', 'pause');

jQuery('#play').on('click', album.play);
jQuery('#pause').on('click', album.pause);

