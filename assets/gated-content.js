(function () {

    function initGatedContent() {
        if (window.isGatedContent !== 'true') return; 
        if (/static=true|printToPdf=true/.test(window.location.href)) {
            handleRemoveClassName();
            return;
        }
        document.body.classList.add('gated-content');
        var gatedHTMLContent = `<section id="sd-gated-content"> <div class="gated__bg"><img src="https://assets.storydoc.com/assets/images/gated/bg.jpg" alt="background"></div><div class="form__main-container"> <div class="gated__logo"><img src="https://assets.storydoc.com/assets/images/gated/sd-logo.svg" alt="Company logo"></div><div class="gated__title">Please fill the information below to get an access.</div><form name="gated-content-form" onsubmit="return false;"> <div class="input__container"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M3.83333 18.3334C3.83333 16.5653 4.53571 14.8696 5.78595 13.6193C7.0362 12.3691 8.73189 11.6667 10.5 11.6667C12.2681 11.6667 13.9638 12.3691 15.214 13.6193C16.4643 14.8696 17.1667 16.5653 17.1667 18.3334H15.5C15.5 17.0073 14.9732 15.7355 14.0355 14.7978C13.0979 13.8602 11.8261 13.3334 10.5 13.3334C9.17392 13.3334 7.90215 13.8602 6.96447 14.7978C6.02678 15.7355 5.5 17.0073 5.5 18.3334H3.83333ZM10.5 10.8334C7.7375 10.8334 5.5 8.59587 5.5 5.83337C5.5 3.07087 7.7375 0.833374 10.5 0.833374C13.2625 0.833374 15.5 3.07087 15.5 5.83337C15.5 8.59587 13.2625 10.8334 10.5 10.8334ZM10.5 9.16671C12.3417 9.16671 13.8333 7.67504 13.8333 5.83337C13.8333 3.99171 12.3417 2.50004 10.5 2.50004C8.65833 2.50004 7.16667 3.99171 7.16667 5.83337C7.16667 7.67504 8.65833 9.16671 10.5 9.16671Z" fill="#88819F"/></svg><input name="name" type="text" id="name" placeholder="Your name" data-control="name"> </div><div class="input__error-message">This value can't be empty.</div><div class="input__container"> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M3 2.5H18C18.221 2.5 18.433 2.5878 18.5893 2.74408C18.7455 2.90036 18.8333 3.11232 18.8333 3.33333V16.6667C18.8333 16.8877 18.7455 17.0996 18.5893 17.2559C18.433 17.4122 18.221 17.5 18 17.5H3C2.77899 17.5 2.56702 17.4122 2.41074 17.2559C2.25446 17.0996 2.16667 16.8877 2.16667 16.6667V3.33333C2.16667 3.11232 2.25446 2.90036 2.41074 2.74408C2.56702 2.5878 2.77899 2.5 3 2.5ZM17.1667 6.03167L10.56 11.9483L3.83333 6.01333V15.8333H17.1667V6.03167ZM4.25917 4.16667L10.5508 9.71833L16.7517 4.16667H4.25917Z" fill="#88819F"/></svg> <input name="email" type="email" id="mail" placeholder="Email address" data-control="email"> </div><div class="input__error-message">The email address is not valid. Try again.</div><div class="input__container"> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M3 5.00004H18V15H3V5.00004ZM2.16667 3.33337C1.70643 3.33337 1.33333 3.70647 1.33333 4.16671V15.8334C1.33333 16.2936 1.70643 16.6667 2.16667 16.6667H18.8333C19.2936 16.6667 19.6667 16.2936 19.6667 15.8334V4.16671C19.6667 3.70647 19.2936 3.33337 18.8333 3.33337H2.16667ZM11.3333 6.66671H16.3333V8.33337H11.3333V6.66671ZM15.5 10H11.3333V11.6667H15.5V10ZM9.25 8.33337C9.25 9.48396 8.31726 10.4167 7.16667 10.4167C6.01607 10.4167 5.08333 9.48396 5.08333 8.33337C5.08333 7.18278 6.01607 6.25004 7.16667 6.25004C8.31726 6.25004 9.25 7.18278 9.25 8.33337ZM7.16667 11.25C5.55583 11.25 4.25 12.5559 4.25 14.1667H10.0833C10.0833 12.5559 8.7775 11.25 7.16667 11.25Z" fill="#88819F"/></svg> <input id="position" name="position" type="text" placeholder="Position" data-control="position"> </div><div class="input__error-message">This value can't be empty.</div><div class="btn__container"><button type="submit">Continue</button></div></form> </div><a href="https://www.storydoc.com/privacy-policy" class="gated__privacy" target="_blank"><svg width="170" height="22" viewBox="0 0 170 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.1051 14.7266C36.6336 18.0776 34.7794 19.9999 32.0221 20C30.4214 20 29.483 18.631 29.4391 18.5654L29.359 18.4463L30.6373 17.0137L30.7779 17.166C30.7946 17.1833 31.5279 17.9628 32.3961 17.9629C33.8125 17.9629 34.7581 16.7888 35.0592 14.6572L35.1949 13.7393C34.4897 14.6806 33.3888 15.5273 32.026 15.5273C30.8731 15.5273 30.1142 14.9435 29.8883 13.8857C29.7992 13.4673 29.7935 12.9754 29.8707 12.4287L30.6276 7.06641H32.8444L32.8121 7.26758C32.8062 7.30113 32.2719 10.6146 32.0817 11.9688C31.8915 13.3227 32.3234 13.5049 32.7711 13.5049C34.0546 13.5042 35.4411 10.7296 35.7779 8.34375V8.3418L35.9576 7.06445H38.1871L37.1051 14.7266ZM62.1647 7.05078C63.9236 7.05078 64.8385 8.29187 64.6764 9.44043L64.6569 9.58496L62.7594 10.1572L62.7526 9.93457C62.7387 9.38987 62.4282 9.08989 61.8776 9.08984C60.9209 9.08984 60.0951 10.0269 59.9127 11.3154C59.7404 12.5292 60.2272 13.8241 62.109 13.8242C63.3312 13.8242 64.2052 13.2129 64.7936 12.5459C65.257 12.8656 65.5997 13.3274 65.774 13.8779C64.9222 14.7976 63.5455 15.7226 61.4518 15.7227C58.825 15.7227 57.3032 14.008 57.6637 11.4561C58.0123 8.98699 59.9895 7.05079 62.1647 7.05078ZM5.76427 2.0791C7.81237 2.07929 9.07823 3.33853 8.83459 5.07129C8.7276 5.82915 8.29333 6.45889 7.96251 6.84375L6.5006 5.65723C6.55997 5.52709 6.60964 5.37932 6.63146 5.23145C6.73447 4.50124 6.29281 4.03132 5.50646 4.03125C4.72014 4.03125 4.04635 4.59531 3.93127 5.40625C3.80646 6.28847 4.55534 6.7923 5.80334 7.51465C7.38022 8.42057 9.16698 9.44535 8.86388 11.5986C8.54272 13.874 6.41888 15.5273 3.81603 15.5273C1.21327 15.5272 -0.27633 14.0116 0.0425932 11.7559C0.181264 10.7694 0.767409 9.92496 1.1715 9.44531L2.61388 10.6133C2.46928 10.862 2.3129 11.2097 2.25744 11.6162C2.09717 12.7488 2.88137 13.5398 4.16466 13.54C5.44831 13.54 6.39966 12.7745 6.56017 11.6338C6.70676 10.6036 5.93422 9.99755 4.26037 9.10352C2.75282 8.28444 1.42337 7.38424 1.70666 5.37109C1.97215 3.49417 3.71595 2.0791 5.76427 2.0791ZM12.4108 7.13379L14.5445 7.13965L14.2789 9.01855L12.1295 9.02441L11.8053 11.334C11.5875 12.8769 11.8822 13.5067 12.8268 13.5068C13.2645 13.5068 13.6648 13.321 14.0094 13.0605C14.2193 12.9027 14.4019 12.6027 14.5465 12.3027C14.7327 11.914 14.8598 11.5014 14.9391 11.0771C14.9926 10.7949 15.0975 10.3546 15.2936 9.86914C15.8283 8.55113 17.0479 6.85651 19.7779 6.85547C22.1266 6.8562 23.5777 8.64187 23.2311 11.1025C23.0686 12.2531 22.5419 13.3305 21.7477 14.1318C20.8424 15.0456 19.6537 15.5273 18.3522 15.5273C17.0507 15.5273 15.9963 14.997 15.3981 14.0596C14.6869 14.7956 13.6192 15.5273 12.1832 15.5273C10.3191 15.5273 9.25731 14.1618 9.54455 12.1289L10.6022 4.62695H12.7633L12.4108 7.13379ZM46.6569 12.1807C46.5322 13.0587 46.7327 13.5049 47.2496 13.5049C47.4258 13.5048 47.5961 13.4713 47.7604 13.4043C48.012 13.3036 48.2221 13.0069 48.3746 12.7148C48.541 12.3952 48.6522 12.0396 48.7096 11.6943C48.7671 11.3488 48.9256 10.6367 49.1236 10.1514C49.7199 8.68099 50.9481 6.85547 53.569 6.85547C55.9559 6.85556 57.3746 8.60205 57.0221 11.1025C56.8596 12.2531 56.332 13.3305 55.5377 14.1318C54.6324 15.0456 53.4596 15.5273 52.1422 15.5273C50.9458 15.5273 49.9575 15.0795 49.3414 14.2764C48.5729 15.0342 47.7725 15.3681 46.7584 15.3682C45.3044 15.3682 44.7311 14.3374 44.5211 13.7295C43.8377 14.6768 42.5861 15.5273 41.2174 15.5273C39.1393 15.5273 37.9819 13.8339 38.3365 11.3135C38.6952 8.77154 40.6192 6.85547 42.8141 6.85547C43.7054 6.8555 44.4678 7.10802 45.1373 7.62695L45.8131 2.83887H47.9742L46.6569 12.1807ZM29.5836 8.93164H29.1813C28.0204 8.9318 26.1026 10.2647 25.5856 13.9336L25.3883 15.333H23.2262L24.3756 7.1416H26.5367L26.3483 8.52734V8.5293C27.1288 7.61154 28.2563 7.06738 29.4449 7.06738H29.8473L29.5836 8.93164ZM19.4947 8.76953C18.1897 8.76982 17.3088 10.0347 17.1402 11.2266C16.9402 12.6416 17.5855 13.6288 18.7067 13.6289C20.0358 13.6289 20.8124 12.3423 20.9928 11.0674C21.1909 9.67199 20.6021 8.76953 19.4947 8.76953ZM53.2838 8.76953C51.9785 8.76953 51.0969 10.0346 50.9283 11.2266C50.7283 12.6416 51.3737 13.6287 52.4947 13.6289C53.8219 13.6289 54.5986 12.3423 54.7789 11.0674C54.977 9.67212 54.389 8.76969 53.2838 8.76953ZM43.0514 8.89453C41.7876 8.89466 40.7594 9.93284 40.5494 11.4209C40.3773 12.6483 40.9008 13.5049 41.8238 13.5049C43.2796 13.5044 44.4082 11.2703 44.6598 9.67773C44.323 9.27911 43.711 8.89453 43.0514 8.89453ZM67.7379 9.88086C67.8092 10.4453 68.1835 10.888 68.7242 11.0479L69.1403 11.1699L68.6852 11.292C68.0928 11.4519 67.5793 11.8945 67.3297 12.459L67.1373 12.8926L67.0826 12.459C67.0113 11.8945 66.6361 11.4519 66.0953 11.292L65.6793 11.1699L66.1354 11.0479C66.7277 10.888 67.2402 10.4453 67.4899 9.88086L67.6822 9.44727L67.7379 9.88086ZM71.4088 6.62305C71.494 7.29797 71.9398 7.82517 72.5875 8.0166L73.2057 8.2002L72.5299 8.38379C71.8229 8.57519 71.209 9.10164 70.9098 9.77637L70.6236 10.4199L70.5426 9.77637C70.4573 9.10161 70.0115 8.57519 69.3639 8.38379L68.7457 8.2002L69.4215 8.0166C70.1286 7.82518 70.7424 7.29791 71.0416 6.62305L71.3278 5.97949L71.4088 6.62305ZM67.5504 2.76758C67.693 3.90819 68.4474 4.80022 69.5406 5.12402L70.276 5.3418L69.4713 5.55859C68.275 5.88237 67.2372 6.77442 66.732 7.91504L66.3912 8.68262L66.2945 7.91504C66.1519 6.77428 65.3968 5.88228 64.3033 5.55859L63.568 5.3418L64.3727 5.12402C65.5692 4.80032 66.6068 3.90833 67.1119 2.76758L67.4528 2L67.5504 2.76758Z" fill="url(#paint0_linear_2588_575)"/><line opacity="0.1" x1="81.5" y1="6" x2="81.5" y2="16" stroke="#12033E"/><path d="M89.8608 15V6.27273H93.1335C93.804 6.27273 94.3665 6.39773 94.821 6.64773C95.2784 6.89773 95.6236 7.24148 95.8565 7.67898C96.0923 8.11364 96.2102 8.60795 96.2102 9.16193C96.2102 9.72159 96.0923 10.2187 95.8565 10.6534C95.6207 11.0881 95.2727 11.4304 94.8125 11.6804C94.3523 11.9276 93.7855 12.0511 93.1122 12.0511H90.9432V10.7514H92.8991C93.2912 10.7514 93.6122 10.6832 93.8622 10.5469C94.1122 10.4105 94.2969 10.223 94.4162 9.98438C94.5384 9.74574 94.5994 9.47159 94.5994 9.16193C94.5994 8.85227 94.5384 8.57955 94.4162 8.34375C94.2969 8.10795 94.1108 7.92472 93.858 7.79403C93.608 7.66051 93.2855 7.59375 92.8906 7.59375H91.4418V15H89.8608ZM97.5153 15V8.45455H99.011V9.54545H99.0792C99.1985 9.16761 99.4031 8.87642 99.6928 8.67188C99.9854 8.46449 100.319 8.3608 100.694 8.3608C100.779 8.3608 100.875 8.36506 100.98 8.37358C101.088 8.37926 101.177 8.3892 101.248 8.40341V9.82244C101.183 9.79972 101.079 9.77983 100.937 9.76278C100.798 9.7429 100.663 9.73295 100.532 9.73295C100.251 9.73295 99.9982 9.79403 99.7738 9.91619C99.5522 10.0355 99.3775 10.2017 99.2496 10.4148C99.1218 10.6278 99.0579 10.8736 99.0579 11.152V15H97.5153ZM102.273 15V8.45455H103.816V15H102.273ZM103.049 7.52557C102.804 7.52557 102.594 7.4446 102.418 7.28267C102.242 7.1179 102.154 6.92045 102.154 6.69034C102.154 6.45739 102.242 6.25994 102.418 6.09801C102.594 5.93324 102.804 5.85085 103.049 5.85085C103.296 5.85085 103.506 5.93324 103.679 6.09801C103.855 6.25994 103.944 6.45739 103.944 6.69034C103.944 6.92045 103.855 7.1179 103.679 7.28267C103.506 7.4446 103.296 7.52557 103.049 7.52557ZM111.249 8.45455L108.918 15H107.213L104.882 8.45455H106.527L108.031 13.3168H108.099L109.608 8.45455H111.249ZM114.012 15.1321C113.597 15.1321 113.224 15.0582 112.891 14.9105C112.562 14.7599 112.3 14.5384 112.107 14.2457C111.917 13.9531 111.822 13.5923 111.822 13.1634C111.822 12.794 111.89 12.4886 112.026 12.2472C112.163 12.0057 112.349 11.8125 112.585 11.6676C112.82 11.5227 113.086 11.4134 113.381 11.3395C113.68 11.2628 113.988 11.2074 114.306 11.1733C114.69 11.1335 115.001 11.098 115.239 11.0668C115.478 11.0327 115.651 10.9815 115.759 10.9134C115.87 10.8423 115.925 10.733 115.925 10.5852V10.5597C115.925 10.2386 115.83 9.99006 115.64 9.81392C115.45 9.63778 115.175 9.54972 114.817 9.54972C114.44 9.54972 114.14 9.6321 113.918 9.79688C113.7 9.96165 113.552 10.1562 113.475 10.3807L112.035 10.1761C112.148 9.77841 112.336 9.44602 112.597 9.17898C112.859 8.90909 113.178 8.70739 113.556 8.57386C113.934 8.4375 114.352 8.36932 114.809 8.36932C115.124 8.36932 115.438 8.40625 115.751 8.48011C116.063 8.55398 116.349 8.67614 116.607 8.84659C116.866 9.0142 117.073 9.2429 117.229 9.53267C117.388 9.82244 117.468 10.1847 117.468 10.6193V15H115.985V14.1009H115.934C115.84 14.2827 115.708 14.4531 115.538 14.6122C115.37 14.7685 115.158 14.8949 114.903 14.9915C114.65 15.0852 114.353 15.1321 114.012 15.1321ZM114.413 13.9986C114.722 13.9986 114.991 13.9375 115.218 13.8153C115.445 13.6903 115.62 13.5256 115.742 13.321C115.867 13.1165 115.93 12.8935 115.93 12.652V11.8807C115.881 11.9205 115.799 11.9574 115.683 11.9915C115.569 12.0256 115.441 12.0554 115.299 12.081C115.157 12.1065 115.016 12.1293 114.877 12.1491C114.738 12.169 114.617 12.1861 114.515 12.2003C114.285 12.2315 114.079 12.2827 113.897 12.3537C113.715 12.4247 113.572 12.5241 113.467 12.652C113.362 12.777 113.309 12.9389 113.309 13.1378C113.309 13.4219 113.413 13.6364 113.62 13.7812C113.827 13.9261 114.092 13.9986 114.413 13.9986ZM121.874 15.1278C121.221 15.1278 120.66 14.9844 120.191 14.6974C119.725 14.4105 119.366 14.0142 119.113 13.5085C118.863 13 118.738 12.4148 118.738 11.7528C118.738 11.0881 118.866 10.5014 119.121 9.9929C119.377 9.48153 119.738 9.08381 120.204 8.79972C120.673 8.51278 121.227 8.36932 121.866 8.36932C122.397 8.36932 122.867 8.46733 123.276 8.66335C123.688 8.85653 124.016 9.13068 124.261 9.4858C124.505 9.83807 124.644 10.25 124.678 10.7216H123.204C123.144 10.4062 123.002 10.1435 122.778 9.93324C122.556 9.72017 122.259 9.61364 121.887 9.61364C121.572 9.61364 121.295 9.69886 121.056 9.86932C120.817 10.0369 120.631 10.2784 120.498 10.5938C120.367 10.9091 120.302 11.2869 120.302 11.7273C120.302 12.1733 120.367 12.5568 120.498 12.8778C120.629 13.196 120.812 13.4418 121.048 13.6151C121.286 13.7855 121.566 13.8707 121.887 13.8707C122.114 13.8707 122.317 13.8281 122.496 13.7429C122.678 13.6548 122.83 13.5284 122.952 13.3636C123.075 13.1989 123.158 12.9986 123.204 12.7628H124.678C124.641 13.2259 124.505 13.6364 124.269 13.9943C124.033 14.3494 123.712 14.6278 123.306 14.8295C122.9 15.0284 122.423 15.1278 121.874 15.1278ZM126.904 17.4545C126.694 17.4545 126.499 17.4375 126.32 17.4034C126.144 17.3722 126.003 17.3352 125.898 17.2926L126.256 16.0909C126.48 16.1563 126.681 16.1875 126.857 16.1847C127.033 16.1818 127.188 16.1264 127.321 16.0185C127.458 15.9134 127.573 15.7372 127.667 15.4901L127.799 15.1364L125.425 8.45455H127.061L128.57 13.3977H128.638L130.151 8.45455H131.792L129.171 15.7926C129.049 16.1392 128.887 16.4361 128.685 16.6832C128.483 16.9332 128.236 17.1236 127.944 17.2543C127.654 17.3878 127.307 17.4545 126.904 17.4545ZM135.836 17.4545V8.45455H137.353V9.53693H137.442C137.522 9.37784 137.634 9.20881 137.779 9.02983C137.924 8.84801 138.12 8.69318 138.367 8.56534C138.614 8.43466 138.929 8.36932 139.313 8.36932C139.819 8.36932 140.275 8.49858 140.681 8.7571C141.09 9.01278 141.414 9.39205 141.652 9.89489C141.894 10.3949 142.015 11.0085 142.015 11.7358C142.015 12.4545 141.897 13.0653 141.661 13.5682C141.425 14.071 141.104 14.4545 140.698 14.7188C140.292 14.983 139.831 15.1151 139.317 15.1151C138.942 15.1151 138.631 15.0526 138.384 14.9276C138.137 14.8026 137.938 14.652 137.787 14.4759C137.64 14.2969 137.525 14.1278 137.442 13.9688H137.378V17.4545H135.836ZM137.348 11.7273C137.348 12.1506 137.408 12.5213 137.527 12.8395C137.65 13.1577 137.824 13.4062 138.051 13.5852C138.282 13.7614 138.56 13.8494 138.887 13.8494C139.228 13.8494 139.513 13.7585 139.743 13.5767C139.973 13.392 140.147 13.1406 140.263 12.8224C140.382 12.5014 140.442 12.1364 140.442 11.7273C140.442 11.321 140.384 10.9602 140.267 10.6449C140.151 10.3295 139.978 10.0824 139.748 9.90341C139.517 9.72443 139.23 9.63494 138.887 9.63494C138.557 9.63494 138.277 9.72159 138.047 9.89489C137.817 10.0682 137.642 10.3111 137.523 10.6236C137.407 10.9361 137.348 11.304 137.348 11.7273ZM146.191 15.1278C145.551 15.1278 144.998 14.9872 144.529 14.706C144.06 14.4247 143.696 14.0312 143.438 13.5256C143.182 13.0199 143.054 12.429 143.054 11.7528C143.054 11.0767 143.182 10.4844 143.438 9.97585C143.696 9.46733 144.06 9.07244 144.529 8.79119C144.998 8.50994 145.551 8.36932 146.191 8.36932C146.83 8.36932 147.384 8.50994 147.853 8.79119C148.321 9.07244 148.684 9.46733 148.939 9.97585C149.198 10.4844 149.327 11.0767 149.327 11.7528C149.327 12.429 149.198 13.0199 148.939 13.5256C148.684 14.0312 148.321 14.4247 147.853 14.706C147.384 14.9872 146.83 15.1278 146.191 15.1278ZM146.199 13.892C146.546 13.892 146.836 13.7969 147.069 13.6065C147.301 13.4134 147.475 13.1548 147.588 12.831C147.705 12.5071 147.763 12.1463 147.763 11.7486C147.763 11.348 147.705 10.9858 147.588 10.6619C147.475 10.3352 147.301 10.0753 147.069 9.8821C146.836 9.68892 146.546 9.59233 146.199 9.59233C145.844 9.59233 145.549 9.68892 145.313 9.8821C145.08 10.0753 144.905 10.3352 144.789 10.6619C144.675 10.9858 144.618 11.348 144.618 11.7486C144.618 12.1463 144.675 12.5071 144.789 12.831C144.905 13.1548 145.08 13.4134 145.313 13.6065C145.549 13.7969 145.844 13.892 146.199 13.892ZM152.179 6.27273V15H150.636V6.27273H152.179ZM153.765 15V8.45455H155.308V15H153.765ZM154.541 7.52557C154.297 7.52557 154.086 7.4446 153.91 7.28267C153.734 7.1179 153.646 6.92045 153.646 6.69034C153.646 6.45739 153.734 6.25994 153.91 6.09801C154.086 5.93324 154.297 5.85085 154.541 5.85085C154.788 5.85085 154.998 5.93324 155.172 6.09801C155.348 6.25994 155.436 6.45739 155.436 6.69034C155.436 6.92045 155.348 7.1179 155.172 7.28267C154.998 7.4446 154.788 7.52557 154.541 7.52557ZM159.749 15.1278C159.096 15.1278 158.535 14.9844 158.066 14.6974C157.6 14.4105 157.241 14.0142 156.988 13.5085C156.738 13 156.613 12.4148 156.613 11.7528C156.613 11.0881 156.741 10.5014 156.996 9.9929C157.252 9.48153 157.613 9.08381 158.079 8.79972C158.548 8.51278 159.102 8.36932 159.741 8.36932C160.272 8.36932 160.742 8.46733 161.151 8.66335C161.563 8.85653 161.891 9.13068 162.136 9.4858C162.38 9.83807 162.519 10.25 162.553 10.7216H161.079C161.019 10.4062 160.877 10.1435 160.653 9.93324C160.431 9.72017 160.134 9.61364 159.762 9.61364C159.447 9.61364 159.17 9.69886 158.931 9.86932C158.692 10.0369 158.506 10.2784 158.373 10.5938C158.242 10.9091 158.177 11.2869 158.177 11.7273C158.177 12.1733 158.242 12.5568 158.373 12.8778C158.504 13.196 158.687 13.4418 158.923 13.6151C159.161 13.7855 159.441 13.8707 159.762 13.8707C159.989 13.8707 160.192 13.8281 160.371 13.7429C160.553 13.6548 160.705 13.5284 160.827 13.3636C160.95 13.1989 161.033 12.9986 161.079 12.7628H162.553C162.516 13.2259 162.38 13.6364 162.144 13.9943C161.908 14.3494 161.587 14.6278 161.181 14.8295C160.775 15.0284 160.298 15.1278 159.749 15.1278ZM164.779 17.4545C164.569 17.4545 164.374 17.4375 164.195 17.4034C164.019 17.3722 163.878 17.3352 163.773 17.2926L164.131 16.0909C164.355 16.1563 164.556 16.1875 164.732 16.1847C164.908 16.1818 165.063 16.1264 165.196 16.0185C165.333 15.9134 165.448 15.7372 165.542 15.4901L165.674 15.1364L163.3 8.45455H164.936L166.445 13.3977H166.513L168.026 8.45455H169.667L167.046 15.7926C166.924 16.1392 166.762 16.4361 166.56 16.6832C166.358 16.9332 166.111 17.1236 165.819 17.2543C165.529 17.3878 165.182 17.4545 164.779 17.4545Z" fill="#12033E"/><defs><linearGradient id="paint0_linear_2588_575" x1="-0.937514" y1="20.2849" x2="34.3875" y2="-24.2742" gradientUnits="userSpaceOnUse"><stop stop-color="#7106EE"/><stop offset="0.117896" stop-color="#7106EE"/><stop offset="0.213837" stop-color="#7206EF"/><stop offset="0.2912" stop-color="#7306EF"/><stop offset="0.353363" stop-color="#7505F0"/><stop offset="0.403704" stop-color="#7605F1"/><stop offset="0.4456" stop-color="#7804F2"/><stop offset="0.48243" stop-color="#7B04F4"/><stop offset="0.51757" stop-color="#7D04F5"/><stop offset="0.5544" stop-color="#8003F6"/><stop offset="0.596296" stop-color="#8202F8"/><stop offset="0.646637" stop-color="#8502F9"/><stop offset="0.7088" stop-color="#8801FB"/><stop offset="0.786163" stop-color="#8A01FC"/><stop offset="0.882104" stop-color="#8D00FE"/><stop offset="1" stop-color="#8F00FF"/></linearGradient></defs></svg> </a> </section>`
        
        const getedCSSStyle = `
        @import url(https://fonts.googleapis.com/css2?family=Geologica:wght,CRSV@700,1&display=swap);section#sd-gated-content{display:flex;align-items:center;justify-content:center;position:relative;z-index:9999999;display:flex;align-items:center;justify-content:center;height:100vh;overflow:hidden;width:100%}section#sd-gated-content .gated__bg{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:-1}section#sd-gated-content .gated__bg img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}section#sd-gated-content .gated__logo{margin-bottom:40px}section#sd-gated-content .gated__logo img{max-height:64px;max-width:120px;height:auto;width:auto}section#sd-gated-content .gated__title{font-family:Geologica,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#12033e;text-align:center;font-size:28px;font-style:normal;font-weight:700;line-height:130%;margin-bottom:40px}section#sd-gated-content .gated__privacy{display:block;background:#fff;border:1px solid rgba(196,175,213,.4);border-radius:100px;position:absolute;bottom:16px;left:16px;display:flex;align-items:center;justify-content:center;width:191px;height:36px;z-index:3;padding:8px 12px}section#sd-gated-content .gated__privacy img{width:100%;height:auto}@media screen and (max-width:600px){section#sd-gated-content{position:relative;align-items:flex-start;height:100%;min-height:100vh;overflow-y:auto}section#sd-gated-content .gated__privacy{left:50%;transform:translateX(-50%)}section#sd-gated-content .gated__title{font-size:24px}}section#sd-gated-content .form__main-container{position:relative;z-index:2;max-width:560px;width:100%;padding:88px 73px;display:flex;flex-direction:column;align-items:center;margin:8px;border-radius:32px;background:#fff;box-shadow:0 18px 28px 0 rgba(18,3,62,.1),0 0 1px 0 rgba(18,3,62,.2)}section#sd-gated-content form{width:100%}section#sd-gated-content form .input__container{position:relative;padding:0 12px 0 40px;background:#fff;margin-bottom:12px;border-radius:6px;box-shadow:0 0 0 1px rgba(18,3,62,.06),0 5px 1px 0 rgba(18,3,62,0),0 3px 1px 0 rgba(18,3,62,.01),0 2px 1px 0 rgba(18,3,62,.03),0 1px 1px 0 rgba(18,3,62,.04)}section#sd-gated-content form .input__container:not(.error){margin-bottom:-5px}section#sd-gated-content form .input__container:not(.selected),section#sd-gated-content form .input__container:not(.selected)+.input__error-message{display:none}section#sd-gated-content form .input__container svg{position:absolute;top:50%;left:12px;transform:translateY(-50%)}section#sd-gated-content form .input__container.error{outline:#ff0000 solid 1px}section#sd-gated-content form .input__container.error input,section#sd-gated-content form .input__container.error input::placeholder{color:red}section#sd-gated-content form .input__container.error+.input__error-message{opacity:1;visibility:visible}section#sd-gated-content form .input__container.error svg path,section#sd-gated-content form .input__container.error svg rect{fill:#ff0000}section#sd-gated-content form .input__container.error label{color:red}section#sd-gated-content form .input__error-message{color:red;font-size:11px;margin-bottom:0;position:relative;top:-10px;text-align:right;align-items:center;opacity:0;visibility:hidden;display:flex}section#sd-gated-content form .input__error-message::before{content:url("https://assets.storydoc.com/assets/images/signup/alert.png");transform:scale(.7);margin-top:2px}section#sd-gated-content form input{border:unset;width:100%;height:48px;font-family:Inter,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:1.5;color:#1e0036}section#sd-gated-content form input::placeholder{font-family:Inter,sans-serif;font-style:normal;font-weight:400;color:#8f9bb3;font-size:13px;line-height:16px}section#sd-gated-content form input:active,section#sd-gated-content form input:focus{outline:0}section#sd-gated-content form .btn__container{position:relative;margin-top:10px}section#sd-gated-content form .btn__container button{outline:0;border:1px solid #6306d1;width:100%;font-family:Inter,sans-serif;text-align:center;border-radius:8px;background:#7106ee;box-shadow:0 8px 2px 0 rgba(18,3,62,0),0 5px 2px 0 rgba(18,3,62,.01),0 3px 2px 0 rgba(18,3,62,.05),0 1px 1px 0 rgba(18,3,62,.09),0 0 1px 0 rgba(18,3,62,.1),0 0 0 0 rgba(18,3,62,.1);cursor:pointer;height:48px;color:#fff;font-size:16px;font-style:normal;font-weight:600;line-height:100%;transition:opacity .3s ease-in-out}section#sd-gated-content form .btn__container button:hover{opacity:.8}section#sd-gated-content form .btn__container button:disabled{cursor:auto;color:rgba(255,255,255,.5)}@media screen and (max-width:768px){section#sd-gated-content .form__main-container{padding:32px 16px;margin-bottom:66px!important}section#sd-gated-content form .btn__container button{height:40px;font-size:14px;line-height:20px}}section#sd-gated-content form .message__info{color:red;font-size:13px;margin-bottom:0;display:none;position:absolute}
        `

        document.head.insertAdjacentHTML("beforeend", '<style type="text/css">' + getedCSSStyle + '</style>');
        document.body.insertAdjacentHTML("afterbegin", gatedHTMLContent);
    
        const gatedContentData = JSON.parse(window.gatedContentData.replace(/&quot;/g,'"'));
        var title = document.querySelector('section#sd-gated-content .gated__title');
        var logo = document.querySelector('section#sd-gated-content .gated__logo img');
        generateInputs();
    
        var gerArray = function(selector) { return  Array.from(document.querySelectorAll(selector)); }
        var form = document.forms['gated-content-form']; 
        var inputs = gerArray('section#sd-gated-content .selected input');
        var inputsRequired = gerArray('section#sd-gated-content .selected input[data-required="required"]');
        var emailInput = gerArray('section#sd-gated-content .selected input[data-control="email"][data-required="required"]');
        var emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var inputsPiwikMapping = { 'name': 11, 'email': 12, 'position': 13 };
        var analyticsFieldsMapping = {'name': 'prospectName', 'email': "prospectEmail", "position": "prospectPosition"}
    
    
        insertDataIfExistsAndSubmit();
        submitForm();
        inputsErrorHandler();
    
        function validateEmail(input) {
            if (!input) return true;
            return emailRegEx.test(input.value);
        }
        
        function checkIfInputHasValue(input) {
            if(input.value) input.classList.add('has-value')
            else input.classList.remove('has-value');
        }
    
        function inputsErrorHandler(isSubmit = false) {
            inputsRequired.concat(emailInput).forEach(function(input) {
                if(isSubmit) checkSingleInputValue(input);
                checkIfInputHasValue(input);
                input.addEventListener('input', function() {
                    checkSingleInputValue(input);
                    checkIfInputHasValue(input)
                })
            })
        }
    
        function checkSingleInputValue(input) {
            var emailInputValue = emailInput.length && emailInput[0].isSameNode(input);
            if(emailInputValue) {
                if(input.value && validateEmail(input)) input.parentElement.classList.remove('error')
                else input.parentElement.classList.add('error');
                return
            }
            if(input.value) input.parentElement.classList.remove('error')
            else input.parentElement.classList.add('error');
        }
    
    
        function submitForm() {
            form.addEventListener('submit', e => {
                e.preventDefault();
                insertPiwikData();
            })
        }
    
    
        function insertPiwikData() {
            var canSubmit = validateEmail(emailInput[0]) && inputsRequired.every(function(input){ return input.value });
            if (!canSubmit) return inputsErrorHandler(true);
            var dataToSave = {};
            document.body.classList.remove('gated-content');
            
            const payload = {};
            inputs.forEach(input => {
                const name = input.getAttribute('name');
                if(name && analyticsFieldsMapping[name] && input.value) payload[analyticsFieldsMapping[name]] = input.value;
            })
            window.analyticsData = {
                ...(window.analyticsData || {}),
                ...payload,
            }
            if(window._SD_LOAD_ANALYTICS_SCRIPT_ && typeof window._SD_LOAD_ANALYTICS_SCRIPT_ === 'function') {
                window._SD_LOAD_ANALYTICS_SCRIPT_();
            }
            if (typeof _paq === "undefined" && (window.sendAnalyticsEvents || !window.disableAnalytics)) return setTimeout(insertPiwikData, 1500);
            inputs.forEach(function (input) {
                var name = input.getAttribute('name');
                if (inputsPiwikMapping[name] && input.value) {
                    _paq.push(['setCustomDimensionValue', inputsPiwikMapping[name], input.value]);
                    dataToSave[name] = input.value;
                }
            })                
            window.sessionStorage.setItem('sd-gated-content-data', JSON.stringify(dataToSave));
        }
    
        function generateInputs() {
            var keys = ['name', 'email', 'position'];
            var counter = 0;
            var data = gatedContentData[0];
            setLogoAndTitle(data);
            keys.forEach(function (key) {
                if (!Boolean(data[key])) return counter++;
                var value = JSON.parse(data[key]);
                if(!value) return
                var input = document.querySelector('section#sd-gated-content input[data-control=' + key + ']');
                if (!input) return
                var inputContainer = input.closest('.input__container');
                if (inputContainer) inputContainer.classList.add('selected'); 
                if (JSON.parse(data[key + 'Required'])) input.setAttribute('data-required', 'required');
            })
    
            if (counter >= 3) {
                var input = document.querySelector('section#sd-gated-content input[data-control="email"]');
                if (input) input.classList.add('selected');
            }
        }
    
        function setLogoAndTitle(data) {
            if (logo) {
                if (data.logo !== 'true') logo.style.display = 'none';
                if (data.logoSRC) logo.setAttribute('src', data.logoSRC);  
            }
            if (data.title && title) title.textContent = data.title;
        }
    
    
        function insertDataIfExistsAndSubmit() {
            var data = window.sessionStorage.getItem('sd-gated-content-data');
            if (!data || !Boolean(data)) return;
            data = JSON.parse(data);
            Object.keys(data).forEach(function (key) {
                var input = document.querySelector('section#sd-gated-content .selected input[data-control=' + key + ']');
                if (input) input.value = data[key];
            })
            insertPiwikData();
        }
        
    }


    function handleRemoveClassName() {

        if (document.body.classList.contains('gated-content')) {
            document.body.classList.remove('gated-content');
        } else {
            // Observe for class changes on body
            var observer = new MutationObserver(function(mutations, obs) {
                if (document.body.classList.contains('gated-content')) {
                    document.body.classList.remove('gated-content');
                    obs.disconnect();
                }
            });
            observer.observe(document.body, {
                attributes: true,
                attributeFilter: ['class']
            });
        }
    }


    // Wait for DOM to be ready
    function waitForBody() {
        if (document.body) initGatedContent();
        else setTimeout(waitForBody, 50);
    }
    waitForBody();
})();

