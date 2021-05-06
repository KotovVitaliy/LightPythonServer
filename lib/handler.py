import http.server
import urllib.parse
import re

from config import ROOT_PATH
from views.viewer import Viewer


class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)

        if re.match('^.*\.(js|css)$', parsed_url.path):
            path = ROOT_PATH() + parsed_url.path
            print(path)
            file = open(path, 'r').read()
            self.wfile.write(file.encode('utf-8'))
            return

        viewer = Viewer()
        html = viewer.get_html(parsed_url.path)
        self.wfile.write(html.encode('utf-8'))

    def do_POST(self):
        pass
