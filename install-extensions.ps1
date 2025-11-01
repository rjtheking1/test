# VS Code Extensions Installation Script
# Run this in PowerShell to install all recommended extensions

Write-Host "Installing Essential Web Development Extensions..." -ForegroundColor Green

# Essential Extensions
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
code --install-extension formulahendry.auto-rename-tag
code --install-extension naumovs.color-highlight

Write-Host "Installing CSS/HTML Support Extensions..." -ForegroundColor Green

code --install-extension pranaygp.vscode-css-peek
code --install-extension ecmel.vscode-html-css
code --install-extension Zignd.html-css-class-completion

Write-Host "Installing Productivity Extensions..." -ForegroundColor Green

code --install-extension kisstkondoros.vscode-gutter-preview
code --install-extension cssho.vscode-svgviewer
code --install-extension alefragnani.project-manager
code --install-extension christian-kohler.path-intellisense
code --install-extension aaron-bond.better-comments
code --install-extension adpyke.codesnap

Write-Host "Installing Animation & Advanced Tools..." -ForegroundColor Green

code --install-extension roboncode.gsap-snippets

Write-Host ""
Write-Host "✅ Installation Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Restart VS Code to activate all extensions"
Write-Host "2. Open your project folder"
Write-Host "3. Right-click index.html → 'Open with Live Server'"
Write-Host ""
Write-Host "Optional Extensions (Install Manually):" -ForegroundColor Cyan
Write-Host "- GitHub Copilot (AI code suggestions, requires subscription)"
Write-Host "- v0 (Screenshot to code, experimental)"
Write-Host ""
