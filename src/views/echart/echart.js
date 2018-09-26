import echarts from 'echarts'
import makeData from '../../lib/makeData'

export default {
    data() {
        return {
            array: []
        }
    },
    created() {
        document.title = 'echart'
    },
    mounted() {
        const myChart = echarts.init(document.getElementById('main'))
        const array = []
        let time = 0
        let value = 100

        array.push({
            value,
            name: `测试${time}`
        })

        let option = makeData(array)

        myChart.setOption(option)

        const i = setInterval(() => {

            if (time > 3) {
                clearInterval(i);  
            } else {
                time ++;
                value -= 20;
                array.push({
                    value,
                    name:  `测试${time}`
                })
                option = makeData(array)
                myChart.setOption(option)
            }

        }, 200)
        
    },
    methods: {

    }
}