Podsumowanie:

Ukończenie zadania zajęło mi więcej niż przewidywany czas podany w mailu (6-8 godzin). Myślę, że spokojnie mogę powiedzieć, że całosć zajęła jakieś mi dwa razy tyle.

Dużo czasu poświęciłem na przemyślenie koncepcji i przygotowanie potrzebnych grafik w odpowienich rozmiarach.

Wszystkie zdjęcia odpowiednie skompresowałem.

Musiałem też zgłębić temat retiny i elementu picture, żeby móc zrealizować poprawnie założenie zadania.

Poniżej postaram się opisać jak wyglądała moja praca i dlaczego mój projekt wygląda i jest zakodowany tak a nie inaczej.

(Projekt przedstawia stronę fikcyjnej firmy, która przede wszystkim zajmuje się pisaniem książek dokładnie według wytycznych klienta. CEO projektu jest Ernest Hemingway.)

Najpierw przygotowłem sobie środowisko pracy. Zdecydowałem że będę korzystał z SASS(SCSS) i JADE. Dodatkowo zdecydowałem się korzystać z Grunta. Pliki SCSS podzieliłem w oparciu o założenie SMACSS. W ten sposób starałem się zachować porządek i przejrzystość w stylach. Wykorzystałem zmienne i mixiny. Z pomocą Grunta pliki SCSS scaliłem, dodałem im potrzebne prefiksy, przekonwertowałem do CSS i zminifikowałem. Pliki JS sprawdziłem pod kątem poprawności kodu, scaliłem i zminifikowałem. Ponadto Grunt śledził zmiany w plikach i automatycznie odświażał przeglądarkę.

Całość realizowałem mając na uwadze założenia Mobile First.

Wykorzystałem bibliotekę Jquery, która pozwoliła mi skorzystać z gotowych pluginów.

Zdecydowałem się zakodować layout od podstaw, bez korzystanie z frameworków. Uznałem, że w ten sposób lepiej pokażę moje umiejętności i zrozumienie CSSa. Dodatkowo zdecydowałem, że będę korzystał z floatów, a nie z flexboxa, które wydają mi się trudniejsze i w ten sposób chciałem pokazać że znam dobrze podstawy CSSa.

Wykorzystałem fonty Roboto i Roboto Condensed.

Header zgodnie z założeniem pozostaje cały czas na górze. Na mniejszych rozdzielczosciach nawigacja chowa się i pokazuje dopiero po kliknięciu. Wybranie pozycji w nawigacji powoduje przeskrolowanie do odpowiedniej sekcji. Tutaj posiłkowałem się StackOverflow. Logo to obrazek w formacie SVG, który świetnie sprawdza się w przypadku retiny. Ikonę menu przygotowałem w CSS. 

Slider zajmuje całą szerokość i wysokość okna. Teksty są wyśrodkowanie. Dla każdego backgroundu przygotowałem 8 wersji dla różnych rozdzielczości i wyświetlaczy typu retina. Skorzystałem z pluginu Owl Carousel, dzieki temu w szybki sposób zaimplementowałem potrzebną funkcjonalność. Na wszystkie slajdy nałożyłem pseudoelement before, któremu dałem czarne tło i przeźroczystość. Daje to fajny efekt wizualny i sprawia że teksty na slajderach są zawsze czytelne.

Sekcja about zawiera zdjęcie, które przygotowałem w 4 wersjach. Tutaj wykorzystałem element picture, który wyświetla obrazek odpowiedni dla rozdzielczość ekranu użytkownika i gęstość pikseli. Żeby element picture działał poprawnie musiałem skorzystać ze skryptu picturefill, który umożliwia obsługę tego elementu. 

W sekcji motto jako tło wykorzystałem obrazek, który przygotowałem w 8 wariantach. Tło jest nieruchome dzięki wykorzystanie właściwości background-attachement ustawionej na fixed.

W sekcji team ponownie wykorzystałem slider Owl Carousel. Każde zdjęcie przygotowałem w 2 wersjach. Ponownie korzystałem z elementu picture.

W sekcji kontakt jako tło wykorzystałem zdjęcie przygotowane w 8 wersjach. Formularz jest wyśrodkowany. Po kilknięciu SEND pojawia się alert z informacjami zaczytanymi z inputów, następnie formularz jest czyszczony.

Footer zgodnie z założeniami ma position absolute i bottom: 0 dzięki temu zawsze będzie na dole.

Dużo korzystałem z Chrome Developer Tools. Tam też sprawdzałem czy wszyskie zdjęcia przygotowane dla retiny odpowiednio się zaczytują.