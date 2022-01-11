import {ReactComponent as StarFull} from 'assets/img/starfull.svg';
import {ReactComponent as StarEmpty} from 'assets/img/starempty.svg';

function MovieStars(){


return(
    <div className="dsmovie-stars-container">
        <StarFull />
        <StarFull />
        <StarFull />
        <StarEmpty />
    </div>
);

}

export default MovieStars;