// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
    id: 'ru.all.smartphones',
    name: 'All Smartphones',
    root: '#app',
    theme: theme,
    data: function() {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
        };
    },
    methods: {
        helloWorld: function() {
            app.dialog.alert('Hello World!');
        },
    },
    routes: routes,
    init: function() {}, //init:function() 
    pageInit: function() {}, //pageInit:function() 
});

function go(v) {
    $('#link').attr('href','/phone/'+v+'/')
    $('#link').click()
}


function loadList(callback) {
    var main = store.get('items')
    if (main === undefined || main === null || main === '') {
        store.set('items', [])
    } //if (main=== undefined || main === null || main === '')     
    try {
        var main = store.get('items')
        $('#n').html(' ('+main.length+')')
        // Dummy items array
        var items = [];
        for (var i = 1; i < main.length; i++) {
          items.push({
            id: main[i].sm_id,
            title: main[i].sm_name,
            subtitle: main[i].sm_dt,
            img: main[i].img
          });
        }

        var virtualList = app.virtualList.create({
          // List Element
          el: '.virtual-list',
          // Pass array with items
          items: items,
          // Custom search function for searchbar
          searchAll: function (query, items) {
            var found = [];
            for (var i = 0; i < items.length; i++) {
              if (items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
            }
            return found; //return array with mathced indexes
          },
          // List item Template7 template
          itemTemplate:
            '<li style="height:73px;" onclick="go({{id}});return false;">' +
                  '<div class="item-content">' +
                   ' <div class="item-media">' +
                    '   <img data-src="{{img}}" src="{{img}}" class="lazy lazy-fade-in" width="44"/></div>' +
                    '<div class="item-inner">' +
                     ' <div class="item-title-row">' +
                '        <div class="item-title">{{title}}<br/>{{subtitle}}</div>' +
                '      </div>' +
                '   </div>' +
               '   </div>' +
            '</li>',
          // Item height
          height: app.theme === 'ios' ? 63 : (app.theme === 'md' ? 73 : 73),
        });
    } catch (e) {
        console.log(e)
    }
    callback()
} //function loadList(callback) 
function main1() {
    // Pull-to-refresh
    var ptr = app.ptr.create('.ptr-content')
    ptr.on('refresh', (e) => {
        app.request({
                type:'GET',
                url:'http://ufm.me/SM/api.php?r=getAll',
                error: function() {
                    app.dialog.alert('Server is disconnected:( Try later!')
                },
                success:function(r) {
                    try {
                        var r = JSON.parse(r)
                        store.set('items',r)
                        loadList(function() {
                            app.ptr.get('.ptr-content').done()
                        }) // loadList(function() //    ptr.done()//
                    }catch(e){}
                }
            })

    }) //ptr.on('ptr:refresh', (e) =>
    loadList(function() {

    }) // loadList(function() 
}
main1()

$(document).on('page:afterin', '.page[data-page="main"]', function(e) {
    main1()
}) //$(document).on('page:afterin', '.page[data-page="main"]', function(e) 


$(document).on('page:init', '.page[data-page="phone"]', function(e) {
    var id = e.detail.route.params.index
    store.set('idd', id)
    var phones = store.get('items')
    for(var x = 0; x < phones.length; x++ ){
        if(parseInt(phones[x].sm_id) == id) {
            $('#title').html(phones[x].sm_name)
            $('#content').html(
                '<div align="center"><img src="'+phones[x].img+'" class="lazy lazy-fade-in" style="max-height:200px;max-width:50%;"/></div>')
        
            app.request({
                type:'GET',
                url:'http://ufm.me/SM/api.php?r=getItem&id='+id,
                error: function() {
                    app.dialog.alert('Server is disconnected:( Try later!')
                },
                success:function(r) {
                    try {
                        var r = JSON.parse(r)
                        console.log(r)   
                        var res = 'Launch date: ' + r.sm_launch_dt
                        res += '<br/>Status: ' + r.sm_launch_st
                        res += '<br/>Size: ' + r.sm_display_size
                        res += '<br/>Price: ' + r.sm_misc_price
                        res += '<br/>Colors: ' + r.sm_misc_colors
                        res += '<br/>OS: ' + r.sm_platform_os
                        res += '<br/>Chipset: ' + r.sm_platform_chipset
                        res += '<br/>CPU: ' + r.sm_platform_cpu
                        res += '<br/>GPU: ' + r.sm_platform_gpu
                        res += '<br/>Main camera: ' + r.sm_mcamera
                        res += '<br/>Selfie camera: ' + r.sm_scamera
                        res += '<br/>WLAN: ' + r.sm_wlan
                        res += '<br/>GPS: ' + r.sm_gps
                        res += '<br/>FM: ' + r.sm_radio
                        res += '<br/>USB: ' + r.sm_usb
                        res += '<br/>Network: ' + r.sm_network_tech
                        res += '<br/>GPRS: ' + r.sm_usb

                        res += '<br/>3.5mm jack: ' + r.sm_35mm_jack//: "Yes"
                        res += '<br/>Battery: ' + r.sm_battery_charging//: "Non-removable Li-Ion 3400 mAh battery (12.92 Wh)"
                        res += '<br/>Bluetooth: ' + r.sm_bluetooth//: "4.0, A2DP"
                            res += '<br/>Dimensions: ' + r.sm_body_dimensions//: "191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)"
                            res += '<br/>SIM: ' + r.sm_body_sim//: "Dual SIM (Micro-SIM/Nano-SIM)"
                            res += '<br/>Body weight: ' + r.sm_bodyweight//: "260 g (9.17 oz)"
                            res += '<br/>Resolution: ' + r.sm_display_resolution//: "720 x 1280 pixels, 16:9 ratio (~210 ppi density)"
                            
                            res += '<br/>Display: ' + r.sm_display_type//: "IPS LCD capacitive touchscreen, 16M colors"
                            
                            
                            res += '<br/>SD: ' + r.sm_memory_cardslot//: "microSD, up to 128 GB (dedicated slot)"
                            res += '<br/>Main video: ' + r.sm_mvideo//: "1080p@30fps"
                            res += '<br/>Selfie video: ' + r.sm_svideo//: "720p"
                            res += '<br/>Features: ' + r.sm_features//: "Accelerometer, proximity"


                        $('#content').html($('#content').html()+res)
                    }
                    catch(e) {
                        console.log(e)
                    }
                }
            })

        }//if(phones[x].id == id) 
    }//for(var x = 0; x < phones.length; x++ )
    store.set('stars', 4)
    $('input[name="stars"]').on('change',function() {
        var a = $('input[name="stars"]')
        for(var x = 0; x < a.length; x++ ) {
            if(a[x].checked == true)
                store.set('stars', x)
        }//for(var x = 0; x < a.length; x++ ) 
    })//$('label').on('click',function() 
    $('.send-feedback').on('click',function() {
        app.preloader.show()
        app.request({
            type:'POST',
            url:'http://vps15506.vps.host.ru/apps/as/api.php',
            data:{f1:store.get('idd')+';'+store.get('stars')+';'+$('#feedback-text').val()},
            error:function() {
                app.dialog.alert('Server is unavailable! Please, try later!','Error')
                app.preloader.hide()
            },
            success:function() {
                $('#fdbck').remove()
                $('.send-feedback').parent().remove()
                app.preloader.hide()
                app.dialog.alert('Thanks for your feedback about smarthone!','Success')

            }
        })
    })//$('.send-feedback').on('click',function() {
    
}) //$(document).on('page:init', '.page[data-page="phone"]', function(e) 
