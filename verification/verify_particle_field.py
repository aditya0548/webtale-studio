from playwright.sync_api import sync_playwright

def test_particle_field(page):
    page.goto("http://localhost:3000/test")
    page.wait_for_timeout(2000) # Wait for page to load and react-three-fiber to initialize

    # Check if the canvas is present
    canvas = page.locator("canvas")
    canvas.wait_for()

    page.screenshot(path="/home/jules/verification/particle_field.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_particle_field(page)
        finally:
            browser.close()
