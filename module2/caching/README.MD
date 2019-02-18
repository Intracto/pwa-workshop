# Opdracht: Service worker caching

1. Ga naar de app map
2. Voer `yarn && yarn start` uit
3. De opdracht bouwt voort op die van 'Promises'
4. Stop de applicatie shell in de cache (index.html, main.js en main.css), controleer naderhand in de dev tools of je deze cache terugvind
5. Zorg dat bij het activeren van de SW eventuele oude caches worden verwijderd.
6. Zorg bij het fetchen van content dat je app eerst in de cache gaat kijken.
7. Maak een fallback zodat je app naar een offline pagina gaat als er geen internet is en geen cache voorhanden is