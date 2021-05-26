// Notre objectif est de suivre les modifications de la propriété d'un composant angular sans implémenter
// quoi que ce soit de complexe dans ce composant.

// Nous exportons un module nommé PropsChangedTracker, ce module renvoie une fonction.
// Dans ce cas, nous utilisons la cible et les paramètres clés.
// Ces paramètres varient en fonction du type de décorateur.
// La méthode Object.defineProperty est utilisée pour modifier le comportement de notre cible.
// Nous spécifions que pour une clé spécifique, une méthode setter et getter spécifique doit être appelée.

// Nous récupérons la nouvelle valeur à utiliser et la passons à une méthode onPropsChanged. Cette valeur sera ensuite utilisée pour définir une variable de valeur qui sera retournée lorsque le getter sera utilisé.

// Lorsque le constructeur de HomeComponent est terminé, la modification de simpleProps sera enregistrée et affiche en console

export function PropsChangedTracker() {
  return function (target: any, key: any) {
      let value: any;

      const onPropsSet = (newValue) => {
          console.log("The property:", key, "changed, its new value is:", newValue);
          value = newValue;
      }

      Object.defineProperty(target, key, {
          set: onPropsSet,
          get: () => value
      });

  }
}
