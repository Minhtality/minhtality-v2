export const formatPhone = phone => {
    if(!phone) return '';
    const cleanPhone = phone.replace(/\D/g,'');
    const firstPortion = cleanPhone.substring(0,3);
    const middlePortion = cleanPhone.substring(3,6);
    const lastPortion = cleanPhone.substring(6,10);
    const formatedPhone = `${firstPortion}-${middlePortion}-${lastPortion}`
    return formatedPhone
};