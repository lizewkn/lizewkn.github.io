<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <p class="green">I am a Product Specialist at HKT (2024 - Present) with a strong background in product design and front-end development. I focus on building high-quality digital products with React, CMS platforms, and AI-enabled features. My studies in Information Technology (Multimedia) at Deakin University have provided me with a comprehensive understanding of coding and design.</p>

        <p class="green">In addition to product and interface design, I work on AWS cloud infrastructure including EC2, RDS, CloudFront, Cognito, and CodePipeline with CI/CD workflows. I also support AI initiatives with AWS Bedrock and SageMaker, helping teams prototype and deliver intelligent product capabilities in production-ready environments.</p>

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
    <li>Product Desgin</li>
    <li>PackageDesgin</li>
<li>UI/UX Design</li>
<li>App UI Design</li>
<li>Animation</li>
<li>Video Editing</li>
<li>Adobe Creative Suite</li>
<li>Figma</li>
    <li>Swift UI</li>
    <li>Blender</li>
</ul>
      </div>
      <div class="col-auto order-3">
        <h2 class="fw-light">#Coding</h2>
<ul>
<li>HTML</li>
<li>CSS, SCSS and Sass</li>
<li>JavaScript</li>
<li>jQuery</li>
<li>Typescript</li>
<li>Angular</li>
<li>Vue</li>
<li>React</li>
<li>Bootstrap</li>
    <li>Git</li>
    <li>WordPress</li>
    <li>Springboot</li>
<li>MYSQL</li>
<li>Php</li>
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