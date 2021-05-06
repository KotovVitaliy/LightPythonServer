# import os
from config import ROOT_PATH
from lib.handler import Handler
import http.server


print("Server started at http://0.0.0.0:80")
httpd = http.server.HTTPServer(('0.0.0.0', 80), Handler)
httpd.serve_forever()
