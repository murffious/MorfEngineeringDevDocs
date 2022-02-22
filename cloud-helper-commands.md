### CLI essentials 

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


A hypervisor, also known as a virtual machine monitor or VMM, is software that creates and runs virtual machines (VMs). A hypervisor allows one host computer to support multiple guest VMs by virtually sharing its resources, such as memory and processing. - this is what AWS uses to manage all the virutal instances even mayeb for placement groups of ec2 instances https://www.hitechnectar.com/blogs/hypervisor-vs-docker/#:~:text=The%20most%20significant%20difference%20between,on%20the%20host%20kernel%20itself.
Docker is right now, the most popular container platform. Whereas, Kubernetes is the market leader and the standardized means of orchestrating containers and deploying distributed applications.

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
