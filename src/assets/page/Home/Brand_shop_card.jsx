import { Link } from "react-router-dom";


const Brand_shop_card = ({ cardes }) => {
    const {id, BrandName, img } = cardes;
    return (

        <div className="mx-auto lg:w-[1280px] lg:mx-16 my-10">
             <Link to={`/Ourservice/${BrandName}`}>

            <div className="card w-80 h-80 bg-base-100 shadow-xl image-full">
                <figure><img  className="" src={img} alt="Brand img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{BrandName}</h2>
                   
                    
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Brand_shop_card;