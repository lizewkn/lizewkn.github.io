<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <p class="green">I am a Product Specialist at HKT (2024 - Present) with expertise in product strategy, digital experience design, and front-end engineering. I deliver high-quality digital products using React, enterprise CMS platforms, and AI-enabled features. My academic background in Information Technology (Multimedia) from Deakin University supports a strong foundation in both technical implementation and design thinking.</p>

        <p class="green">In addition to product and interface design, I work hands-on with cloud delivery on AWS, including EC2, RDS, CloudFront, Cognito, and CodePipeline with CI/CD workflows. I also contribute to AI initiatives with AWS Bedrock and SageMaker, helping teams prototype and operationalize intelligent product capabilities in production environments.</p>

        <p class="green">I have strong capabilities in Agile product delivery, Scrum facilitation, and distributed team leadership. I work closely with developers, designers, product owners, and QA teams to align scope, quality standards, and release outcomes.</p>

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
        <h2 class="green fw-light">#Non-technical</h2>
<ul class="green">
<li>Product Design</li>
<li>UI/UX Design</li>
<li>Design Systems</li>
<li>User Interface Design</li>
<li>Web Design</li>
<li>App UI Design</li>
<li>Graphic Design</li>
<li>Logo Design</li>
<li>Packaging Design</li>
<li>Animation</li>
<li>Video Editing</li>
<li>Adobe Creative Suite</li>
<li>Figma</li>
<li>SwiftUI</li>
<li>Blender</li>
<li>Agile and Scrum</li>
<li>Cross-functional Team Leadership</li>
</ul>
      </div>
      <div class="col-auto order-3">
        <h2 class="fw-light">#Technical</h2>
<ul>
<li>HTML</li>
<li>CSS, SCSS and Sass</li>
<li>JavaScript</li>
<li>TypeScript</li>
<li>React</li>
<li>Vue</li>
<li>Angular</li>
<li>jQuery</li>
<li>Bootstrap</li>
<li>CMS (WordPress and Enterprise CMS)</li>
<li>AWS (EC2, RDS, CloudFront, Cognito)</li>
<li>CI/CD (CodePipeline)</li>
<li>AWS Bedrock and SageMaker</li>
<li>Git and GitHub</li>
<li>Spring Boot</li>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
<li>MySQL</li>
<li>PHP</li>
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