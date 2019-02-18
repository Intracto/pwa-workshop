# Opdracht: Service worker registration

1. Registreer een service worker (docs: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
2. Ga naar de app map
3. Voer `yarn && yarn start` uit
4. Vul app/index.html en app/service-worker.js aan op de plaatsen met [TODO]
5. Bekijk de website op http://localhost:8081 en open de console in je browser. Zorg dat er hier in de console verschijnt dat je SW geregistreerd is
6. Zorg dat bij het surfen naar http://localhost:8081/inscope/another.html je ziet dat de SW gebruikt wordt om bestanden te fetchen uit de cache 
7. Zorg dat er bij het surfen naar http://localhost:8081/other.html gewoon gesurft wordt zonder dat de SW gebruikt wordt