#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FargateTestStack } from '../lib/fargate_test-stack';

const app = new cdk.App();
new FargateTestStack(app, 'FargateTestStack');
