/* eslint-disable global-require */

import { sortBy } from '@site/src/utils/jsUtils';
import { Paper } from '@site/src/shared/dto/Paper';

// prettier-ignore
const PAPERS: Paper[] = [
  {
    title: 'UniDexGrasp: Universal Robotic Dexterous Grasping via Learning Diverse Proposal Generation and Goal-Conditioned Policy',
    description: 'Learning universal robotic dexterous grasping from a point cloud observation under a table-top setting. CVPR 2023.',
    preview: null,
    website: 'https://pku-epic.github.io/UniDexGrasp/',
    tags: ['rl', 'rgbd_pc'],
  },
  {
    title: 'UniDexGrasp++: Improving Dexterous Grasping Policy Learning via Geometry-aware Curriculum and Iterative Generalist-Specialist Learning',
    description: 'A novel dexterous grasping policy learning pipeline. ICCV 2023.',
    preview: null,
    website: 'https://pku-epic.github.io/UniDexGrasp++/',
    tags: ['rl', 'dexterousgrasping', 'rgbd_pc'],
  },
  {
    title: 'GAPartNet: Cross-Category Domain-Generalizable Object Perception and Manipulation via Generalizable and Actionable Parts. CVPR 2023 highlight.',
    description: 'Learning generalizable object perception and manipulation skills via Generalizable and Actionable Parts. CVPR 2023.',
    preview: null,
    website: 'https://pku-epic.github.io/GAPartNet/',
    tags: ['rl', 'articulated', 'rgbd_pc'],
  },
  {
    title: 'GenDexGrasp: Generalizable Dexterous Grasping',
    description: 'A novel hand-agnostic grasping algorithm for generalizable grasping. ICRA 2023.',
    preview: null,
    website: 'https://sites.google.com/view/gendexgrasp/',
    tags: ['rl', 'dexterousgrasping', 'rgbd_pc'],
  },
  {
    title: 'ARNOLD: A Benchmark for Language-Grounded Task Learning With Continuous States in Realistic 3D Scenes',
    description: 'ICCV 2023; RGB-D point cloud.',
    preview: null,
    website: 'https://arnold-benchmark.github.io/',
    tags: ['manipulation', 'rgbd_pc'],
  },
  {
    title: 'RLAfford: End-to-End Affordance Learning for Robotic Manipulation',
    description: 'ICRA 2023; RGB-D point cloud.',
    preview: null,
    website: 'https://sites.google.com/view/rlafford/',
    tags: ['rl', 'manipulation', 'articulated', 'rgbd_pc', 'affordance'],
  },
  {
    title: 'PartManip: Learning Cross-Category Generalizable Part Manipulation Policy from Point Cloud Observations',
    description: 'CVPR 2023; RGB-D point cloud.',
    preview: null,
    website: 'https://github.com/PKU-EPIC/PartManip',
    tags: ['rl', 'dexterousgrasping', 'articulated'],
  },
  {
    title: 'Grasp Multiple Objects with One Hand',
    description: 'A novel method for multi-object grasping on a tabletop with a multi-finger dexterous hand. Preprint, under review.',
    preview: null,
    website: 'https://multigrasp.github.io/',
    tags: ['rgbd_pc', 'rl', 'dexterousgrasping'],
  },
  {
    title: 'Dynamic Handover: Throw and Catch with Bimanual Hands',
    description: 'CoRL 2023.',
    preview: null,
    website: 'https://binghao-huang.github.io/dynamic_handover/',
    tags: ['rl'],
  },
  {
    title: 'Sequential Dexterity: Chaining Dexterous Policies for Long-Horizon Manipulation',
    description: 'CoRL 2023.',
    preview: null,
    website: 'https://sequential-dexterity.github.io/',
    tags: ['rl'],
  },
  {
    title: 'Curiosity-Driven Learning of Joint Locomotion and Manipulation Tasks',
    description: 'CoRL 2023.',
    preview: null,
    website: 'https://openreview.net/forum?id=QG_ERxtDAP-&referrer=%5Bthe%20profile%20of%20Clemens%20Schwarke%5D(%2Fprofile%3Fid%3D~Clemens_Schwarke1',
    tags: ['rl'],
  },
  {
    title: 'General In-Hand Object Rotation with Vision and Touch',
    description: 'CoRL 2023.',
    preview: null,
    website: 'https://haozhi.io/rotateit/',
    tags: ['rl'],
  },
  {
    title: 'DexPBT: Scaling up Dexterous Manipulation for Hand-Arm Systems with Population Based Training',
    description: 'RSS 2023.',
    preview: null,
    website: 'https://sites.google.com/view/dexpbt',
    tags: ['rl'],
  },
  {
    title: 'Rotating without Seeing: Towards In-hand Dexterity through Touch',
    description: 'RSS 2023.',
    preview: null,
    website: 'https://touchdexterity.github.io/',
    tags: ['rl'],
  },
  {
    title: 'In-Hand Object Rotation via Rapid Motor Adaptation',
    description: 'CoRL 2022.',
    preview: null,
    website: 'https://haozhi.io/hora/',
    tags: ['rl'],
  },
  {
    title: 'Towards Human-Level Bimanual Dexterous Manipulation with Reinforcement Learnin',
    description: 'NIPS 2022.',
    preview: null,
    website: 'https://bi-dexhands.ai/',
    tags: ['rgbd_pc', 'rl'],
  },
  {
    title: 'Data-Driven Operational Space Control for Adaptative and Robust Robot Manipulation',
    description: 'ICRA 2022.',
    preview: "https://cremebrule.github.io/oscar-web/assets/images/model_figure.png",
    website: 'https://cremebrule.github.io/oscar-web/',
    tags: ['rgbd_pc', 'rl', 'dexterousgrasping'],
  },
  {
    title: 'Factory: Fast contact for robotic assembly',
    description: 'RSS 2022.',
    preview: null,
    website: 'https://sites.google.com/nvidia.com/factory',
    tags: ['rl'],
  },
  {
    title: 'ASE: Large-scale Reusable Adversarial Skill Embeddings for Physically Simulated Characters',
    description: 'SIGGRAPH 2022.',
    preview: "https://research.nvidia.com/labs/toronto-ai/ASE/resources/ase_teaser.png",
    website: 'https://nv-tlabs.github.io/ASE/',
    tags: ['rl'],
  },
  {
    title: 'STORM: An Integrated Framework for Fast Joint-Space Model-Predictive Control for Reactive Manipulation',
    description: 'CoRL 2021.',
    preview: null,
    website: 'https://github.com/NVlabs/storm',
    tags: ['rl'],
  },
  {
    title: 'Causal Reasoning in Simulationfor Structure and Transfer Learning of Robot Manipulation Policies',
    description: 'ICRA 2021.',
    preview: null,
    website: 'https://sites.google.com/view/crest-causal-struct-xfer-manip',
    tags: ['rgbd_pc', 'rl', 'dexterousgrasping', 'rgbd_pc'],
  },
  {
    title: 'In-Hand Object Pose Tracking via Contact Feedback and GPU-Accelerated Robotic Simulation',
    description: 'ICRA 2021.',
    preview: null,
    website: 'https://sites.google.com/view/in-hand-object-pose-tracking/',
    tags: ['rl'],
  },
  {
    title: 'Reactive Long Horizon Task Execution via Visual Skill and Precondition Models',
    description: 'IROS 2021.',
    preview: null,
    website: 'https://arxiv.org/pdf/2011.08694.pdf',
    tags: ['rl'],
  },
  {
    title: 'Sim-to-Real for Robotic Tactile Sensing via Physics-Based Simulation and Learned Latent Projections',
    description: 'ICRA 2021.',
    preview: null,
    website: 'https://arxiv.org/pdf/2103.16747.pdf',
    tags: ['rl'],
  },
  {
    title: 'Learning to Walk in Minutes Using Massively Parallel Deep Reinforcement Learning',
    description: 'CoRL 2021.',
    preview: null,
    website: 'https://leggedrobotics.github.io/legged_gym/',
    tags: ['rl'],
  },
  {
    title: 'Isaac Gym: High Performance GPU-Based Physics Simulation For Robot Learning',
    description: 'NIPS 2021.',
    preview: null,
    website: 'https://sites.google.com/view/isaacgym-nvidia',
    tags: ['rl'],
  },
  {
    title: 'Dynamics Randomization Revisited:A Case Study for Quadrupedal Locomotion',
    description: 'ICRA 2021.',
    preview: null,
    website: 'https://www.pair.toronto.edu/understanding-dr/',
    tags: ['rl'],
  },
  {
    title: 'Learning a State Representation and Navigation in Cluttered and Dynamic Environments',
    description: 'RAL 2021.',
    preview: null,
    website: 'https://arxiv.org/pdf/2103.04351.pdf',
    tags: ['rl'],
  },
  {
    title: 'Learning to Compose Hierarchical Object-Centric Controllers for Robotic Manipulation',
    description: 'CoRL 2020.',
    preview: null,
    website: 'https://sites.google.com/view/compositional-object-control/',
    tags: ['rl'],
  },
  {
    title: 'Learning a Contact-Adaptive Controller for Robust, Efficient Legged Locomotion',
    description: 'CoRL 2020.',
    preview: null,
    website: 'https://sites.google.com/view/learn-contact-controller/home',
    tags: ['rl'],
  },
  {
    title: 'Learning Active Task-Oriented Exploration Policies for Bridging the Sim-to-Real Gap',
    description: 'RSS 2020.',
    preview: null,
    website: 'https://sites.google.com/view/task-oriented-exploration/',
    tags: ['rl'],
  },
  {
    title: 'Closing the Sim-to-Real Loop: Adapting Simulation Randomization with Real World Experience',
    description: 'ICRA 2019.',
    preview: null,
    website: 'https://sites.google.com/view/simopt',
    tags: ['rl'],
  },
  {
    title: 'GPU-Accelerated Robotics Simulation for Distributed Reinforcement Learning',
    description: 'CoRL 2018.',
    preview: null,
    website: 'https://sites.google.com/view/accelerated-gpu-simulation/home',
    tags: ['rl'],
  },
  {
    title: 'On Pre-Training for Visuo-Motor Control: Revisiting a Learning-from-Scratch Baseline',
    description: 'ICML 2021.',
    preview: null,
    website: 'https://arxiv.org/abs/2212.05749',
    tags: ['rl'],
  },
  {
    title: 'AnyTeleop: A General Vision-Based Dexterous Robot Arm-Hand Teleoperation System',
    description: 'RSS 2023.',
    preview: null,
    website: 'http://anyteleop.com/',
    tags: ['rl'],
  },
  {
    title: 'BEHAVIOR-1K: A Benchmark for Embodied AI with 1,000 Everyday Activities and Realistic Simulation',
    description: 'CoRL 2023.',
    preview: null,
    website: 'http://anyteleop.com/',
    tags: ['rl', 'rgb', 'mobilemanip'],
  },
  {
    title: 'ORBIT: A Unified Simulation Framework for Interactive Robot Learning Environments',
    description: 'RAL 2023.',
    preview: null,
    website: 'http://anyteleop.com/',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'CIRCLE: Capture in Rich Contextual Environments',
    description: 'CVPR 2023.',
    preview: null,
    website: 'https://stanford-tml.github.io/circle_dataset/',
    tags: ['animation'],
  },
  {
    title: 'Object Motion Guided Human Motion Synthesis',
    description: 'SIGGRAPHAsia 2023.',
    preview: null,
    website: 'https://lijiaman.github.io/projects/omomo/',
    tags: ['animation'],
  },
  {
    title: 'Maniskill: Generalizable manipulation skill benchmark with large-scale demonstrations',
    description: 'NeurIPS 2021 (Dataset and Benchmark Track).',
    preview: null,
    website: 'https://github.com/haosulab/ManiSkill',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Maniskill2: Generalizable manipulation skill benchmark with large-scale demonstrations',
    description: 'ICLR 2023.',
    preview: null,
    website: 'https://maniskill2.github.io/',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Decision Transformer: Reinforcement Learning via Sequence Modeling',
    description: 'NIPS 2021.',
    preview: null,
    website: 'https://github.com/kzl/decision-transformer',
    tags: ['rl'],
  },
  {
    title: 'Offline Reinforcement Learning as One Big Sequence Modeling Problem',
    description: 'NIPS 2021.',
    preview: null,
    website: 'https://github.com/JannerM/trajectory-transformer',
    tags: ['rl'],
  },
  {
    title: 'CtrlFormer: Learning Transferable State Representation for Visual Control via Transformer',
    description: 'ICML 2022.',
    preview: null,
    website: 'https://github.com/YaoMarkMu/CtrlFormer_robotic',
    tags: ['rl'],
  },
  {
    title: 'RLBench: The Robot Learning Benchmark & Learning Environment',
    description: 'RAL 2020.',
    preview: null,
    website: 'https://sites.google.com/view/rlbench',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Q-attention: Enabling efficient learning for vision-based robotic manipulation',
    description: 'RAL 2022.',
    preview: null,
    website: 'https://sites.google.com/view/q-attention',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Coarse-to-Fine Q-attention: Efficient Learning for Visual Robotic Manipulation via Discretisation',
    description: 'CVPR 2022.',
    preview: null,
    website: 'https://sites.google.com/view/c2f-q-attention',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'VLMbench:  A Compositional Benchmark for Vision-and-Language Manipulation',
    description: 'NIPS 2022.',
    preview: null,
    website: 'https://sites.google.com/ucsc.edu/vlmbench/home',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Perceiver-Actor: A Multi-Task Transformer for Robotic Manipulation',
    description: 'CoRL 2022.',
    preview: null,
    website: 'https://peract.github.io/',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Simulating dual-arm robot motions to avoid collision by rigid body dynamics for laboratory bench work',
    description: 'ALR 2023.',
    preview: null,
    website: 'https://link.springer.com/article/10.1007/s10015-022-00823-1',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'PADL: Language-Directed Physics-Based Character Control',
    description: 'SIGGRAPH Asia 2022.',
    preview: null,
    website: 'https://xbpeng.github.io/projects/PADL/index.html',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'CALM: Conditional Adversarial Latent Models for Directable Virtual Characters',
    description: 'SIGGRAPH2023.',
    preview: null,
    website: 'https://xbpeng.github.io/projects/CALM/index.html',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Legged Locomotion in Challenging Terrains using Egocentric Vision',
    description: 'CoRL2022.',
    preview: null,
    website: 'https://vision-locomotion.github.io/',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Rapid Locomotion via Reinforcement Learning',
    description: 'RSS2022.',
    preview: null,
    website: 'https://agility.csail.mit.edu/',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Visual Dexterity: In-Hand Reorientation of Novel and Complex Object Shapes',
    description: 'Science Robotics 2023.',
    preview: null,
    website: 'https://taochenshh.github.io/projects/visual-dexterity',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Parallel Q-Learning: Scaling Off-policy Reinforcement Learning',
    description: 'ICML2023.',
    preview: null,
    website: 'https://arxiv.org/abs/2307.12983',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Real2Sim2Real: Self-Supervised Learning of Physical Single-Step Dynamic Actions for Planar Robot Casting',
    description: 'ICRA2022.',
    preview: null,
    website: 'https://tinyurl.com/robotcast',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Fleet-DAgger: Interactive Robot Fleet Learning with Scalable Human Supervision',
    description: 'CoRL2023.',
    preview: null,
    website: 'https://tinyurl.com/fleet-dagger',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'ViNL: Visual Navigation and Locomotion Over Obstacles',
    description: 'ICRA2023.',
    preview: null,
    website: 'http://www.joannetruong.com/projects/vinl.html',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'RoboGen: Towards Unleashing Infinite Data for Automated Robot Learning via Generative Simulation',
    description: 'Preprint.',
    preview: null,
    website: 'https://robogen-ai.github.io/',
    tags: ['rl', 'manipulation', 'mobilemanip'],
  },
  {
    title: 'DoorGym: A Scalable Door Opening Environment And Baseline Agent',
    description: 'A scalable door-pening environment in Gym. NeurIPS 2019, Deep RL workshop.',
    preview: null,
    website: 'https://github.com/PSVL/DoorGym/',
    tags: ['rl', 'manipulation', 'articulated'],
  },
  {
    title: 'VIP: Towards Universal Visual Reward and Representation via Value-Implicit Pre-Training',
    description: 'A self-supervised zero-shot visual reward and representation for downstream unseen robot tasks. ICLR 2023, spotlight.',
    preview: null,
    website: 'https://github.com/PSVL/DoorGym/',
    tags: ['rl', 'manipulation', 'articulated'],
  },
  {
    title: 'Universal Manipulation Policy Network for Articulated Objects',
    description: 'A single image-based policy network that infers closed-loop action sequences for manipulating articulated objects. RA-L vol. 7, issue 2, 2022.',
    preview: null,
    website: 'https://ieeexplore.ieee.org/document/9681198/',
    tags: ['rl', 'manipulation', 'articulated'],
  },
  {
    title: 'Ditto: Building Digital Twins of Articulated Objects from Interaction',
    description: 'A model that reconstructs part-level geometry and articulation model of an articulated object given observations before and after an interaction. CVPR 2022, oral.',
    preview: null,
    website: 'https://github.com/UT-Austin-RPL/Ditto',
    tags: ['rl', 'manipulation', 'articulated'],
  },
  {
    title: 'FlowBot3D: Learning 3D Articulation Flow to Manipulate Articulated Objects',
    description: 'A novel method to perceive and manipulate 3D articulated objects that generalizes to enable the robot to articulate unseen classes of objects. RSS 2022.',
    preview: null,
    website: 'https://sites.google.com/view/articulated-flowbot-3d/home',
    tags: ['rl', 'manipulation', 'articulated'],
  },
  {
    title: 'FlowBot++: Learning Generalized Articulated Objects Manipulation via Articulation Projection',
    description: 'A system that can learn to articulate novel objects with no prior interaction, after training on other articulated objects. CoRL 2023.',
    preview: null,
    website: 'https://github.com/harryzhangOG/flowbotpp',
    tags: ['rl', 'manipulation', 'articulated'],
  },
  {
    title: 'SAGCI-System: Towards Sample-Efficient, Generalizable, Compositional, and Incremental Robot Learning',
    description: 'A system for articulated object manipulation via differentiable simulation. ICRA 2022.',
    preview: null,
    website: 'https://sites.google.com/view/egci',
    tags: ['rl', 'manipulation', 'articulated'],
  },
  {
    title: 'SAM-RL: Sensing-Aware Model-based Reinforcement Learning via Differentiable Physics-based Simulation and Rendering',
    description: 'RSS 2023. Best System Paper Finalist.',
    preview: null,
    website: 'https://sites.google.com/view/rss-sam-rl',
    tags: ['rl', 'manipulation'],
  },
  {
    title: 'Diff-LfD: Contact-aware Model-based Learning from Visual Demonstration for Robotic Manipulation via Differentiable Physics-based Simulation and Rendering',
    description: 'CoRL 2023.',
    preview: null,
    website: 'https://sites.google.com/view/diff-lfd',
    tags: ['rl', 'manipulation'],
  },
];

function sortPapers() {
  let result = PAPERS;
  // Sort by paper name
  result = sortBy(result, (paper) => paper.title.toLowerCase());
  
  // Sort by favorite tag, favorites first
  result = sortBy(result, (paper) => !paper.tags.includes('rl'));
  return result;
}

export const sortedPapers = sortPapers();
