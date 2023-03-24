
import { PieChart, Pie, Tooltip } from 'recharts';


export const ChartPie = () => {


    const data01 = [
        {
            name: "Pedro",
            aberto: 100,
            pendente: '120',
            finalizado: '150',
        },
        {
            name: "Kauan",
            aberto: 200,
            pendente: '220',
            finalizado: '250'
        },
        {
            name: "Isa",
            aberto: 300,
            pendente: '320',
            finalizado: '350'
        },
        {
            name: "Nelson",
            aberto: 400,
            pendente: '420',
            finalizado: '450'
        },
    ];
    return (

        <>
            <div className="container-pie-chart">

                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="aberto"
                        startAngle={360}
                        endAngle={0}
                        data={data01}
                        cx={200}
                        cy={200}
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </>
    )
};