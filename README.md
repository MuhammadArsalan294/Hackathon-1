"# Hackathon-1" 

------------------------------------------------------------------


Start Hackathon

hackathon-1 folder on click  
cmd (folder main a kar cmd kia tw cmd open ho gaya)
python --version  (Ye command run karo)
pip install specifyplus (run this command on your terminal)
specifyplus --version (Verify installation Yani asey check kar skty hai spec-Kit install hui ya nahi)
specifyplus init book  (run this command on your terminal)(es sy project ka name rakh skty hain jasey specifyplus init 
                        projectname and enter yani init ky bad project ka name aye ga)
? Select AI Tool:
  > gemini

? Select Terminal:
  > powershell (Windows only)
terminal close 


hackathon-1 folder on click  
book folder on click 
cmd (cmd open hoga)
gemini (Ye command run krein gay tw gemini open hoga terminial py or yaha kam krein gay)

-----------------------------------------------------------------

/sp.constitution

Project: AI/Spec-Driven Book Creation using Docusaurus, Spec-Kit Plus, and Claude Code. 
Principles: Maintain structured, accurate, and spec-driven writing aligned with tooling standards; ensure clarity, coherence, and consistency suitable for technical readers.
Target audience : beginners to intermediate 
Success: Produce a fully spec-compliant book deployable on GitHub Pages with reliable content flow and adherence to defined requirements.
Focus on hands-on learning
Provide the constitution with vision , Core Principles , Success Criteria , Constraints , Stakeholders , and Brand Voice.

(/sp.constitution ye gemini ky search bar mein run ki then)

-----------------------------------------------------------------

hackathon-1 folder on click  
book folder on click 
cmd (cmd open hoga)
code . (yani aik or cmd open kar ky vs code open kar lia)
terminial on click then new terminal on click tw terminial open hoga tw errow sy command prompt select krein gay
npx create-docusaurus@latest my-book classic (Ye command line paste karni hai es sy documentation hogi or classic sy phle 
                                             my-book ki jaga project ka name likh skty hain or my-book docusaurus ky project ka name hai )
cd my-book (Ye command run karni hai vs code ky terminal py es sy my-book ky andr jo hoga waha chlein jayein gay hum)
npm run start / npm start (Ye command run krni es sy docusaurus ka project server py open hoga)

------------------------------------------------------------------

(gemini jaha open hai os ky search bar mein ye command run krni hai. 
step 1  /sp.specify then /sp.plan then /sp.tasks then /sp.implement 
step 2  /sp.specify then /sp.plan then /sp.tasks then /sp.implement
step 3  /sp.specify then /sp.plan then /sp.tasks then /sp.implement
step 4  /sp.specify then /sp.plan then /sp.tasks then /sp.implement
) 

####### step 1 #######

/sp.specify

Create Module 1 inside my-book/docs with the name "module-01-ros2".  
Inside it, create four chapters as separate folders. Each chapter must have an index.md file written in clear Docusaurus-ready markdown.

1. chapter-01-introduction  
   - index.md: Intro to ROS 2 as the robotic nervous system.

2. chapter-02-ros2-basics  
   - index.md: ROS 2 Nodes, Topics, Services with simple examples.

3. chapter-03-rclpy  
   - index.md: Using rclpy to connect Python agents to ROS 2 controllers. Add short code examples.

4. chapter-04-urdf  
   - index.md: Basic URDF for humanoid robots with simple structure examples.

Keep all content clean, structured, and beginner-friendly.


/sp.plan "Module 1: The Robotic Nervous System (ROS 2)

Organize the chapter 'chapter-01-ros2' into detailed lessons with structured learning objectives. Include the following plan:

1. Lesson 1: ROS 2 Basics
   - Explain ROS 2 as middleware for humanoid robots
   - Introduce Nodes, Topics, and Services
   - Include simple diagrams and examples for beginners

2. Lesson 2: Python Agent Integration with ROS 2
   - Bridge Python agents to ROS 2 controllers using rclpy
   - Include step-by-step code examples and explanations

3. Lesson 3: URDF for Humanoids
   - Explain the Unified Robot Description Format (URDF)
   - Show basic humanoid robot structure with examples

4. Lesson 4: Summary and Key Takeaways
   - Recap main concepts
   - Provide references and suggested exercises

Format the plan in a structured, clean markdown suitable for Docusaurus, with headings, bullet points, and code blocks where needed."

/sp.tasks

/sp.implement

####### step 2#######

/sp.specify "Generate Chapter 1 for Module 2: The Digital Twin (Gazebo & Unity). Create a folder named 'chapter-01-digital-twin' inside my-book/docs. Inside this folder create the following markdown files:

1. index.md — Introduction to Module 2. Explain the concept of Digital Twin, physics simulation, and environment building.
2. lesson-01-gazebo-simulation.md — Cover physics, gravity, and collisions in Gazebo. Include examples and diagrams.
3. lesson-02-unity-rendering.md — Explain high-fidelity rendering and human-robot interaction in Unity.
4. lesson-03-sensor-simulation.md — Simulate sensors: LiDAR, Depth Cameras, IMUs. Add examples.

Write everything in clean, structured markdown suitable for a Docusaurus doc. Use headings, bullet points, and code blocks."


/sp.plan "
Plan out Module 2: The Digital Twin (Gazebo & Unity). Break this module into 4 chapters and outline tasks for each chapter. The chapters should be:

1. Introduction to Digital Twins — Explain what digital twins are, the role of Gazebo and Unity, and why simulation is essential for humanoid robotics.

