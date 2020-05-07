<template>
  <div class="container">
  <h5 class="titleDetail">Nueva Operación</h5>
  <div class="row border">
    <div v-if="errors.length>0" class="alert alert-danger w-100" role="alert">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in this.errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </div>
    <div v-if="(getTrackResult !=null) && (getTrackResult.codRet != 0)" class="alert alert-danger w-100" role="alert">
      <b>Problemas procesando registro: {{getTrackResult}}</b>
    </div>
    <div v-else-if="(getTrackResult !=null) && (getTrackResult.codRet==0)" class="alert alert-success w-100" role="alert">
      <b>Registro procesado correctamente {{getTrackResult}}</b>
    </div>
    <div class="col-md-7 border content">
      <GoogleMapsEmpty ref="googleMapsEmpty"></GoogleMapsEmpty>
    </div>
    <div class="col-md-4 border content">
      <form>
        <div class="container">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Descripción</span>
            </div>
            <input type="text" class="form-control" placeholder="Descripción del track" aria-label="Description" aria-describedby="basic-addon1" id="description" v-model="description">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Min. Altitude</span>
            </div>
            <input type="text" class="form-control" placeholder="Minimun altitude" aria-label="Min. Altitude" aria-describedby="basic-addon1" id="minAltitude" v-model="minAltitude">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Max. Altitude</span>
            </div>
            <input type="text" class="form-control" placeholder="Maximum altitude" aria-label="Max. Altitude" aria-describedby="basic-addon1" id="maxAltitude" v-model="maxAltitude">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Start Time</span>
            </div>
            <input type="text" class="form-control" placeholder="dd/mm/yyyy HH:mi:ss" aria-label="Start time" aria-describedby="basic-addon1" id="startTime" v-model="startTime">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">End Time</span>
            </div>
            <input type="text" class="form-control" placeholder="dd/mm/yyyy HH:mi:ss" aria-label="End time" aria-describedby="basic-addon1" id="endTime" v-model="endTime">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">Address</span>
            </div>
            <select class="custom-select custom-select-mb" id="account" v-model="account">
              <option v-for="account in this.getAccounts" :value="account" v-bind:key="account">{{ account }}</option>
            </select>
          </div>
          <button type="button" class="btn btn-outline-info float-right" @click="sendOperation">Aceptar</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
import GoogleMapsEmpty from '../map/GoogleMapsEmpty';
  export default {
    name: 'OperationNewDetail',
    components: {GoogleMapsEmpty},
    computed: {...mapGetters(['getTrackResult','getAccounts'])},
    data() {
      return {
        errors: [],
        description: null,
        minAltitude: null,
        maxAltitude: null,
        startTime: null,
        endTime: null,
        account: null
      };
    },
    methods: {
      ...mapActions(['newTrack','setAccounts','setTrackResult']),
      sendOperation: async function() {
        this.errors = [];
        if (!this.description) {
          this.errors.push('Descripción obligatoria');
        }
        if (!this.minAltitude) {
          this.errors.push('Altitud mínima obligatoria');
        }
        if (!this.maxAltitude) {
          this.errors.push('Altitud máxima obligatoria');
        }
        if (!this.startTime) {
          this.errors.push('Instante de comienzo obligatoria');
        }
        if (!this.endTime) {
          this.errors.push('Instante de finalización obligatorio');
        }
        if (!this.account) {
          this.errors.push('Cuenta wikidrone obligatoria.');
        }
        if (!this.$refs.googleMapsEmpty.$data.start) {
          this.errors.push('Start vacio. Es necesario dibujar una ruta en el mapa de al menos tres puntos');
        }
        if (!this.$refs.googleMapsEmpty.$data.finish) {
          this.errors.push('Finish vacío. Es necesario dibujar una ruta en el mapa de al menos tres puntos');
        }
        if (!(this.$refs.googleMapsEmpty.$data.routePoints) || (this.$refs.googleMapsEmpty.$data.routePoints.length == 0)) {
          this.errors.push('Puntos de ruta. Es necesario dibujar una ruta en el mapa de al menos tres puntos');
        }
        if (this.errors.length==0){
          //TODO: emitir evento
          var operation={};
          //console.log("sendOperation --> this.$refs.googleMapsEmpty.$data: " + JSON.stringify(this.$refs.googleMapsEmpty.$data));
          operation.description=this.description;
          operation.minAltitude=this.minAltitude;
          operation.maxAltitude=this.maxAltitude;
          operation.startTime=this.startTime;
          operation.endTime=this.endTime;
          operation.account=this.account;
          operation.start=this.$refs.googleMapsEmpty.$data.start;
          operation.finish=this.$refs.googleMapsEmpty.$data.finish;
          operation.routePoints=this.$refs.googleMapsEmpty.$data.routePoints;
          //TODO: Revisar la información de metadatos
          operation.metadata= "" + new Date().getTime();
          console.log("sendOperation --> operation: " + JSON.stringify(operation));
          var codRet = await this.newTrack(operation);
          if (codRet == 0){
            console.log("operation registered");
            //this.setTrackResult({codRet:0});
          }
//            await this.registerOperatorMetadata(registerMetadata);
        }
			}
    },
    created: function () {
      this.setTrackResult(null);
      this.setAccounts();
    }
  };//export
</script>

<style scoped>
.content{
margin-left:5px;
margin-top:10px;
margin-bottom:10px;
height:400px;
}
label{
margin-left:10px;
font-size: 10px;
}
</style>
