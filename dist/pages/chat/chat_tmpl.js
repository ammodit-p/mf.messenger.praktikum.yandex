export const chat_tmpl = `
<div class="chatlist-area">
    
    {{> chatListHeaderPartial}}

    {{>chatListAreaPartial}}
    
  </div>

  <main class="chat-area">
    {{>chatHeaderPartial}}

    <div class="chat-body">
      <div class="chat-body-item">
        <div class="chat-date">
          <time>19 июня</time>
        </div>
      </div>

      <div class="chat-body-item">
        <div class="chat-message chat-left-message">
         <span class="chat-message">Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.


Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
          </span>
          <span class="chat-message-info">
            <time class="chat-message-time">11:56</time>
          </span>
        </div>
      </div>

      <div class="chat-body-item">
        <div class="chat-message-img">
            <img class="chat-img" src="./img/photo.png">
          <span class="chat-message-info">
            <time class="chat-message-time">11:57</time>
          </span>
        </div>
      </div>

      <div class="chat-body-item">
        <div class="chat-message chat-right-message">
         <span class="chat-message-text">Круто!</span>
          <span class="chat-message-info">
            <span class="chat-message-status">
              <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33301)" stroke="#3369F3"/>
                <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5)" stroke="#3369F3"/>
                <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5)" stroke="#3369F3"/>
              </svg>

            </span>
            <time class="chat-message-time">12:00</time>
          </span>
        </div>
      </div>
      
    </div>

    <div class="chat-footer">
       <form   class="chat-footer-form"  >
      <div  class="chat-attach-menu">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#3369F3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.014L17.2768 8.43781L18.2196 9.38062L10.6435 16.9568L9.70067 16.014Z" fill="#3369F3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#3369F3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8706L25.1335 16.2945L26.0763 17.2373L18.5002 24.8134L17.5574 23.8706Z" fill="#3369F3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#3369F3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48304 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#3369F3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#3369F3"/>
        </svg>

        <div class="attach-show-menu">
          <div class="attach-menu">
            <div class="chat-attach-menu-item">
              <div class="chat-attach-menu-item-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#3369F3"/>
                </svg>
              </div>

                <label class="chat-attach-menu-item-text">
                  Фото или видео
                  <input type="file" name="photo_video">
                </label>
            </div>

            <div class="chat-attach-menu-item">
              <div class="chat-attach-menu-item-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V12H16C13.7909 12 12 13.7909 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61929 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V12V18C22 20.2091 20.2091 22 18 22H12Z" fill="#3369F3"/>
                </svg>
              </div>
              <label class="chat-attach-menu-item-text">
                  Файл
                  <input type="file" name="file">
              </label>
            </div>

            <div class="chat-attach-menu-item">
              <div class="chat-attach-menu-item-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" fill="#3369F3"/>
                </svg>
              </div>
              <button class="chat-attach-menu-item-text">Локация</button>
            </div>
          </div>

        </div>
      </div>

        <input placeholder="Сообщение" type="text" name="message" class="chat-footer-message">

        <button type="submit" name="chat-send-message" class="chat-send-message-button">
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="5.19995" width="11" height="1.6" fill="white"/>
<path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6"/>
</svg>

        </button>

      </form>
    </div>
  </main>
`;
//# sourceMappingURL=chat_tmpl.js.map