import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import priceData from '../data/prices.json';
import offerData from "@/data/offers.json"

const BarChart: React.FC = ({ type = "price" }: { type?: "price" | "offer" }) => {
    const chartContainerRef = useRef<HTMLCanvasElement | null>(null);
    const [data, setData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [backgroundColors, setBackgroundColors] = useState<string[]>([]);


    useEffect(() => {
        const prices = type === "price" ? priceData : offerData;
        const chartLabels = prices.map((item: any) => item.label);
        const chartValues = prices.map((item: any) => item.value);
        const chartBackgroundColors = prices.map((item: any) => item.backgroundColor);


        setLabels(chartLabels);
        setData(chartValues);
        setBackgroundColors(chartBackgroundColors);

        if (chartContainerRef.current) {
            const ctx = chartContainerRef.current;
            const myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: chartLabels,
                    datasets: [
                        {
                            label: type === "price" ? 'Price' : "Offer",
                            data: chartValues,
                            backgroundColor: chartBackgroundColors,
                        },
                    ],
                },

                options: {
                    animations: {
                        radius: {
                            duration: 400,
                            easing: 'linear',
                            loop: (context) => context.active
                        }
                    },
                    interaction: {
                        mode: 'nearest',
                        intersect: false,
                        axis: 'x'
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                text: "E-Commerce Websites"
                            }
                        },
                        y: {
                            beginAtZero: true,
                            display: true,
                            title: {
                                text: type === "price" ? "Price in Rs." : "Offer in %"
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


    return <canvas ref={chartContainerRef} width="100px" height="500px" />;

};



export default BarChart;