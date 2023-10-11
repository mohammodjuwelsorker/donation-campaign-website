import './Banner.css'
import PropTypes from 'prop-types'; // ES6

const Banner = ({getSearchDataHandler}) => {

    const setSearchDataHandler = (e) => {
        e.preventDefault()
        const searchValue = e.target.search.value;
        if(searchValue !== "") {
            getSearchDataHandler(searchValue);

            e.target.search.value = "";
        }
        
        
    }

    return (
        <div className="w-full md:h-[600px] h-auto bg-[#FFFFFFF3] banner-img flex justify-center items-center -z-10 mb-12">
            <div className='z-40'>
                <h3 className='text-5xl text-[#0B0B0B] font-bold mb-10'>I Grow By Helping People In Need</h3>
                <div>
                    <form onSubmit={setSearchDataHandler} >
                        <input className='p-4 border bg-none outline-none w-3/4  ' type='text' name='search' placeholder='Search here....' />
                        <button name='submit'  className='p-4 border-style  bg-[#FF444A] outline-none w-1/4'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    getSearchDataHandler: PropTypes.func.isRequired
}

export default Banner;



