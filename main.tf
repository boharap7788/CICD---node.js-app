provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "web_server" {
  ami           = "ami-03bb6d83c60fc5f7c"
  instance_type = "t2.micro"
  key_name      = "node-js"

  tags = {
    Name = "web_server"
  }
}

resource "aws_security_group" "web_server_sg" {
  name_prefix = "web_server_sg"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web_server_sg"
  }
}
