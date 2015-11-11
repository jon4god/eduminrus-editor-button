(function() {
    tinymce.create('tinymce.plugins.eduminrus', {

       init : function(ed, url) {
            ed.addButton('eduminrus', {
                title : 'Вставка кода МинОбр России',
                icon: 'icon dashicons-welcome-learn-more',
                onclick: function() {
                		ed.windowManager.open({
                    title: 'Выберите тип опубликованных данных',
                    body: [{
                        type: 'listbox',
                        name: 'className',
                        label: 'Тип',
                        values: [{
                            text: 'Дата создания образовательной организации',
                            value: 'RegDate'
                        }, {
                            text: 'Информация о месте нахождения образовательной организации',
                            value: 'Address'
                        }, {
                            text: 'Информация о месте нахождения филиалов образовательной организации (при наличии)',
                            value: 'AddressFil'
                        }, {
                            text: 'Информация о режиме и графике работы образовательной организации',
                            value: 'WorkTime'
                        }]
                    }, ],
                    onsubmit: function(e) {
/*
	                    var selected_text = ed.selection.getContent();
	                    var return_text = '';
											return_text = '<span itemprop=&quot;' + e.data.className + '&quot;>' + selected_text + '</span>';
											ed.execCommand('mceInsertContent', false, return_text);
*/
											ed.insertContent(
                            '<span itemprop=&quot;' +
                            e.data.className +
                            '&quot;>' +
                            ed.selection
                            .getContent() +
                            '</span>'
                        );
                    }
                });
            	}
            });
        },

        createControl : function(n, cm) {
            return null;
        },

        getInfo : function() {
            return {
                longname : 'Eduminrus Button',
                author : 'Evgeniy Kutsenko',
                authorurl : 'http://starcoms.ru/',
                infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/example',
                version : "0.1"
            };
        }
    });

    tinymce.PluginManager.add( 'eduminrus', tinymce.plugins.eduminrus );
})();
