'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var STAT_X = 150;
var STAT_Y = 60;
var GAP = 10;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 40;
var BAR_WIDTH = 40;
var TEXT_HEIGHT = 50;
var barHeight = 140;
var BAR_GAP = 50;

var renderCloud = function(ctx, x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (maxElement < arr[i]) {
            maxElement = arr[i];
        } 
    }

    return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
    renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

    ctx.fillStyle = "#000";
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили!", CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 1.5);
    ctx.fillText("Список результатов:", CLOUD_X + FONT_GAP, CLOUD_Y + (FONT_GAP * 2.5));

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
        ctx.fillText(Math.floor(times[i]), CLOUD_X + FONT_GAP + (CLOUD_WIDTH / players.length) * i, CLOUD_HEIGHT - FONT_GAP - GAP - (barHeight * times[i]) / maxTime - GAP);
        if (players[i] == 'Вы') {
            ctx.fillStyle = "rgba(255, 0, 0, 1)";
        } else {
            ctx.fillStyle = "rgba(0, 0, 255, " + Math.random();
        }
        ctx.fillRect(CLOUD_X + FONT_GAP + (CLOUD_WIDTH / players.length) * i, CLOUD_HEIGHT - FONT_GAP - GAP - (barHeight * times[i]) / maxTime, 40, (barHeight * times[i]) / maxTime);
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillText(players[i], CLOUD_X + FONT_GAP + (CLOUD_WIDTH / players.length) * i, CLOUD_HEIGHT - GAP);  
    }
};