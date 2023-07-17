#!/bin/bash
echo "start"
cd /home/ec2-user/deploy/front/portfolio
echo "start"
npm rum generate-env
echo "generate-env"
ng build
echo "build complete"
