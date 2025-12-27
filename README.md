# Netflix Clone on AWS (StreamBox)

A full-stack Netflix-style streaming platform deployed on AWS using
enterprise cloud architecture.

## Architecture

User → ALB → Auto Scaling EC2 (Node.js API) → RDS MySQL → S3 → CloudFront (future)

All compute and database layers run inside private subnets.

## Tech Stack

- AWS CloudFormation (Infrastructure as Code)
- VPC with Public & Private Subnets
- Application Load Balancer
- Auto Scaling Group (EC2 t3.micro)
- Amazon RDS (MySQL)
- Amazon S3 (video storage)
- Node.js + Express
- HTML, CSS, JavaScript

## Features

- Netflix-style UI
- Movie catalog fetched from RDS
- Auto-scaling backend
- Secure private network design
- API endpoint: `/movies`

## Screenshots

![Homepage]([screenshots/homepage.png](http://netflixc-alb-ewmzxl3ofvmt-799506905.ap-southeast-2.elb.amazonaws.com/))

## API

