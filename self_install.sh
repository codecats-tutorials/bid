#install this script from vagrant virtual machine

sudo apt-get update
sudo apt-get --force-yes --yes install python python-dev build-essential python-pip
sudo pip install fabric

ln -s /vagrant/fabfile.py ~/fabfile.py