2. Physics Simulation in Gazebo — Cover gravity, collisions, joints, and robot movement. Include tasks for setting up a Gazebo world.

3. High-Fidelity Simulation in Unity — Explain rendering, environment building, and human-robot interaction. Include tasks for creating a simple Unity scene.

4. Simulating Sensors — Cover LiDAR, depth cameras, IMUs. Include tasks for spawning sensors in simulation and reading their data.

Output a structured task plan with subtasks for content creation, documentation structure, and file generation.
"

/sp.tasks

/sp.implement


####### step 3 #######

/sp.specify "Create Module 3 for the textbook titled 'The AI-Robot Brain (NVIDIA Isaac™)'.  
Inside my-book/docs, create a folder named 'module-03-isaac'.

Inside this folder generate four chapters:

1. index.md — Introduction to Module 3 and the concept of the robot’s AI brain. Explain how NVIDIA Isaac™ powers advanced perception, training, and autonomous behavior.

2. lesson-01-isaac-sim.md — Explain NVIDIA Isaac Sim, photorealistic simulation, synthetic data generation, domain randomization, and its role in humanoid training.

3. lesson-02-isaac-ros.md — Cover Isaac ROS, its GPU-accelerated perception stack, VSLAM (Visual SLAM), navigation pipelines, and integration with ROS 2.

4. lesson-03-nav2-bipedal.md — Explain Nav2 for humanoid navigation. Include path planning, obstacle avoidance, and adapting Nav2 for bipedal walking.

Write all files in clean, structured markdown suitable for Docusaurus docs using headings, bullet points, and short examples."


/sp.plan
Create the plan for Module 3: The AI-Robot Brain (NVIDIA Isaac).  
Include: architecture sketch, chapter structure, research approach, decisions, tradeoffs, testing strategy, and quality validation.  
Chapters should cover:  
1) Isaac Sim for photorealistic simulation  
2) Isaac ROS for GPU-accelerated perception and VSLAM  
3) Nav2 for humanoid path planning  
4) Full AI brain pipeline for humanoid robots  
Follow research-concurrent approach and APA citation rules.

/sp.tasks

/sp.implement


####### step 4 #######

/sp.specify "Create Module 4 for the textbook titled 'Vision-Language-Action (VLA)'.  
Inside my-book/docs, create a folder named 'module-04-vla'.

Inside this folder generate four chapters:

1. index.md — Introduction to Module 4 and the concept of Vision-Language-Action. Explain how LLMs enable robots to understand language, vision, and actions together.

2. lesson-01-voice-to-action.md — Explain voice-to-action systems using OpenAI Whisper. Cover speech recognition, command understanding, and converting voice input into robot instructions.

3. lesson-02-cognitive-planning.md — Explain cognitive planning using Large Language Models. Show how natural language commands (e.g., 'Clean the room') are translated into structured ROS 2 action sequences.

4. lesson-03-autonomous-humanoid.md — Capstone chapter describing the Autonomous Humanoid. Explain how a simulated robot receives a voice command, plans a path, navigates obstacles, identifies objects using computer vision, and performs manipulation.

Write all files in clean, structured markdown suitable for Docusaurus docs using headings, bullet points, diagrams, and short examples."

/sp.plan "Module 4: Vision-Language-Action (VLA)

Organize the module 'module-04-vla' into detailed chapters with clear learning objectives. Include the following plan:

1. Chapter 1: Introduction to Vision-Language-Action
   - Explain the concept of Vision-Language-Action in robotics
   - Describe how LLMs, vision, and control systems work together
   - Introduce embodied intelligence and human-robot interaction

2. Chapter 2: Voice-to-Action Systems
   - Explain speech recognition using OpenAI Whisper
   - Show how voice commands are converted into robot instructions
   - Include simple voice-to-command flow diagrams and examples

3. Chapter 3: Cognitive Planning with LLMs
   - Explain how LLMs translate natural language into structured plans
   - Show examples like 'Clean the room' mapped to ROS 2 actions
   - Discuss task decomposition and reasoning in robots

4. Chapter 4: Capstone — The Autonomous Humanoid
   - Describe the end-to-end autonomous humanoid system
   - Cover perception, navigation, object recognition, and manipulation
   - Explain the full pipeline from voice command to physical action

Format the plan in clean, structured markdown suitable for Docusaurus, using headings, bullet points, diagrams, and short examples."

/sp.tasks

/sp.implement


####### Project Push Github #######

(Vs Code ko Command line dy kar code ko gitub py push krna hai)

####### Again push Github ####### 

git add .
git commit -m "commit"
git push origin main

(Agar aik project git py push kar dia hai os ko dubara push karne ky liye ye 3 command vs code ky termial py run karo)

####### Project Push Vercel #######

(Vercel py push karne ky liye vercel py docusaurus select karne hai phir deploy karna hai or aik bar vs code py ' npm run build ' ki command bhi run karne hai)



Retrieval Augmented Generation (RAG)
Website Data Extract
Embedding
Covert The Extracted Content Into Numerical Vectors Using An Embedding Model
Vector DataBase
Qdrant


Google search bar Qdrant
Login Qdrant

Create a Free Cluster 
youtube-embedding (name)
Create Free Cluster on click (Api key or url create hogya )

Google search bar Cohere
Login
First Name Muhammad
Last Name Azam
continue on click 
software Engineer
continue on click 
Text Generation 
Submit on click 
API Keys on click  (sidebar mein ye a rha hai) copy this api key
