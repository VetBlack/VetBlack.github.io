// GLOBAL VARIABLES
let btn = document.querySelector('.testButton');
let peopleObject = {};
let filmObject = {};
let planetObject = {};
let speciesObject = {};
let starshipsObject = {};
let vehiclesObject = {};

var temp = [];

//Options for Tables

var FilOptions = {
      data: null,
      paging: true,
      ordering: true,
      searching: true,
      info: false,
      "columns": [
            {
                  render: function (data, type, row) {
                        return row.title
                  },
            },
            {
                  render: function (data, type, row) {
                        return row.episode_id
                  },
            }

      ]
};
var PepOptions = {
      data: null,
      paging: true,
      ordering: true,
      searching: true,
      info: false,
      "columns": [{
            render: function (data, type, row) {
                  return row.name
            },
      },
      {
            render: function (data, type, row) {
                  return row.height
            },
      },
      {
            render: function (data, type, row) {
                  return row.mass
            },
      }
      ]

};
var PlOptions = {
      data: null,
      paging: true,
      ordering: true,
      searching: true,
      info: false,
      "columns": [{
            render: function (data, type, row) {
                  return row.name
            },
      },
      {
            render: function (data, type, row) {
                  return row.diameter
            },
      },
      {
            render: function (data, type, row) {
                  return row.climate
            },
      }
      ]
};
var SpecOptions = {
      data: null,
      paging: true,
      ordering: true,
      searching: true,
      info: false,
      "columns": [{
            render: function (data, type, row) {
                  return row.name
            },
      },
      {
            render: function (data, type, row) {
                  return row.classification
            },
      },
      {
            render: function (data, type, row) {
                  return row.average_height
            },
      }
      ]
};
var StarOptions = {
      data: null,
      paging: true,
      ordering: true,
      searching: true,
      info: false,
      "columns": [{
            render: function (data, type, row) {
                  return row.name
            },
      },
      {
            render: function (data, type, row) {
                  return row.model
            },
      },
      {
            render: function (data, type, row) {
                  return row.cost_in_credits
            },
      },
      {
            render: function (data, type, row) {
                  return row.length
            },
      }
      ]
};
var VeOptions = {
      data: null,
      paging: true,
      ordering: true,
      searching: true,
      info: false,
      "columns": [{
            render: function (data, type, row) {
                  return row.name
            },
      },
      {
            render: function (data, type, row) {
                  return row.model
            },
      },
      {
            render: function (data, type, row) {
                  return row.cost_in_credits
            },
      },
      {
            render: function (data, type, row) {
                  return row.length
            },
      }
      ]
};

function getMorePages(obj, toObject) {
      if (obj.next) {
            axios.get(obj.next).then(function (response) {
                  console.log(response.data);                        
                  getMorePages(response.data, toObject);
                  if (response.data.results){                 
                        $.each(response.data.results, function(k,v){
                              toObject.data.push(v);
                        });                 
                  }                    

                  return response.data.results;
            });
      }
      return 0;
}

function Invoke() {
      axios.all([
            axios.get('https://swapi.co/api/films'),
            axios.get('https://swapi.co/api/people'),
            axios.get('https://swapi.co/api/planets'),
            axios.get('https://swapi.co/api/species'),
            axios.get('https://swapi.co/api/starships'),
            axios.get('https://swapi.co/api/vehicles')
      ])
            .then(axios.spread((films, people, planets, species, starships, vehicles) => {

                  FilOptions.data = films.data.results;

                  PepOptions.data = people.data.results;
                  if (people.data.next) {
                        getMorePages(people.data, PepOptions);               
                  }
                  PlOptions.data = planets.data.results;
                  if (planets.data.next) {
                        getMorePages(planets.data, PlOptions)
                  }
                  SpecOptions.data = species.data.results;
                  if (species.data.next) {
                        getMorePages(species.data, SpecOptions)
                  }
                  StarOptions.data = starships.data.results;
                  if (starships.data.next) {
                        getMorePages(starships.data, StarOptions)
                  }
                  VeOptions.data = vehicles.data.results;
                  if (vehicles.data.next) {
                       getMorePages(vehicles.data, VeOptions)
                  }

            }));
}
function createTables(){
      var FilTable = $('#filmTable').DataTable(FilOptions);
      var PepTable = $('#peopleTable').DataTable(PepOptions);
      var PlTable = $('#planetsTable').DataTable(PlOptions);
      var SpecTable = $('#speciesTable').DataTable(SpecOptions);
      var StarTable = $('#starshipsTable').DataTable(StarOptions);
      var VeTable = $('#vechiclesTable').DataTable(VeOptions);       
}

$(document).ready(function () {
    Invoke();
    setTimeout(() => {
      createTables();
    }, 5000); 
});