import { NavLink } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h2>Ooops !! Soory</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error?</p>
             <NavLink to="/">
                <button className="btn">Back to Home</button>
             </NavLink>
        </div>
    );
};

export default Errorpage;