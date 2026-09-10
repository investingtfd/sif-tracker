"""Helper: extract raw AMFI text from a saved Claude_Browser get_page_text
tool-result JSON file (used when the result was too large to inline), strip
the browser chrome (Title/URL/Source element header, trailing Tab Context
footer), and save to the target raw data file.

Usage: python3 clean_raw_dump.py <tool_result_json_path> <output_txt_path>
"""
import json
import sys


def main():
    src, dst = sys.argv[1], sys.argv[2]
    with open(src) as f:
        data = json.load(f)
    text = "".join(item.get("text", "") for item in data)

    start = text.find("Scheme Code;NAV Name")
    if start != -1:
        text = text[start:]

    end = text.find("\n\nTab Context:")
    if end != -1:
        text = text[:end]

    with open(dst, "w") as f:
        f.write(text)

    print(f"wrote {len(text)} chars to {dst}")
    lines = [l for l in text.splitlines() if l and ";" in l]
    print(f"{len(lines)} data-ish lines")


if __name__ == "__main__":
    main()
