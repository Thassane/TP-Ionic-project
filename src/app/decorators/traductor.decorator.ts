// Le Traductor Decorator recevra un paramètre selectedLanguage.
// Nous commençons par initialiser un objet traductions.
// Notre objet est assez simple, il y a une partie pour la langue anglaise et
// une autre pour la langue française.
// Il suffit d'empêcher la modification de la propriété en définissant
// la propriété inscriptible sur false et d'initialiser la propriété
// value à la valeur de notre dictionnaire.

export function Traductor(selectedLanguage) {
  const traductions = {
      eng: {
          welcomeMessage: 'Welcome'
      },
      fr: {
          welcomeMessage: 'Bienvenue'
      }
  };
  return function (target: any, key: any) {
      Object.defineProperty(target, key, {
          writable: false,
          value: traductions[selectedLanguage][key]
      });
  }
}
