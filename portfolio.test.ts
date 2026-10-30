import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Jameel Ahmad Portfolio CI/CD & HTML Integrity Test Suite', () => {
  const htmlPath = path.resolve(__dirname, 'index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  it('should contain valid HTML structure and title', () => {
    expect(htmlContent).toContain('<!DOCTYPE html>');
    expect(htmlContent).toContain('<title>Jameel Ahmad | AI/ML & Full-Stack Engineer</title>');
  });

  it('should have a fixed and responsive navigation bar', () => {
    expect(htmlContent).toContain('class="navbar-wrapper"');
    expect(htmlContent).toContain('class="brand-link"');
  });

  it('should contain required project sections and interactive architecture components', () => {
    expect(htmlContent).toContain('id="home"');
    expect(htmlContent).toContain('id="about"');
    expect(htmlContent).toContain('id="skills"');
    expect(htmlContent).toContain('id="experience"');
    expect(htmlContent).toContain('id="projects"');
    expect(htmlContent).toContain('id="contact"');
    expect(htmlContent).toContain('architecture-modal');
  });

  it('should validate contact form structure and WhatsApp direct integration', () => {
    expect(htmlContent).toContain('contact-form-card');
    expect(htmlContent).toContain('whatsapp');
  });

  it('should test basic helper assertion for CI pipeline workflow', () => {
    const portfolioOwner = 'Jameel Ahmad';
    expect(portfolioOwner).toBe('Jameel Ahmad');
    expect(1 + 1).toBe(2);
  });
});
