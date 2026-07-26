<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <p class="green">Senior Software Engineer with 8+ years of experience specializing in high-performance React.js frontends, AWS cloud infrastructure, and enterprise GenAI integrations. Proven track record in leading cross-functional engineering teams, managing AWS serverless architectures, and delivering scalable enterprise solutions.</p>

        <p class="green">Core Competencies: Frontend & Architecture — React.js, Next.js, Enterprise CMS, System Architecture, UI/UX Design. Cloud & DevOps (AWS) — EC2, RDS, CloudFront, Cognito, CodePipeline, CI/CD, Serverless. Enterprise AI — AWS Bedrock, Amazon SageMaker, LLM API Integration, Generative AI Workflows.</p>

        <p class="green">Management: Vendor/RFP Evaluation, Agile/Scrum Leadership, Strategic Partner Oversight, Project Management, Systems Planning, Software System Analysis.</p>
      </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-4 col-sm-12 text-center order-2">
          <Pie :data="data" :options="options" />
        </div>
      <div class="col-auto order-1">
        <h2 class="green fw-light">#Non-technical</h2>
<ul class="green">
<li>UI/UX Design</li>
<li>Design Systems</li>
<li>User Interface Design</li>
<li>Product Design</li>
<li>Graphic Design</li>
<li>Agile and Scrum</li>
<li>Project Management</li>
<li>Systems Planning</li>
<li>Software System Analysis</li>
<li>Vendor Evaluation</li>
<li>Strategic Partner Oversight</li>
<li>Figma</li>
<li>Adobe Creative Suite</li>
</ul>
      </div>
      <div class="col-auto order-3">
        <h2 class="fw-light">#Technical</h2>
<ul>
<li>React.js</li>
<li>Next.js</li>
<li>Vue</li>
<li>Angular</li>
<li>TypeScript</li>
<li>JavaScript</li>
<li>HTML</li>
<li>CSS, SCSS and Sass</li>
<li>Bootstrap</li>
<li>jQuery</li>
<li>CMS (WordPress and Enterprise CMS)</li>
<li>AWS (EC2, RDS, CloudFront, Cognito, CodePipeline)</li>
<li>CI/CD</li>
<li>AWS Bedrock</li>
<li>Amazon SageMaker</li>
<li>Generative AI</li>
<li>LLM API Integration</li>
<li>Git and GitHub</li>
<li>Node.js</li>
<li>Express.js</li>
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