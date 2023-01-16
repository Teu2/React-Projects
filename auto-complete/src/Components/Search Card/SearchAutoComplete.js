import './SearchCard.css'
export const SearchAutoComplete = ({imgUrl, flag, countryName, index}) => {
    return(
        <div key={index} className='auto-complete-card'>
            <div className='card'>
              <img src={imgUrl} alt="" /> <h4>{countryName}</h4> <p>{flag}</p>
            </div>
        </div>
    );
}