---
sidebar_position: 2
title: ROS 2 Nodes, Topics, and Services
---

# ROS 2 Basics: Nodes, Topics, Services

In ROS 2, the fundamental concepts that enable modular and distributed robotics applications are **Nodes**, **Topics**, and **Services**. Understanding these building blocks is crucial for developing any robot behavior with ROS 2.

## 1. Nodes: The Executable Units

A **Node** is essentially a program or a process that performs a specific task within the ROS 2 ecosystem. Each node is responsible for a single, well-defined function. For example, you might have:

*   A camera driver node that publishes image data.
*   A motor control node that subscribes to movement commands.
*   A localization node that estimates the robot's position.

Nodes are designed to be independent, allowing you to stop, restart, or replace them without affecting the entire system.

### Simple Example: Hello World Node

Let's imagine a simple Python node.

```python
import rclpy
from rclpy.node import Node

class MySimpleNode(Node):
    def __init__(self):
        super().__init__('my_simple_node')
        self.get_logger().info('Hello from MySimpleNode!')

def main(args=None):
    rclpy.init(args=args)
    node = MySimpleNode()
    rclpy.spin(node) # Keep the node alive
    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```
This node simply prints a "Hello" message when it starts.

## 2. Topics: The Asynchronous Data Stream

**Topics** are named buses over which nodes exchange messages asynchronously. Think of them like a broadcast channel:

*   A node **publishes** messages to a topic.
*   Other nodes **subscribe** to that topic to receive messages.

This is a one-to-many communication model. Publishers don't know who their subscribers are, and subscribers don't know who their publishers are.

### Simple Example: Publisher and Subscriber

Let's illustrate with a simple publisher and subscriber.

**Publisher Node (`talker.py`):**
```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String # Standard ROS 2 message type

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10) # Create publisher to 'topic'
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello ROS 2: {self.i}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**Subscriber Node (`listener.py`):**
```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):
    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',  # Subscribe to 'topic'
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info(f'I heard: "{msg.data}"')

def main(args=None):
    rclpy.init(args=args)
    minimal_subscriber = MinimalSubscriber()
    rclpy.spin(minimal_subscriber)
    minimal_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

When `talker.py` and `listener.py` are run, the publisher will send "Hello ROS 2" messages, and the subscriber will print them to the console.

## 3. Services: The Synchronous Request/Reply

**Services** are a synchronous communication mechanism in ROS 2. They are used when a node needs to send a request to another node and wait for a response. This is a one-to-one communication model:

*   A node **provides** a service (the server).
*   Another node **calls** that service (the client).

### Simple Example: Service Client and Server

Consider a service that adds two numbers.

**Service Server Node (`add_two_ints_server.py`):**
```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts # Custom service message type

class AddTwoIntsServer(Node):
    def __init__(self):
        super().__init__('add_two_ints_server')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)
        self.get_logger().info('Add two ints service ready.')

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'Incoming request: a={request.a} b={request.b}')
        self.get_logger().info(f'Sending response: {response.sum}')
        return response

def main(args=None):
    rclpy.init(args=args)
    add_two_ints_server = AddTwoIntsServer()
    rclpy.spin(add_two_ints_server)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**Service Client Node (`add_two_ints_client.py`):**
```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts
import sys

class AddTwoIntsClient(Node):
    def __init__(self):
        super().__init__('add_two_ints_client')
        self.cli = self.create_client(AddTwoInts, 'add_two_ints')
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('service not available, waiting again...')
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        self.future = self.cli.call_async(self.req)
        rclpy.spin_until_future_complete(self, self.future)
        return self.future.result()

def main(args=None):
    rclpy.init(args=args)
    
    if len(sys.argv) != 3:
        print('Usage: add_two_ints_client A B')
        sys.exit(1)

    add_two_ints_client = AddTwoIntsClient()
    response = add_two_ints_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    add_two_ints_client.get_logger().info(f'Result of add_two_ints: {response.sum}')
    
    add_two_ints_client.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

When the client is run with two arguments (e.g., `ros2 run <package_name> add_two_ints_client 3 5`), it will call the server, which will perform the addition and return the sum.

## Conclusion

Nodes, Topics, and Services are the core communication primitives in ROS 2 that enable flexible, distributed, and robust robotics applications. Mastering these concepts is your first step towards building complex robot systems.
