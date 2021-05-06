import pathlib


def ROOT_PATH() -> str:
    return str(pathlib.Path(__file__).parent.absolute())
