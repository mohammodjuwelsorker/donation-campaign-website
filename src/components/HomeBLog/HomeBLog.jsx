import PropTypes from 'prop-types'; // ES6
import { useNavigate } from 'react-router-dom';
import { saveDataLocalStorageHandler } from '../utilities/localStorage';
const HomeBLog = ({homeBlog}) => {
    // console.log(homeBlog)

    const {id,picture, title, category,title_or_btn_color, card_bg, category_bg} = homeBlog;

    const navigate = useNavigate();

    const donationDetailsHandler = (id) => {
        console.log('click donation details');
        console.log(id)
        navigate(`/donationDetails/${id}`);
        saveDataLocalStorageHandler(id);
    }

    return (
        <div onClick={()=> donationDetailsHandler(id)}>
            <img className='w-full' src={picture}/>
            <div style={{backgroundColor:card_bg, padding:'25px'}}>
                <span style={{backgroundColor:category_bg, padding:'8px 10px', borderRadius:'4px',fontSize:'14px', fontWeight:500, color:title_or_btn_color}}>{category}</span>
                <h3 style={{color:title_or_btn_color, marginTop:'16px', fontSize:'20px', fontWeight:600}}>{title}</h3>
            </div>
        </div>
    );
};


HomeBLog.propTypes = {
    homeBlog: PropTypes.object.isRequired
}

export default HomeBLog;