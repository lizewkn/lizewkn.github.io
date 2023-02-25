<template>
  <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-12 text-center">
          <Pie :data="data" :options="options" />
        </div>
      </div>
    <div class="row">
      <div class="col">
        <p>I am an experienced coder and designer with a passion for creating high-quality products that provide users with
        the best possible experience. My studies in multimedia at Deakin University in Australia and the UK have provided
        me with a comprehensive understanding of coding and design. My coding skills include HTML, CSS, SCSS, SASS,
        JavaScript, jQuery, Angular, Vue, Bootstrap, and Swift UI. My design skills include web design, EDM design, UI/UX
        design, app UI design, and tools such as Adobe, Github, WordPress, MySQL, and Firebase.</p>

        <p>My vision is to become an all-round developer who can use their skills and knowledge to create products that are
        both functional and user-friendly. I am constantly striving to stay up to date with the latest trends and
        technologies in the software development industry, and am always looking for new ways to improve my skills and
        knowledge. I am confident that I can make a positive contribution to the development community.</p>

        <p>I have a strong understanding of the importance of user experience and usability, and believe that these are the
        most important aspects of any development project. I am passionate about creating products that are both visually
        appealing and easy to use, and strive to create products that are both functional and enjoyable.</p>

        <p>I am excited to see what the future holds, and am eager to continue to learn and develop my skills and knowledge
        in the software development industry. I am confident that I can make a positive impact on the development
        community, and am looking forward to the opportunities that lie ahead.</p>
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