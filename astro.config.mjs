import { defineConfig } from 'astro/config';

export default defineConfig({
  // Ważne: Zmień na swój dokładny login z GitHuba
  site: 'https://michalbajerski.github.io',
  
  // Ważne: Wpisz tu DOKŁADNĄ nazwę swojego repozytorium na GitHubie z ukośnikami!
  // Jeśli repozytorium nazywa się "michalbajerski.pl", wpisz '/michalbajerski.pl/'
  base: '/michalbajerski.pl/',
});