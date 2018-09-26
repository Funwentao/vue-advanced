export default function (array) {
    return {
        color : [
            'rgba(255, 69, 0, 0.5)',
            'rgba(255, 150, 0, 0.5)',
            'rgba(255, 200, 0, 0.5)',
            'rgba(155, 200, 50, 0.5)',
            'rgba(55, 200, 100, 0.5)'
        ],
        title : {
            text: '漏斗图',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        legend: {
            data : ['展现','点击','访问','咨询','订单']
        },
        calculable : true,
        series : [
            {
                name:'预期',
                type:'funnel',
                x: '10%',
                width: '80%',
                itemStyle: {
                    normal: {
                        label: {
                            formatter: '{b}预期'
                        },
                        labelLine: {
                            show : true
                        }
                    },
                    emphasis: {
                        label: {
                            position:'inside',
                            formatter: '{b}预期 : {c}%'
                        }
                    }
                },
                data:array
            }
        ]
    }
}