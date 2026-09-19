from pathlib import Path


STYLES_CSS = Path(__file__).parents[1] / "styles.css"


def test_styles_define_animation():
    content = STYLES_CSS.read_text()
    assert "@keyframes" in content
    assert "animation" in content


def test_styles_define_responsive_layout():
    content = STYLES_CSS.read_text()
    assert "@media" in content


def test_styles_distinguish_completed_tasks():
    content = STYLES_CSS.read_text()
    assert ".completed" in content
