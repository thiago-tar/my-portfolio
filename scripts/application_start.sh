#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/deploy/front/portfolio

#navigate into our working directory where we have all our github files
cd /home/ec2-user/deploy/front/portfolio

sudo mv /home/ec2-user/deploy/front/portfolio/scripts/Portfolio.service /etc/systemd/system/Portfolio.service
#install node modules
# echo "NPM START"
#start our node app in the background
# node ./src/server.js > app.out.log 2> app.err.log < /dev/null &
sudo systemctl enable Portfolio.service
sudo systemctl start Portfolio.service
echo "Finish"
