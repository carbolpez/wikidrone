<template>
	<div class="col-9">
		<h4 class="titleContainer">Admin</h4>
		<p class="text-justify">Administration operations for Wikidrone System</p>
    <div v-if="(getAdminResult !=null) && (getAdminResult.retCode != 0)" class="alert alert-danger w-100" role="alert">
      <b>Problemas procesando registro: {{getAdminResult}}</b>
    </div>
    <div v-else-if="(getAdminResult !=null) && (getAdminResult.retCode==0)" class="alert alert-success w-100" role="alert">
      <b>Operación realizada correctamente {{getAdminResult.retCode}}</b>
    </div>
    <div class="w-50">
      <span>Reset System</span>
      <button type="button" class="btn btn btn-danger" @click="resetSystem">Reset</button>
      <hr class="mt-3 mb-3">
      <button type="button" class="btn btn-outline-info float-left" @click="sendHome">Volver</button>
    </div>
	</div>
</template>

<script>
import { router } from '../../main';
import { mapActions, mapGetters} from 'vuex';
	export default {
		name: 'AdminConatiner',
    methods: {
      ...mapActions(['resetSystem', 'resetAdminResult']),
      sendHome: function(){
        router.push({name:'landing'});
      }
    },
    computed: {...mapGetters(['getAdminResult'])},
    created: function () {
      this.resetAdminResult();
    }
	};//default
</script>

<style scoped>
button{
  margin-left:20px;
}
</style>
