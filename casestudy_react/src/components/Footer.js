export const Footer = () => {
    return (
      <>
        <div class="header-content">
        <div class="container">
          <div class="row">
            <div
              class="col-auto col-sm-5 col-lg-3 d-flex align-items-center bestel-logo"
            >
              <a href="https://furamavietnam.com/vi/" class="header-logo"
                ><img
                  src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
                  alt="logo "
                  class="img-fluid"
              /></a>
            </div>
            <div class="col col-md-auto col-lg-3 d-flex">
              <div class="catalog-widget d-none d-sm-block">
                <div class="catalog-widget-inside">
                  <a
                    href="https://www.tripadvisor.com/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang_Quang_Nam_Province.html"
                    target="_blank"
                  >
                    <div class="widget-tripadvisor">
                      <div class="inside">
                        <div class="widget-tripadvisor-logo">
                          <img
                            src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png"
                            alt=""
                          />
                        </div>
                        <div class="widget-tripadvisor-rating">
                          <img
                            src="https://furamavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png"
                            alt=""
                          />
                        </div>
                        <div class="widget-tripadvisor-text">2,746 Reviews</div>
                      </div>
                    </div>
                  </a>
                  <span
                    class="catalog-widget-toggle js-catalog-widget-toggle"
                  ></span>
                </div>
              </div>
              <div
                class="catalog-widget-mobile d-flex d-sm-none align-items-center mx-auto"
              ></div>
            </div>
  
            <div class="col-sm-3 d-none d-lg-block">
              <div class="header-contact d-flex">
                <div class="header-contact-icon">
                <box-icon name='map' ></box-icon>
                </div>
                <div class="header-contact-txt">
                  <span>
                    103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành
                    Sơn, Tp. Đà Nẵng, Việt Nam
                  </span>
                  <p class="txt-sm">
                    <span>7.0 km</span> từ Sân bay Quốc tế Đà Nẵng
                  </p>
                </div>
              </div>
            </div>
  
            <div class="col-sm-3 d-none d-lg-block">
              <div class="header-contact d-flex">
                <div class="header-contact-icon">
                  <i class="icon-telephone"></i>
                </div>
                <div class="header-contact-txt">
                <box-icon name='phone'></box-icon>
                  <span class="txt-lg">84-236-3847 333/888</span>
                </div>
              </div>
              <div class="header-contact d-flex">
                <div class="header-contact-icon">
                  <i class="icon-closed-envelope"></i>
                </div>
                <div class="header-contact-txt">
                <box-icon type='logo' name='gmail'></box-icon>
                  <a href="mailto:reservation@furamavietnam.com">
                    reservation@furamavietnam.com
                  </a>
                </div>
              </div>
            </div>
            <div class="col-auto ml-auto d-flex d-lg-none">
              <button
                class="navbar-btn"
                data-target="#modalNavigation"
                data-toggle="modal"
              >
                <i class="icon-menu"></i>
              </button>
              <div class="modal fade modal-fullscreen-menu" id="modalNavigation">
                <button aria-label="Close" class="close" data-dismiss="modal">
                  <i class="icon-close"></i>CLOSE
                </button>
                <div class="modal-dialog"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };