import './style.scss'
import searchIcon from '../../../image/search.svg'

export const SearchData = ({ search, handleSearch }) => {
    return (
        <>
            <label className='header-search' htmlFor="search">
                <input id='search' placeholder='Pesquisar Aqui' type="text" value={search} onChange={handleSearch} />
                <img src={searchIcon} alt="search" />
            </label>
        </>)
}