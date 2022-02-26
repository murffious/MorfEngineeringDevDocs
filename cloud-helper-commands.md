RESPONSIBILITIES

• Provide input to strategic plans and product roadmaps with a focus on cloud products
• Code APIs to work with cloud systems and when required to help bridge on-prem systems and applications with the cloud
• Code applications designed to work with or enhance features offered by cloud platforms
• Translate architectural requirements into PaaS, IaaS and serverless solutions
• Deploy, manage, and operate scalable, highly available, and fault-tolerant systems
• Implement and control data flow to and from cloud service providers
• Assist in the evaluating and enablement of measures to protect cloud system from security compromise and to keep the system safe
• Plan and perform approved scheduled and emergency maintenance where cloud products have been customized or configured. This includes documenting the maintenance and following the change management process, including approving documented change requests
• Respond to escalated incidents and engage vendors as necessary. Identify, track, and resolve associated problems
• Author and maintain documentation and knowledge-based articles
• Adhere to all security guidelines and ensure that systems are properly protected with working backups; ensure all others with access are doing the same
• Perform general research to evaluate a range of cloud product offerings, new cloud features, and emerging trends
• Identify and document technical application, architectures and requirements
• Order, provision and configure supporting systems and infrastructure
• Interact with vendors and provide feedback on their products that influences their product roadmap
• Participate in the design and implementation of supporting systems and infrastructure
• Keep training material up to date
• Document the steps required to fulfill service requests
• Ensure system monitoring is properly tuned

### CLI essentials 
state or stateless 

Task: Using CLI or local terminal to interface with an ec2 instance on AWS
Task: Obtain meta data, user data and ip address/dns basics. # see also VPC file I made for inof on basics of AWS networking

basic traverse and file using shell (interface for interpreter to automate and run comamnds, configure intereacti with computer processes/files) 
ls 
ls -a 
cd ~ 
touch 
go to file 
open file, view file, write to file, move file 


1. ip addresses - ping - public private - ipv4 ipv6 --
2. bash # https://devhints.io/bash
cat 
echo
>

3. ssh throughout - SSH or Secure Shell is a network communication protocol that enables two computers to communicate (c.f http or hypertext transfer protocol, which is the protocol used to transfer hypertext such as web pages) and share data.
key generating for ssh etc 

3 common uses 
ssh into and ec2 instance - via public ip 
ssh inot a bastion host 
setting pu secure communications with stuff like github on cli

permissions 
chmod 400 my-web-1-test-key.pem ssh ec2-user@54.209.255.97 -i my-web-1-test-key.pem Elevate privileges to root inside an ec2 sudo su
Ssh tunnel - cheat sheet
chmod 400 ~/.ssh/id_rsa (public key) Put secret in in file ssh - i test.pem -L local_port:target)host:target_port -t centos@10.1.23.234
4. AWS - most common ones I have used. with IAM and security, AWS aws sts get-caller-identity


Virtualization https://opensource.com/resources/virtualization
A hypervisor, also known as a virtual machine monitor or VMM, is software that creates and runs virtual machines (VMs). A hypervisor allows one host computer to support multiple guest VMs by virtually sharing its resources, such as memory and processing. - hypervisor is a software layer that enables one host computer to simultaneously support multiple VMs, hypervisors are a key element of the technology that makes cloud computing possible. Docker creates (via kernal)  applications environments where as hypervisor different way it accesses spins up) creates entire multiple OS. 
Docker is right now, the most popular container platform. Whereas, Kubernetes is the market leader and the standardized means of orchestrating containers and deploying distributed applications.

Container vs hypervisor
Containers and hypervisors are both involved in making applications faster and more efficient, but they achieve this in different ways. 


Hypervisors:

Allow an operating system to run independently from the underlying hardware through the use of virtual machines.
Share virtual computing, storage and memory resources.
Can run multiple operating systems on top of one server (bare-metal hypervisor) or installed on top of one standard operating system and isolated from it (hosted hypervisor).
Containers: 

Allow applications to run independently of an operating system. 
Can run on any operating system—all they need is a container engine to run. 
Are extremely portable since in a container, an application has everything it needs to run. 

Hypervisors and containers are used for different purposes. Hypervisors are used to create and run virtual machines (VMs), which each have their own complete operating systems, securely isolated from the others. In contrast to VMs, containers package up just an app and its related services. This makes them more lightweight and portable than VMs, so they are often used for fast and flexible application development and movement.


https://www.vmware.com/topics/glossary/content/hypervisor.html
So the real comparison can be amongst Kubernetes and Swarm, not Docker itself. That is the difference between docker and Kubernetes that most the people don’t get at the start.

docker commands often used for ECS/Fargate 

Code Editor on Cli 
1. nano 
2. emac
3. vim cheat sheet 



# 




https://www.npmjs.com/package/aws-azure-login

https://jumpcloud.com/

CLEAN UP DISK SPACE MACOS terminal Find all node modules EXCPET those on the ! End find . -name "node_modules" -type d -prune -print | xargs du -chs ! -path '/Library/' find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' ;




Ssh-agent multiple keys

Source bash rc all that

Some good resources for authenticating with GitHub via SSH are Kent Dodds Egghead.io video and also a how-to on CheatSheets.xyz.

Ping the secure priavte one from the public one ping 10.0.2.129
