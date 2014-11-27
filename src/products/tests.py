from time import sleep

__author__ = 't'


from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from django.test import LiveServerTestCase

class ProductsTest(LiveServerTestCase):
    #fixtures = ['admin.json']

    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    def test_admin_site(self):
        # user opens web browser, navigates to admin page
        self.browser.get(self.live_server_url)
        body = self.browser.find_element_by_tag_name('body')

        self.assertIn('Bid', body.text)
        body.find_element_by_partial_link_text('Kategorie').click()
        body.find_element_by_partial_link_text('Wszystko').click()
        body.find_element_by_id('add-product').click()
        # body.find_element_by_xpath("li[@id='add-product']//a").click()
        sleep(5)
        self.browser.implicitly_wait(10)

        #
        # # users types in username and passwords and presses enter
        # username_field = self.browser.find_element_by_name('username')
        # username_field.send_keys('t')
        # password_field = self.browser.find_element_by_name('password')
        # password_field.send_keys('tomek11')
        # password_field.send_keys(Keys.RETURN)
        # # login credentials are correct, and the user is redirected to the main admin page
        # body = self.browser.find_element_by_tag_name('body')
        # self.assertIn('Site administration', body.text)