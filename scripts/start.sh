#!/bin/bash
echo "start"
cd /home/ec2-user/deploy/front/portfolio
echo "start 2"
sudo npm --v
sudo npm rum generate-env
echo "generate-env"
sudo ng build
echo "build complete"
