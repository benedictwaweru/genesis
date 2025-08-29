import os
import sys
import subprocess
import platform

def activate_venv(app_name: str):
    # Construct venv path
    venv_path = os.path.join("services", app_name, "venv")

    if not os.path.exists(venv_path):
        print(f"[ERROR] No venv found at {venv_path}")
        print("You can create one with:")
        print(f"    python -m venv {venv_path}")
        return

    # Detect OS
    if platform.system() == "Windows":
        activate_script = os.path.join(venv_path, "Scripts", "activate.bat")
        shell = ["cmd.exe", "/k", activate_script]
    else:
        activate_script = os.path.join(venv_path, "bin", "activate")
        shell = ["bash", "--rcfile", activate_script]

    if not os.path.exists(activate_script):
        print(f"[ERROR] Activate script not found at {activate_script}")
        return

    print(f"[INFO] Activating venv for {app_name} → {activate_script}")
    subprocess.run(shell)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python scripts/activate_venv.py <app_name>")
        sys.exit(1)

    app_name = sys.argv[1]
    activate_venv(app_name)
