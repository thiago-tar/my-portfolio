echo "stopping any existing node servers"
sudo systemctl stop Portfolio.service
sudo systemctl disable Portfolio.service
sudo rm -f /etc/systemd/system/Portfolio.service
