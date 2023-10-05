import { useEffect, useRef, useState } from "react"; 
import Chart from "chart.js/auto";
import priceData from '../data/prices.json';

const BarChart: React.FC = () => {
    const chartContainerRef = useRef<HTMLCanvasElement | null>(null);
    const [data, setData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [backgroundColors, setBackgroundColors] = useState<string[]>([]);


    useEffect(() => {
        const prices = priceData;
        const chartLabels = prices.map((item: any) => item.label);
        const chartValues = prices.map((item: any) => item.value);
        const chartBackgroundColors = prices.map((item: any) => item.backgroundColor);


        setLabels(chartLabels);
        setData(chartValues);
        setBackgroundColors(chartBackgroundColors);

        if(chartContainerRef.current){
            const ctx = chartContainerRef.current;
            const myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: chartLabels,
                    datasets: [
                        {
                            label: 'Prices',
                            data: chartValues,
                            backgroundColor: chartBackgroundColors,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: true,
                            title: {
                                text: "Price in Rs."
                            },
                        },
                    },
                    responsive: true,
                    maintainAspectRatio: false
                },
                
            });

            return () => {
                myChart.destroy();
              };
            }
            }, []);


            return <canvas ref={chartContainerRef} width="100" height="500" />;

        };



export default BarChart;





































