import http.server
import os
import urllib.parse
import re

from config import ROOT_PATH
from views.viewer import Viewer


class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)

        if re.match('^.*\.(js|css)$', parsed_url.path):
            path = ROOT_PATH() + parsed_url.path

            if not os.path.isfile(path):
                self.send_response(404)
                self.end_headers()
                return

            self.send_response(200)
            self.end_headers()
            file = open(path, 'r').read()
            self.wfile.write(file.encode('utf-8'))
            return

        if re.match('^.*\.(ico|jpeg|jpg|png)$', parsed_url.path):
            path = ROOT_PATH() + parsed_url.path

            if not os.path.isfile(path):
                self.send_response(404)
                self.end_headers()
                return

            self.send_response(200)
            self.send_header('Content-type', 'image/png')
            self.end_headers()
            file = open(path, 'rb').read()
            self.wfile.write(file)
            return

        viewer = Viewer()
        html = viewer.get_html(parsed_url.path)
        self.wfile.write(html.encode('utf-8'))

    def do_POST(self):
        pass
