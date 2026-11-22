import math
import random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_cyber_gradient(width, height, color1, color2, angle=0):
    base = Image.new('RGB', (width, height), color1)
    top = Image.new('RGB', (width, height), color2)
    mask = Image.new('L', (width, height))
    draw = ImageDraw.Draw(mask)
    for y in range(height):
        alpha = int(255 * (y / height))
        draw.line([(0, y), (width, y)], fill=alpha)
    base.paste(top, (0, 0), mask)
    return base

def draw_grid(draw, width, height, step=40, color=(0, 240, 255, 35)):
    for x in range(0, width, step):
        draw.line([(x, 0), (x, height)], fill=color, width=1)
    for y in range(0, height, step):
        draw.line([(0, y), (width, y)], fill=color, width=1)

def draw_hud_corners(draw, x0, y0, x1, y1, length=30, color=(0, 240, 255, 220), width=3):
    # Top Left
    draw.line([(x0, y0), (x0 + length, y0)], fill=color, width=width)
    draw.line([(x0, y0), (x0, y0 + length)], fill=color, width=width)
    # Top Right
    draw.line([(x1, y0), (x1 - length, y0)], fill=color, width=width)
    draw.line([(x1, y0), (x1, y0 + length)], fill=color, width=width)
    # Bottom Left
    draw.line([(x0, y1), (x0 + length, y1)], fill=color, width=width)
    draw.line([(x0, y1), (x0, y1 - length)], fill=color, width=width)
    # Bottom Right
    draw.line([(x1, y1), (x1 - length, y1)], fill=color, width=width)
    draw.line([(x1, y1), (x1, y1 - length)], fill=color, width=width)

