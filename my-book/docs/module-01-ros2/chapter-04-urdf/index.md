---
sidebar_position: 4
title: URDF for Humanoid Robots
---

# URDF for Humanoid Robots: Defining Robot Structures

The Unified Robot Description Format (URDF) is an XML format used in ROS to describe all aspects of a robot. It's crucial for visualization, simulation, and planning, allowing software components to understand the physical makeup of the robot they are controlling. For humanoid robots, URDF defines their complex articulated structure, including joints, links, and sensors.

## What is URDF?

URDF provides a way to describe a robot as a set of rigid bodies (**links**) connected by joints (**joints**). It can describe:

*   **Links**: These are the physical components of the robot (e.g., torso, upper arm, forearm, hand). Each link has properties like mass, inertia, visual appearance, and collision geometry.
*   **Joints**: These define how links are connected and how they can move relative to each other (e.g., revolute for rotation, prismatic for linear movement). Joints specify axis of rotation/translation, limits, and dynamics.
*   **Sensors**: While not directly described as links or joints, sensors are often attached to links and their properties (e.g., camera field of view, lidar range) are configured in separate files that reference the URDF structure.

## Basic Structure of a URDF File

A URDF file starts with a `<robot>` tag and contains multiple `<link>` and `<joint>` definitions.

```xml
<?xml version="1.0"?>
<robot name="simple_humanoid">

  <!-- ======================== LINKS ======================== -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.2 0.1 0.3"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 0.8 1"/>
      </material>
    </visual>
  </link>

  <link name="right_upper_arm_link">
    <visual>
      <geometry>
        <cylinder radius="0.03" length="0.2"/>
      </geometry>
      <material name="green">
        <color rgba="0 0.8 0 1"/>
      </material>
    </visual>
  </link>

  <link name="right_forearm_link">
    <visual>
      <geometry>
        <cylinder radius="0.025" length="0.15"/>
      </geometry>
      <material name="red">
        <color rgba="0.8 0 0 1"/>
      </material>
    </visual>
  </link>

  <!-- ======================== JOINTS ======================== -->
  <joint name="base_to_right_upper_arm" type="revolute">
    <parent link="base_link"/>
    <child link="right_upper_arm_link"/>
    <origin xyz="0 0.1 0.1" rpy="0 0 0"/> <!-- Relative to parent -->
    <axis xyz="0 1 0"/>
    <limit lower="-1.57" upper="1.57" effort="10" velocity="0.5"/>
  </joint>

  <joint name="right_upper_arm_to_forearm" type="revolute">
    <parent link="right_upper_arm_link"/>
    <child link="right_forearm_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/> <!-- Relative to parent -->
    <axis xyz="0 1 0"/>
    <limit lower="-1.57" upper="1.57" effort="10" velocity="0.5"/>
  </joint>

</robot>
```

## Simple Humanoid Structure Examples

A full humanoid URDF can be very complex, but the principles remain the same: connecting links (body parts) with joints (articulations).

### Torso and Head (Simplified)

```xml
<?xml version="1.0"?>
<robot name="humanoid_torso_head">

  <link name="torso">
    <visual>
      <geometry><box size="0.2 0.15 0.4"/></geometry>
      <material name="grey"><color rgba="0.7 0.7 0.7 1"/></material>
    </visual>
  </link>

  <link name="head">
    <visual>
      <geometry><sphere radius="0.1"/></geometry>
      <material name="white"><color rgba="1 1 1 1"/></material>
    </visual>
  </link>

  <joint name="torso_to_head" type="revolute">
    <parent link="torso"/>
    <child link="head"/>
    <origin xyz="0 0 0.25" rpy="0 0 0"/>
    <axis xyz="0 0 1"/>
    <limit lower="-0.5" upper="0.5" effort="10" velocity="0.5"/>
  </joint>

</robot>
```

### Adding a Leg (Simplified)

To the `torso` link, you would attach leg links and joints.

```xml
  <!-- ... existing torso link ... -->

  <link name="upper_leg_link">
    <visual>
      <geometry><cylinder radius="0.05" length="0.3"/></geometry>
      <material name="grey"/></visual>
  </link>

  <link name="lower_leg_link">
    <visual>
      <geometry><cylinder radius="0.04" length="0.25"/></geometry>
      <material name="grey"/></visual>
  </link>

  <joint name="torso_to_upper_leg" type="revolute">
    <parent link="torso"/>
    <child link="upper_leg_link"/>
    <origin xyz="-0.05 0 -0.2" rpy="0 0 0"/> <!-- Relative to torso -->
    <axis xyz="1 0 0"/>
    <limit lower="-0.8" upper="0.8" effort="10" velocity="0.5"/>
  </joint>

  <joint name="upper_leg_to_lower_leg" type="revolute">
    <parent link="upper_leg_link"/>
    <child link="lower_leg_link"/>
    <origin xyz="0 0 -0.15" rpy="0 0 0"/> <!-- Relative to upper_leg_link -->
    <axis xyz="1 0 0"/>
    <limit lower="-1.5" upper="0" effort="10" velocity="0.5"/>
  </joint>
```

## Visualization

These URDF files can be visualized in ROS 2 using `rviz` or simulated in tools like Gazebo. The visual tags help define what the robot looks like.

## Conclusion

URDF is a powerful tool for describing robot kinematics and dynamics. For humanoid robots, it allows precise definition of their complex skeletal structure, which is fundamental for motion planning, control, and interaction within the ROS 2 environment.
