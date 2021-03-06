(function() {
    /*/
    / / Add $.wait()
    /*/

    $.wait = function(time) {
        return $.Deferred(function() {
            setTimeout(this.resolve, time);
        });
    };

    /*/
    / / The dialog boxes
    /*/

    var $effectDialogs = $('.effect-dialogs'),
        i = 0,
        _timing;

    $effectDialogs.hide().eq(i).show().addClass('bounceIn');
    _changeDialogCountdown();

    $('button').on('click', function() {
        _timing.reject();

        _changeDialog($(this).data('modifier'));
    });

    function _changeDialogCountdown() {
        _timing = $.wait(6000).done(function() {
            _changeDialog(1);
        });
    }

    function _changeDialog(modifier) {
        $effectDialogs.eq(i).removeClass('bounceIn').hide();
        i = (i + modifier) % $effectDialogs.length;
        $effectDialogs.eq(i).show().addClass('bounceIn');

        _changeDialogCountdown();
    }

    /*/
    / / Create the wavy shapes with Raphaël
    /*/

    var Paper = Raphael('effect-waves', 2800, 250);

    Paper.path('M 0 125 C 80 100 120 100 200 125 S 300 150 400 125 S 500 100 600 125 S 700 150 800 125 S 900 100 1000 125 S 1100 150 1200 125 S 1300 100 1400 125 S 1500 150 1600 125 S 1700 100 1800 125 S 1900 150 2000 125 S 2100 100 2200 125 S 2300 150 2400 125 S 2500 100 2600 125 S 2700 150 2800 125').
    attr({
        'stroke': 'rgba(57, 135, 201, 0.45)',
        'stroke-width': 200
    });

    Paper.path('M 0 145 C 160 120 240 120 400 145 S 600 170 800 145 S 1000 120 1200 145 S 1400 170 1600 145 S 1800 120 2000 145 S 2200 170 2400 145 S 2600 120 2800 145').
    attr({
        'stroke': 'rgba(105, 172, 228, 0.45)',
        'stroke-width': 200
    });
})();
