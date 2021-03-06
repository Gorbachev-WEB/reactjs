# ReactJS
### 1. Введение в ReactJS: современный Javascript
1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции.
2. Написать функцию calculateArea, которая будет принимать параметры для вычисления площади (можете выбрать конкретную фигуру или, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать объект вида: { area, figure, input } (где area – вычисленная площадь, figure – название фигуры, для которой вычислялась площадь, input – входные параметры, по которым было произведено вычисление.
3. Необходимо написать иерархию классов вида:  
Human -> Employee -> Developer  
Human -> Employee -> Manager  
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению и добавлению разработчиков.  
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется в виду возможность назначить другого менеджера).  
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата).  
У класса Employee должны присутствовать параметры: salary (число), department (строка).  
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.  
В классе Employee должен быть реализован такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee.  
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(). Это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human.  
4. При помощи генератора написать функцию-анкету, которая запрашивает у пользователя на ввод параметры и передает их в генератор. В конце, когда генератор завершается, он должен вернуть все введенные входные параметры в виде объекта. Этот объект нужно вывести в консоли.
5. Написать цикл, который создает массив промисов. Внутри каждого промиса происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10. В итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.
### 2. Настройка среды разработки ###
1. Выполнить глобальное подключение webpack и необходимых загрузчиков.
2. Разработать структуру проекта. Продумать, какие компоненты будут входить в состав каждого js-элемента. Разработать компонент, выводящий ФИО разработчика.
3. Необходимо изменить один из файлов таким образом, чтобы в нем подключался новый компонент и выводился на главной странице.
4. Для нового компонента необходимо прописать класс.
5. Выполнить событие Клик (onClick). При клике на компонент должна выводиться текущая дата.
### 3. Первое приложение на ReactJS
1. Реализовать шаблон главной страницы блога. Реализовать это необходимо в стиле react, то есть на выходе у вас должен быть компонент Layout, который задает структуру страниц: главная страница (например, MainPage), на которой будет отображаться наша заглушка со статьями, а также элементы menu и login.
### 4. ReactJS под капотом
1. Разбейте сайт на компоненты.
2. Для каждого из полученных компонентов написать стили и описать состояние и его изменение. Предусмотреть взаимодействие между компонентами.
2. Из полученных компонентов сделать страницу.
### 5. Взаимодействие в ReactJS
1. Реализовать страницы: Главная, Блог, Комментарии, Пользователи.
2. Для упрощения процесса разработки можете реализовать Layout компонент, где будет описан шаблон страниц.
3. На всех страницах должно присутствовать навигационное меню, которое будет выделять текущее местоположение подсветкой элемента меню.
### 6. Роутинг в ReactJS приложении
1. Создать хранилище (store), где будут находиться все записи нашего блога. Для всех записей должна быть возможность создать, удалить, отредактировать их.
2. Для каждого метода хранилища, который является методом действия, необходимо создать соответствующий Action в виде функции или класса. В итоге должен получиться файл, который экспортирует либо набор функций, либо целый класс.
3. Для всех видов действий создать соответствующие константы, которые будут описывать то действие, которое будет совершаться. Положить их в отдельный файл.
4. В конечном компоненте импортировать хранилище и действия и прописать их использование в необходимых местах.
5. Создать обратную связь между изменением состояния в хранилище и актуальным состоянием в компоненте (мы это делали через EventEmitter).
6. Реализовать это же задание с применением Redux-библиотеки.
### 7. Концепция Flux на примере использования Redux
1. Для сохранения состояния реализовать хранилище (store), которое представляет собой комбинацию редьюсеров (reducers), объединенных методом combineReducers. Магазин создается при помощи функции createStore(reducer, state, middleware) (см. проект с урока).
2. Чтобы разделить ответственность по обработке частей состояния, необходимо для каждой части создать свой редьюсер. Каждый редьюсер – это функция, которая принимает 2 аргумента: state и action (где state – текущее состояние, которое требуется изменить, а action – действие, которое диктует правила изменения этого состояния). Результат работы функции редьюсера – новое состояние, которое эта функция и возвращает. Не забывайте главное правило – состояние иммутабельно, поэтому мы должны всегда порождать новое состояния на основании старого. При этом необходимо производить клонирование тех элементов, которые являются ссылочными. Например, массивы: обычно для них хватает вызова функции slice(0). Эти редьюсеры должны быть скомбинированы при создании магазина в один редьюсер. Также необходимо в редьюсре задать для состояния начальный вид, так как изначально state – undefined.
3. Чтобы разделить ответственность по обработке частей состояния, необходимо для каждой части создать свой редьюсер. Каждый редьюсер – это функция, которая принимает 2 аргумента: state и action (где state – текущее состояние, которое требуется изменить, а action – действие, которое диктует правила изменения этого состояния). Результат работы функции редьюсера – новое состояние, которое эта функция и возвращает. Не забывайте главное правило – состояние иммутабельно, поэтому мы должны всегда порождать новое состояния на основании старого. При этом необходимо производить клонирование тех элементов, которые являются ссылочными. Например, массивы: обычно для них хватает вызова функции slice(0). Эти редьюсеры должны быть скомбинированы при создании магазина в один редьюсер. Также необходимо в редьюсре задать для состояния начальный вид, так как изначально state – undefined.
4. Для увязки нашего приложения с состоянием хранилища необходимо на главной странице, где отрисовывается основной элемент приложения, обернуть все роуты в элемент Provider и задать его свойство store = { сюда мы помещаем экземпляр нашего хранилища из п. 2 }
5. При работе с компонентами приложения, которые будут изменять состояние или обращаться к нему, мы должны использовать функцию connect из react-redux пакета. Эта функция накладывается на компонент в качестве декоратора (аля @connect()). Первым и самым важным ее параметром является функция, которая принимает наше хранилище (store) и должна вернуть объект. Этот объект, а точнее его свойства, будут записаны в this.props нашего компонента. В том числе в this.props.dispatch будет записана функция диспетчеризации. Вся работа по изменению состояния ведется через нее и вызовы соответствующих действий, которые порождают требуемый для диспетчеризации объект (или функцию). Более подробная информация – по ссылкам.
6. Если нужно, можно сделать свои middleware и подключить их в процесс обработки изменения состояния.
### 8. Знакомство с NodeJS, EpxressJS и MongoDB
1. Добавьте в проект backend. Можете использовать NodeJS, PHP или Yii 2 Framework (на ваш выбор).
