<template>
  <div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-4 col-md-6 col-sm-12 text-center">
  <Pie :data="data" :options="options" />
</div>
</div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'SkillsChart',
  components: { Pie },
  data() {
    return {
      data: {
        labels: ['Developer', 'Designer'],
        datasets: [ 
    {
      backgroundColor: ['rgb(0, 120, 0)', '#555'],
      data: [60, 40],
      borderColor:['#191919','#191919']
    }]
      },
      options: {
        responsive: true,
  maintainAspectRatio: true,
        plugins: {
  legend: {
        display: false
    }
  }
      }
    }
  }
}
</script>