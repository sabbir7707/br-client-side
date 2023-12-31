import { Link } from "react-router-dom";


const Bannner = () => {
    return (
        <div>
         {/*    <img src="https://i.ibb.co/mF3WHZv/42986694-3.jpg" alt="" /> */}

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/mF3WHZv/42986694-3.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome CR.</h1>
                        <p className="mb-5">Welcome to CR.  Technology and Electronics Shop - Your Gateway to the Future! </p>

                        <Link to='/Register' >
                        <button className="btn btn-primary">Get Started</button>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannner;