import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveDataLocalStorageHandler } from "../utilities/localStorage";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [donationDisplay, setDonationDisplay] = useState(4)

    useEffect(()=>{

        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonations(data))

    },[])

    const navigate = useNavigate(null);
    const clickToOtHerPage = (id) => {
        navigate(`/donationDetails/id`)
        saveDataLocalStorageHandler(id)
    }

    const clickToAllShow = (donations) => {
        setDonationDisplay(donations.length)
    }

    console.log(donationDisplay)

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 gap-6 mb-14">
                {
                    donations.slice(0, donationDisplay).map(donation => {
                        return (
                            <div key={donation.id} className="flex">
                                <div className="w-full flex-1">
                                    <img className="w-full h-full" src={donation.picture} />
                                </div>
                                <div className="flex-1" style={{backgroundColor:donation.card_bg, padding:'25px', borderRadius:"0px 8px 8px 0px"}}>
                                    <span style={{backgroundColor:donation.category_bg, padding:'8px 10px', borderRadius:'4px',fontSize:'14px', fontWeight:500, color:donation.title_or_btn_color}}>{donation.category}</span>
                                    <h3 style={{color:donation.title_or_btn_color, marginTop:'16px', fontSize:'20px', fontWeight:600,marginBottom:'12px'}}>{donation.title}</h3>
                                    <span style={{color:donation.title_or_btn_color,fontSize:'16px', fontWeight:600,display:'block', marginBottom:'20px'}}>${donation.price}</span>
                                    <button onClick={()=> clickToOtHerPage(donation.id)} style={{backgroundColor:donation.title_or_btn_color,padding:"9px 19px",borderRadius:'4px', fontSize:'18px',color:'white',fontWeight:600}}>View Details</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={`text-center ${donationDisplay > 4 ? "hidden":""}`}>
                <button onClick={()=>clickToAllShow(donations)} className="py-4 px-7 text-base bg-[#009444] font-semibold text-white rounded-lg">See All</button>
            </div>
        </div>
    );
};

export default Donation;