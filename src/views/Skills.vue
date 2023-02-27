<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <p class="green">I am an experienced coder and designer with a passion for creating high-quality products that provide users with
        the best possible experience. My studies in Information Technology (Multimedia) at Deakin University have provided
        me with a comprehensive understanding of coding and design. My coding skills include HTML, CSS, SCSS, SASS,
        JavaScript, jQuery, Angular, Vue, Bootstrap, and Swift UI. My design skills include web design, EDM design, UI/UX
        design, app UI design, and tools such as Adobe, Github, WordPress, MySQL, and Firebase.</p>

        <p class="green">My vision is to become an all-round developer who can use their skills and knowledge to create products that are
        both functional and user-friendly. I am constantly striving to stay up to date with the latest trends and
        technologies in the software development industry, and am always looking for new ways to improve my skills and
        knowledge. I am confident that I can make a positive contribution to the development community.</p>

        <p class="green">I have a strong understanding of the importance of user experience and usability, and believe that these are the
        most important aspects of any development project. I am passionate about creating products that are both visually
        appealing and easy to use, and strive to create products that are both functional and enjoyable.</p>

        <p class="green">I am excited to see what the future holds, and am eager to continue to learn and develop my skills and knowledge
        in the software development industry. I am confident that I can make a positive impact on the development
        community, and am looking forward to the opportunities that lie ahead.</p>
      </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-4 col-sm-12 text-center order-2">
          <Pie :data="data" :options="options" />
        </div>
      <div class="col-auto order-1">
        <h2 class="green fw-light">#Design</h2>
<ul class="green">
<li>Graphic Design</li>
<li>Web Design</li>
<li>Logo Design</li>
<li>UI/UX Design</li>
<li>App UI Design</li>
<li>Animation</li>
<li>Video Editing</li>
<li>Adobe Creative Suite</li>
<li>Figma</li>
</ul>
      </div>
      <div class="col-auto order-3">
        <h2 class="fw-light">#Coding</h2>
<ul>
<li>HTML</li>
<li>CSS, SCSS and Sass</li>
<li>JavaScript</li>
<li>jQuery</li>
<li>Angular</li>
<li>Vue</li>
<li>Bootstrap</li>
    <li>GitHub</li>
    <li>WordPress</li>
    <li>MySQL</li>
    <li>Firebase</li>
<li>MYSQL</li>
<li>Php</li>
    <li>Swift UI</li>
</ul>
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
            backgroundColor: ['#cccccc', '#00ff00'],
            data: [60, 40],
            borderColor: ['#191919', '#191919'],
            borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false
          }
        },
    tooltips: {
      callbacks: {
        //add % to the tooltip after the value
        label: function(tooltipItem, data) {
          return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%' ;
    }
        
    }
      }
    }
  }
}
}
</script>