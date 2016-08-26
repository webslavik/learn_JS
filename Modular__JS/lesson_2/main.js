var people = (function() {

    var people = [];

    //cache DOM
    var $el      = $('#peopleModule'),
        $input   = $el.find('input'),
        $button  = $el.find('button'),
        $ul      = $el.find('ul'),
        template = $el.find('#people-template').html();

    // binding events
    $button.on('click', addPerson);
    $ul.on('click', '.del', deletePerson);

    function addPerson(value) {
        var name = (typeof value === 'string') ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    };

    function deletePerson(e) {
        var i;
        if(typeof e === 'number') {
            i = event;
        } else {
            var $remove = $(e.target).closest('li');
            var i = $ul.find('li').index($remove);
        }

        people.splice(i, 1);
        _render();

    };


    function _render() {
        // var data = {
        //     people: people
        // };
        $ul.html(Mustache.render(template, {people: people}));
    };

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }

})();



// (function() {

//     var people = {
//         people: [],
//         template: $('#people-template').html(),
//         init: function() {
//             this.cacheDom();
//             this.bindEvents();
//             this.render();
//         },

//         cacheDom: function() {
//             this.$el      = $('#peopleModule');
//             this.$input   = this.$el.find('input');
//             this.$button  = this.$el.find('button');
//             this.$ul      = this.$el.find('ul');
//             this.template = this.$el.find('#people-template').html();
//         },

//         bindEvents: function() {
//             this.$button.on('click', this.addPerson.bind(this)); // почему используем bind()?
//             this.$ul.on('click', '.del', this.deletePerson.bind(this));
//         },

//         addPerson: function(value) {
//             this.people.push(value || this.$input.val());
//             this.render();
//             this.$input.val('');
//         },

//         deletePerson: function() {
//             var $remove = $(this).closest('li');
//             var i = this.$ul.find('li').index($remove);

//             this.people.splice(i, 1);
//             this.render();
//         },

//         render: function() {
//             var data = {
//                 people: this.people
//             };
//             this.$ul.html(Mustache.render(this.template, data));
//         }
        

//     };

//     people.init();

// })();


