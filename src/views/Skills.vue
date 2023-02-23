<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-sm-12 text-center">
        <Pie :data="data" :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'SkillsChart',
  components: { Pie },
  data() {
    return {
      data: {
        labels: ['Code', 'Design'],
        datasets: [
          {
            backgroundColor: ['#cccccc', '#555555'],
            data: [60, 40],            
            borderColor: ['#191919', '#191919'],
            borderWidth: 10          
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