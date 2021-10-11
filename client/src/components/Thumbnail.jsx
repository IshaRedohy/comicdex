import "../css/style.css";
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Thumbnail = (props) => {
    return(
        
            <div className="col col-1 pt-2" key={props.id}>
                <Link to={`/dexlist/${props.index}`}> <img className="rounded-3 thumb" src={ props.image } alt=""></img></Link>
                <p className="names pt-2">{ props.name }</p>
                {/* <p className="names pt-2">{ props.index }:{ props.name }</p> */}
            </div>
        
    )
}

export default Thumbnail;