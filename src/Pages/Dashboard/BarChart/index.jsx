import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, } from 'recharts';

export const ChartBar = () => {
    const data01 = [
        {
            name: "Pedro",
            aberto: 100,
            pendente: '120',
            finalizado: '150'
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
            <div className="container-bar-chart">
                <BarChart width={500} height={340} data={data01}>
                    <XAxis dataKey="name" stroke="#3A4F66" />
                    <YAxis stroke="#3A4F66" />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <Bar dataKey="aberto" fill="#FFD5D3" />
                    <Bar dataKey="pendente" fill="#FFFFD3" />
                    <Bar dataKey="finalizado" fill="#93E7D0" />
                </BarChart>
            </div>
        </>
    )
};