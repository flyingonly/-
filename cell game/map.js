var Mymap = {
    createNew: function() {
        var mymap = {};
        var i = 0;
        var j = 0;
        mymap.size = 10;
        mymap.map = new Array();
        mymap.init = function() {
            for (i = 0; i < mymap.size; i++) {
                mymap.map[i] = new Array()
                for (j = 0; j < mymap.size; j++) {
                    mymap.map[i][j] = Cell.createNew(mymap);
                }
            }
        }
        mymap.drawgrid = function() {
            var ctx = $("#mycanvas")[0].getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(300, 150);
            ctx.stroke();
        }
        return mymap
    }
};

var Cell = {
    createNew: function(mymap) {
        var cell = {};
        cell.live = false;
        cell.themap = mymap;
        cell.proc = function () {
        }
        return cell;
    }
};


$(function() {

    var mymap = Mymap.createNew();
    mymap.drawgrid();
    mymap.init();
    console.log(mymap.map);

});