# 1. Hero Banner (1920x1080)
def generate_hero_banner():
    w, h = 1920, 1080
    im = Image.new('RGB', (w, h), (7, 10, 19))
    draw = ImageDraw.Draw(im, 'RGBA')
    
    # Perspective grid lines
    vanish_x, vanish_y = w // 2, int(h * 0.42)
    # Horizon glow
    for r in range(300, 0, -5):
        alpha = int(40 * (1 - r / 300))
        draw.ellipse([vanish_x - r * 3, vanish_y - r, vanish_x + r * 3, vanish_y + r], fill=(157, 78, 221, alpha))
        draw.ellipse([vanish_x - r * 2, vanish_y - r // 2, vanish_x + r * 2, vanish_y + r // 2], fill=(0, 240, 255, alpha))

    # Grid lines from horizon to bottom
    for i in range(-25, 26):
        dest_x = vanish_x + i * 110
        draw.line([(vanish_x + i * 8, vanish_y), (dest_x, h)], fill=(0, 240, 255, 55), width=2)
        
    # Horizontal grid lines with perspective spacing
    for step in range(1, 25):
        y = vanish_y + int((h - vanish_y) * (step / 24) ** 1.8)
        draw.line([(0, y), (w, y)], fill=(0, 240, 255, min(140, step * 6)), width=1)
        
    # Cyber skyline wireframe silhouettes in background
    random.seed(42)
    skyline_y = vanish_y - 20
    for i in range(40):
        bx = int(i * (w / 38))
        bw = random.randint(35, 75)
        bh = random.randint(80, 320)
        top_y = skyline_y - bh
        # Building fill
        draw.rectangle([bx, top_y, bx + bw, skyline_y + 150], fill=(12, 17, 30, 230), outline=(255, 0, 127, 80), width=1)
        # Windows/dots
        for wx in range(bx + 6, bx + bw - 6, 10):
            for wy in range(top_y + 10, skyline_y, 16):
                if random.random() > 0.5:
                    win_color = (0, 240, 255, 120) if random.random() > 0.4 else (255, 0, 127, 140)
                    draw.rectangle([wx, wy, wx + 4, wy + 7], fill=win_color)

    # Ambient cyber circuit traces
    for _ in range(35):
        x = random.randint(50, w - 50)
        y = random.randint(50, h - 50)
        draw.ellipse([x - 2, y - 2, x + 2, y + 2], fill=(0, 240, 255, 200))

    # HUD Elements
    draw_hud_corners(draw, 60, 60, w - 60, h - 60, length=80, color=(0, 240, 255, 180), width=4)
    draw.text((80, 80), "SYS // CYBERNETIC_INTERFACE // v4.2 // 2077_EDITION", fill=(0, 240, 255, 200))
    draw.text((w - 420, 80), "TELEMETRY: STABLE // ASTANA_NODE: ACTIVE", fill=(255, 0, 127, 200))
    draw.text((80, h - 100), "COORDINATES: 51.1694° N, 71.4491° E", fill=(148, 163, 184, 180))
    draw.text((w - 380, h - 100), "STATUS: FULL_STACK // AI_AUTOMATION", fill=(0, 255, 136, 200))

    im.save("assets/images/hero-banner.jpg", "JPEG", quality=90)
    print("hero-banner.jpg created")

# 2. Profile Photo (800x800)
def generate_profile():
    w, h = 800, 800
    im = Image.new('RGB', (w, h), (10, 14, 24))
    draw = ImageDraw.Draw(im, 'RGBA')
    draw_grid(draw, w, h, step=40, color=(0, 240, 255, 30))
    
    # Outer cyber rings
    cx, cy = w // 2, h // 2
    for r in range(320, 260, -20):
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(0, 240, 255, 60), width=2)
    draw.ellipse([cx - 250, cy - 250, cx + 250, cy + 250], outline=(255, 0, 127, 100), width=3)
    
    # Futuristic Stylized Cyber Head Silhouette
    # Head & shoulders
    draw.ellipse([cx - 110, cy - 170, cx + 110, cy + 90], fill=(16, 24, 42)) # skull base
    # Neon cyber visor / optics
    draw.polygon([
        (cx - 95, cy - 65),
        (cx + 95, cy - 65),
        (cx + 85, cy - 20),
        (cx - 85, cy - 20)
    ], fill=(0, 240, 255, 220), outline=(255, 255, 255, 255))
    # Visor reflections
    draw.line([(cx - 70, cy - 50), (cx + 50, cy - 50)], fill=(255, 255, 255, 240), width=4)
    draw.line([(cx - 40, cy - 35), (cx + 70, cy - 35)], fill=(255, 0, 127, 240), width=3)
    
    # Jaw & neck
    draw.polygon([
        (cx - 75, cy + 50),
        (cx + 75, cy + 50),
        (cx + 45, cy + 130),
        (cx - 45, cy + 130)
    ], fill=(22, 32, 54))
    
    # Torso / Armor shoulders
    draw.polygon([
        (cx - 45, cy + 130),
        (cx + 45, cy + 130),
        (cx + 220, cy + 340),
        (cx - 220, cy + 340)
    ], fill=(14, 20, 36), outline=(0, 240, 255, 90), width=2)
    
    # Cyber collarbones & glowing circuit lines
    draw.line([(cx - 180, cy + 310), (cx - 50, cy + 190)], fill=(0, 240, 255, 180), width=3)
    draw.line([(cx + 180, cy + 310), (cx + 50, cy + 190)], fill=(255, 0, 127, 180), width=3)
    draw.line([(cx - 50, cy + 190), (cx + 50, cy + 190)], fill=(0, 255, 136, 180), width=3)
    
    # Neural interface nodes
    draw.ellipse([cx - 50 - 6, cy + 190 - 6, cx - 50 + 6, cy + 190 + 6], fill=(0, 240, 255))
    draw.ellipse([cx + 50 - 6, cy + 190 - 6, cx + 50 + 6, cy + 190 + 6], fill=(255, 0, 127))
    
    # Cyber ear cybernetic implant
    draw.rectangle([cx - 125, cy - 40, cx - 110, cy + 20], fill=(0, 240, 255, 200))
    draw.rectangle([cx + 110, cy - 40, cx + 125, cy + 20], fill=(0, 240, 255, 200))
    
    # Corner brackets and HUD
    draw_hud_corners(draw, 40, 40, w - 40, h - 40, length=50, color=(0, 240, 255, 200), width=3)
    draw.text((60, 60), "BIO-METRIC ID: OPERATIVE // 0x7E3", fill=(0, 240, 255, 220))
    draw.text((60, h - 80), "SYNAPSE STATUS: 100% ONLINE", fill=(0, 255, 136, 220))
    draw.text((w - 260, h - 80), "ASTANA // KZ NODE", fill=(255, 0, 127, 220))
    
    im.save("assets/images/profile.jpg", "JPEG", quality=90)
    print("profile.jpg created")

# 3. Project 01: Cobot Management CRM (800x500)
def generate_project_01():
    w, h = 800, 500
    im = Image.new('RGB', (w, h), (10, 14, 26))
    draw = ImageDraw.Draw(im, 'RGBA')
    draw_grid(draw, w, h, step=30, color=(0, 240, 255, 30))
    
    # Visual: Robotic arm joints & telemetry circles
    cx, cy = 400, 260
    # Base
    draw.rectangle([cx - 90, cy + 110, cx + 90, cy + 150], fill=(20, 28, 48), outline=(0, 240, 255, 160), width=2)
    # Articulated arm segment 1
    draw.line([(cx - 40, cy + 110), (cx - 70, cy)], fill=(0, 240, 255, 220), width=12)
    draw.ellipse([cx - 85, cy - 15, cx - 55, cy + 15], fill=(255, 0, 127, 220))
    # Articulated arm segment 2
    draw.line([(cx - 70, cy), (cx + 40, cy - 90)], fill=(0, 240, 255, 220), width=10)
    draw.ellipse([cx + 25, cy - 105, cx + 55, cy - 75], fill=(255, 0, 127, 220))
    # End effector / gripper
    draw.line([(cx + 40, cy - 90), (cx + 110, cy - 60)], fill=(0, 255, 136, 220), width=8)
    draw.line([(cx + 110, cy - 60), (cx + 135, cy - 80)], fill=(0, 255, 136, 220), width=5)
    draw.line([(cx + 110, cy - 60), (cx + 135, cy - 40)], fill=(0, 255, 136, 220), width=5)
    
    # Telemetry HUD
    draw.ellipse([cx - 160, cy - 160, cx + 160, cy + 160], outline=(0, 240, 255, 50), width=1)
    # Graph lines at bottom right
    graph_pts = [(540, 420), (580, 390), (620, 410), (660, 360), (700, 375), (740, 330)]
    draw.line(graph_pts, fill=(0, 240, 255, 200), width=3)
    for pt in graph_pts:
        draw.ellipse([pt[0]-4, pt[1]-4, pt[0]+4, pt[1]+4], fill=(255, 0, 127))

    draw_hud_corners(draw, 25, 25, w - 25, h - 25, length=40, color=(0, 240, 255, 180))
    draw.text((45, 40), "PROJECT 01 // COBOT MANAGEMENT CRM", fill=(0, 240, 255, 240))
    draw.text((45, 65), "TELEMETRY // ROBOTICS AUTOMATION // FLEET MONITORING", fill=(148, 163, 184, 200))
    draw.text((45, h - 55), "CORE: PYTHON • NODE.JS • POSTGRESQL • REST API • DOCKER", fill=(0, 255, 136, 220))
    im.save("assets/images/projects/project-01.jpg", "JPEG", quality=90)
    print("project-01.jpg created")

# 4. Project 02: Open Hype E-Commerce (800x500)
def generate_project_02():
    w, h = 800, 500
    im = Image.new('RGB', (w, h), (14, 10, 24))
    draw = ImageDraw.Draw(im, 'RGBA')
    draw_grid(draw, w, h, step=30, color=(255, 0, 127, 30))
    
    cx, cy = 400, 240
    # Futuristic 3D Cyber Product Cube / Display wireframe
    draw.polygon([(cx, cy - 100), (cx + 120, cy - 40), (cx, cy + 20), (cx - 120, cy - 40)], outline=(255, 0, 127, 220), fill=(25, 15, 38, 180), width=2)
    draw.polygon([(cx - 120, cy - 40), (cx, cy + 20), (cx, cy + 130), (cx - 120, cy + 70)], outline=(0, 240, 255, 220), fill=(18, 12, 30, 200), width=2)
    draw.polygon([(cx + 120, cy - 40), (cx, cy + 20), (cx, cy + 130), (cx + 120, cy + 70)], outline=(157, 78, 221, 220), fill=(22, 14, 34, 200), width=2)
    
    # Glowing energy core in the box
    draw.ellipse([cx - 30, cy - 40, cx + 30, cy + 20], fill=(0, 240, 255, 200))
    
    # Digital cart / currency symbol rings
    draw.ellipse([cx - 180, cy - 120, cx + 180, cy + 120], outline=(0, 240, 255, 60), width=2)
    
    draw_hud_corners(draw, 25, 25, w - 25, h - 25, length=40, color=(255, 0, 127, 180))
    draw.text((45, 40), "PROJECT 02 // OPEN HYPE E-COMMERCE", fill=(255, 0, 127, 240))
    draw.text((45, 65), "NEXT-GEN COMMERCE // INVENTORY // CRYPTO & FIAT PAYMENTS", fill=(148, 163, 184, 200))
    draw.text((45, h - 55), "CORE: NEXT.JS • TYPESCRIPT • POSTGRESQL • TAILWIND • DOCKER", fill=(0, 240, 255, 220))
    im.save("assets/images/projects/project-02.jpg", "JPEG", quality=90)
    print("project-02.jpg created")

# 5. Project 03: AI Automation System (800x500)
def generate_project_03():
    w, h = 800, 500
    im = Image.new('RGB', (w, h), (8, 14, 22))
    draw = ImageDraw.Draw(im, 'RGBA')
    draw_grid(draw, w, h, step=30, color=(0, 255, 136, 30))
    
    # Neural Network / Synaptic Agent Nodes
    nodes = [
        (180, 180), (180, 260), (180, 340),
        (340, 140), (340, 220), (340, 300), (340, 380),
        (500, 170), (500, 260), (500, 350),
        (650, 260)
    ]
    # Draw connections
    for n1 in nodes[:3]:
        for n2 in nodes[3:7]:
            draw.line([n1, n2], fill=(0, 240, 255, 50), width=1)
    for n1 in nodes[3:7]:
        for n2 in nodes[7:10]:
            draw.line([n1, n2], fill=(157, 78, 221, 60), width=1)
    for n1 in nodes[7:10]:
        draw.line([n1, nodes[10]], fill=(0, 255, 136, 90), width=2)
        
    # Draw node circles
    for i, (nx, ny) in enumerate(nodes):
        c = (0, 240, 255) if i < 3 else ((157, 78, 221) if i < 7 else (0, 255, 136))
        draw.ellipse([nx - 12, ny - 12, nx + 12, ny + 12], fill=c, outline=(255, 255, 255, 220), width=2)
        draw.ellipse([nx - 4, ny - 4, nx + 4, ny + 4], fill=(255, 255, 255))
        
    draw_hud_corners(draw, 25, 25, w - 25, h - 25, length=40, color=(0, 255, 136, 180))
    draw.text((45, 40), "PROJECT 03 // AI AUTOMATION SYSTEM", fill=(0, 255, 136, 240))
    draw.text((45, 65), "AUTONOMOUS WORKFLOWS // MULTI-AGENT ARCHITECTURE // LLM OPS", fill=(148, 163, 184, 200))
    draw.text((45, h - 55), "CORE: PYTHON • LLM AGENTS • N8N • FASTAPI • VECTOR DB", fill=(0, 240, 255, 220))
    im.save("assets/images/projects/project-03.jpg", "JPEG", quality=90)
    print("project-03.jpg created")

# 6. Project 04: Personal Software Project (800x500)
def generate_project_04():
    w, h = 800, 500
    im = Image.new('RGB', (w, h), (10, 12, 22))
    draw = ImageDraw.Draw(im, 'RGBA')
    draw_grid(draw, w, h, step=30, color=(157, 78, 221, 30))
    
    # Terminal Window UI
    tx0, ty0, tx1, ty1 = 160, 120, 640, 390
    draw.rectangle([tx0, ty0, tx1, ty1], fill=(16, 20, 34, 230), outline=(0, 240, 255, 180), width=2)
    # Header bar
    draw.rectangle([tx0, ty0, tx1, ty0 + 35], fill=(24, 32, 54), outline=(0, 240, 255, 120), width=1)
    # Close/Min/Max buttons
    draw.ellipse([tx0 + 15, ty0 + 12, tx0 + 25, ty0 + 22], fill=(255, 0, 127))
    draw.ellipse([tx0 + 35, ty0 + 12, tx0 + 45, ty0 + 22], fill=(252, 238, 10))
    draw.ellipse([tx0 + 55, ty0 + 12, tx0 + 65, ty0 + 22], fill=(0, 255, 136))
    draw.text((tx0 + 80, ty0 + 10), "bash: dev_nexus_core.sh", fill=(148, 163, 184))
    
    # Terminal text mock
    draw.text((tx0 + 20, ty0 + 55), "$ init_autonomous_cluster --workers=8", fill=(0, 240, 255))
    draw.text((tx0 + 20, ty0 + 85), "[+] Loading neural weights...", fill=(148, 163, 184))
    draw.text((tx0 + 20, ty0 + 115), "[+] Binding microservices to 0.0.0.0:8080", fill=(148, 163, 184))
    draw.text((tx0 + 20, ty0 + 145), "[✓] ALL SYSTEMS SYNCHRONIZED [LATENCY: 1.2ms]", fill=(0, 255, 136))
    draw.text((tx0 + 20, ty0 + 175), "> awaiting next instruction... █", fill=(255, 0, 127))

    draw_hud_corners(draw, 25, 25, w - 25, h - 25, length=40, color=(157, 78, 221, 180))
    draw.text((45, 40), "PROJECT 04 // PERSONAL SOFTWARE PROJECT", fill=(157, 78, 221, 240))
    draw.text((45, 65), "CUSTOM HIGH-PERFORMANCE TOOLS // DISTRIBUTED ARCHITECTURE", fill=(148, 163, 184, 200))
    draw.text((45, h - 55), "CORE: JAVASCRIPT • REACT • NODE.JS • MONGODB • WEBSOCKETS", fill=(0, 240, 255, 220))
    im.save("assets/images/projects/project-04.jpg", "JPEG", quality=90)
    print("project-04.jpg created")

if __name__ == "__main__":
    generate_hero_banner()
    generate_profile()
    generate_project_01()
    generate_project_02()
    generate_project_03()
    generate_project_04()
    print("All image assets generated successfully!")
