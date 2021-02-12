###### STEPS to build VPC from scratch/memory for exam 
- [as taught by Ryan Kroonenburg] per the ACG course - AWS Certified Solutions Architect - Associate 2020
- he says its "100%" needed to do this by memory to pass the exam I created this to help me get to 
the "from memory" skill level without having to rewatch the videos 5 times.

	
  TO DO add notes for 
Best practices 
Cost list points to remember 	
Key Knowledge check/reminder questions


1. Create VPC  
    - Add CIDR block 10.0.0.0/16 (5 ip addresses taken by aws default so 251 left ) 
    - IPV6 AWs defaults 
    - Remember - by default these resources come with a VPC 
      - Route table (router for example 10.0.0.1 reserved for VPC router ) classified as MAIN 
      - SG (default) (will be used later for PRIVATE ec2, remember cannot span multiple VPCs) 
      - Network ACL
2. Create subnets (remember they AZ’s randomized per account, 1 subnet per availability zone) 
    - Auto Assign Public for 1 
    - Private for 2nd
    - Remember subnets not explicitly associated with RTs will be associated with the main 
3. Add Internet Gateway
    - Attach IG to VPC (1 per VPC)
4. Configure Route Tables 
    - Create second route table within the VPC (classified not the MAIN) 
    - Keep MAIN as private (to prevent outside traffic to internet),PR  remember Public is NOT the main one 
    - EDIT routes to create a route out to the internet - 0.0.0.0/0 —TARGET = IntGategeway , (also do the same for ::/0  ipv6)
5. Provision 2 EC2 instances (web and db servers for example) 
    - Amazon Linux 2AMI is fine for free , don’t worry about memory and stuff use defaults \
    - 1 in public — click the public subnet you created - then also make sure the Auto assign Public IP is ENABLED 
        - Configure SG - create NEW one - with PORT rules for 
            - SSH
            - HTTP
        - Create new Key pair and download 
    - 1 in private subnet — click the private subnet you created - then also make sure the Auto assign Public IP is DISABLED 
        - Use SG (default) 
        - Use same key pair as the other one ….
6. Test Connection to Pubic  EC2 instances
    - ssh ec2-user@12.23.23(the new assigned public ip for this instance) -i newKeyPari.pem
    - Hit Yes and then `sudo su` elevate privileges to root
7. Create a new SG for DB instance (aka PRIVATE ec2)
    - INBOUND RULES (PORTS)
        - ALL ICMP IPV4  A(ALL) - pick  CIDR range use to COPY to all rules (can also click SG options) 
        - HTTP (80)
        - HTTPS (443)
        - SSH (22) 
        - MYSQL/Aurora  (3306)
    - OUTBOUND Rules 
        - All Traffic ANYWHERE  0.0.0.0/0 , ::/0  
    - NEXT - go to EC2 - NETWORKING - Change Security Groups - from default TO new Sg created above 
8. Test Connection to private ec2 - from public to private  
    - Grab Private IP - and use `ping PASTE.IP.HERE` FROM the public one we ssh into above
9. SSH - INTO - the private ec2 - from public (NOT USED in real life would never save KEY on public server- instead use BASTION) 
    - nano myNewKey.pem
    - Paste KEY into the newly created file 
    - chmod 400 myNewKey.pem
    - ssh ec2-user@12.23.23(private) -i myNewKey.pem
    - Remember cannot do  — `yum update -y` (how to install software like mysql on the private server?)no public out THIS is where
    NAT instances and NAT gateways come in next 
