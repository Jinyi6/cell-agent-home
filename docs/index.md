---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: CellAgent
hero:
  name: "CellAgent"
  text: "An LLM-driven multi-agent framework for single-cell data analysis, <br>ensuring high-quality results with minimal effort."
  # tagline: My great project tagline
  actions:
    - theme: brand
      text: Try on CellAgent 👉
      link: http://cell.agent4science.cn/start/
    - theme: alt
      text: View CellAgent research >
      link: #
---
<script setup>
import { watch, ref, onMounted } from 'vue';
import { useData } from 'vitepress'
import { useTheme } from 'vuetify'

const { isDark } = useData();
const theme = useTheme()

watch(isDark, value => {
  theme.global.name.value = value ? 'dark' : 'light'
}, { immediate: true })

const tab = ref('0')
const isCN = ref(null)

onMounted(async function setDark() {
  isDark.value = true;
})

onMounted(async function assertInCN() {
  const img = new Image();
  
  img.src = "https://www.youtube.com/favicon.ico";

  return new Promise((resolve) => {
    img.onload = () => isCN.value = false;
    img.onerror = () => isCN.value = true;  
  })
})
</script>

<!--@include: ./sections/banner.md-->

<div class="mt-20"></div>

<!--@include: ./sections/features.md-->

<div class="mt-20"></div>

<!--@include: ./sections/examples.md-->

<div class="mt-20"></div>

<!--@include: ./sections/comparation.md-->

<div class="mt-20"></div>

CellAgent can streamline your single-cell data analysis workflow, allowing you to obtain high-quality results without the need for complex coding. Whether you are a domain expert or a novice, our online platform enables effortless data analysing and interpretation. With CellAgent, you can:

<div class="mx-8 px-4">

* **Automate Analysis:** CellAgent simulates "deep-thinking" with a hierarchical multi-agent framework, automating the entire analysis process from data preprocessing to conclusions, minimizing manual effort, and enabling greater focus on scientific discoveries.
* **Interactively Query:** Through continuous dialogue, you can submit new requests seamlessly. CellAgent will strive to meet your needs and provide real-time analysis and response.
* **Obtain Reliable Conclusions:** CellAgent employs a unique self-reflective optimization mechanism that ensures the reliability and high quality of results throughout the processing.
</div>

<div class="mt-16"></div>

<!--@include: ./sections/more.md-->
