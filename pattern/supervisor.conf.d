[program:bid]
command = /home/vagrant/venv-bid/bin/gunicorn_start
user = bid
stdout_logfile = /home/vagrant/bid/bid/logs/gunicorn_supervisor.log   ; Where to write log messages
redirect_stderr = true  
