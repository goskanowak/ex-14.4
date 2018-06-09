const movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Movie about the wizard',
        image: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/box_620_330/image.jpg',
        alt: 'Harry Potter'
    },
    {
        id: 2,
        title: 'Lion king',
        desc: 'Movie about the savannah king',
        image: 'https://cdn.galleries-dev.smcloud.net/t/galleries/gf-CG8m-voqq-EoeZ_krol-lew-664x0-nocrop.jpg',
        alt: 'Lion King'
    },
    {
        id: 3,
        title: 'Lord of the Ring',
        desc: 'Movie about the ring of power',
        image: 'https://i.cdn29.hu/apix_collect_c/1405/a-gyuruk-ura/a_gyuruk_ura_screenshot_20171104095103_1_original_760x425_cover.jpg',
        alt: 'Lord of the Ring'
    }
];

const MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        const movieElements = this.props.movies.map(function(movie) {
            return React.createElement(Movie, {movie: movie, key: movie.id});
        });
        return (
            React.createElement('ul', {}, movieElements)
     );
   }
 });

const Movie = React.createClass ({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {movieTitle: this.props.movie.title}),
                React.createElement(MovieDesc, {movieDesc: this.props.movie.desc}),
                React.createElement(MovieImage, {movieImage: this.props.movie.image, alt: this.props.movie.alt})              
            )
        );
    }
});

const MovieTitle = React.createClass ({
    propTypes: {
        movieTitle: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.movieTitle)
        );
    }
});
        
const MovieDesc = React.createClass ({
    propTypes: {
        movieDesc: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('p', {}, this.props.movieDesc)
        );
    },
});

const MovieImage = React.createClass ({
    propTypes: {
        movieImage: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('img', {src: this.props.movieImage, alt: this.props.alt})
        );
    }
});

const element = React.createClass({
    render: function () {
        return (
            React.createElement('div', {},
                React.createElement('h1', {},'Movies:'),
                React.createElement(MovieList, {movies: movies}) 
            )
        );
    }
});

ReactDOM.render(React.createElement(element), document.getElementById('app'));