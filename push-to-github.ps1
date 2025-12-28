# Quick Push Script
# Run this after creating your GitHub repository

# Instructions:
# 1. Create a new repository on GitHub named 'blog'
# 2. Copy your GitHub username below
# 3. Run this script

# ======================================
# EDIT THIS LINE - Replace with your GitHub username
$GITHUB_USERNAME = "YOUR_GITHUB_USERNAME_HERE"
# ======================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  GitHub Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if username is set
if ($GITHUB_USERNAME -eq "YOUR_GITHUB_USERNAME_HERE") {
    Write-Host "ERROR: Please edit this script and set your GitHub username!" -ForegroundColor Red
    Write-Host "Open: push-to-github.ps1" -ForegroundColor Yellow
    Write-Host "Edit line 8 with your GitHub username" -ForegroundColor Yellow
    exit 1
}

# Navigate to project
Set-Location "c:\Users\Victor\projects\blog"

Write-Host "Current directory: $(Get-Location)" -ForegroundColor Green
Write-Host ""

# Check if git is initialized
if (-Not (Test-Path .git)) {
    Write-Host "ERROR: Git not initialized!" -ForegroundColor Red
    exit 1
}

Write-Host "Step 1: Adding remote origin..." -ForegroundColor Yellow
$repoUrl = "https://github.com/$GITHUB_USERNAME/blog.git"
Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan

# Remove existing remote if any
git remote remove origin 2>$null

# Add new remote
git remote add origin $repoUrl

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Remote added successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to add remote" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 2: Renaming branch to 'main'..." -ForegroundColor Yellow
git branch -M main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Branch renamed to main!" -ForegroundColor Green
} else {
    Write-Host "⚠ Warning: Could not rename branch (might already be named main)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "You may be asked to log in to GitHub..." -ForegroundColor Cyan
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✓ SUCCESS! Code pushed to GitHub!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/$GITHUB_USERNAME/blog" -ForegroundColor White
    Write-Host "2. Click 'Settings' → 'Pages'" -ForegroundColor White
    Write-Host "3. Under 'Source', select 'GitHub Actions'" -ForegroundColor White
    Write-Host "4. Wait 2-3 minutes for deployment" -ForegroundColor White
    Write-Host "5. Visit: https://$GITHUB_USERNAME.github.io/blog/" -ForegroundColor White
    Write-Host ""
    Write-Host "Your blog will be live soon! 🎉" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  ✗ Push Failed" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common solutions:" -ForegroundColor Yellow
    Write-Host "1. Make sure you created the repository on GitHub" -ForegroundColor White
    Write-Host "2. Check if the repository name is exactly 'blog'" -ForegroundColor White
    Write-Host "3. Verify your GitHub username is correct" -ForegroundColor White
    Write-Host "4. You may need to authenticate with a Personal Access Token" -ForegroundColor White
    Write-Host ""
    Write-Host "For authentication help, see: GITHUB_DEPLOYMENT_STEPS.md" -ForegroundColor Cyan
}
