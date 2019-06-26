const ConvertImage = (size, path) => {
    let fullImg = 'http://image.tmdb.org/t/p/w300' + path;
    switch (size) {
        case 500:
            return 'http://image.tmdb.org/t/p/w500' + path;
        case 400:
            return 'http://image.tmdb.org/t/p/w400' + path;
        case 300:
            return 'http://image.tmdb.org/t/p/w300' + path;
        case 200:
            return 'http://image.tmdb.org/t/p/w200' + path;
        case 'original':
            return 'http://image.tmdb.org/t/p/original' + path;
        default:
            return fullImg;
    }
};

export default ConvertImage;