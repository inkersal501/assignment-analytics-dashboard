export const formateFromDate = (fdate) => {
    const date = new Date(fdate);  

    const options = { month: 'short', day: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate; 
};
export const formateToDate = (tdate) => {
    const date = new Date(tdate);  

    const options = {
        month: 'short',  
        day: '2-digit', 
        year: 'numeric' 
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate; 
};