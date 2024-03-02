pipeline {
  agent {
    label "master"
  }
  environment {
    AWS_ACCESS_KEY_ID     = credentials('aws-access-key-id')
    AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build') {
      steps {
        nodejs('nodejs') {
          sh 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        nodejs('nodejs') {
          sh 'npm test'
        }
      }
    }
    stage('Deploy') {
      steps {
        withCredentials([[
          credentialsId: 'terraform-creds',
          accessKeyVariable: 'AWS_ACCESS_KEY_ID',
          secretKeyVariable: 'AWS_SECRET_ACCESS_KEY',
        ]]) {
          sh '''
            cd terraform
            terraform init
            terraform apply -auto-approve \
              -var access_key=$AWS_ACCESS_KEY_ID \
              -var secret_key=$AWS_SECRET_ACCESS_KEY
          '''
        }
      }
    }
  }
}
