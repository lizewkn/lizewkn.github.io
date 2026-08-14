<template>
  <div class="container-fluid">
    <!-- Pie chart on top for mobile, centered for desktop -->
    <div class="row justify-content-center mt-4 mt-md-5">
      <div class="col-12 col-md-4 text-center mb-4 mb-md-0">
        <Pie :data="data" :options="chartOptions" />
      </div>
    </div>

    <!-- Skills columns below pie chart -->
    <div class="row justify-content-center mt-4">
      <!-- Non-technical skills -->
      <div class="col-12 col-md-4 mb-4 mb-md-0">
        <h2 class="fw-light"><span class="green">#</span>Non-technical</h2>
        <ul class="list-unstyled">
          <li class="mb-2">
            <span class="green fw-bold">Leadership & Process</span>
            <ul class="mt-1">
              <li>Agile/Scrum</li>
              <li>Project Management</li>
              <li>Vendor Evaluation</li>
              <li>Systems Planning</li>
              <li>Strategic Partner Oversight</li>
              <li>Software System Analysis</li>
            </ul>
          </li>
          <li class="mb-2">
            <span class="green fw-bold">Design & Product</span>
            <ul class="mt-1">
              <li>UI/UX Design</li>
              <li>Design Systems</li>
              <li>Product Design</li>
              <li>Graphic Design</li>
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Technical skills -->
      <div class="col-12 col-md-4">
        <h2 class="fw-light"><span class="green">#</span>Technical</h2>
        <ul class="list-unstyled">
          <li class="mb-2">
            <span class="green fw-bold">★ Primary Expertise</span>
            <ul class="mt-1">
              <li><strong>React.js</strong></li>
              <li><strong>TypeScript</strong></li>
              <li><strong>Next.js</strong></li>
              <li><strong>AWS</strong> (EC2, RDS, CloudFront, Cognito, CodePipeline)</li>
              <li><strong>AWS Bedrock</strong></li>
              <li><strong>Amazon SageMaker</strong></li>
              <li><strong>Generative AI / LLM Integration</strong></li>
            </ul>
          </li>
          <li class="mb-2">
            <span class="text-secondary fw-bold">Frontend</span>
            <ul class="mt-1">
              <li>Vue</li>
              <li>Angular</li>
              <li>HTML, CSS/SCSS</li>
              <li>Bootstrap, jQuery</li>
            </ul>
          </li>
          <li class="mb-2">
            <span class="text-secondary fw-bold">Backend & CMS</span>
            <ul class="mt-1">
              <li>Node.js, Express.js</li>
              <li>PHP, Python</li>
              <li>MySQL</li>
              <li>WordPress, Enterprise CMS</li>
            </ul>
          </li>
          <li class="mb-2">
            <span class="text-secondary fw-bold">Tools & DevOps</span>
            <ul class="mt-1">
              <li>Git/GitHub</li>
              <li>CI/CD</li>
            </ul>
          </li>
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
        labels: ['Frontend', 'Cloud/DevOps', 'AI/ML', 'Backend', 'Tools'],
        datasets: [
          {
            backgroundColor: ['#00ff00', '#00cc00', '#009900', '#006600', '#003300'],
            data: [35, 25, 20, 12, 8],
            borderColor: ['#191919', '#191919', '#191919', '#191919', '#191919'],
            borderWidth: 2
          }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#cccccc',
              font: { family: 'Roboto Mono' },
              padding: 15
            }
          }
        }
      }
    }
  }
}
</script>