from pathlib import Path


README = Path(__file__).resolve().parents[1] / "readme.md"


def test_readme_documents_opening_the_site():
    content = README.read_text(encoding="utf-8")

    assert "index.html" in content


def test_readme_documents_task_actions():
    content = README.read_text(encoding="utf-8")

    assert "Add task" in content
    assert "Complete" in content
    assert "Remove" in content


def test_readme_documents_runtime_requirement():
    content = README.read_text(encoding="utf-8")

    assert "ReactDOM" in content
    assert "internet" in content
