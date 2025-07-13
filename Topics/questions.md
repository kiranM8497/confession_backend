 JS fundamentals down, what are closures, object prototype, event loop, etc.
  web fundamentals down, HTTP (headers, methods, cookie, body, status code), what is DNS, what is a CDN, how to do caching (and cache invalidation), OSI layers (probably don’t need to know too much, but you should be able to explain UDP/TCP vs HTTP).

If you’re doing full stack, SQL, architecture (load balancing, high availability)

 what is the difference between threading and concurrency?

 You gotta know a bit of everything, even tho nodejs is backend, they can plot twist you with a frontend type questions but at a high level:

Core concepts

how does the event loop work in node.js, and how is it different from the browser?

explain the difference between process.nexttick, setimmediate, and settimeout.

what are worker threads, and when would you use them?

how does node.js handle asynchronous operations under the hood?

explain how garbage collection works in node.js.

how do streams work in node.js, and when would you use them?

what is the purpose of the cluster module, and how does it handle scaling?

Performance and optimization

how would you handle a memory leak in a node.js application?

how do you optimize a high-throughput api built with node.js?

what are the trade-offs between child processes, worker threads, and clustering?

how would you monitor and profile a node.js application in production?

what are some ways to prevent blocking the event loop?

Security

how do you prevent prototype pollution in a node.js application?

what security risks does eval() pose in a node.js app?

how do you handle jwt authentication securely in a node.js backend?

how does csrf protection work in an api, and do you need it in a restful service?

what are the best practices for handling sensitive data (e.g., env variables, secrets management)?

Code challenges / hands-on exercises

implement a custom promise class from scratch.

write a function that limits the number of concurrent asynchronous tasks running at a time.

build a simple rate limiter middleware in express.

implement an lru cache using javascript.

create an async queue that processes tasks with a given concurrency limit.

Bonus Tips

Consider free and paid alternatives with a more structured approach to prepping for frontend interviews. Full disclosure, I am the creator of FrontendLead (dot) com, which offers a structured approach to preparing for front-end specific interviews at top tech companies, with company particular questions. (30-day money-back guarantee)

Use other platforms (free and paid) to also help you prepare.

Like solving a technical problem, you should always have multiple tools in your tool belt to solve a problem.

async/await v/s promises

Event loop concept

Callback Hell and remedying that

REST API, Middlewares, Swagger implementation(maybe)

Design Patterns for specific use cases, when to use what

SOLID principles (especially if it's typescript)

File structure for Express app, separation of logic

RESTful routes, how to add a filter to GET

Error handling

HTTP status codes 200, 201, 400, 401, 403, 404, 500

Middleware

Authentication vs Authorization

ORM

Database normalization  
Code quality: readable, testable, good modularity and separation of concerns, and performance considerations.

Ability to adapt to changing requirements. How you respond when challenged about your choices.

Understanding of underlying concepts, using suitable language constructs, techniques and data structures.

Decision making skills. Did you consider different alternatives and evaluate the pros and cons? Do you understand the consequences of your decisions, and are you able to revisit earlier decisions in the presence of new information.

Resourcefulness. Are you able to get yourself unblocked? Do you ask the right questions, or know where/how to find the answers you need? Do you demonstrate debugging skills.

Problem solving skills. Do you break the problem down into smaller components? Do you ask the right questions to clarify requirements? Can you actually solve the problem?

Technical proficiency. Do you know what you’re talking about and can you clearly demonstrate your technical skills and knowledge?

Operational concerns. Do you understand the possible error cases and how to handle them? Have you considered security, reliability, performance, analytics and monitoring?

Describe what an event emitter is.

What are some benefits of using Node.js?
What is the event loop in Node.js? Can you explain its phases and how asynchronous operations are handled?

What are the differences between setTimeout, setImmediate, and process.nextTick? When would you use each?

How do you handle errors in async/await and in callbacks?

How does Node.js handle concurrency under the hood, considering it's single-threaded?

What are worker threads, and when should you use them over clustering?
Can you walk me through how Express.js handles middleware? How does the next() function work?

How would you build a custom middleware for logging or authentication?

What’s the difference between global and route-level middleware in Express?

How do you handle validation in Express? Which libraries do you use and why?
How do you secure an Express.js app against common vulnerabilities like XSS, CSRF, and NoSQL injection?

What are HTTP headers you typically use for security (e.g., helmet, cors)?

Can you explain how JWT works? How do you manage token expiration and refresh?

What are the best practices for storing secrets (API keys, database credentials)?   
API Design & REST Principles
How do you design a RESTful API? Can you give an example of RESTful routes for a blogging system?

What is the difference between PUT and PATCH?

How do you handle versioning in REST APIs?

How do you return consistent error responses in Express APIs?
How do you handle large JSON payloads in Node.js efficiently?

What are some common performance bottlenecks in a Node.js backend?

How do you use tools like PM2 or Node.js cluster to optimize performance?

What strategies would you use to detect and fix a memory leak?

Load Balancing & Scalability
How would you scale an Express.js application across multiple CPU cores?

Can you explain how load balancers (e.g., NGINX, HAProxy) work with Node.js apps?

What would your deployment strategy look like for a Node/Express app behind a load balancer?

How do sticky sessions affect load balancing, and how do you manage session state?
Rate Limiting & Throttling
Have you ever implemented rate limiting in an Express app? Which libraries have you used (e.g., express-rate-limit, Redis)?

What’s the difference between rate limiting and throttling?

How would you prevent abuse of a public API endpoint in a Node.js service?

🏗️ Architecture & System Design
How do you structure a scalable Express.js application for a large team?

How would you design a middleware architecture that supports feature toggles or A/B testing?

Walk me through designing a microservice that handles image uploads. How would you secure and scale it?
Database & Caching
How do you handle slow MongoDB queries in your Node.js apps?

Have you used Redis for caching? Can you describe how you’d cache a frequently used API response?

How do you manage database connections in Express to avoid connection leaks?

🛡️ DevOps & Observability
How do you monitor a Node.js app in production?

Which logs and metrics do you consider essential for alerting and debugging?

What are your thoughts on containerizing Node apps with Docker for deployment?

What’s your preferred CI/CD pipeline setup for deploying MERN stack apps?

🔄 Bonus: Behavioral / Experience-Based
Can you describe a real issue you’ve debugged in a production Node.js app?

Have you mentored junior devs on Express or backend topics? What do you usually emphasize?
How does nodeJS event loop work

Worker threads / multithreading

Where would you use generators

streams

mixins (I was asked once about multi-inheritance in javascript)

prototype pollution in NodeJS