import { Link, useLoaderData} from "react-router-dom";
import { getDataLocalStorageHandler } from "../utilities/localStorage";
import { useEffect, useState } from "react";


const DonationDetails = () => {
    const donationData = useLoaderData();

    const [donations, setDonations] = useState([])

    useEffect(()=>{
        const storedDonationIds = getDataLocalStorageHandler();
        if(donationData.length > 0) {

            const donationIds=donationData.filter(ids=> storedDonationIds.includes(ids.id))
            // console.log(donationIds);
            setDonations(donationIds)

            //const donationIds = [];
            // for(const id of storedDonationIds) {
            //     console.log(id)
            //     const donationIds = donationData.find(donationDataIds => donationDataIds.id === id)
            //     if(donationIds) {
            //         donationIds.push(donationIds)
            //     }
            // }
            //setDonations(donationIds)
        }

    },[donationData]);

    // console.log(donations)

    return (
        <div>
            <div className="max-w-screen-xl mx-auto gap-6 mt-12">
                {
                    donations.map(donationItem => {
                        return (
                            <div key={donationItem.id} className="mb-12">
                                <div className="w-full mb-8 relative">
                                    <img className="w-full h-[450px] object-cover" src={donationItem.picture} />
                                    <div className="w-full bg-[#0B0B0B80] py-5 px-10">
                                        <Link to="/donation">
                                            <button style={{backgroundColor:donationItem.title_or_btn_color, padding:'16px 26px', borderRadius:'5px', fontSize:'20px',fontWeight:600, color:'white'}}>Donate $290</button>
                                        </Link>
                                    </div>
                                </div>
                                <h3 style={{color:donationItem.title_or_btn_color}} className="text-4xl font-bold mb-6">{donationItem.title}</h3>
                                <p className="text-base text-[#0B0B0BB3] font-normal ">{donationItem.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DonationDetails;