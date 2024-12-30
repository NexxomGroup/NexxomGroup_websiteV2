// i18n/loadTranslations.ts

import fs from 'fs';
import path from 'path';

/**
 * Charge et fusionne tous les fichiers JSON de traduction pour une locale donnée.
 * Parcourt récursivement les sous-dossiers pour gérer plusieurs niveaux de profondeur.
 *
 * @param locale - La locale à charger (ex. 'fr', 'en').
 * @returns Un objet contenant toutes les traductions fusionnées.
 */
export async function loadTranslations(locale: string): Promise<Record<string, any>> {
  const messagesDir = path.join(process.cwd(), 'messages', locale);

  /**
   * Fonction récursive pour parcourir les dossiers et charger les fichiers JSON.
   *
   * @param dir - Le répertoire courant à parcourir.
   * @returns Un objet contenant les traductions pour le répertoire courant.
   */
  async function traverseDir(dir: string): Promise<Record<string, any>> {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    const translations: Record<string, any> = {};

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Si c'est un dossier, on appelle récursivement traverseDir
        const nestedTranslations = await traverseDir(fullPath);
        const key = entry.name; // Conserver le nom du dossier tel quel
        translations[key] = nestedTranslations;
      } else if (entry.isFile() && entry.name.endsWith('.json')) {
        // Si c'est un fichier JSON, on le charge
        const content = await fs.promises.readFile(fullPath, 'utf-8');
        const parsed = JSON.parse(content);
        const basename = path.basename(entry.name, '.json');
        const key = basename; // Conserver le nom du fichier tel quel (sans majuscule)
        translations[key] = parsed;
      }
    }

    return translations;
  }

  // Démarrer la traversée à partir du répertoire des messages de la locale
  const messages = await traverseDir(messagesDir);
  return messages;
}
