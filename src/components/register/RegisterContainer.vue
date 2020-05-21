<template>
  <div class="content-wrapper" id="registerContainer">

    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Register</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active"><a href="/register">Register</a></li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>


        <!-- Main content -->
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <!-- left column -->
              <div class="col-md-6">
                <!-- general form elements -->

                <div v-if="errors.length>0" class="alert alert-danger" role="alert">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li v-for="error in this.errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                </div>
                <div v-if="(getResult !=null) && (getResult.retCode != 0)" class="alert alert-danger" role="alert">
                  <b>Problemas procesando registro: {{getResult}}</b>
                </div>
                <div v-else-if="(getResult !=null) && (getResult.retCode==0)" class="alert alert-success" role="alert">
                  <b>Registro procesado correctamente {{getResult}}</b>
                </div>



                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Operator information</h3>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
                  <div class="card-body">
                  <form>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">Name</span>
                        </div>
                        <input type="text" class="form-control " placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" id="name" v-model="name">
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon2">Postal Address</span>
                        </div>
                        <input type="text" class="form-control " placeholder="Postal Address" aria-label="Postal Address" aria-describedby="basic-addon2" id="postalAddresss" v-model="postalAddress">
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon3">Email</span>
                        </div>
                        <input type="email" class="form-control " placeholder="Operator's email" aria-label="Email" aria-describedby="Email" id="email" v-model="email">
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon3">Company Name</span>
                        </div>
                        <input type="text" class="form-control " placeholder="Company Name" aria-label="Company Name" aria-describedby="Company Name" id="company" v-model="company">
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon3">Licence</span>
                        </div>
                        <input type="text" class="form-control " placeholder="Operator's licence" aria-label="Licence" aria-describedby="Licence" id="licence" v-model="licence">
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon3">Address</span>
                        </div>
                        <select class="custom-select custom-select-mb" id="account" v-model="account">
                          <option v-for="account in this.getAccounts" :value="account" v-bind:key="account">{{ account }}</option>
                        </select>
                      </div>
                      <button type="button" class="btn btn-outline-info float-left" @click="listRegister">Cancelar</button>
                      <button type="button" class="btn btn-outline-info float-right" @click="sendRegister">Aceptar</button>
                  </form>
                </div><!-- car body -->
                </div>
                <!-- /.card -->
              </div>
            </div>
            <!-- /.row -->
          </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->


  </div>
</template>

<script>
  import { mapActions, mapGetters} from 'vuex';
  import { router } from '../../main';
  export default {
    name: 'RegisterContainer',
    methods: {
      ...mapActions(['registerOperatorMetadata','registerOperator', 'setAccounts','resetResult']),
      listRegister: function() {
        router.push({name:'register'});
      },
      sendRegister: async function() {
        this.errors = [];

        if (!this.name) {
          this.errors.push('El nombre es obligatorio.');
        }
        if (!this.postalAddress) {
          this.errors.push('El código postal es obligatorio.');
        }
        if (!this.email) {
          this.errors.push('El email es obligatorio.');
        }
        if (!this.company) {
          this.errors.push('Nombre de compañía es obligatorio.');
        }
        if (!this.licence) {
          this.errors.push('Número de licencia es obligatorio.');
        }
        if (!this.account) {
          this.errors.push('Cuenta wikidrone obligatoria.');
        }
        if (this.errors.length==0){
          //TODO: emitir evento
          var registerMetadata={};
          registerMetadata.name=this.name;
          registerMetadata.postalAddress=this.postalAddress;
          registerMetadata.email=this.email;
          registerMetadata.company=this.company;
          registerMetadata.licence=this.licence;
          registerMetadata.account=this.account;
          console.log(JSON.stringify(registerMetadata));
          var codRet = await this.registerOperator(this.account);
          if (codRet == 0)
            await this.registerOperatorMetadata(registerMetadata);
        }
			}
    },
    computed: {...mapGetters(['getResult','getAccounts'])},
    props: [],
    data() {
			return {
        errors: [],
        name: null,
        postalAddress: null,
        email: null,
        company: null,
        licence: null,
        account: null
      };
		},
    components: {
    },
    created: function () {
      this.resetResult();
      this.setAccounts();
    }
  };
</script>

<style scoped>

</style>
