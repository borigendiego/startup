define(['movie', 'director'], function(Movie, Director){
    var batman = new Movie();
    batman.set('title','batman');
    batman.set('year','2008');
    console.log(avatar.get('title'));
    console.log(avatar.get('year'));

    var christopherNolan = new Director('Christopher Nolan');
    christopherNolan.set('quotes',['My best proyect','You die being a hero or live long enough to become a villain','I love the joker']);
    avatar.set('director', christopherNolan);
    console.log(batman.get('director').speak());
    
    // Using jQuery show Director quotes
    $(document).ready(function(){
        $('.btnQuotes').click(function(){
            $('.divMain').append(batman.get('director').speak()
            );
        });
    });
})