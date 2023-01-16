export const SearchAutoComplete = ({imgUrl, flag, countryName, index}) => {
    return(
        <div key={index} className='auto-complete-card'>
            <div className='card'>
              <h4><img src={imgUrl} alt="" />{countryName} <p>{flag}</p></h4>
            </div>
        </div>
    );
}