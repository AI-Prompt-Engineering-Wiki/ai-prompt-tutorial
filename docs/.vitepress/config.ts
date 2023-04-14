import { defineConfig } from 'vitepress';
const tutorialSidebar = [
  {
    text: '前言',
    collapsed: false,
    items: [
      {
        text: '目标读者',
        link: '/tutorial/0_preface/0-1_target-audience',
      },
      {
        text: '内容概述',
        link: '/tutorial/0_preface/0-2_content-overview',
      },
      {
        text: '联系作者',
        link: '/tutorial/0_preface/0-3_contact-author',
      },
    ],
  },
  {
    text: '介绍',
    collapsed: false,
    items: [
      {
        text: 'AI 大模型的运行逻辑',
        link: '/tutorial/1_introduction/1-1_operational-logic-of-ai',
      },
      {
        text: '什么是 Prompt Engineering',
        link: '/tutorial/1_introduction/1-2_what-is-ai-prompt',
      },
      {
        text: '为什么需要 Prompt Engineering',
        link: '/tutorial/1_introduction/1-3_why-do-i-need-ai-prompt',
      },
      {
        text: '应用场景',
        link: '/tutorial/1_introduction/1-4_application-scenarios',
      },
    ],
  },
  {
    text: '基础知识',
    collapsed: false,
    items: [
      {
        text: '基本概念与术语',
        link: '/tutorial/2_basic-knowledge/2-1_basic-concepts-and-terminology',
      },
      {
        text: '设计模式',
        link: '/tutorial/2_basic-knowledge/2-2_design-patterns',
      },
    ],
  },
  {
    text: '语法与结构',
    collapsed: true,
    items: [
      {
        text: '语法与结构概述',
        link: '/tutorial/3_grammar-and-structure/3-1_grammar-and-structure-overview',
      },
      {
        text: '常见规则与限制',
        link: '/tutorial/3_grammar-and-structure/3-2_common-rules-and-limitations',
      },
    ],
  },
  {
    text: '设计与优化',
    collapsed: true,
    items: [
      {
        text: '如何设计好的 Prompt',
        items: [
          {
            text: 'ChatGPT',
            link: '/tutorial/4_design-and-optimization/4-1_how-to-design-a-good-ai-prompt/4-1-1_chatgpt',
          },
          {
            text: 'StableDiffusion',
            link: '/tutorial/4_design-and-optimization/4-1_how-to-design-a-good-ai-prompt/4-1-2_stable-diffusion',
          },
          {
            text: 'Midjourney',
            link: '/tutorial/4_design-and-optimization/4-1_how-to-design-a-good-ai-prompt/4-1-3_midjourney',
          },
        ],
      },
      {
        text: '优化 Prompt 的方法与技巧',
        link: '/tutorial/4_design-and-optimization/4-2_methods-and-techniques-for-optimizing-ai-prompt',
      },
    ],
  },
  {
    text: '高级应用',
    collapsed: true,
    items: [
      {
        text: '论文去重',
        link: '/tutorial/5_advance_case/5-1_paper-remove-duplicates',
      },
    ],
  },
  {
    text: '推荐工具',
    collapsed: true,
    items: [],
  },
  {
    text: '未来发展',
    collapsed: true,
    items: [
      {
        text: '未来趋势与展望',
        link: '/tutorial/7_future-development/7-1_future-trends-and-prospects',
      },
      {
        text: '创新应用与发展方向',
        link: '/tutorial/7_future-development/7-2_innovative-application-and-development-direction',
      },
    ],
  },
];
export default defineConfig({
  title: 'AI Prompt 首页',
  themeConfig: {
    sidebar: tutorialSidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023_present Leeyw',
    },
  },
});
