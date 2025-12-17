---
sidebar_position: 3
title: rclpy - Python Agent Integration with ROS 2
---

# rclpy: Connecting Python Agents to ROS 2 Controllers

`rclpy` is the Python client library for ROS 2, enabling Python developers to write ROS 2 nodes and interact with the ROS 2 ecosystem. It provides an intuitive way to create publishers, subscribers, services, and clients, making it easy to bridge Python-based AI agents, control scripts, or analysis tools with a robot's ROS 2 controllers.

## Why rclpy for Python Agents?

Python is a popular language for AI, machine learning, and rapid prototyping. `rclpy` allows you to leverage these strengths within a robust robotics framework like ROS 2. This means you can:

*   Develop high-level behavioral logic for your robot in Python.
*   Process sensor data from ROS 2 topics using Python's extensive data science libraries.
*   Send commands to low-level ROS 2 controllers, which might be implemented in C++ for performance.
*   Integrate AI models directly into your robot's perception and decision-making pipelines.

## Key `rclpy` Concepts Revisited

You've already seen `rclpy` in action in the previous chapter with basic Nodes, Topics, and Services. Let's briefly recap the core pattern for creating a simple `rclpy` node:

```python
import rclpy
from rclpy.node import Node

def main(args=None):
    rclpy.init(args=args)       # Initialize the ROS 2 client library
    node = Node('my_python_agent') # Create a new node instance
    # ... add publishers, subscribers, services here ...
    rclpy.spin(node)            # Keep the node running until shutdown
    node.destroy_node()         # Clean up resources
    rclpy.shutdown()            # Shutdown the ROS 2 client library

if __name__ == '__main__':
    main()
```

## Short Code Examples: Building an Intelligent Follower

Let's imagine we want to create a simple Python agent that subscribes to a topic publishing object detections (e.g., from a camera) and publishes simple movement commands to make the robot "follow" the object.

### 1. Object Detection Publisher (Simulated)

First, a simulated node that publishes `String` messages as object detections. In a real robot, this would come from a perception system.

```python
# object_detector.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String
import random
import time

class ObjectDetector(Node):
    def __init__(self):
        super().__init__('object_detector')
        self.publisher_ = self.create_publisher(String, 'object_detections', 10)
        self.timer = self.create_timer(1.0, self.publish_detection)
        self.objects = ['robot', 'ball', 'person', 'nothing']

    def publish_detection(self):
        detected_object = random.choice(self.objects)
        msg = String()
        msg.data = f'Detected: {detected_object}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'"{msg.data}"')

def main(args=None):
    rclpy.init(args=args)
    detector = ObjectDetector()
    rclpy.spin(detector)
    detector.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```
To run this: `ros2 run <your_package_name> object_detector`

### 2. Python Follower Agent

Now, our Python agent uses `rclpy` to subscribe to these detections and publish a very basic movement command. For simplicity, movement commands are also `String` messages.

```python
# follower_agent.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class FollowerAgent(Node):
    def __init__(self):
        super().__init__('follower_agent')
        self.subscription = self.create_subscription(
            String,
            'object_detections',
            self.detection_callback,
            10
        )
        self.movement_publisher = self.create_publisher(String, 'robot_commands', 10)
        self.last_detected_object = None

    def detection_callback(self, msg):
        detection_info = msg.data.split(': ')
        if len(detection_info) == 2:
            detected_object = detection_info[1]
            self.last_detected_object = detected_object
            self.get_logger().info(f'Agent received: {detected_object}')
            self.decide_movement()

    def decide_movement(self):
        cmd_msg = String()
        if self.last_detected_object == 'person':
            cmd_msg.data = 'MOVE_FORWARD'
            self.get_logger().info('Command: MOVE_FORWARD (following person)')
        elif self.last_detected_object == 'ball':
            cmd_msg.data = 'MOVE_TOWARDS_BALL'
            self.get_logger().info('Command: MOVE_TOWARDS_BALL')
        elif self.last_detected_object == 'robot':
            cmd_msg.data = 'STOP' # Avoid collision with another robot
            self.get_logger().info('Command: STOP (avoiding robot)')
        else: # 'nothing' or other
            cmd_msg.data = 'SEARCH_AROUND'
            self.get_logger().info('Command: SEARCH_AROUND')
        
        self.movement_publisher.publish(cmd_msg)

def main(args=None):
    rclpy.init(args=args)
    agent = FollowerAgent()
    rclpy.spin(agent)
    agent.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

To run this: `ros2 run <your_package_name> follower_agent`

### How to Run (Conceptual)

1.  Open three separate terminals.
2.  In the first terminal, start the ROS 2 daemon: `ros2 daemon start`
3.  In the second terminal, run the object detector: `ros2 run <your_package_name> object_detector`
4.  In the third terminal, run the follower agent: `ros2 run <your_package_name> follower_agent`

You will see the `object_detector` publishing detections, and the `follower_agent` subscribing to them and publishing corresponding movement commands.

## Conclusion

`rclpy` provides a powerful yet straightforward interface for Python developers to integrate their logic into ROS 2 robotic systems. By combining Python's versatility with ROS 2's robust communication infrastructure, you can create sophisticated and intelligent robot behaviors.
