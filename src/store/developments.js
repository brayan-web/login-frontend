const LOCATIONS_URL = "/locations"
export  default {
        state:{
                data:[],
            selectedLocation: {},
            modal:false,
        },
    mutations:{
        _setLocations(state, locations){
            state.data = [];
            state.total = locations.length;
            state.data = locations;
        },
        _toggleModal(state, location){
            state.modal = !state.modal;
            state.selectedLocation = location;
        },
    },
    getters:{
        getLocations: (state) => {
            return state.data;
        },
        getSelectedLocation: (state) => {
            return state.selectedLocation;
        },
        getModalStatus: (state) => {
            return state.modal;
        },
    },
    actions:{
        async getAvailableLocations(context, development){
            let AVAILABLE_LOCATIONS_URL = `${LOCATIONS_URL}/availability/${development.id}`;
            if(development.level > 0){
                AVAILABLE_LOCATIONS_URL += `?towerId=${development.level}`;
            }
            let response = await context.rootGetters.api.get(`${AVAILABLE_LOCATIONS_URL}`);

            let arr = [];
            for(let i = 0; i < response.data.length; i++){
                let obj = {};
                let response_obj = response.data[i];
                obj.name = response_obj.locationName;
                obj.coords = response_obj.coordinates;
                obj.status = response_obj.statusLocationID;
                obj.type = response_obj.prototypeName;
                obj.value = response_obj.value;
                obj.description = response_obj.description;
                obj.available = response_obj.available;
                obj.reserved = response_obj.reserved;
                obj.unavailable = response_obj.unavailable;
                obj.locationId = response_obj.locationId;
                obj.imagePrototype = response_obj.imagePrototype;


                if(response_obj.statusLocationID == 2){
                    obj.color = '31af67';
                    obj.statusText = 'Disponible';
                } else if(response_obj.statusLocationID == 3){
                    obj.color = 'FAF142';
                    obj.statusText = 'Reservado';
                } else if(response_obj.statusLocationID == 4){
                    obj.color = 'B00000';
                    obj.status = 0;
                    obj.statusText = 'Vendido';
                } else {
                    obj.status = 4;
                    obj.color = '5C5656';
                    obj.statusText = 'Bloqueado';
                }
                obj.m2t = response_obj.m2t;
                obj.shape = 'poly';
                arr.push(obj);
            }


            context.commit("_setLocations", arr);
        },
        toggleModal(context, location){
            context.commit("_toggleModal", location);
        },
    }
}