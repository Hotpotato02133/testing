import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function OroBranchesChart() {
    useEffect(() => {
        echarts.init(document.querySelector('#oroChart')).setOption({
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: '5%',
                left: 'center',
            },
            series: [
                {
                    name: 'Sales From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold',
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        {
                            value: 10448,
                            name: 'ORO 5',
                        },
                        {
                            value: 3129,
                            name: 'ORO 6',
                        },
                        {
                            value: 10580,
                            name: 'ORO 12',
                        },
                        {
                            value: 14804,
                            name: 'ORO 14',
                        },
                        {
                            value: 12300,
                            name: 'ORO 16',
                        },
                        {
                            value: 2300,
                            name: 'ORO 20',
                        },
                        {
                            value: 17300,
                            name: 'ORO 21',
                        },
                        {
                            value: 11900,
                            name: 'ORO 22',
                        },
                    ],
                },
            ],
        });
    }, []);

  return (
    <div
        id='oroChart'
        style={{ minHeight: '400px' }}
        className='echart'
    ></div>
  );
}

export default OroBranchesChart
