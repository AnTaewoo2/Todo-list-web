from pathlib import Path


APP_JS = Path(__file__).parents[1] / "app.js"


def test_app_uses_react_state_for_tasks():
    content = APP_JS.read_text()
    assert "React.useState([])" in content


def test_app_contains_required_task_controls():
    content = APP_JS.read_text()
    assert "Add task" in content
    assert "Complete" in content
    assert "Remove" in content


def test_app_mounts_into_root():
    content = APP_JS.read_text()
    assert 'document.getElementById("root")' in content
