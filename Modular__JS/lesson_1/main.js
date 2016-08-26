(function() {

    var people = {
        people: [],
        template: $('#people-template').html(),
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },

        cacheDom: function() {
            this.$el      = $('#peopleModule');
            this.$input   = this.$el.find('input');
            this.$button  = this.$el.find('button');
            this.$ul      = this.$el.find('ul');
            this.template = this.$el.find('#people-template').html();
        },

        bindEvents: function() {
            this.$button.on('click', this.addPerson.bind(this)); // почему используем bind()?
            this.$ul.on('click', '.del', this.deletePerson.bind(this));
        },

        addPerson: function(value) {
            this.people.push(value || this.$input.val());
            this.render();
            this.$input.val('');
        },

        deletePerson: function() {
            var $remove = $(this).closest('li');
            var i = this.$ul.find('li').index($remove);

            this.people.splice(i, 1);
            this.render();
        },

        render: function() {
            var data = {
                people: this.people
            };
            this.$ul.html(Mustache.render(this.template, data));
        }
        

    };

    people.init();

})();





// var people = [];
// var template = $('#people-template').html();

// $('#peopleModule').find('button').on('click', function() {

//     people.push($('#peopleModule').find('input').val());

//     //data for mustahe template
//     var data = {
//         people: people
//     };

//     $('#peopleModule').find('ul').html(Mustache.render(template, data));
// });


// $('#peopleModule').find('ul').on('click', 'i.del', function(e) {

//     var $remove = $(this).closest('li');
//     var i = $('#peopleModule').find('ul').find('li').index($remove);

//     $remove.remove();

//     people.splice(i, 1);

// });


// var people = {
//     people: ['Will', 'Steve'],
//     init: function() {
//         this.cacheDom();
//         this.bindEvents();
//         this.render();
//     },
//     cacheDom: function() {
//         this.$el = $('#peopleModule');
//         this.$button = this.$el.find('button');
//         this.$input = this.$el.find('input');
//         this.$ul = this.$el.find('ul');
//         this.template = this.$el.find('#people-template').html();
//     },
//     bindEvents: function() {
//         this.$button.on('click', this.addPerson.bind(this));
//         this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
//     },
//     render: function() {
//        var data = {
//            people: this.people,
//        };
//        this.$ul.html(Mustache.render(this.template, data));
//     },
//     addPerson: function() {
//         this.people.push(this.$input.val());
//         this.render();
//         this.$input.val('');
//     },
//     deletePerson: function(event) {
//         var $remove = $(event.target).closest('li');
//         var i = this.$ul.find('li').index($remove);

//         this.people.splice(i, 1);
//         this.render();
//     }

// };

// people.init();