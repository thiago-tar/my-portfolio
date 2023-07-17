#!/bin/bash
cd /home/ec2-user/deploy/front/portfolio
npm rum generate-env
echo "generate-env"
ng build
echo "build complete"
