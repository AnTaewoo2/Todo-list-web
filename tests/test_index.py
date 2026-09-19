from pathlib import Path


INDEX_HTML = Path(__file__).parents[1] / "index.html"


def test_index_has_react_mount_point_and_local_assets():
    content = INDEX_HTML.read_text()
    assert content.count('<div id="root"></div>') == 1
    assert "styles.css" in content
    assert "app.js" in content


def test_index_loads_approved_react_cdns():
    content = INDEX_HTML.read_text()
    assert "https://unpkg.com/react@18/umd/react.development.js" in content
    assert "https://unpkg.com/react-dom@18/umd/react-dom.development.js" in content
