$(function() {
  $('.header__menu-button').click(function() {
    $(this).toggleClass('open')
    $('.header__menu-list').toggleClass('show')
    $(' body').toggleClass('overflow-hidden')
    $('.header__overlay').toggleClass('overlay')
  })
  $('.header__overlay').click(function() {
    $(this).removeClass('overlay')
    $('.header__menu-list').removeClass('show')
    $(' body').removeClass('overflow-hidden')
    $('.header__menu-button').removeClass('open')
  })

  var swiper = new Swiper('.elementSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      576: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 5
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  })

  var swiper = new Swiper('.strategysSwiper', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    // breakpoints: {
    //   992: {
    //     slidesPerView: 2
    //   }
    // },
    pagination: {
      el: ".swiper-pagination"
    }
  })



  // $('.banners__background').mousemove(function(e) {
  //   let moveX = (e.pageX * -1 /3)
  //   let moveY = (e.pageY * -1 /10)
  //   $(this).css('background-position', moveX + 'px ' + moveY + 'px')
  // })

  // let banner =  document.querySelector('.banners__frame')
  // banner.addEventListener('mousemove', (e) => {
  //   banner.style.backgroundPositionX = -e.offsetX + "px"
  //   banner.style.backgroundPositionY = -e.offsetY + "px"
  // })

  // let banners = document.getElementById('banners')
  // let parallax = new Parallax(banners)

  var scene = document.getElementById('scene')
  var parallaxInstance = new Parallax(scene)
})