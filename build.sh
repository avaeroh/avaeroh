#!/bin/bash
echo sudo systemctl status nginx
echo "stopping nginx"
sudo systemctl stop nginx
cd /var/www/avaeroh/react-app
sudo npm run build
sudo cp -r /var/www/avaeroh/react-app/build/* /var/www/avaeroh/html
sudo systemctl start nginx
read -rn1
