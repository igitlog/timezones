# About task

## EN

#### I used CSS and materialUI to display the clock and drop-down list.
#### The local state was used to display the time of the user's local machine.
#### Time zones were loaded using a fetch with a built-in delay for displaying the loader. The state of the loader is in the store and is initially equal (true-must be shown).
#### Based on the received data from the "server", the elements of the drop-down list are drawn.

## RU

#### Для отрисовки часов и выпадающего списка использовал materialUI и CSS.
#### Чтобы отобразить время локальной машины пользователя был использован локальный стейт, для разделения состояний компонентов часов.
#### Часовые пояса были загружены с помощью fetch, с встроенной задержкой для отображения лоадера.
#### Состояние лоадера находится в сторе и изначально = loading: true - нужно показывать. когда данные приходят с "сервера", глобальное состояние лоадера меняется и компонент с лоадером скрывается.
#### На основании полученных данных c "сервера" отрисовываются элементы выпадающего списка часовых поясов.
