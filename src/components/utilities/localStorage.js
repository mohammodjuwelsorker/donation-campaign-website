const getDataLocalStorageHandler = ()=> {
    const storedDonationIds = localStorage.getItem('donationApplication');
    if(storedDonationIds) {
        return JSON.parse(storedDonationIds)
    }
    return []
}

const saveDataLocalStorageHandler = (id) => {
    console.log('localStorage:',id)
    const storedDonationIds = getDataLocalStorageHandler();
    // console.log(storedDonationIds)
    const exists = storedDonationIds.find(ids => ids === id);
    if(!exists) {
        storedDonationIds.push(id);
        localStorage.setItem('donationApplication', JSON.stringify(storedDonationIds))
    }

}

export {saveDataLocalStorageHandler, getDataLocalStorageHandler}
