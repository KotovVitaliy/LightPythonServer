import os

from config import ROOT_PATH


class Viewer:
    # uri => data
    router = {
        '/': {
            'tpl': 'main.tpl',
            'title': 'Main page',
            'js': 'main.js'
        },
    }

    def get_html(self, uri):
        html = ""
        html += self._get_header()
        html += self._get_target_tpl(uri)
        html += self._get_footer()
        html = self._replace_data(html, uri)
        return html

    def _replace_data(self, html: str, uri):
        page_data = self.router[uri]
        html = html.replace("{{title}}", page_data['title'])
        html = html.replace("{{js}}", page_data['js'])
        return html

    def _get_header(self):
        path = ROOT_PATH() + "/tpl/header.tpl"
        return open(path, 'r').read()

    def _get_footer(self):
        path = ROOT_PATH() + "/tpl/footer.tpl"
        return open(path, 'r').read()

    def _get_target_tpl(self, uri):
        if uri not in self.router:
            raise Exception(f"No data for URI {uri}")

        path = ROOT_PATH() + "/tpl/" + self.router[uri]['tpl']

        if not os.path.isfile(path):
            raise Exception(f"Detected path is not a file: {path}")

        return open(path, 'r').read()

