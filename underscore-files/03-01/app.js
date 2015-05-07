var nowPlaying = function(username) {
    return username + '，您正在收听的专辑是：' + this.title + '，来自：' + this.artist;
};

nowPlaying = _.bind(nowPlaying, album, 'wanghao');