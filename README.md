Решение тестового задания. 
<br>
<h1><b>Задание №1 - Озаряющий луч</b></h1>
<br>
<p>
Сидя за рабочим столом, разработчица Арина заглядывала в окно своего мрачного города, где редко светило солнце. <br>
Внезапно к ней пришло вдохновение. Она решила внести свет и тепло в жизнь горожан с помощью кода, осветить каждый 
уголок интернета солнечными лучами. Так начался её новый проект. На практике, правда, сайт оказался не таким уж ярким 
и привлекательным, как она представляла. Казалось, сайт был просто недостаточно ярким для этого города. Немного подумав, 
Арина пришла к решению - можно сделать блоки текста на сайте сияющими, выделяя слова цветом и подчёркивая их светлыми лучами.
</p>
Нужно помочь Арине раскрасить блоки на сайте. Одним из способов сделать это, является CSS Custom Highlight API

<h2>Формат ввода</h2>
<p>
Для решения задачи вам будет предоставлен html файл, который представляет из себя приложение с поиском, текстовым блоком и 
переключателем для тестов. Каждый раз, когда в поиске изменяется значение, в коде вызывается функция highlight.
</p>
<p>
Тест — это объект, который состоит из следующих полей - comment – краткое описание того, что этот тест проверяет - content – вёрстка,
в которой необходимо найти и выделить стилями некоторый текст - searchFor — текст, который требуется найти на странице и выделить стилями
</p>
<h2>Формат вывода</h2>
<p>
Ваше решение будет проверяться с помощью скриншотного тестирования. В качестве ответа требуется скопировать целиком содержимое тега script,
в котором находится функция highlight.
</p>
<h3>Примечания</h3>
<p>
Для стилизации выделенного текста можно использовать либо класс search-results, либо псевдо-элемент highlight с идентификатором 
search-results.</p>