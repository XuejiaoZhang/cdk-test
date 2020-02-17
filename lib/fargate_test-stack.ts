import * as cdk from '@aws-cdk/core';

import ecs = require('@aws-cdk/aws-ecs');
import ec2 = require('@aws-cdk/aws-ec2');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');


export class FargateTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // Create a ecs cluster
    const vpc = new ec2.Vpc(this, 'VPC', { maxAzs: 2});
    const cluster = new ecs.Cluster(this, 'fargate-service-autoscaling', { vpc });

    // Create Fargate Service
    const fargateService = new ecs_patterns.NetworkLoadBalancedFargateService(this, 'sample-app', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample")
      },
    });

  }
}