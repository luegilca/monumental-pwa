<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="profile-panel col-md-3 full-vh">
          <div class="left-panel-head">
            <div class="flex-align-center profile-container">
              <div class="profile-image" style="background-image: url('https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/1477344_10202428365487116_213295472_n.jpg?_nc_cat=102&_nc_ht=scontent.fbog5-1.fna&oh=c28faf99b8e30506ef58946755771629&oe=5CED4FDF')"></div>
              <div class="profile-name">Juan Vivero</div>
            </div>
          </div>
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="tab" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fas fa-home tab-icon"></i>Album</a>
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-map-marked-alt tab-icon"></i>Arma tu plan</a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-bullhorn tab-icon"></i>Eventos</a>
          </div>
        </div>
        <div class="col-md-9 main-panel">
          <div class="row margin-bottom">
            <div class="js-monument js-item-0 col-md-4">
              <div class="js-image card album-item" data-toggle="modal" data-target="#modal-1" style="background-image: url('./../../static/img/monuments/1.jpg')">
                <div class="card-body">
                </div>
              </div>
              <div class="js-id album-item-id flex-align-center">1</div>
            </div>
            <div class="js-monument js-item-1 col-md-4">
              <div class="js-image card album-item" data-toggle="modal" data-target="#modal-1" style="background-image: url('./../../static/img/monuments/2.jpg')">
                <div class="card-body">
                </div>
              </div>
              <div class="js-id album-item-id flex-align-center">2</div>
            </div>
            <div class="js-monument js-item-2 col-md-4">
              <div class="js-image card album-item" data-toggle="modal" data-target="#modal-1" style="background-image: url('./../../static/img/monuments/3.jpg')">
                <div class="card-body">
                </div>
              </div>
              <div class="js-id album-item-id flex-align-center">3</div>
            </div>
          </div>
        </div>
        </div>
        <div id="modal-1" class="js-modal modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <button type="button" class="close modal-close-btn" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-body">
                <div class="modal__head">
                  <div class="js-modal-image modal-img" style="background-image: url('./img/4.jpg')">
                  </div>
                  <div class="modal__text">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Descripción</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="guard-tab" data-toggle="tab" href="#guard" role="tab" aria-controls="guard" aria-selected="false">¡Desbloquéame!</a>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                        <div class="js-modal-title modal__title"></div>
                        <div class="js-modal-description modal__description description"></div>
                      </div>
                      <div class="tab-pane fade" id="guard" role="tabpanel" aria-labelledby="guard-tab">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="person-title">Contesta la siguiente pregunta</div>
                              <div class="claim">Recuerda que debes estar cerca al monumento y contestar esta pregunta para desbloquearlo</div>
                              <div class="person-descrition person-role question-text"></div>
                              <br>
                              <div align="center">
                                <button type="button" class="btn btn-warning btn_second opt-0 button-options" data-option="0">a</button>
                                <button type="button" class="btn btn-warning btn_second opt-1 button-options" data-option="1">b</button>
                                <button type="button" class="btn btn-warning btn_second opt-2 button-options" data-option="2">c</button>
                                <button type="button" class="btn btn-warning btn_second opt-3 button-options" data-option="3">d</button>
                              </div>                              
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="js-modal-id album-item-id modal__item-id flex-align-center">35</div>
                </div>
                <div class="modal__actions">
                  <div class="dropdown">
                      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ver ruta
                      </a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="js-route dropdown-item" href="#" data-transport="WALKING">A pie</a>
                        <a class="js-route dropdown-item" href="#" data-transport="BICYCLING">En bici</a>
                        <a class="js-route dropdown-item" href="#" data-transport="DRIVING">En auto</a>
                        <a class="js-route dropdown-item" href="#" data-transport="TRANSIT">En bus</a>
                      </div>
                    </div>
                    <button type="button" class="btn btn-warning btn_second button-options">Desbloquear</button>
                </div>
                <div class="map-container">
                  <div id="map" class="js-map no-visible"></div>
                </div>
                <div id="directionsPanel"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="success" class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <div class="person-title">¡Felicidades! Has desbloqueado una nueva lámina</div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="col-md-12" align="center">                        
                  <div class="person-descrition person-role after-unlock"></div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary close-unlocked" data-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data( ) {
    return {
      status: false,
      posX: null,
      posY: null
    }
  },
  methods: {
    changeStatus( ) {
      this.status = !this.status;
      this.getLocation( );
    },
    getLocation( ) {
      if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition( this.showPosition );
      }
      else {
        alert( "Geo Location not supported by browser" );
      }
    },
    showPosition( position ) {
      this.posX = position.coords.longitude;
      this.posY = position.coords.latitude;
    }
  }
}
</script>
