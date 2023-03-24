import './style.scss'

import { ChartBar } from './BarChart';
import { ChartPie } from './PieChart';
import { NavHeader } from '../../components/header';


function Dashboard() {

    
    return (
        <>
            <div className='container'>
                <NavHeader value={"Dashboard"} />

                <div className="container-content">
                    <h1>BEM VINDO</h1>
                    <div className="dashboard">
                        <ChartBar />
                        <div className='container-stats'>
                            <div className='dashboard-stats'>
                                <h4>Chamados em Aberto</h4>
                                <h2>300</h2>
                            </div>
                            <div className='dashboard-stats'>
                                <h4>Chamados em Andamento</h4>
                                <h2>300</h2>
                            </div>
                            <div className='dashboard-stats'>
                                <h4>Chamados Finalizados</h4>
                                <h2>300</h2>
                            </div>
                            <div className='dashboard-stats'>
                                <h4>Todos os Chamados</h4>
                                <h2>900</h2>
                            </div>
                        </div>
                        <ChartPie />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;





