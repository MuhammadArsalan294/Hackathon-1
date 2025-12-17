import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro', // Assuming 'intro' is an existing doc outside the module
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      link: {
        type: 'generated-index',
        title: 'ROS 2 Module Overview',
        description: 'An introduction to ROS 2 for humanoid robots.',
        slug: '/module-01-ros2',
      },
      items: [
        'module-01-ros2/chapter-01-introduction/index',
        'module-01-ros2/chapter-02-ros2-basics/index',
        'module-01-ros2/chapter-03-rclpy/index',
        'module-01-ros2/chapter-04-urdf/index',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      link: {
        type: 'generated-index',
        title: 'Digital Twin Module Overview',
        description: 'Exploring digital twins with Gazebo and Unity.',
        slug: '/module-02-digital-twin',
      },
      items: [
        'chapter-01-digital-twin/index',
        'chapter-01-digital-twin/lesson-01-gazebo-simulation',
        'chapter-01-digital-twin/lesson-02-unity-rendering',
        'chapter-01-digital-twin/lesson-03-sensor-simulation',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      link: {
        type: 'generated-index',
        title: 'AI-Robot Brain Module Overview',
        description: 'Exploring NVIDIA Isaac™ for AI-powered humanoid robotics.',
        slug: '/module-03-isaac',
      },
      items: [
        'module-03-isaac/introduction-ai-robot-brain',
        'module-03-isaac/lesson-01-isaac-sim',
        'module-03-isaac/lesson-02-isaac-ros',
        'module-03-isaac/lesson-03-nav2-bipedal',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      link: {
        type: 'generated-index',
        title: 'VLA Module Overview',
        description: 'An introduction to Vision-Language-Action for humanoid robots.',
        slug: '/module-04-vla',
      },
      items: [
        'module-04-vla/index',
        'module-04-vla/lesson-01-voice-to-action',
        'module-04-vla/lesson-02-cognitive-planning',
        'module-04-vla/lesson-03-autonomous-humanoid',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/create-a-page',
        'tutorial-basics/markdown-features',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
