export const InfoTask = () => {
  return (
    <div className='Info'>
      <p>
        Задача для верстальщика (фронта). Создать компонент "форма обратной
        связи". Предварительно, до начала работ, зафиксировать "прогнозируемое"
        время на выполнение работы, по результату выполнения, зафиксировать
        фактически затраченное время.
      </p>
      <ul>
        <li>
          Форма содержит следующие поля: "номер телефона", "имя" и "сообщение"
        </li>
        <li>
          Шаблон заполнения поля "номер телефона" представляется как стандартная
          маска
        </li>
        <li>
          Номер телефона проходит валидацию при отправки, и приводится к виду
          +79999999999 - подготовить данные к отправки ajax в формате json
        </li>
        <li>
          Поля "Имя" и "Сообщение" проверяются на заполнение и валидируются на
          наличие спец. символов.
        </li>
        <li>Предусмотреть вывод информации об:</li>
        <li>Отправка формы успешно/ошибка</li>
        <li>Поле заполнено не верно</li>
        <li>Поле заполнено верно</li>
        <li>
          Форма должна выводится на странице в виде модального окна, вызов по
          кнопке
        </li>
        <li>Результат работы формы: вывод файла</li>
      </ul>
    </div>
  )
}
