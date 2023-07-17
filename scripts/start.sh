#!/bin/bash
echo "start"
cd /home/ec2-user/deploy/front/portfolio
pwd
echo "start 3"
npm rum generate-env
echo "generate-env"
ng build
echo "build complete"
