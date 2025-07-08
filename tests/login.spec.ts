import { test, expect } from '@playwright/test';

test('login avec identifiants valides', async ({ page }) => {
  await page.goto('https://example.com/login'); // lien fictif just pour test 

  await page.fill('#username', 'monUtilisateur');
  await page.fill('#password', 'monMotDePasse');
  await page.click('#login-button');

  // Vérifie si la page après connexion contient un message ou élément attendu
  await expect(page).toHaveURL('https://example.com/dashboard');
  await expect(page.locator('h1')).toContainText('Bienvenue');
});
