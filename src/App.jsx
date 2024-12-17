import { useState } from 'react'

function App() {
  const [d1s, sd1s] = useState(false);
  const [d2s, sd2s] = useState(false);
  const [d3s, sd3s] = useState(false);

  return (
    <div className='wrapper'>
      <img src="S600xU_2x (4).jpg" alt="" />
      <h2>Владимир Абрамович Караковский</h2>
      <div className='gridder'>
        <div className={!d1s ? '' : 'active'} onClick={() => {sd1s(!d1s); console.log(1111);
        }}>
          <p>
            Некоторая биография
          </p>
          <p>
          Владимир Абрамович Караковский (14 февраля 1932 — 3 марта 2015) — советский, российский педагог. 13 Народный учитель СССР (1991).<br/><br/>
Родился в Свердловске (ныне Екатеринбург) в семье, где оба родителя были педагогами. Когда мальчику исполнилось 6 лет, отца репрессировали и расстреляли.<br/><br/>
В 1953 году окончил Челябинский педагогический институт. Начинал работать учителем литературы и русского языка средней школы №48. С 1962 года работал в Челябинской школе №1. В 1963 году был назначен на должность директора школы №1 им. Ф. Энгельса. <br/><br/>
С 1977 года — директор средней школы №825 в Москве. В 1988–1991 годах — председатель Всероссийского совета по народному образованию.<br/><br/>
В 1989 году защитил докторскую диссертацию на степень доктора педагогических наук на тему: «Воспитательная система школы как объект педагогического управления».<br/><br/>
В 2011 году ушёл с поста директора и работал в школе №825 на должности заместителя директора по науке.<br/><br/>
Скончался 3 марта 2015 года в результате болезни. Похоронен на Ново-Люберецком кладбище в городе Люберцы Московской области.<br/><br/>
          </p>
        </div>
        <div className={!d2s ? '' : 'active'} onClick={() => {sd2s(!d2s)}}>
          <p>
            Какие-то работы
          </p>
          <p>
          «Азбука нравственности. Методические рекомендации. 3 класс» (2004)<br/><br/>
«Без звонка на перемену»;<br/><br/>
«Воспитательная система школы: Педагогические идеи и опыт формирования» (1991);<br/><br/>
«Воспитательная система обычной школы» (2001)<br/><br/>
«Воспитай гражданина» (1987);<br/><br/>
«Директор — учитель — ученик» (1982);<br/><br/>
«Школьное воспитание как управляемая система» (1997)<br/><br/>
«Общечеловеческие ценности — основа целостного учебно-воспитательного процесса» (1993)<br/><br/>
«Пути формирования школьного ученического коллектива» (1978)<br/><br/>
«Стать человеком» (1992);<br/><br/>
«Чтобы воспитание было успешным» (1979).<br/><br/>
          </p>
        </div>
        <div className={!d3s ? '' : 'active'} onClick={() => {sd3s(!d3s)}}>
          <p>
            Какие-то награды
          </p>
          <p>
          Заслуженный учитель школы РСФСР (1971).<br/><br/>
Народный учитель СССР (1991) — за особые заслуги в обучении и воспитании учащихся, плодотворную педагогическую деятельность.<br/><br/>
Премия Ленинского комсомола (1986) — за большие заслуги в педагогической деятельности, значительные достижения по развитию инициативы, самодеятельности, творчества пионеров и комсомольцев.<br/><br/>
Премия Президента Российской Федерации в области образования (1996) — за разработку учебно-методического пособия «Воспитание? Воспитание… Воспитание!» для общеобразовательных учреждений.<br/><br/>
Орден «За заслуги перед Отечеством» IV степени (2003) — за большой личный вклад в развитие образования и многолетнюю добросовестную работу.<br/><br/>
Медаль «В память 850-летия Москвы» (1997).<br/><br/>
Знак отличия «За безупречную службу городу Москве» XXX лет (2011) — за многолетнюю плодотворную деятельность на благо города Москвы и его жителей<br/><br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
