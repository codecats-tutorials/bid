from fabric.api import env, local, run, prefix, put, sudo, hide, settings
from fabric.operations import prompt, reboot
from fabric.contrib.files import exists
from fabric.context_managers import cd, lcd
from fabric.state import output
from contextlib import contextmanager

@contextmanager
def virtualenv(name):
    with prefix('source %s/bin/activate' % name):
        yield

def install_os_libs():
    sudo('apt-get install git')

def configure_os_users():
    sudo('groupadd --system webapps')
    sudo('useradd --system --gid webapps --home /home/vagrant/bid bid')

def create_venv():
    #sudo -u bid
    sudo('virtualenv /home/vagrant/venv-bid')


def install_nginx():
    sudo('apt-get install nginx')
    sudo('/etc/init.d/nginx start')
    sudo('/etc/init.d/nginx status')
    sudo('cp /vagrant/pattern/nginx.bid /etc/nginx/sites-available/bid')
    sudo('ln -s /etc/nginx/sites-available/bid /etc/nginx/sites-enabled/bid')
    sudo('rm /etc/nginx/sites-enabled/default')
    sudo('/etc/init.d/nginx restart')
    sudo('/etc/init.d/nginx status')

def install_postgresql():
    pass

def install_gunicorn():
    with virtualenv('/home/vagrant/venv-bid'):
        run('pip install gunicorn')
        run('pip install setproctitle')
    run('cp -R /vagrant/pattern/gunicorn/gunicorn_start /home/vagrant/venv-bid/bin/gunicorn_start')
    run('chmod u+x /home/vagrant/venv-bid/bin/gunicorn_start')
    #test after set permissions for user bid
    #sudo('/home/vagrant/venv-bid/bin/gunicorn_start')

def install_supervisor():
    sudo('apt-get install supervisor')
    sudo('cp /vagrant/pattern/supervisor.conf.d /etc/supervisor/conf.d/bid.conf')
    sudo('supervisorctl reread')
    sudo('supervisorctl update')

def configure_server():
    pass

def set_permissions():
    try:
        configure_os_users()
    except:
        pass
    sudo('chown -R bid venv-bid')
    sudo('chgrp -R webapps venv-bid')

def install_requirements():
    with virtualenv('/home/vagrant/venv-bid'):
        run('pip install -r /home/vagrant/bid/requirements.txt')

def install():
    sudo('chmod 777 /vagrant/src/mysite.log')
    install_os_libs()
    create_venv()
    install_requirements()
    set_permissions()
    install_gunicorn()
    install_supervisor()
    install_nginx()
    configure_server()
    install_postgresql()
