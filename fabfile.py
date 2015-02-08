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
    pass

def install_postgresql():
    pass

def install_gunicorn():
    pass

def install_supervisor():
    pass

def configure_server():
    pass

def set_permissions():
    configure_os_users()
    sudo('chown -R bid venv-bid')
    sudo('chgrp -R webapps venv-bid')

def install_requirements():
    with virtualenv('/home/vagrant/venv-bid'):
        run('pip install -r /home/vagrant/bid/requirements.txt')

def install():
    install_os_libs()
    create_venv()
    install_requirements()
    install_gunicorn()#<-todo: start here
    install_supervisor()
    configure_server()
    install_postgresql()
    # set_permissions()