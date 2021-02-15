AWS
aws sts get-caller-identity

https://www.npmjs.com/package/aws-azure-login

https://jumpcloud.com/


CLEAN UP DISK SPACE  MACOS terminal 
Find all node modules EXCPET those on the ! End 
find . -name "node_modules" -type d -prune -print | xargs du -chs ! -path '*/Library/*'
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;

Ssh tunnel - cheat sheet

chmod 400 ~/.ssh/id_rsa (public key) 
Put secret in in file 
ssh - i test.pem -L local_port:target)host:target_port -t centos@10.1.23.234

Ssh-agent multiple keys 

Source bash rc all that 



Some good resources for authenticating with GitHub via SSH are Kent Dodds Egghead.io video and also a how-to on CheatSheets.xyz.
