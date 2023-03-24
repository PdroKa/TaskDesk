import './style.scss'
import setaEsquerda from '../../../image/seta_esquerda.svg'
import setaDireita from '../../../image/seta-direita.svg'
import nfsSolucoesDigitais from '../../../image/brand/NFS-ESCRITO.svg'


export function NavPagination({ data, itensPerPage, currentPage, setCurrentPage }) {
    const totalPages = Math.ceil(data.length / itensPerPage);
    const pagesToDisplay = 5;

    const handlePrevPage = () => setCurrentPage(currentPage - 1);
    const handleNextPage = () => setCurrentPage(currentPage + 1);
    const handlePageChange = (page) => setCurrentPage(page);


    const start = currentPage - Math.floor(pagesToDisplay / 2);
    const end = currentPage + Math.floor(pagesToDisplay / 2);

    const pageList = Array.from({ length: totalPages }, (_, i) => i + 1);
    const displayedPages = pageList.slice(Math.max(0, start - 1), Math.min(totalPages, end))

    return (
        <>

            <nav className='container-pagination'>
                <img className='nfsSolucoesDigitais' src={nfsSolucoesDigitais} alt="nfsSolucoesDigitais" />
                <ul className='pagination'>
                    <li>

                        <button className='page-previous' disabled={currentPage === 1} onClick={handlePrevPage}>
                            <img src={setaEsquerda} alt="<" />
                            Anterior
                        </button>
                    </li>
                    {
                        displayedPages.map(page =>
                            <li key={page}>
                                <button className={`btn-pagination ${page === currentPage ? "active" : ""}`} onClick={() => handlePageChange(page)} >
                                    {page}
                                </button>
                            </li>
                        )
                    }
                    <li>
                        <button className='page-next' disabled={currentPage === Math.ceil(data.length / itensPerPage)} onClick={handleNextPage}>
                            Proximo
                            <img src={setaDireita} alt=">" />
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
