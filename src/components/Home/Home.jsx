import { useState } from "react";
import Banner from "../Banner/Banner";
import HomeBLog from "../HomeBLog/HomeBLog";
import { useEffect } from "react";
import { ColorRing } from  'react-loader-spinner'


const Home = () => {

    const [home, setHome] = useState([])
    const [displayHome, setDisplayHome] = useState([])

    useEffect(()=> {

        fetch('donation.json')
        .then(res => res.json())
        .then(data => {setHome(data); setDisplayHome(data)})

    },[])

    const getSearchDataHandler = (search) => {
        const searchResult = home.filter(searchItem => searchItem.title.toLowerCase() === search.toLowerCase())
        if(searchResult) {
            setDisplayHome(searchResult)
        }


    }
    console.log(displayHome)
    return (
        <div >
            <Banner getSearchDataHandler={getSearchDataHandler} />
            <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-6 mb-16'>
                {
                    displayHome.map(homeBlog => <HomeBLog key={homeBlog.id} homeBlog={homeBlog} />)
                }
            </div>
            <div className={`flex items-center justify-center mb-12 ${displayHome.length > 0 ? 'hidden':''}`}>
                {displayHome.length === 0 ? <ColorRing visible={true} height="80" width="80"
                ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>:''}
            </div>
        </div>
    );
};

export default Home;